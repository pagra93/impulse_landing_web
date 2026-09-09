import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Delete your Impulse account and data",
  description:
    "How to request deletion of your Impulse account and associated data, which data is deleted or retained, and retention periods.",
  alternates: {
    canonical: "https://impulsecontrolapp.com/delete-account",
  },
};

const SUPPORT_EMAIL = "hello@impulsecontrolapp.com";
const MAILTO = `mailto:${SUPPORT_EMAIL}?subject=Account%20deletion%20request%20-%20Impulse&body=Hi%20Impulse%20team%2C%0A%0AI%20would%20like%20to%20request%20the%20deletion%20of%20my%20Impulse%20account%20and%20all%20associated%20data.%0A%0AAccount%20email%3A%20%5Byour%20account%20email%5D%0A%0AThank%20you.`;
const MAILTO_DATA = `mailto:${SUPPORT_EMAIL}?subject=Data%20deletion%20request%20-%20Impulse&body=Hi%20Impulse%20team%2C%0A%0AI%20would%20like%20to%20request%20the%20deletion%20of%20specific%20data%20from%20my%20Impulse%20account%2C%20without%20deleting%20the%20account%20itself.%0A%0AAccount%20email%3A%20%5Byour%20account%20email%5D%0AData%20to%20delete%3A%20%5Be.g.%20usage%20%26%20analytics%20history%2C%20blocking%20rules%5D%0A%0AThank%20you.`;

const css = `
  .da-page {
    min-height: 100vh;
    background: #fff7e6;
    padding: 32px 24px 48px;
    display: flex;
    flex-direction: column;
    color: #111827;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
  }
  .da-header {
    max-width: 820px;
    width: 100%;
    margin: 0 auto 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .da-brand { display: flex; align-items: center; gap: 10px; }
  .da-logo { border-radius: 8px; object-fit: contain; }
  .da-back-link {
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
  .da-back-link:hover { background: #111827; color: #ffffff; }
  .da-main { max-width: 820px; width: 100%; margin: 0 auto; }
  .da-eyebrow {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.18em;
    color: #6b7280;
    margin: 0 0 8px;
    font-weight: 600;
  }
  .da-main h1 {
    margin: 0 0 16px;
    font-size: 36px;
    line-height: 1.1;
    letter-spacing: -0.04em;
  }
  .da-lead { margin: 0 0 12px; font-size: 15px; line-height: 1.6; color: #4b5563; }
  .da-lead strong { color: #111827; }
  .da-section { margin-top: 36px; }
  .da-section h2 { margin: 0 0 12px; font-size: 22px; letter-spacing: -0.02em; }
  .da-section h3 { margin: 22px 0 8px; font-size: 16px; }
  .da-card {
    border-radius: 24px;
    background: #ffffff;
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.10);
    border: 1px solid #e5e7eb;
    padding: 24px 24px 22px;
  }
  .da-steps { margin: 0; padding: 0; list-style: none; counter-reset: step; }
  .da-steps li {
    position: relative;
    padding: 0 0 18px 44px;
    font-size: 15px;
    line-height: 1.6;
    color: #374151;
  }
  .da-steps li:last-child { padding-bottom: 0; }
  .da-steps li::before {
    counter-increment: step;
    content: counter(step);
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    border-radius: 999px;
    background: #fde047;
    color: #111827;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .da-btn {
    display: inline-block;
    margin-top: 6px;
    padding: 12px 22px;
    border-radius: 999px;
    background: #111827;
    color: #ffffff;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    transition: opacity 0.15s ease-out;
  }
  .da-btn:hover { opacity: 0.85; }
  .da-email-link { color: #111827; font-weight: 600; }
  .da-note { margin: 16px 0 0; font-size: 13px; line-height: 1.6; color: #6b7280; }
  .da-table-wrap { overflow-x: auto; border-radius: 18px; border: 1px solid #e5e7eb; }
  table.da-table { width: 100%; border-collapse: collapse; font-size: 14px; background: #ffffff; }
  .da-table th, .da-table td {
    text-align: left;
    padding: 12px 16px;
    border-bottom: 1px solid #f0f0f0;
    vertical-align: top;
    line-height: 1.5;
  }
  .da-table th {
    background: #fef3c7;
    color: #92400e;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .da-table tr:last-child td { border-bottom: none; }
  .da-table td:first-child { font-weight: 600; color: #111827; white-space: nowrap; }
  .da-pill {
    display: inline-block;
    padding: 2px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
  }
  .da-pill-del { background: #fee2e2; color: #b91c1c; }
  .da-pill-keep { background: #dcfce7; color: #166534; }
  .da-footer {
    max-width: 820px;
    width: 100%;
    margin: 40px auto 0;
    font-size: 12px;
    color: #6b7280;
  }
  @media (max-width: 600px) {
    .da-main h1 { font-size: 28px; }
    .da-card { padding: 20px 18px; }
  }
`;

export default function DeleteAccountPage() {
  return (
    <div className="da-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header className="da-header">
        <div className="da-brand">
          <Image
            src="/impulse.png"
            alt="Impulse Logo"
            width={90}
            height={90}
            className="da-logo"
          />
        </div>
        <a href="https://impulsecontrolapp.com" className="da-back-link">
          Back to Impulse Website
        </a>
      </header>

      <main className="da-main">
        <p className="da-eyebrow">Data &amp; Privacy</p>
        <h1>Delete your Impulse account and data</h1>
        <p className="da-lead">
          This page explains how to request the deletion of your{" "}
          <strong>Impulse</strong> account and the data associated with it, and
          how to delete <strong>specific data without deleting your account</strong>.
          Impulse is a focus app &mdash; available as
          an iOS app and a browser extension &mdash; that blocks distracting apps
          and websites and tracks screen-time usage. Impulse is local-first, so
          most of your data stays on your device; you only have a server-side
          account if you signed in or joined a group/challenge. You are in control
          of your data and can ask us to remove it at any time.
        </p>

        <section className="da-section">
          <h2>How to request deletion</h2>
          <div className="da-card">
            <ol className="da-steps">
              <li>
                Send an email to{" "}
                <a className="da-email-link" href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>{" "}
                with the subject line{" "}
                <strong>&ldquo;Account deletion request - Impulse&rdquo;</strong>.
              </li>
              <li>
                Include the <strong>email address linked to your Impulse
                account</strong> so we can locate and verify it.
              </li>
              <li>
                We will confirm your identity and permanently delete your account
                and its server-side data. We&rsquo;ll email you once it&rsquo;s done.
              </li>
            </ol>
            <p style={{ marginTop: 20 }}>
              <a className="da-btn" href={MAILTO}>
                Request account deletion
              </a>
            </p>
            <p className="da-note">
              Note: all the data stored locally on your device is removed
              immediately when you <strong>uninstall the app or extension</strong>.
              The steps above are for deleting the optional server-side account and
              data you created by signing in or joining a group/challenge.
            </p>
          </div>
        </section>

        <section className="da-section">
          <h2>Delete some data without deleting your account</h2>
          <p className="da-lead">
            You don&rsquo;t have to delete your whole Impulse account to remove
            data. You can ask us to delete specific categories &mdash; for
            example your <strong>usage &amp; analytics history</strong> or your{" "}
            <strong>blocking &amp; impulse-control rules</strong> &mdash; while
            keeping your account active.
          </p>
          <div className="da-card">
            <ol className="da-steps">
              <li>
                Send an email to{" "}
                <a className="da-email-link" href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>{" "}
                with the subject line{" "}
                <strong>&ldquo;Data deletion request - Impulse&rdquo;</strong>.
              </li>
              <li>
                Include the <strong>email address linked to your Impulse
                account</strong> and specify <strong>which data</strong> you want
                deleted (e.g. usage history, blocking rules, or accountability-partner email).
              </li>
              <li>
                We will verify your identity and delete the requested data,
                keeping your account and everything else intact. We&rsquo;ll email
                you once it&rsquo;s done.
              </li>
            </ol>
            <p style={{ marginTop: 20 }}>
              <a className="da-btn" href={MAILTO_DATA}>
                Request data deletion
              </a>
            </p>
            <p className="da-note">
              You can also manage or delete much of this data yourself inside the
              Impulse app or extension &mdash; for example by removing blocking
              periods, impulse controls or blocked sites from{" "}
              <strong>Settings</strong>, or by exporting your data as JSON from the
              extension. The retention details below also apply to partial
              data-deletion requests.
            </p>
          </div>
        </section>

        <section className="da-section">
          <h2>What data is deleted or retained</h2>
          <p className="da-lead">
            When your deletion request is completed, the following data tied to
            your account is permanently removed from our backend (Supabase, hosted
            in the EU):
          </p>
          <div className="da-table-wrap">
            <table className="da-table">
              <thead>
                <tr>
                  <th>Data type</th>
                  <th>Action</th>
                  <th>Details &amp; retention</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Account &amp; profile</td>
                  <td>
                    <span className="da-pill da-pill-del">Deleted</span>
                  </td>
                  <td>
                    Email, encrypted password, optional display name and your
                    user/device identifier. Removed from the server when your
                    request is verified.
                  </td>
                </tr>
                <tr>
                  <td>Synced rules &amp; settings</td>
                  <td>
                    <span className="da-pill da-pill-del">Deleted</span>
                  </td>
                  <td>
                    Blocking periods, impulse controls and the site
                    hostnames/rule names you synced. Removed with your account.
                  </td>
                </tr>
                <tr>
                  <td>Statistics backup</td>
                  <td>
                    <span className="da-pill da-pill-del">Deleted</span>
                  </td>
                  <td>
                    The daily aggregated per-site statistics backed up to your
                    account. Removed with your account.
                  </td>
                </tr>
                <tr>
                  <td>Group / squad data</td>
                  <td>
                    <span className="da-pill da-pill-del">Deleted</span>
                  </td>
                  <td>
                    Nickname, role, streaks, verification status, group rules you
                    created and your violation log. Removed with your account.
                  </td>
                </tr>
                <tr>
                  <td>Local data on your device</td>
                  <td>
                    <span className="da-pill da-pill-keep">On device</span>
                  </td>
                  <td>
                    Your rules, limits and statistics stored locally (and, on iOS,
                    the opaque app/website tokens) never reach our servers. This is
                    removed when you <strong>uninstall</strong> the app or
                    extension. Some local extension metrics are also auto-pruned
                    after about 14 days.
                  </td>
                </tr>
                <tr>
                  <td>Analytics (Mixpanel)</td>
                  <td>
                    <span className="da-pill da-pill-keep">Retained</span>
                  </td>
                  <td>
                    Anonymous/pseudonymous usage events tied to a random
                    installation ID (not your name). Retained per Mixpanel&rsquo;s
                    policy and our configuration; contact us to have events for
                    your installation ID removed.
                  </td>
                </tr>
                <tr>
                  <td>Verification codes</td>
                  <td>
                    <span className="da-pill da-pill-keep">Short-lived</span>
                  </td>
                  <td>
                    Supervisor/unlock codes are stored only as a hash and expire
                    server-side after ~5 minutes; they are single-use.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="da-note">
            Deletion is permanent and cannot be undone. Once your account is
            deleted you will need to create a new one to use the account-based
            features again. Because Impulse is local-first, if you never signed in
            you may have no server-side data at all &mdash; uninstalling removes
            everything.
          </p>
        </section>

        <section className="da-section">
          <h2>Questions?</h2>
          <p className="da-lead">
            If you have any questions about deleting your account or your data,
            contact us at{" "}
            <a className="da-email-link" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="da-footer">
        <span>© {new Date().getFullYear()} Impulse · Focus without friction.</span>
      </footer>
    </div>
  );
}
