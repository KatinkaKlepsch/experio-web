"use client";

// Unsubscribe page — confirms one-click unsubscribe from waitlist emails.
//
// The welcome email footer links here with ?e=<base64url(email)>&s=<hex(hmac)>.
// On mount we POST those values to the waitlist-unsubscribe Edge Function,
// which verifies the HMAC and updates unsubscribed_at on the row.
//
// Why client-side: the page needs to call the Edge Function with the anon key.
// We don't trust the link itself — the server verifies the signature.

import { useEffect, useState } from "react";

type State =
  | { kind: "loading" }
  | { kind: "success"; alreadyUnsubscribed: boolean }
  | { kind: "invalid" }
  | { kind: "error" };

export default function UnsubscribePage() {
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const e = params.get("e");
    const s = params.get("s");

    if (!e || !s) {
      setState({ kind: "invalid" });
      return;
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey) {
      setState({ kind: "error" });
      return;
    }

    const controller = new AbortController();

    fetch(`${supabaseUrl}/functions/v1/waitlist-unsubscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${anonKey}`,
      },
      body: JSON.stringify({ e, s }),
      signal: controller.signal,
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data?.success) {
          setState({ kind: res.status === 403 ? "invalid" : "error" });
          return;
        }
        setState({
          kind: "success",
          alreadyUnsubscribed: !!data.alreadyUnsubscribed,
        });
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setState({ kind: "error" });
      });

    return () => controller.abort();
  }, []);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <header className="border-b border-line/60 bg-bg/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <a href="/" className="font-display text-xl font-black tracking-tight text-ink">
            Experi<span className="text-accent">o</span>
          </a>
          <a
            href="/"
            className="font-sans text-xs text-ink-muted underline hover:text-ink"
          >
            ← Back to site
          </a>
        </div>
      </header>

      <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-16 text-center md:py-24">
        {state.kind === "loading" && <Loading />}
        {state.kind === "success" && (
          <Success alreadyUnsubscribed={state.alreadyUnsubscribed} />
        )}
        {state.kind === "invalid" && <Invalid />}
        {state.kind === "error" && <ErrorView />}
      </main>

      <footer className="border-t border-line bg-bg px-6 py-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-xs uppercase tracking-[1.5px] text-ink-muted">
            Experi<span className="text-accent">o</span> · Made in Copenhagen ·
            Est. 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

function Loading() {
  return (
    <>
      <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-ink-muted">
        One moment
      </p>
      <h1 className="mt-4 font-display text-3xl font-black leading-tight text-ink md:text-5xl">
        Updating your preferences<span className="text-accent">…</span>
      </h1>
    </>
  );
}

function Success({ alreadyUnsubscribed }: { alreadyUnsubscribed: boolean }) {
  return (
    <>
      <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-accent">
        {alreadyUnsubscribed ? "Already removed" : "You're unsubscribed"}
      </p>
      <h1 className="mt-4 font-display text-3xl font-black leading-tight text-ink md:text-5xl">
        Thank you.
      </h1>
      <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-ink-soft">
        {alreadyUnsubscribed
          ? "You were already off our list. We won't send you any more emails."
          : "You've been removed from our waitlist. We won't send you any more emails."}
      </p>
      <p className="mt-4 max-w-md font-sans text-sm text-ink-muted">
        Changed your mind? You're always welcome to join again at{" "}
        <a href="/" className="text-accent underline hover:no-underline">
          myexperio.com
        </a>
        .
      </p>
    </>
  );
}

function Invalid() {
  return (
    <>
      <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-ink-muted">
        Link not recognised
      </p>
      <h1 className="mt-4 font-display text-3xl font-black leading-tight text-ink md:text-5xl">
        Something looks off.
      </h1>
      <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-ink-soft">
        This unsubscribe link is invalid or has expired. If you'd like to be
        removed from our waitlist, email{" "}
        <a
          href="mailto:members@myexperio.com?subject=Unsubscribe"
          className="text-accent underline hover:no-underline"
        >
          members@myexperio.com
        </a>{" "}
        with &ldquo;unsubscribe&rdquo; in the subject, and we'll take you off
        manually.
      </p>
    </>
  );
}

function ErrorView() {
  return (
    <>
      <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-ink-muted">
        Something went wrong
      </p>
      <h1 className="mt-4 font-display text-3xl font-black leading-tight text-ink md:text-5xl">
        We couldn't reach the server.
      </h1>
      <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-ink-soft">
        Please try the link again in a moment. If it still fails, email{" "}
        <a
          href="mailto:members@myexperio.com?subject=Unsubscribe"
          className="text-accent underline hover:no-underline"
        >
          members@myexperio.com
        </a>{" "}
        and we'll remove you manually.
      </p>
    </>
  );
}
