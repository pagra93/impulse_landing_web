import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.UNINSTALL_FROM || "Impulse <noreply@impulsecontrolapp.com>";

// Validación mínima de formato de email (mismo criterio laxo que tenía EmailJS).
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const MESSAGE =
  "Your accountability partner has uninstalled the Impulse extension. This is an automated notification to keep you informed.";

export async function POST(req: Request) {
  let partner: unknown;
  try {
    ({ partner } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  if (typeof partner !== "string" || !isValidEmail(partner.trim())) {
    return NextResponse.json({ error: "Invalid partner email" }, { status: 400 });
  }

  const to = partner.trim().toLowerCase();

  try {
    await resend.emails.send({
      from: FROM,
      to: [to],
      subject: "Impulse was removed from a browser",
      text: MESSAGE,
      html: `<p>${MESSAGE}</p>`,
    });
  } catch (err) {
    // No romper el flujo: la página de despedida debe cargar igual.
    console.error("[uninstall-notify] resend failed", err);
  }

  return NextResponse.json({ ok: true });
}
