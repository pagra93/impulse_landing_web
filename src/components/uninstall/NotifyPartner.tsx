"use client";

import { useEffect, useRef } from "react";

/**
 * Fires the accountability-partner notification once, from the browser.
 *
 * The send moved off the server render so that a bare GET of
 * /uninstall?partner=<email> can no longer make us email a stranger. Going
 * through the browser means the request carries a real same-origin `Origin`
 * header, which the route handler checks.
 *
 * `keepalive` lets the request outlive the page, which matters here: people
 * close this tab seconds after uninstalling.
 */
export function NotifyPartner({ partner }: { partner: string }) {
  const sent = useRef(false);

  useEffect(() => {
    // React 18+ mounts effects twice in development; the ref keeps that from
    // becoming two requests. The endpoint is also idempotent per day.
    if (sent.current) return;
    sent.current = true;

    void fetch("/api/uninstall-notify", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ partner }),
      keepalive: true,
    }).catch(() => {
      // Silent by design: the person uninstalling should never see this fail.
    });
  }, [partner]);

  return null;
}
