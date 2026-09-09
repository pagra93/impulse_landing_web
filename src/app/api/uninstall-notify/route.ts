import { NextResponse } from "next/server";
import { notifyPartnerUninstall } from "@/lib/uninstall-email";

/**
 * Uninstall notification endpoint.
 *
 * This used to be a side effect of rendering GET /uninstall?partner=<email>:
 * a public page that sent mail from our verified Resend domain to whatever
 * address sat in the query string. Anyone could fire it from an <img src> on a
 * forum, at any address they liked. The daily idempotency key capped it at one
 * message per recipient per day, which limits the flood but neither stops the
 * abuse nor protects the sending domain's reputation.
 *
 * Sending now requires a POST that a browser actually made from our own origin,
 * plus a per-IP rate limit.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

/**
 * Best-effort in-memory limiter. With `output: "standalone"` this process is
 * the whole server, so a single Map is enough; behind several instances it
 * degrades to per-instance limiting, which is still far better than none.
 */
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the Map cannot grow without bound.
  if (hits.size > 5_000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

function sameOrigin(request: Request): boolean {
  const host = request.headers.get("host");
  if (!host) return false;

  const candidate =
    request.headers.get("origin") ?? request.headers.get("referer");
  if (!candidate) return false;

  try {
    return new URL(candidate).host === host;
  } catch {
    return false;
  }
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  if (rateLimited(clientIp(request))) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  let partner: unknown;
  try {
    partner = (await request.json())?.partner;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // notifyPartnerUninstall validates the address and swallows its own errors:
  // a failed send must never surface to the person uninstalling.
  await notifyPartnerUninstall(
    typeof partner === "string" ? partner : null,
    request.headers.get("accept-language")
  );

  return NextResponse.json({ ok: true });
}
