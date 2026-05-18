// Privacy Policy — GDPR-compliant, calibrated to current product state (pre-launch waitlist).
//
// IMPORTANT: This policy reflects what data we ACTUALLY collect right now (email only).
// When we launch the app and start processing payments, bookings, location data etc.,
// this policy MUST be expanded BEFORE those features go live.
//
// Reviewed periodically against:
//   - GDPR Articles 6, 7, 13, 14, 15-22 (legal basis, info notices, user rights)
//   - Danish Data Protection Act
//   - Sub-processor changes (Supabase, Resend, Cloudflare)
//
// TODO before incorporation:
//   - Replace data controller info with company name + CVR + registered address
//   - Get legal review when entity is incorporated

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Experio",
  description: "How Experio collects, uses, and protects your personal data.",
};

const LAST_UPDATED = "18 May 2026";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 font-display text-2xl font-bold text-ink md:text-3xl">{children}</h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 font-display text-lg font-bold text-ink">{children}</h3>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 font-sans text-base leading-relaxed text-ink-soft">{children}</p>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="mt-2 font-sans text-base leading-relaxed text-ink-soft">{children}</li>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      {/* Simple header */}
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

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-ink-muted">
          Legal
        </p>
        <h1 className="mt-4 font-display text-4xl font-black leading-tight tracking-tight text-ink md:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-4 font-sans text-sm text-ink-muted">
          Last updated: {LAST_UPDATED}
        </p>

        {/* ─── 1. INTRODUCTION ─── */}
        <SectionTitle>1. Introduction</SectionTitle>
        <Paragraph>
          Experio (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the
          website at <strong>myexperio.com</strong> (the &ldquo;Service&rdquo;). This
          Privacy Policy explains how we collect, use, store, and protect your personal
          data when you visit the Service or sign up for our waitlist.
        </Paragraph>
        <Paragraph>
          We are committed to processing your personal data in accordance with the
          General Data Protection Regulation (GDPR) and Danish data protection law.
          This policy applies to the pre-launch waitlist phase. When we launch the
          Experio product, this policy will be updated to cover the broader data we
          process.
        </Paragraph>
        <Paragraph>
          <strong>Data controller:</strong> Experio is currently operated by Katinka
          Schjeldrup Klepsch and Ida Nørgaard as co-founders, pre-incorporation. Once
          we are incorporated as a Danish company, this section will be updated with
          our official entity name and CVR number.
        </Paragraph>

        {/* ─── 2. WHAT WE COLLECT ─── */}
        <SectionTitle>2. What personal data we collect</SectionTitle>
        <Paragraph>
          We collect the minimum data necessary to operate our waitlist. Specifically:
        </Paragraph>

        <SubTitle>2.1 Information you provide</SubTitle>
        <ul className="mt-2 list-disc pl-6">
          <ListItem>
            <strong>Email address</strong> — when you sign up to our waitlist via the
            form on our website.
          </ListItem>
        </ul>

        <SubTitle>2.2 Information collected automatically</SubTitle>
        <ul className="mt-2 list-disc pl-6">
          <ListItem>
            <strong>Server logs</strong> — including your IP address, browser type,
            operating system, and approximate location (country/city level), collected
            by our hosting provider Cloudflare. These logs are used for security and
            uptime monitoring.
          </ListItem>
          <ListItem>
            <strong>Email delivery metadata</strong> — when we send you a welcome
            email, our email provider Resend records delivery status (delivered,
            bounced, opened). We do not track individual click-through behaviour.
          </ListItem>
        </ul>

        <Paragraph>
          We do <strong>not</strong> use third-party analytics, advertising trackers,
          or behavioural cookies. We do not collect names, addresses, phone numbers,
          payment information, or any sensitive categories of data during the waitlist
          phase.
        </Paragraph>

        {/* ─── 3. PURPOSE AND LEGAL BASIS ─── */}
        <SectionTitle>3. Purpose and legal basis</SectionTitle>
        <Paragraph>
          We process your personal data only when we have a lawful basis to do so. The
          following table summarises our processing activities:
        </Paragraph>

        <SubTitle>3.1 Waitlist signup and confirmation email</SubTitle>
        <Paragraph>
          <strong>Purpose:</strong> To record your interest in Experio, send a welcome
          email confirming your position, and notify you about launch milestones.
        </Paragraph>
        <Paragraph>
          <strong>Legal basis:</strong> Your consent (GDPR Article 6(1)(a)). By
          submitting your email via our waitlist form, you actively consent to receive
          waitlist-related communications. You may withdraw consent at any time (see
          Section 8).
        </Paragraph>

        <SubTitle>3.2 Pre-launch updates and product launch invitation</SubTitle>
        <Paragraph>
          <strong>Purpose:</strong> To send you a small number of updates about
          Experio&rsquo;s development before launch, and an invitation when the app
          opens to first members.
        </Paragraph>
        <Paragraph>
          <strong>Legal basis:</strong> Your consent (GDPR Article 6(1)(a)). This is
          part of the waitlist signup consent. We have committed to sending no more
          than approximately three pre-launch emails.
        </Paragraph>

        <SubTitle>3.3 Service security and infrastructure logs</SubTitle>
        <Paragraph>
          <strong>Purpose:</strong> To protect the Service against abuse, monitor
          uptime, and diagnose technical issues.
        </Paragraph>
        <Paragraph>
          <strong>Legal basis:</strong> Our legitimate interest in maintaining a
          secure service (GDPR Article 6(1)(f)).
        </Paragraph>

        {/* ─── 4. WHO WE SHARE DATA WITH ─── */}
        <SectionTitle>4. Who we share your data with (sub-processors)</SectionTitle>
        <Paragraph>
          We do not sell your personal data to anyone. We share it only with the
          following service providers, each bound by data processing agreements
          consistent with GDPR requirements:
        </Paragraph>

        <ul className="mt-4 list-disc pl-6">
          <ListItem>
            <strong>Supabase</strong> (
            <a
              href="https://supabase.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:no-underline"
            >
              privacy policy
            </a>
            ) — our database and serverless backend. Your email and signup metadata
            are stored here. Servers located in the European Union.
          </ListItem>
          <ListItem>
            <strong>Resend</strong> (
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:no-underline"
            >
              privacy policy
            </a>
            ) — our email delivery provider. Used to send you the welcome email and
            future pre-launch updates. Resend is based in the United States.
          </ListItem>
          <ListItem>
            <strong>Cloudflare</strong> (
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:no-underline"
            >
              privacy policy
            </a>
            ) — our DNS, hosting, and security provider. Handles server logs and
            traffic routing. Global edge network with European data centres.
          </ListItem>
        </ul>

        {/* ─── 5. INTERNATIONAL TRANSFERS ─── */}
        <SectionTitle>5. International data transfers</SectionTitle>
        <Paragraph>
          Some of our service providers are based outside the European Economic Area
          (EEA), specifically Resend (United States). When personal data is
          transferred outside the EEA, we rely on appropriate safeguards as required
          by GDPR, including Standard Contractual Clauses (SCCs) approved by the
          European Commission.
        </Paragraph>
        <Paragraph>
          You can request more information about the specific safeguards used by
          contacting us at the address below.
        </Paragraph>

        {/* ─── 6. PROFILING AND AUTOMATED DECISIONS ─── */}
        <SectionTitle>6. Profiling and automated decision-making</SectionTitle>
        <Paragraph>
          We do <strong>not</strong> use profiling or automated decision-making that
          produces legal or similarly significant effects on you. We do not segment
          our waitlist based on demographics, location, or behaviour.
        </Paragraph>

        {/* ─── 7. DATA RETENTION ─── */}
        <SectionTitle>7. How long we keep your data</SectionTitle>
        <Paragraph>
          We retain your personal data only for as long as necessary to fulfil the
          purposes outlined in this policy:
        </Paragraph>
        <ul className="mt-2 list-disc pl-6">
          <ListItem>
            <strong>Waitlist email</strong> — kept until our product launches or you
            unsubscribe, whichever comes first. After the public launch, we will
            either transfer your data to a customer account (if you create one) or
            delete it from the waitlist database within 90 days.
          </ListItem>
          <ListItem>
            <strong>Server logs</strong> — retained by Cloudflare and Supabase per
            their own retention policies (typically 7-30 days for security logs).
          </ListItem>
          <ListItem>
            <strong>Email delivery metadata</strong> — retained by Resend for a
            limited period as needed to troubleshoot delivery issues.
          </ListItem>
        </ul>

        {/* ─── 8. YOUR RIGHTS ─── */}
        <SectionTitle>8. Your rights</SectionTitle>
        <Paragraph>
          Under GDPR, you have the following rights regarding your personal data:
        </Paragraph>
        <ul className="mt-2 list-disc pl-6">
          <ListItem>
            <strong>Right of access</strong> (Article 15) — to confirm what personal
            data we hold about you and receive a copy.
          </ListItem>
          <ListItem>
            <strong>Right to rectification</strong> (Article 16) — to correct
            inaccurate or incomplete data.
          </ListItem>
          <ListItem>
            <strong>Right to erasure</strong> (Article 17, &ldquo;right to be
            forgotten&rdquo;) — to ask us to delete your data.
          </ListItem>
          <ListItem>
            <strong>Right to restrict processing</strong> (Article 18) — to limit how
            we use your data in certain circumstances.
          </ListItem>
          <ListItem>
            <strong>Right to data portability</strong> (Article 20) — to receive your
            data in a structured, commonly used format.
          </ListItem>
          <ListItem>
            <strong>Right to object</strong> (Article 21) — to object to processing
            based on legitimate interest.
          </ListItem>
          <ListItem>
            <strong>Right to withdraw consent</strong> (Article 7) — at any time,
            without affecting the lawfulness of processing before withdrawal.
          </ListItem>
        </ul>

        <Paragraph>
          To unsubscribe from our emails at any time, simply reply to any email we
          send with &ldquo;unsubscribe&rdquo; in the body. We will remove you from the
          waitlist within 7 days. Alternatively, contact us using the details below.
        </Paragraph>

        <Paragraph>
          You also have the right to lodge a complaint with the Danish Data Protection
          Agency (
          <em>Datatilsynet</em>) if you believe we have not handled your personal
          data in accordance with the law:{" "}
          <a
            href="https://www.datatilsynet.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:no-underline"
          >
            datatilsynet.dk
          </a>
          .
        </Paragraph>

        {/* ─── 9. SECURITY ─── */}
        <SectionTitle>9. Security</SectionTitle>
        <Paragraph>
          We implement appropriate technical and organisational measures to protect
          your personal data against unauthorised access, alteration, disclosure, or
          destruction. These include:
        </Paragraph>
        <ul className="mt-2 list-disc pl-6">
          <ListItem>HTTPS / TLS encryption for all data in transit</ListItem>
          <ListItem>
            Database access restricted to authenticated server-side functions (no
            direct client access)
          </ListItem>
          <ListItem>Row-level security policies on our Supabase database</ListItem>
          <ListItem>
            Limited access to production systems — restricted to founders only
          </ListItem>
        </ul>

        {/* ─── 10. CONTACT ─── */}
        <SectionTitle>10. Contact us</SectionTitle>
        <Paragraph>
          If you have questions about this policy, want to exercise your rights, or
          want to raise a concern about how we handle your personal data, contact us
          at:
        </Paragraph>
        <Paragraph>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:hello@myexperio.com"
            className="text-accent underline hover:no-underline"
          >
            hello@myexperio.com
          </a>
        </Paragraph>
        <Paragraph>
          We aim to respond to all data-related requests within 30 days, as required
          by GDPR.
        </Paragraph>

        {/* ─── 11. CHANGES ─── */}
        <SectionTitle>11. Changes to this policy</SectionTitle>
        <Paragraph>
          We may update this Privacy Policy from time to time, for example to reflect
          changes in our services, legal requirements, or sub-processors. The most
          current version is always available at{" "}
          <a href="/legal/privacy" className="text-accent underline hover:no-underline">
            myexperio.com/legal/privacy
          </a>
          . When we make material changes, we will notify waitlist members by email at
          least 14 days before the changes take effect.
        </Paragraph>

        <Paragraph>
          The &ldquo;Last updated&rdquo; date at the top of this policy reflects the
          most recent revision.
        </Paragraph>

        {/* Footer link back */}
        <div className="mt-16 border-t border-line pt-8">
          <a
            href="/"
            className="font-sans text-sm text-ink-muted underline hover:text-ink"
          >
            ← Back to Experio
          </a>
        </div>
      </main>

      {/* Minimal footer */}
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
