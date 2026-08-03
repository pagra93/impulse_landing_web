import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.UNINSTALL_FROM || "Impulse <noreply@impulsecontrolapp.com>";
const REPLY_TO = process.env.UNINSTALL_REPLY_TO || "support@impulsecontrolapp.com";
const YELLOW = "#ffdb4c";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Solo distinguimos es/en; el resto de locales (fr/de/pt) caen a inglés por ahora.
function pickLocale(acceptLanguage: string | null | undefined): "es" | "en" {
  const first = (acceptLanguage || "").split(",")[0]?.trim().toLowerCase() ?? "";
  return first.startsWith("es") ? "es" : "en";
}

type Copy = { subject: string; heading: string; body: string[]; signoff: string };

const COPY: Record<"es" | "en", Copy> = {
  es: {
    subject: "Impulse ha sido eliminado del navegador",
    heading: "Impulse ha sido eliminado del navegador",
    body: [
      "Alguien que te eligió como su accountability partner acaba de eliminar la extensión Impulse de su navegador.",
      "Impulse le ayudaba a controlar el tiempo que pasa en determinados sitios web. Desinstalarla significa que esas barreras ya no están activas.",
      "No hace falta que hagas nada técnico. Si te parece bien, habla con esa persona.",
      "Recibes este aviso porque configuró tu dirección de correo como contacto de notificación de desinstalación dentro de Impulse. Si crees que ha sido un error, responde a este correo y dejaremos de enviarte avisos.",
    ],
    signoff: "— El equipo de Impulse",
  },
  en: {
    subject: "Impulse was removed from a browser",
    heading: "Impulse was removed from a browser",
    body: [
      "Someone who chose you as their accountability partner has just removed the Impulse extension from their browser.",
      "Impulse was helping them manage the time they spend on certain websites. Removing it means those guardrails are no longer active.",
      "There's nothing technical for you to do. If it feels right, reach out to them.",
      "You're getting this because they set your email address as their uninstall notification contact inside Impulse. If you think this is a mistake, reply to this email and we'll stop sending you these.",
    ],
    signoff: "— The Impulse team",
  },
};

function renderText(c: Copy): string {
  return `${c.heading}\n\n${c.body.join("\n\n")}\n\n${c.signoff}`;
}

function renderHtml(c: Copy): string {
  const paragraphs = c.body
    .map(
      (p) =>
        `<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#374151;">${p}</p>`
    )
    .join("");
  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f5f5f5;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
          <tr><td style="height:6px;background:${YELLOW};"></td></tr>
          <tr>
            <td style="padding:28px 28px 24px;">
              <h1 style="margin:0 0 20px;font-size:20px;color:#203b50;font-family:Arial,Helvetica,sans-serif;">${c.heading}</h1>
              ${paragraphs}
              <p style="margin:24px 0 0;font-size:15px;color:#203b50;font-weight:bold;">${c.signoff}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Envía el aviso de desinstalación al accountability partner.
 * Silencioso: valida y, si algo falla, loguea sin lanzar (no debe romper el render).
 */
export async function notifyPartnerUninstall(
  rawPartner: string | null | undefined,
  acceptLanguage?: string | null
): Promise<void> {
  if (typeof rawPartner !== "string") return;
  const partner = rawPartner.trim().toLowerCase();
  if (!isValidEmail(partner)) return;

  const copy = COPY[pickLocale(acceptLanguage)];

  try {
    await resend.emails.send({
      from: FROM,
      to: [partner],
      replyTo: REPLY_TO,
      subject: copy.subject,
      text: renderText(copy),
      html: renderHtml(copy),
    });
  } catch (err) {
    console.error("[uninstall] resend failed", err);
  }
}
