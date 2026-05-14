"use client";

// Waitlist form — client component (interactivity not allowed in static export
// Server Components). POSTs to the Supabase Edge Function `waitlist-signup`.
//
// Field order (updated 2026-05-14):
//   - Email                → REQUIRED, validated (asked first — reduce friction)
//   - Category preference  → OPTIONAL — which experience does the user want most
//   - Frequency            → OPTIONAL — how often they go to cultural events today
//
// Reasoning: reduce drop-off. Email-first means submission is possible after
// 5 seconds. Questions remain visible for those who want to shape the product,
// but skipping them is a one-tap submit.
//
// On success: positions number + welcome message + community CTAs
// (Insta/FB follow + share with friends).

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const CATEGORIES = [
  { value: "concerts", label: "Concerts" },
  { value: "cinema", label: "Cinema" },
  { value: "standup", label: "Stand-up" },
  { value: "museums", label: "Museums" },
  { value: "wine", label: "Wine tastings" },
  { value: "workshops", label: "Workshops" },
  { value: "everything", label: "All of it" },
] as const;

const FREQUENCIES = [
  { value: "rarely", label: "Rarely — once in a while" },
  { value: "one", label: "About once a month" },
  { value: "two_three", label: "2–3 times a month" },
  { value: "four_plus", label: "4+ times a month" },
] as const;

const schema = z.object({
  // Both questions are now OPTIONAL — empty arrays are valid (no .min() check).
  // Defaults are set in defaultValues below, so the form always has these fields.
  preferredCategories: z.array(z.string()),
  eventsPerMonth: z.array(z.string()),
  // Email is the only required field
  email: z
    .string()
    .min(1, "Please enter your email.")
    .email("That doesn't look like a valid email."),
});

type FormValues = z.infer<typeof schema>;

type SuccessState = {
  position: number | null;
  alreadyOnList: boolean;
};

const SHARE_URL = "https://experio-web.pages.dev";
const INSTAGRAM_URL = "https://instagram.com/experio"; // TODO replace once handle confirmed
const FACEBOOK_URL = "https://facebook.com/experio";   // TODO replace once page exists

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
    defaultValues: { preferredCategories: [], eventsPerMonth: [], email: "" },
  });

  // Toggle helper — adds value if not in array, removes if present.
  const toggle = (current: string[], value: string): string[] =>
    current.includes(value) ? current.filter((v) => v !== value) : [...current, value];

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
          // Send arrays as comma-separated strings — Edge Function accepts either,
          // and DB column is text. Easy to split for analytics later.
          preferred_category: values.preferredCategories.join(","),
          events_per_month: values.eventsPerMonth.join(","),
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

        {/* What happens next — sets expectations + reduces "did anything just happen?" anxiety */}
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
          </div>
        </div>

        {/* Referral CTA — capitalises on commitment + reciprocity */}
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
          Welcome email sent from <span className="text-ink">onboarding@resend.dev</span> —
          check spam if you don't see it within a minute.
        </p>
      </div>
    );
  }

  // ─── FORM ─────────────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-10 max-w-xl text-left"
      noValidate
    >
      <p className="text-center font-sans text-sm leading-relaxed text-ink-soft">
        <span className="italic text-ink">Just your email — the rest is optional.</span>{" "}
        Help us shape the experience if you want to.
      </p>

      {/* Email — REQUIRED, asked first */}
      <fieldset className="mt-8">
        <legend className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-ink-muted">
          01 · Your email
          <span className="ml-2 text-accent normal-case tracking-normal">required</span>
        </legend>
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
              className="mt-3 w-full rounded-full border border-line bg-card px-5 py-3.5 font-sans text-base text-ink placeholder-ink-muted/60 outline-none transition-colors focus:border-accent disabled:opacity-60"
            />
          )}
        />
        {errors.email && (
          <p className="mt-2 font-sans text-sm text-ink-soft" role="alert">
            {errors.email.message}
          </p>
        )}
      </fieldset>

      {/* Question 1 — category preference (multi-select, OPTIONAL) */}
      <fieldset className="mt-8">
        <legend className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-ink-muted">
          02 · What kind of culture excites you most?
          <span className="ml-2 text-ink-muted/70 normal-case tracking-normal">
            optional · pick as many as you like
          </span>
        </legend>
        <Controller
          control={control}
          name="preferredCategories"
          render={({ field }) => (
            <div className="mt-3 flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const selected = field.value.includes(cat.value);
                return (
                  <button
                    type="button"
                    key={cat.value}
                    onClick={() => field.onChange(toggle(field.value, cat.value))}
                    aria-pressed={selected}
                    className={`rounded-full border px-4 py-2 font-sans text-sm transition-all ${
                      selected
                        ? "border-ink bg-ink text-card"
                        : "border-line bg-card text-ink-soft hover:border-accent"
                    }`}
                  >
                    {selected && <span aria-hidden="true">✓ </span>}
                    {cat.label}
                  </button>
                );
              })}
            </div>
          )}
        />
      </fieldset>

      {/* Question 2 — frequency (multi-select, OPTIONAL) */}
      <fieldset className="mt-8">
        <legend className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-ink-muted">
          03 · How often do you go to cultural events today?
          <span className="ml-2 text-ink-muted/70 normal-case tracking-normal">
            optional · multiple OK
          </span>
        </legend>
        <Controller
          control={control}
          name="eventsPerMonth"
          render={({ field }) => (
            <div className="mt-3 flex flex-col gap-2">
              {FREQUENCIES.map((freq) => {
                const selected = field.value.includes(freq.value);
                return (
                  <button
                    type="button"
                    key={freq.value}
                    onClick={() => field.onChange(toggle(field.value, freq.value))}
                    aria-pressed={selected}
                    className={`flex items-center gap-3 rounded-2xl border px-5 py-3 text-left font-sans text-sm transition-all ${
                      selected
                        ? "border-ink bg-ink text-card"
                        : "border-line bg-card text-ink-soft hover:border-accent"
                    }`}
                  >
                    <span aria-hidden="true">{selected ? "✓" : "○"}</span>
                    <span>{freq.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        />
      </fieldset>

      {submitError && (
        <p className="mt-6 text-center font-sans text-sm text-ink-soft" role="alert">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 w-full rounded-full bg-ink py-4 font-sans font-medium text-card transition-transform hover:scale-[1.01] disabled:cursor-wait disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Apply for access"}
      </button>

      <p className="mt-6 text-center font-sans text-xs leading-relaxed text-ink-muted">
        No spam. A welcome email and a few updates before launch — from a human, not
        noreply@.
      </p>
    </form>
  );
}
