"use client";

// Waitlist form — client component (interactivity not allowed in static export
// Server Components). POSTs to the Supabase Edge Function `waitlist-signup`.
//
// Minimal form (simplified 2026-05-14):
//   - Email  → REQUIRED, validated. Only field.
//
// Reasoning: minimize drop-off. Optional questions were removed entirely —
// venue/category preferences will be captured post-signup if needed.
//
// On success: position number + welcome message + community CTAs
// (Insta/FB follow + share with friends).

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .min(1, "Please enter your email.")
    .email("That doesn't look like a valid email."),
  acceptedTerms: z
    .boolean()
    .refine((v) => v === true, {
      message: "Please accept the Privacy Policy to continue.",
    }),
});

type FormValues = z.infer<typeof schema>;

type SuccessState = {
  position: number | null;
  alreadyOnList: boolean;
};

const SHARE_URL = "https://myexperio.com";
const INSTAGRAM_URL = "https://instagram.com/experio"; // TODO replace once handle confirmed
const FACEBOOK_URL = "https://facebook.com/experio";   // TODO replace once page exists
const LINKEDIN_URL = "https://linkedin.com/company/experio"; // TODO replace once page exists

export default function WaitlistForm() {
  const [success, setSuccess] = useState<SuccessState | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [shareCopied, setShareCopied] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: { email: "", acceptedTerms: false },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey) {
      setSubmitError(
        "Our form isn't configured correctly. Please email hello@myexperio.com.",
      );
      return;
    }

    try {
      const response = await fetch(`${supabaseUrl}/functions/v1/waitlist-signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${anonKey}`,
        },
        body: JSON.stringify({
          email: values.email,
          source: "landing",
          // Send empty strings for legacy fields the Edge Function expects.
          preferred_category: "",
          events_per_month: "",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (data.error === "invalid_email") {
          setSubmitError("We can't use that email — please double-check it.");
        } else {
          setSubmitError("Something went wrong. Please try again in a moment.");
        }
        return;
      }

      setSuccess({
        position: typeof data.position === "number" ? data.position : null,
        alreadyOnList: !!data.alreadyOnList,
      });
    } catch {
      setSubmitError("We couldn't reach the server. Check your connection and try again.");
    }
  };

  const onShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Experio — A subscription for Copenhagen's culture",
          text: "Join me on the Experio waitlist. Concerts, cinema, museums and more — one monthly membership.",
          url: SHARE_URL,
        });
      } else {
        await navigator.clipboard.writeText(SHARE_URL);
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 2500);
      }
    } catch {
      // user cancelled share — silent
    }
  };

  // ─── SUCCESS STATE ────────────────────────────────────────────────────────
  if (success) {
    return (
      <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-accent/40 bg-card px-8 py-10">
        <div className="text-center">
          <div className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-accent">
            {success.alreadyOnList ? "You're already in" : "You're in"}
          </div>
          {success.position !== null && (
            <div className="mt-6">
              <div className="font-sans text-[11px] uppercase tracking-wider text-ink-muted">
                Your position
              </div>
              <div className="mt-1 font-display text-6xl font-black leading-none text-ink">
                #{success.position}
              </div>
            </div>
          )}
          <p className="mt-6 font-display text-lg italic text-ink-soft">
            {success.alreadyOnList
              ? "We'll see you in September."
              : "We've sent you a welcome email."}
          </p>
        </div>

        {/* What happens next */}
        <div className="mt-10 rounded-2xl border border-line bg-bg p-6">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-ink-muted">
            What happens next
          </p>
          <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">
            We'll email you in <span className="text-ink">August</span> when the app is ready
            for the first members. Until then — follow along while we build it with the city's
            venues.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line bg-card px-4 py-2 font-sans text-xs font-medium text-ink transition-colors hover:border-accent"
            >
              Follow on Instagram
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line bg-card px-4 py-2 font-sans text-xs font-medium text-ink transition-colors hover:border-accent"
            >
              Follow on Facebook
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line bg-card px-4 py-2 font-sans text-xs font-medium text-ink transition-colors hover:border-accent"
            >
              Follow on LinkedIn
            </a>
          </div>
        </div>

        {/* Referral CTA */}
        <div className="mt-5 rounded-2xl border border-accent/30 bg-accent-soft/20 p-6">
          <p className="font-display text-lg font-bold text-ink">
            Get a friend in — experience it together.
          </p>
          <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
            Culture is better shared. Send a friend the link so you can be the first ones in
            together.
          </p>
          <button
            type="button"
            onClick={onShare}
            className="mt-4 rounded-full bg-ink px-5 py-2.5 font-sans text-sm font-medium text-card transition-transform hover:scale-[1.02]"
          >
            {shareCopied ? "✓ Link copied" : "Share with a friend"}
          </button>
        </div>

        <p className="mt-8 text-center font-sans text-xs text-ink-muted">
          Welcome email sent from <span className="text-ink">waitlist@myexperio.com</span> —
          check spam if you don't see it within a minute.
        </p>
      </div>
    );
  }

  // ─── FORM ─────────────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
      noValidate
    >
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <input
            {...field}
            type="email"
            placeholder="you@email.com"
            aria-label="Email"
            autoComplete="email"
            inputMode="email"
            disabled={isSubmitting}
            className="flex-1 rounded-full border border-line bg-card px-5 py-3.5 font-sans text-base text-ink placeholder-ink-muted/60 outline-none transition-colors focus:border-accent disabled:opacity-60"
          />
        )}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-ink px-8 py-3.5 font-sans font-medium text-card transition-transform hover:scale-[1.01] disabled:cursor-wait disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Apply for access"}
      </button>

      {errors.email && (
        <p
          className="absolute mt-[60px] font-sans text-sm text-ink-soft sm:relative sm:mt-0 sm:basis-full"
          role="alert"
        >
          {errors.email.message}
        </p>
      )}

      {submitError && (
        <p className="basis-full text-center font-sans text-sm text-ink-soft" role="alert">
          {submitError}
        </p>
      )}

      {/* GDPR consent — required checkbox below form (Bruce-style) */}
      <div className="basis-full">
        <Controller
          control={control}
          name="acceptedTerms"
          render={({ field }) => (
            <label className="flex cursor-pointer items-start gap-3 font-sans text-sm leading-relaxed text-ink-soft">
              <input
                type="checkbox"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                disabled={isSubmitting}
                className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer rounded border-line accent-ink focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-60"
              />
              <span>
                I accept the{" "}
                <a
                  href="/legal/privacy"
                  className="underline transition-colors hover:text-ink"
                >
                  Privacy Policy
                </a>{" "}
                and agree to receive Experio waitlist emails.{" "}
                <span className="text-ink-muted">Unsubscribe anytime.</span>
              </span>
            </label>
          )}
        />
        {errors.acceptedTerms && (
          <p
            className="mt-2 pl-7 font-sans text-sm text-ink-soft"
            role="alert"
          >
            {errors.acceptedTerms.message}
          </p>
        )}
      </div>
    </form>
  );
}
