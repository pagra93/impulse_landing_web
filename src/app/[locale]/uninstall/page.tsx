import Image from "next/image";
import { NotifyPartner } from "@/components/uninstall/NotifyPartner";

// Depende de searchParams: nunca cachear.
export const dynamic = "force-dynamic";

// Se sirve al desinstalar la extensión, con un email en la query. No debe
// aparecer en resultados de búsqueda.
export const metadata = {
  robots: { index: false, follow: false },
};

const css = `
  .page {
    min-height: 100vh;
    background: #fff7e6;
    padding: 32px 24px 40px;
    display: flex;
    flex-direction: column;
    color: #111827;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
  }
  .header {
    max-width: 960px;
    width: 100%;
    margin: 0 auto 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .brand { display: flex; align-items: center; gap: 10px; }
  .back-link {
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 999px;
    border: 1px solid #111827;
    background: #ffffff;
    text-decoration: none;
    color: #111827;
    font-weight: 500;
    transition: all 0.15s ease-out;
  }
  .back-link:hover { background: #111827; color: #ffffff; }
  .main { max-width: 960px; width: 100%; margin: 0 auto; }
  .intro { max-width: 640px; }
  .eyebrow {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.18em;
    color: #6b7280;
    margin: 0 0 8px;
    font-weight: 600;
  }
  h1 {
    margin: 0 0 16px;
    font-size: 38px;
    line-height: 1.1;
    letter-spacing: -0.04em;
  }
  @media (max-width: 600px) {
    h1 { font-size: 30px; }
  }
  .lead { margin: 0 0 18px; font-size: 15px; line-height: 1.6; color: #4b5563; }
  .bullets {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    color: #374151;
  }
  .bullets li { position: relative; padding-left: 22px; }
  .bullets li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #fde047;
  }
  .partner {
    border-radius: 16px;
    background: #fef3c7;
    border: 1px solid #facc15;
    padding: 10px 14px;
    max-width: 520px;
    margin-top: 4px;
  }
  .partner-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #92400e;
    font-weight: 600;
  }
  .partner-text { margin: 4px 0 0; font-size: 13px; color: #78350f; }
  .form-section { margin-top: 32px; }
  .card {
    width: 100%;
    border-radius: 28px;
    background: #ffffff;
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.15);
    border: 1px solid #e5e7eb;
    padding: 20px 20px 18px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .card-header h2 { margin: 0 0 4px; font-size: 18px; }
  .card-header p { margin: 0; font-size: 13px; color: #6b7280; }
  .iframe-wrapper {
    margin-top: 6px;
    border-radius: 18px;
    overflow: hidden;
    background: transparent !important;
    border: none;
    min-height: 950px;
  }
  .iframe-wrapper iframe {
    width: 100%;
    height: 1000px;
    display: block;
    background: transparent !important;
  }
  .footer {
    max-width: 960px;
    width: 100%;
    margin: 28px auto 0;
    font-size: 12px;
    color: #6b7280;
  }
  .logo-image { border-radius: 8px; object-fit: contain; }
`;

function isLikelyEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function UninstallPage({
  searchParams,
}: {
  searchParams: Promise<{ partner?: string }>;
}) {
  const { partner } = await searchParams;

  const partnerNotified = typeof partner === "string" && isLikelyEmail(partner.trim());

  return (
    <div className="page">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* El aviso se dispara desde el navegador contra /api/uninstall-notify.
          Antes se enviaba durante el render de este GET público, así que
          cualquiera podía provocar correos a la dirección que quisiera. */}
      {partnerNotified && <NotifyPartner partner={partner!.trim()} />}

      <header className="header">
        <div className="brand">
          <Image
            src="/impulse.png"
            alt="Impulse Logo"
            width={100}
            height={100}
            className="logo-image"
          />
        </div>
        <a href="https://impulsecontrolapp.com" className="back-link">
          Back to Impulse Website
        </a>
      </header>

      <main className="main">
        <section className="intro">
          <p className="eyebrow">Thanks for trying Impulse</p>
          <h1>Before you leave, help us improve Impulse.</h1>

          <p className="lead">
            Impulse is designed to help you <strong>control your focus and block distractions</strong>.
            Your feedback helps us understand why the extension no longer fits your needs — and what we
            should improve so it truly makes a difference.
          </p>

          <ul className="bullets">
            <li>Share the reason you uninstalled in just a few seconds.</li>
            <li>Help us prioritize real improvements, not random features.</li>
            <li>
              Optional: leave your email if you’d like us to update you about new versions of Impulse.
            </li>
          </ul>

          {partnerNotified && (
            <div className="partner">
              <span className="partner-label">Accountability partner</span>
              <p className="partner-text">
                We’ve let your accountability partner know that Impulse was uninstalled.
              </p>
            </div>
          )}
        </section>

        <section className="form-section">
          <div className="card">
            <div className="card-header">
              <h2>Tell us why you uninstalled Impulse</h2>
              <p>This takes less than 1 minute and helps us a lot.</p>
            </div>
            <div className="iframe-wrapper">
              <iframe
                src="https://tally.so/embed/3xZ2Xy?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Impulse Feedback"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Impulse · Focus without friction.</span>
      </footer>
    </div>
  );
}
