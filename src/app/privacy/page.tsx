import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy - Impulse",
  description:
    "Privacy Policy for the Impulse app (iOS) and the Impulse browser extension: what data stays on your device, what is sent to external services (Supabase, Mixpanel, EmailJS), and your rights.",
  alternates: {
    canonical: "https://impulsecontrolapp.com/privacy",
  },
};

const SUPPORT_EMAIL = "hello@impulsecontrolapp.com";
// Responsable del tratamiento (data controller).
const CONTROLLER = "Impulse";
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
    max-width: 820px;
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
  .pp-main { max-width: 820px; width: 100%; margin: 0 auto; }
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
  .pp-card h2 { margin: 0 0 12px; font-size: 21px; letter-spacing: -0.02em; }
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
    margin-right: 6px;
    vertical-align: middle;
  }
  .pp-badge-app { background: #dbeafe; color: #1e40af; }
  .pp-badge-widget { background: #fef3c7; color: #92400e; }
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
  .pp-table-wrap { overflow-x: auto; border-radius: 16px; border: 1px solid #e5e7eb; margin: 4px 0 12px; }
  table.pp-table { width: 100%; border-collapse: collapse; font-size: 13.5px; background: #ffffff; }
  .pp-table th, .pp-table td {
    text-align: left;
    padding: 10px 14px;
    border-bottom: 1px solid #f0f0f0;
    vertical-align: top;
    line-height: 1.5;
  }
  .pp-table th {
    background: #f9fafb;
    color: #374151;
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .pp-table tr:last-child td { border-bottom: none; }
  .pp-table td:first-child { font-weight: 600; color: #111827; }
  .pp-toc { margin: 4px 0 0; padding-left: 0; list-style: none; columns: 2; column-gap: 24px; }
  .pp-toc li { padding: 4px 0; font-size: 14px; }
  .pp-toc a { color: #4b5563; text-decoration: none; font-weight: 500; }
  .pp-toc a:hover { color: #111827; }
  .pp-footer {
    max-width: 820px;
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

function AppBadge() {
  return <span className="pp-badge pp-badge-app">App</span>;
}
function WidgetBadge() {
  return <span className="pp-badge pp-badge-widget">Widget</span>;
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pp-page">
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
          This Privacy Policy explains how <strong>Impulse</strong> handles your
          information across both of its products: the{" "}
          <strong>Impulse app for iOS</strong> and the{" "}
          <strong>Impulse browser extension</strong> (the &ldquo;widget&rdquo;,
          for Chrome). Impulse helps you control your screen time by blocking
          distracting apps and websites and adding impulse-control friction.
        </p>
        <p className="pp-lead">
          Impulse is <strong>local-first</strong>: the core blocking and
          screen-time features run entirely on your device and don&rsquo;t
          require an account. Some features do communicate with a small, fixed set
          of external services &mdash; and this policy explains exactly what data
          leaves your device, where it goes, and why.
        </p>
        <p className="pp-lead">
          <strong>{CONTROLLER}</strong> (&ldquo;Impulse&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;) is the data controller for the processing described
          here. Throughout this policy we use <AppBadge /> for practices specific to the
          iOS app and <WidgetBadge /> for practices specific to the browser
          extension; unlabelled items apply to both.
        </p>

        <div className="pp-card">
          <h2>Contents</h2>
          <ul className="pp-toc">
            <li><a href="#local">1. Data stored on your device</a></li>
            <li><a href="#analytics">2. Analytics (Mixpanel)</a></li>
            <li><a href="#account">3. Optional account &amp; sync (Supabase)</a></li>
            <li><a href="#supervisor">4. Supervisor / protector emails</a></li>
            <li><a href="#nfc">5. Physical (NFC) unlock</a></li>
            <li><a href="#qr">6. QR code generation</a></li>
            <li><a href="#website">7. Our website (install / uninstall)</a></li>
            <li><a href="#permissions">8. Browser permissions</a></li>
            <li><a href="#notcollect">9. What we do NOT collect</a></li>
            <li><a href="#processors">10. Third-party processors</a></li>
            <li><a href="#legal-basis">11. Legal basis</a></li>
            <li><a href="#retention">12. Data retention</a></li>
            <li><a href="#rights">13. Your rights &amp; choices</a></li>
            <li><a href="#security">14. Security</a></li>
            <li><a href="#children">15. Children&rsquo;s privacy</a></li>
            <li><a href="#changes">16. Changes to this policy</a></li>
            <li><a href="#contact">17. Contact &amp; open source</a></li>
          </ul>
        </div>

        <div className="pp-card" id="local">
          <h2>1. Data stored on your device</h2>
          <p>
            Most of what you do with Impulse is stored <strong>only on your
            device</strong> and is used solely to enforce the rules you configure,
            show your statistics, and remember your settings.
          </p>

          <h3><AppBadge /> On iOS</h3>
          <p>
            The app uses Apple&rsquo;s official <strong>FamilyControls</strong>,{" "}
            <strong>DeviceActivity</strong> and <strong>ManagedSettings</strong>{" "}
            frameworks with individual authorization. The apps and websites you
            choose to restrict are stored as opaque, system-managed{" "}
            <strong>tokens</strong> that are <strong>not readable by us and never
            transmitted to any server</strong> &mdash; not even the names of the
            apps you block leave your device. Your schedules, limits, preferences,
            app-lock PIN, streaks and Screen Time report are stored locally
            (SwiftData, AsyncStorage and the system keychain) and are deleted when
            you uninstall the app.
          </p>

          <h3><WidgetBadge /> In the browser</h3>
          <p>
            The extension stores your data with Chrome&rsquo;s{" "}
            <code>chrome.storage.local</code> (and <code>chrome.storage.sync</code>{" "}
            for the optional password lock). This includes:
          </p>
          <ul className="pp-list">
            <li><strong>Blocking rules:</strong> the sites/URLs you block, schedules, difficulty levels (Easy, Medium, Hard, Physical) and rule names.</li>
            <li><strong>Impulse controls &amp; limits:</strong> per-site open/time/scroll limits and impulse-countdown settings.</li>
            <li><strong>Screen-time data:</strong> time spent per site and visit/open counts, tracked locally to power the statistics views and heatmaps.</li>
            <li><strong>Preferences:</strong> Quick Focus settings, theme and locale.</li>
            <li><strong>Password protection (optional):</strong> a salted SHA-256 <strong>hash</strong> of your password (never the plaintext).</li>
            <li><strong>Verified protector emails, physical-card bindings and emergency-escape state</strong> are kept locally for the features described below.</li>
            <li><strong>A random installation ID</strong> used to group analytics events (see below).</li>
          </ul>
        </div>

        <div className="pp-card" id="analytics">
          <h2>2. Analytics (Mixpanel, EU)</h2>
          <p>
            Both products send <strong>product-usage analytics</strong> to{" "}
            <strong>Mixpanel</strong>, hosted in the European Union
            (<code>api-eu.mixpanel.com</code>), to understand which features are
            used and improve Impulse. Events are <strong>anonymous or
            pseudonymous</strong> and are tied to a random installation ID, not to
            your name.
          </p>
          <ul className="pp-list">
            <li><strong>Event names</strong> describing interactions (onboarding steps, creating a rule, activating Quick Focus, reaching a limit, completing/failing an unlock challenge, viewing stats, joining a squad).</li>
            <li><strong>A random installation ID</strong> (a UUID generated on your device), not by itself tied to your name or email.</li>
            <li><strong>Standard technical properties:</strong> app/extension version, a generic browser/OS label and timestamps.</li>
            <li><strong>Aggregate profile counts</strong> such as number of controls/blocking periods/squads, whether you are signed in, locale and theme.</li>
          </ul>
          <p>
            <WidgetBadge /> Analytics <strong>never include the content of your
            blocks or which apps you use</strong>. Some extension events include a{" "}
            <code>Domain</code> / <code>Site</code> property with the address of a
            site where the extension acted (for example when a limit is reached or a
            warning is shown); in a small number of events this may include the page
            path, not only the domain. Some events also include names{" "}
            <strong>you</strong> chose (a control&rsquo;s or squad&rsquo;s name).
            When you sign in or register, the event includes only the{" "}
            <strong>domain part of your email</strong> (e.g. <code>gmail.com</code>),
            not your full email. Analytics are governed by{" "}
            <a href="https://mixpanel.com/legal/privacy-policy/" target="_blank" rel="noreferrer">Mixpanel&rsquo;s privacy policy</a>.
          </p>
        </div>

        <div className="pp-card" id="account">
          <h2>3. Optional account &amp; sync (Supabase, EU)</h2>
          <p>
            Accounts, authentication, sync and shared groups are handled by{" "}
            <strong>Supabase</strong>, hosted in the European Union
            (<code>eu-central-1</code>). <strong>None of this data leaves your
            device unless you choose to use these features.</strong>
          </p>
          <p>
            <AppBadge /> On first launch an <strong>anonymous identifier</strong>{" "}
            is generated to save your progress. You are only asked to create a{" "}
            <strong>permanent account (email + password)</strong> if you choose to{" "}
            create or join a <strong>group or challenge</strong>.
          </p>
          <p>
            <WidgetBadge /> The extension offers an <strong>optional</strong>{" "}
            account so you can sync across devices and back up your statistics.
            Sign-in uses your <strong>email address plus a one-time code (OTP)</strong>{" "}
            emailed by Supabase (you can set a password afterwards).
          </p>
          <p>When you use these features, we process, on Supabase:</p>
          <ul className="pp-list">
            <li><strong>Account &amp; authentication:</strong> email, encrypted password, optional display name, plan, and a user/device identifier to sync your progress.</li>
            <li><WidgetBadge /> <strong>Rule &amp; settings sync:</strong> your blocking periods and impulse controls, including the site URLs/hostnames you configured and the rule names you gave them.</li>
            <li><WidgetBadge /> <strong>Daily statistics backup:</strong> once a day the extension uploads the previous day&rsquo;s aggregated per-site stats &mdash; for both configured and other visited (&ldquo;uncontrolled&rdquo;) sites: hostname, time spent, visit counts, blocks triggered, challenges completed/failed, session durations and hourly breakdowns.</li>
            <li><strong>Groups / squads:</strong> nickname and group role, streaks and compliance status, a verification status (✅/⚠️), the group rules you create (app/site names you type manually) and a timestamped violation log to compute streaks and rankings. <strong>We never share your list of blocked apps</strong> &mdash; only your verification status.</li>
          </ul>
          <div className="pp-callout">
            The extension embeds Supabase&rsquo;s <strong>public (anon) key</strong>,
            which is designed to be shipped in client code and grants no privileged
            access &mdash; your data is protected by Supabase Row-Level Security and
            your authenticated session. See{" "}
            <a href="https://supabase.com/privacy" target="_blank" rel="noreferrer">Supabase&rsquo;s privacy policy</a>.
          </div>
        </div>

        <div className="pp-card" id="supervisor">
          <h2>4. Supervisor / protector emails &amp; verification</h2>
          <p>
            For <strong>&ldquo;Hard&rdquo; difficulty</strong> and{" "}
            <strong>Supervision</strong> mode, Impulse can involve a supervisor /
            accountability partner (&ldquo;protector&rdquo;) identified by an{" "}
            <strong>email address</strong>. Before an email can be saved as a
            protector, its owner must prove control of the inbox by entering a code
            we send them.
          </p>
          <ul className="pp-list">
            <li><WidgetBadge /> Verification and unlock codes are handled by a serverless <strong>Supabase Edge Function</strong> (<code>supervisor-code</code>). The <strong>server</strong> generates the code, stores only a hashed version, emails it, and enforces limits (code expires in ~5 minutes, max 3 attempts, single-use). The extension never receives the code &mdash; it only forwards what you type back.</li>
            <li><AppBadge /> The app uses <strong>EmailJS</strong> to send the verification code to the supervisor email you configure.</li>
            <li><strong>Emergency escape (72h):</strong> Hard rules include a single-use emergency unlock that takes effect after 72 hours (it degrades the rule to Easy). When you request it, we email a heads-up to the configured protector(s); this sends the protector&rsquo;s email address to our backend.</li>
          </ul>
          <p>
            If you only use &ldquo;Easy&rdquo; or &ldquo;Medium&rdquo; difficulty
            and don&rsquo;t use Supervision, no email data is sent by this feature.
          </p>
        </div>

        <div className="pp-card" id="nfc">
          <h2>5. Physical (NFC) unlock</h2>
          <p>
            The <strong>&ldquo;Physical&rdquo; difficulty</strong> lets you require
            tapping a physical <strong>NFC card/tag</strong> to unlock a rule. This
            requires an account.
          </p>
          <ul className="pp-list">
            <li><AppBadge /> The NFC card is <strong>paired and scanned using the iOS app</strong>, which performs the live NFC read on your phone.</li>
            <li><WidgetBadge /> The <strong>browser extension does not read NFC hardware</strong> and requests no NFC permission. It only checks your account status, lists your linked cards (returning the card labels you set and a masked form of your email) and requests/verifies a short unlock code generated when the card is scanned on your phone. This is handled by a Supabase Edge Function (<code>physical-unlock</code>); which card unlocks which rule is stored only locally and is not synced.</li>
          </ul>
          <p>If you never use &ldquo;Physical&rdquo; difficulty, none of this is sent.</p>
        </div>

        <div className="pp-card" id="qr">
          <h2>6. QR code generation</h2>
          <p>
            <WidgetBadge /> When you open the &ldquo;get the mobile app&rdquo;
            screen, the extension renders a QR code by loading an image from{" "}
            <code>api.qrserver.com</code>, passing only the{" "}
            <strong>public App Store link</strong> as the data to encode. No
            personal or browsing data is sent &mdash; only that static, public URL
            (plus the IP/user-agent metadata inherent to any image request).
          </p>
        </div>

        <div className="pp-card" id="website">
          <h2>7. Our website (install / uninstall)</h2>
          <p>
            <WidgetBadge /> The extension opens a page on{" "}
            <code>impulsecontrolapp.com</code> in two situations: an{" "}
            <strong>onboarding page on install</strong>, and an{" "}
            <strong>uninstall page</strong> (via{" "}
            <code>chrome.runtime.setUninstallURL</code>) that may offer a feedback
            survey. As with any website visit, this exposes your IP address and
            user-agent to our web server; no blocking rules, statistics or account
            data are attached to these navigations.
          </p>
          <p>
            Any request to an external service inherently exposes your
            device&rsquo;s IP address and browser user-agent to that service, as
            with any normal web request.
          </p>
        </div>

        <div className="pp-card" id="permissions">
          <h2>8. Browser permissions</h2>
          <p>
            <WidgetBadge /> The extension declares the following Chrome
            permissions:
          </p>
          <div className="pp-table-wrap">
            <table className="pp-table">
              <thead>
                <tr><th>Permission</th><th>Why it is needed</th></tr>
              </thead>
              <tbody>
                <tr><td>storage</td><td>Persist your rules, limits, statistics and preferences locally (and the password hash in sync storage).</td></tr>
                <tr><td>tabs</td><td>See which site is active in order to apply blocking rules, track screen time and run Quick Focus.</td></tr>
                <tr><td>webNavigation</td><td>Detect navigation events so rules can be evaluated as you move between pages.</td></tr>
                <tr><td>alarms</td><td>Schedule timed tasks: reset daily counters, check schedules and pauses, run Quick Focus timers, refresh data.</td></tr>
                <tr><td>windows</td><td>Track the focused window so screen time is measured only for the window you are using.</td></tr>
                <tr><td>tabGroups</td><td>Read/update Chrome tab groups used by the focus/organization features.</td></tr>
                <tr><td>notifications</td><td>Show system notifications (e.g. when a Quick Focus session finishes).</td></tr>
                <tr><td>idle</td><td>Detect when your device is idle or locked so idle time is not counted as active screen time.</td></tr>
                <tr><td>&lt;all_urls&gt; (host)</td><td>Inject blocking/warning overlays and evaluate your rules on sites you configure. The content script runs on pages but only acts on sites that match your rules.</td></tr>
              </tbody>
            </table>
          </div>
          <div className="pp-callout">
            <strong>Chrome Web Store limited-use disclosure:</strong> Although{" "}
            <code>&lt;all_urls&gt;</code> is broad, the extension uses it only to
            check whether a page matches <strong>your</strong> rules and to display
            overlays. It does <strong>not</strong> read page content for other
            purposes, intercept forms, or access your passwords. The
            extension&rsquo;s content security policy restricts outbound connections
            to exactly <code>api-eu.mixpanel.com</code>,{" "}
            <code>*.supabase.co</code> and <code>api.qrserver.com</code>.
            Impulse&rsquo;s use of information received from Google APIs adheres to
            the{" "}
            <a href="https://developer.chrome.com/docs/webstore/program-policies/limited-use" target="_blank" rel="noreferrer">Chrome Web Store User Data Policy</a>, including the Limited Use requirements.
          </div>
        </div>

        <div className="pp-card" id="notcollect">
          <h2>9. What we do NOT collect</h2>
          <ul className="pp-list">
            <li>We do <strong>not</strong> collect your location, contacts, photos or messages.</li>
            <li>We do <strong>not</strong> read page content, form inputs or passwords, and we do <strong>not</strong> log your general browsing history for advertising.</li>
            <li><AppBadge /> We do <strong>not</strong> log which apps you actually use; we only manage the ones you choose to restrict, and that selection stays on your device as opaque tokens.</li>
            <li>We do <strong>not</strong> sell your data or use it to build advertising profiles.</li>
          </ul>
        </div>

        <div className="pp-card" id="processors">
          <h2>10. Third-party processors</h2>
          <div className="pp-table-wrap">
            <table className="pp-table">
              <thead>
                <tr><th>Provider</th><th>Role</th></tr>
              </thead>
              <tbody>
                <tr><td>Apple</td><td><AppBadge /> Screen Time frameworks and App Group. Data is handled on-device.</td></tr>
                <tr><td>Supabase (EU, eu-central-1)</td><td>Accounts, authentication, sync, groups/squads, supervisor &amp; physical-unlock functions.</td></tr>
                <tr><td>Mixpanel (EU)</td><td>Anonymous / pseudonymous usage analytics.</td></tr>
                <tr><td>EmailJS</td><td><AppBadge /> Sending supervisor verification emails.</td></tr>
                <tr><td>api.qrserver.com</td><td><WidgetBadge /> Rendering the &ldquo;get the app&rdquo; QR code from a public URL.</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            These providers process data only to provide the features above. We do
            not sell your personal data.
          </p>
        </div>

        <div className="pp-card" id="legal-basis">
          <h2>11. Legal basis</h2>
          <p>
            Where applicable law (e.g. the EU/EEA GDPR) requires it, we process your
            data based on <strong>performance of a contract</strong> (delivering the
            service you request, such as groups and sync), your{" "}
            <strong>consent</strong> (analytics), and our <strong>legitimate
            interest</strong> in keeping Impulse secure and improving it. You can
            withdraw consent at any time.
          </p>
        </div>

        <div className="pp-card" id="retention">
          <h2>12. Data retention</h2>
          <ul className="pp-list">
            <li><strong>Local data</strong> stays on your device until you delete it or uninstall the app/extension. <WidgetBadge /> Some local counters are pruned automatically after a rolling window (about 14 days for certain metrics).</li>
            <li><strong>Account &amp; sync data</strong> in Supabase is retained while your account exists. When you request deletion, we remove the server-side copy.</li>
            <li><strong>Analytics</strong> sent to Mixpanel is retained according to Mixpanel&rsquo;s policies and our account configuration.</li>
            <li><strong>Verification codes</strong> are short-lived server-side (~5 minutes) and single-use.</li>
          </ul>
          <p>
            You can request deletion of your account or of specific data at any time
            on our <a href="/delete-account">account &amp; data deletion page</a>.
          </p>
        </div>

        <div className="pp-card" id="rights">
          <h2>13. Your rights &amp; choices</h2>
          <p>
            Depending on where you live (e.g. the EU/EEA under GDPR), you may have
            the right to access, correct, export, delete or port your data, to
            object to or restrict certain processing, and to lodge a complaint with
            your data protection authority. You can:
          </p>
          <ul className="pp-list">
            <li><strong>View your data</strong> &mdash; your rules, limits and statistics are visible in the app/extension interface.</li>
            <li><WidgetBadge /> <strong>Export your data</strong> as a JSON file from Settings.</li>
            <li><strong>Delete local data</strong> by uninstalling the app or extension.</li>
            <li><strong>Delete account data</strong> or specific data via our <a href="/delete-account">deletion page</a>.</li>
            <li><strong>Contact us</strong> at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> to exercise any of these rights.</li>
          </ul>
        </div>

        <div className="pp-card" id="security">
          <h2>14. Security</h2>
          <ul className="pp-list">
            <li><strong>Encrypted transport:</strong> all external communication uses HTTPS/TLS.</li>
            <li><strong>Local storage:</strong> your password, if set, is stored only as a salted SHA-256 hash, never in plaintext.</li>
            <li><strong>Authenticated backend:</strong> account, sync, group, supervisor and physical-unlock requests are authenticated with your Supabase session and protected by Row-Level Security.</li>
            <li><strong>Restricted connections:</strong> the extension&rsquo;s content security policy limits outbound connections to the specific services listed here.</li>
          </ul>
          <p>No method of transmission or storage is completely secure; we cannot guarantee absolute security.</p>
        </div>

        <div className="pp-card" id="children">
          <h2>15. Children&rsquo;s privacy</h2>
          <p>
            Impulse is not directed to children under 13 (or the minimum age
            required in your country), and we do not knowingly collect their
            personal data. If you believe a child has provided us data, contact us
            and we will delete it.
          </p>
        </div>

        <div className="pp-card" id="changes">
          <h2>16. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy to reflect changes in functionality or
            legal requirements. Material changes will be reflected by updating the
            &ldquo;Last updated&rdquo; date above and, where appropriate, through
            the app or extension.
          </p>
        </div>

        <div className="pp-card" id="contact">
          <h2>17. Contact &amp; open source</h2>
          <p>
            Data controller: <strong>{CONTROLLER}</strong>. For any privacy question
            or request, contact us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
          <p>
            <WidgetBadge /> The extension&rsquo;s source code is available for
            review on{" "}
            <a href="https://github.com/pagra93/impulse_widget" target="_blank" rel="noreferrer">GitHub</a>.
          </p>
        </div>
      </main>

      <footer className="pp-footer">
        <span>© {new Date().getFullYear()} Impulse · Focus without friction.</span>
      </footer>
    </div>
  );
}
