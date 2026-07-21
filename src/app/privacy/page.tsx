import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy - Impulse",
  description:
    "Privacy Policy for the Impulse app (iOS) and the Impulse browser extension: what data we collect, how we use it, how the site-blocking works, retention and your rights.",
  alternates: {
    canonical: "https://impulsecontrolapp.com/privacy",
  },
};

const SUPPORT_EMAIL = "hello@impulsecontrolapp.com";
const LAST_UPDATED = "July 21, 2026";

const css = `
  .pp-page {
    min-height: 100vh;
    background: #fff7e6;
    padding: 32px 24px 48px;
    display: flex;
    flex-direction: column;
    color: #111827;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
  }
  .pp-header {
    max-width: 780px;
    width: 100%;
    margin: 0 auto 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .pp-brand { display: flex; align-items: center; gap: 10px; }
  .pp-logo { border-radius: 8px; object-fit: contain; }
  .pp-back-link {
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
  .pp-back-link:hover { background: #111827; color: #ffffff; }
  .pp-main { max-width: 780px; width: 100%; margin: 0 auto; }
  .pp-eyebrow {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.18em;
    color: #6b7280;
    margin: 0 0 8px;
    font-weight: 600;
  }
  .pp-main h1 {
    margin: 0 0 8px;
    font-size: 36px;
    line-height: 1.1;
    letter-spacing: -0.04em;
  }
  .pp-updated { margin: 0 0 20px; font-size: 13px; color: #6b7280; }
  .pp-lead { margin: 0 0 14px; font-size: 15px; line-height: 1.7; color: #374151; }
  .pp-lead strong { color: #111827; }
  .pp-card {
    border-radius: 24px;
    background: #ffffff;
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
    border: 1px solid #e5e7eb;
    padding: 26px 28px;
    margin-top: 28px;
  }
  .pp-card h2 {
    margin: 0 0 12px;
    font-size: 21px;
    letter-spacing: -0.02em;
  }
  .pp-card h3 { margin: 20px 0 8px; font-size: 16px; }
  .pp-card p { margin: 0 0 12px; font-size: 15px; line-height: 1.7; color: #374151; }
  .pp-card p:last-child { margin-bottom: 0; }
  .pp-card a { color: #111827; font-weight: 600; }
  .pp-list { margin: 0 0 12px; padding-left: 0; list-style: none; }
  .pp-list li {
    position: relative;
    padding: 0 0 10px 22px;
    font-size: 15px;
    line-height: 1.6;
    color: #374151;
  }
  .pp-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 9px;
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #fde047;
  }
  .pp-list li strong { color: #111827; }
  .pp-badge {
    display: inline-block;
    padding: 2px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    background: #fef3c7;
    color: #92400e;
    margin-right: 6px;
    vertical-align: middle;
  }
  .pp-callout {
    border-radius: 16px;
    background: #fef9e7;
    border: 1px solid #facc15;
    padding: 14px 16px;
    font-size: 14px;
    line-height: 1.6;
    color: #78350f;
    margin: 4px 0 0;
  }
  .pp-toc { margin: 4px 0 0; padding-left: 0; list-style: none; columns: 2; column-gap: 24px; }
  .pp-toc li { padding: 4px 0; font-size: 14px; }
  .pp-toc a { color: #4b5563; text-decoration: none; font-weight: 500; }
  .pp-toc a:hover { color: #111827; }
  .pp-footer {
    max-width: 780px;
    width: 100%;
    margin: 40px auto 0;
    font-size: 12px;
    color: #6b7280;
  }
  @media (max-width: 600px) {
    .pp-main h1 { font-size: 28px; }
    .pp-card { padding: 22px 20px; }
    .pp-toc { columns: 1; }
  }
`;

export default function PrivacyPolicyPage() {
  return (
    <div className="pp-page">
      {/* eslint-disable-next-line react/no-danger */}
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header className="pp-header">
        <div className="pp-brand">
          <Image
            src="/impulse.png"
            alt="Impulse Logo"
            width={90}
            height={90}
            className="pp-logo"
          />
        </div>
        <a
          href="https://impulsecontrolapp.com"
          target="_blank"
          rel="noreferrer"
          className="pp-back-link"
        >
          Back to Impulse Website
        </a>
      </header>

      <main className="pp-main">
        <p className="pp-eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="pp-updated">Last updated: {LAST_UPDATED}</p>

        <p className="pp-lead">
          This Privacy Policy explains how <strong>Impulse</strong> (&ldquo;Impulse&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses and protects your
          information when you use the <strong>Impulse app for iOS</strong> and the{" "}
          <strong>Impulse browser extension</strong> (the &ldquo;widget&rdquo;, available
          for Chrome and Safari). Impulse helps you control your screen time by
          blocking distracting apps and websites, adding impulse-control friction,
          and giving you usage insights.
        </p>

        <div className="pp-card">
          <h2>Contents</h2>
          <ul className="pp-toc">
            <li><a href="#scope">1. Scope</a></li>
            <li><a href="#collect">2. Information we collect</a></li>
            <li><a href="#extension">3. How the extension handles site data</a></li>
            <li><a href="#use">4. How we use your data</a></li>
            <li><a href="#sharing">5. Sharing &amp; third parties</a></li>
            <li><a href="#retention">6. Data retention</a></li>
            <li><a href="#security">7. Data security</a></li>
            <li><a href="#rights">8. Your rights &amp; choices</a></li>
            <li><a href="#children">9. Children&rsquo;s privacy</a></li>
            <li><a href="#changes">10. Changes to this policy</a></li>
            <li><a href="#contact">11. Contact us</a></li>
          </ul>
        </div>

        <div className="pp-card" id="scope">
          <h2>1. Scope</h2>
          <p>
            This policy applies to both Impulse products:
          </p>
          <ul className="pp-list">
            <li>
              <span className="pp-badge">App</span>
              <strong>Impulse for iOS</strong> &mdash; the mobile app that blocks
              distracting apps and websites and tracks your screen-time usage.
            </li>
            <li>
              <span className="pp-badge">Widget</span>
              <strong>Impulse browser extension</strong> &mdash; the Chrome/Safari
              extension that blocks distracting websites in your browser and adds
              impulse-control friction, including the optional physical (NFC)
              unlock and accountability-partner features.
            </li>
          </ul>
          <p>
            Both share the same account so your settings and blocking rules can
            sync across devices. Where a practice applies only to one product, we
            label it <span className="pp-badge">App</span> or{" "}
            <span className="pp-badge">Widget</span>.
          </p>
        </div>

        <div className="pp-card" id="collect">
          <h2>2. Information we collect</h2>

          <h3>Account information</h3>
          <ul className="pp-list">
            <li>Your <strong>email address</strong> and, optionally, your <strong>name</strong>, used to create and identify your account.</li>
            <li>An encrypted local password hash, if you set a password to protect your blocking settings.</li>
          </ul>

          <h3>Settings &amp; configuration</h3>
          <ul className="pp-list">
            <li>App preferences such as theme, language and quick-focus defaults.</li>
            <li>
              Your <strong>blocking rules</strong>: blocking periods, schedules,
              difficulty levels, impulse controls, and the list of{" "}
              <strong>websites and apps you choose to block</strong>.
            </li>
            <li><span className="pp-badge">Widget</span> The optional <strong>accountability-partner email</strong> you provide to be notified about your activity or uninstalls.</li>
          </ul>

          <h3>Usage &amp; analytics</h3>
          <ul className="pp-list">
            <li>Aggregated <strong>daily usage</strong> data and records of blocked or visited sites, so we can show you screen-time insights and progress.</li>
            <li>Basic diagnostic and performance data to keep the products working reliably.</li>
          </ul>

          <h3>Support communications</h3>
          <ul className="pp-list">
            <li>If you email us or submit feedback (for example on our uninstall page), we keep the content and your contact details to respond.</li>
          </ul>

          <p>
            We do <strong>not</strong> collect your browsing history for advertising,
            we do <strong>not</strong> sell your data, and we do <strong>not</strong>{" "}
            use it to build advertising profiles.
          </p>
        </div>

        <div className="pp-card" id="extension">
          <h2>3. How the extension handles site data</h2>
          <p>
            <span className="pp-badge">Widget</span> To block distracting
            websites, the Impulse extension needs to read the address (URL/domain)
            of the page you are visiting and compare it against{" "}
            <strong>your own list of blocked sites</strong>. This happens on your
            device, in real time, and is used solely to decide whether to block a
            page or show an impulse-control screen.
          </p>
          <ul className="pp-list">
            <li>We do <strong>not</strong> log or transmit your full browsing history to our servers.</li>
            <li>We do <strong>not</strong> read page content, form inputs, passwords or other on-page data.</li>
            <li>Only the blocking rules and blocked-site lists you configure are stored and, if you are signed in, synced to your account so they work across devices.</li>
          </ul>
          <div className="pp-callout">
            <strong>Chrome Web Store limited-use disclosure:</strong> Impulse&rsquo;s
            use of information received from Google APIs adheres to the{" "}
            <a
              href="https://developer.chrome.com/docs/webstore/program-policies/limited-use"
              target="_blank"
              rel="noreferrer"
            >
              Chrome Web Store User Data Policy
            </a>
            , including the Limited Use requirements. Site data is used only to
            provide the blocking features you enable &mdash; never for advertising
            or resale.
          </div>
        </div>

        <div className="pp-card" id="use">
          <h2>4. How we use your data</h2>
          <ul className="pp-list">
            <li>To provide the core features: blocking apps and websites and enforcing your impulse-control rules.</li>
            <li>To sync your account and settings across your devices.</li>
            <li>To show you screen-time insights and progress.</li>
            <li><span className="pp-badge">Widget</span> To send accountability-partner notifications when you enable that feature.</li>
            <li>To provide support, respond to your requests and improve the products.</li>
            <li>To keep the products secure and comply with legal obligations.</li>
          </ul>
          <p>
            We process this data to perform our contract with you, on the basis of
            your consent (which you can withdraw), and for our legitimate interest
            in operating and improving Impulse.
          </p>
        </div>

        <div className="pp-card" id="sharing">
          <h2>5. Sharing &amp; third parties</h2>
          <p>
            We do not sell your personal data. We share it only with service
            providers who help us run Impulse, and only as needed:
          </p>
          <ul className="pp-list">
            <li><strong>Hosting &amp; database providers</strong> to store your account and settings.</li>
            <li><strong>Email delivery (EmailJS)</strong> to send transactional and accountability-partner emails.</li>
            <li><strong>Legal authorities</strong>, where required by law or to protect our rights and users.</li>
          </ul>
          <p>
            These providers are bound to process data only on our instructions and
            to keep it secure.
          </p>
        </div>

        <div className="pp-card" id="retention">
          <h2>6. Data retention</h2>
          <ul className="pp-list">
            <li>We keep your account and associated data for as long as your account is active.</li>
            <li>When you delete your account or request deletion, we permanently delete the associated data within <strong>30 days</strong>.</li>
            <li>Residual copies in encrypted backups are purged within <strong>90 days</strong>.</li>
            <li>Support correspondence may be kept for up to <strong>12 months</strong>.</li>
            <li>Minimal records may be retained longer where required by law (e.g. tax or fraud prevention).</li>
          </ul>
          <p>
            You can request deletion of your account or of specific data at any
            time on our{" "}
            <a href="/delete-account">account &amp; data deletion page</a>.
          </p>
        </div>

        <div className="pp-card" id="security">
          <h2>7. Data security</h2>
          <p>
            We use industry-standard measures to protect your data, including
            encryption in transit, encrypted backups and access controls.
            Passwords, when set, are stored only as salted hashes. No method of
            transmission or storage is 100% secure, but we work continuously to
            protect your information.
          </p>
        </div>

        <div className="pp-card" id="rights">
          <h2>8. Your rights &amp; choices</h2>
          <p>
            Depending on where you live, you may have the right to access, correct,
            export, or delete your personal data, and to object to or restrict
            certain processing. You can:
          </p>
          <ul className="pp-list">
            <li>Manage most of your data directly in the app or extension settings.</li>
            <li>Request deletion of your account or specific data on our <a href="/delete-account">deletion page</a>.</li>
            <li>Contact us at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> to exercise any of these rights.</li>
          </ul>
          <p>
            You can also stop all data collection at any time by uninstalling the
            app or extension.
          </p>
        </div>

        <div className="pp-card" id="children">
          <h2>9. Children&rsquo;s privacy</h2>
          <p>
            Impulse is not directed to children under 13 (or the minimum age
            required in your country), and we do not knowingly collect their
            personal data. If you believe a child has provided us data, contact us
            and we will delete it.
          </p>
        </div>

        <div className="pp-card" id="changes">
          <h2>10. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make
            material changes, we will update the &ldquo;Last updated&rdquo; date
            above and, where appropriate, notify you in the app or by email.
          </p>
        </div>

        <div className="pp-card" id="contact">
          <h2>11. Contact us</h2>
          <p>
            If you have questions about this policy or your data, contact us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
        </div>
      </main>

      <footer className="pp-footer">
        <span>© {new Date().getFullYear()} Impulse · Focus without friction.</span>
      </footer>
    </div>
  );
}
