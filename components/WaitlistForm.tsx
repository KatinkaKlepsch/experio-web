"use client";

// Waitlist form — client component (interactivity not allowed in static export
// Server Components). POSTs to the Supabase Edge Function `waitlist-signup`.
//
// Env vars (set in .env.local + Cloudflare Pages settings):
//   - NEXT_PUBLIC_SUPABASE_URL
//   - NEXT_PUBLIC_SUPABASE_ANON_KEY
//
// On success: shows the user's position number with a magazine-y reveal.
// On already-on-list: same success state, with subtle "already in" copy.
// On error: shows error inline, keeps form so user can retry.

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .min(1, "Skriv din email.")
    .email("Det her ligner ikke en gyldig email."),
});

type FormValues = z.infer<typeof schema>;

type SuccessState = {
  position: number | null;
  alreadyOnList: boolean;
};

export default function WaitlistForm() {
  const [success, setSuccess] = useState<SuccessState | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: { email: "" },
  });

  const onSubmit = async ({ email }: FormValues) => {
    setSubmitError(null);

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey) {
      setSubmitError(
        "Vores formular er ikke korrekt konfigureret. Skriv til hello@myexperio.com.",
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
        body: JSON.stringify({ email, source: "landing" }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (data.error === "invalid_email") {
          setSubmitError("Den email kan vi ikke bruge — tjek den igen.");
        } else {
          setSubmitError("Noget gik galt. Prøv igen om lidt.");
        }
        return;
      }

      setSuccess({
        position: typeof data.position === "number" ? data.position : null,
        alreadyOnList: !!data.alreadyOnList,
      });
    } catch {
      setSubmitError("Vi kunne ikke nå serveren. Tjek din forbindelse og prøv igen.");
    }
  };

  if (success) {
    return (
      <div className="mx-auto mt-10 max-w-md rounded-3xl border border-accent/40 bg-card px-8 py-10 text-center">
        <div className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-accent">
          {success.alreadyOnList ? "Du står allerede på listen" : "Du er nu inde"}
        </div>
        {success.position !== null && (
          <div className="mt-6">
            <div className="font-sans text-[11px] uppercase tracking-wider text-ink-muted">
              Din position
            </div>
            <div className="mt-1 font-display text-6xl font-black leading-none text-ink">
              #{success.position}
            </div>
          </div>
        )}
        <p className="mt-6 font-display text-lg italic text-ink-soft">
          {success.alreadyOnList
            ? "Vi ses i september."
            : "Vi har sendt en velkomst-mail. Tjek din indbakke."}
        </p>
        <p className="mt-4 font-sans text-xs text-ink-muted">
          Mailen er sendt fra <span className="text-ink">onboarding@resend.dev</span> —
          tjek spam hvis du ikke ser den indenfor et minut.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-10 max-w-md"
      noValidate
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <input
              {...field}
              type="email"
              placeholder="din@email.dk"
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
          className="rounded-full bg-ink px-7 py-3.5 font-sans font-medium text-card transition-transform hover:scale-[1.02] disabled:cursor-wait disabled:opacity-60"
        >
          {isSubmitting ? "Sender…" : "Ansøg om adgang"}
        </button>
      </div>

      {errors.email && (
        <p className="mt-3 text-center font-sans text-sm text-ink-soft" role="alert">
          {errors.email.message}
        </p>
      )}
      {submitError && (
        <p className="mt-3 text-center font-sans text-sm text-ink-soft" role="alert">
          {submitError}
        </p>
      )}

      <p className="mt-6 text-center font-sans text-xs leading-relaxed text-ink-muted">
        Du modtager ingen spam. Et velkomst-mail og et par opdateringer frem til launch
        — fra et menneske, ikke noreply@.
      </p>
    </form>
  );
}
