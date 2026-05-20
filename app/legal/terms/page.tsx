// Terms of Service — calibrated to current product state (pre-launch waitlist).
//
// IMPORTANT: This covers the waitlist phase only. When we launch the app with
// memberships, bookings and payments, this MUST be expanded BEFORE go-live.
//
// TODO before incorporation:
//   - Replace party info with company name + CVR + registered address
//   - Get legal review when entity is incorporated
//   - Add payment, refund, cancellation, no-show terms when product launches

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Experio",
  description: "The terms under which you use Experio's website and waitlist.",
};

const LAST_UPDATED = "20 May 2026";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 font-display text-2xl font-bold text-ink md:text-3xl">{children}</h2>
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

export default function TermsOfService() {
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

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-ink-muted">
          Legal
        </p>
        <h1 className="mt-4 font-display text-4xl font-black leading-tight tracking-tight text-ink md:text-6xl">
          Terms of Service
        </h1>
        <p className="mt-4 font-sans text-sm text-ink-muted">
          Last updated: {LAST_UPDATED}
        </p>

        {/* ─── 1. INTRODUCTION ─── */}
        <SectionTitle>1. Introduction</SectionTitle>
        <Paragraph>
          Welcome to Experio. These Terms of Service (the &ldquo;Terms&rdquo;) govern
          your use of the website at <strong>myexperio.com</strong> and any related
          services we offer (the &ldquo;Service&rdquo;).
        </Paragraph>
        <Paragraph>
          By using the Service or signing up for our waitlist, you agree to these
          Terms. If you do not agree, please do not use the Service.
        </Paragraph>
        <Paragraph>
          Experio is currently operated by Ida Nørgaard and Katinka Schjeldrup
          Klepsch as co-founders, pre-incorporation, at the address:
        </Paragraph>
        <Paragraph>
          Ved Hegnet 1, 3.tv, 2100 København Ø, Denmark
        </Paragraph>
        <Paragraph>
          Once we are incorporated as a Danish company, this section will be updated
          with our official entity name, CVR number, and registered address.
        </Paragraph>

        {/* ─── 2. WHAT EXPERIO IS ─── */}
        <SectionTitle>2. What Experio is</SectionTitle>
        <Paragraph>
          Experio is a curated cultural membership platform launching in Copenhagen,
          with the intention to expand internationally. The Service will offer
          members access to concerts, cinema, stand-up comedy, museums, wine
          tastings, workshops, and similar cultural experiences through a monthly
          subscription, without long-term commitment.
        </Paragraph>
        <Paragraph>
          As of the date above, the Service is in <strong>pre-launch waitlist phase
          </strong>. The full membership product is expected to launch in September
          2026. These Terms cover the pre-launch phase. When the membership product
          launches, additional terms covering cancellation rights, the 14-day right
          of withdrawal applicable to Danish consumers under the Consumer Contracts
          Act (<em>Forbrugeraftaleloven</em>), and payment conditions will apply and
          will be presented to you before you subscribe.
        </Paragraph>

        {/* ─── 3. ELIGIBILITY ─── */}
        <SectionTitle>3. Eligibility</SectionTitle>
        <Paragraph>
          You must be at least 18 years old and have the legal capacity to enter into
          binding contracts to use the Service or join the waitlist. By using the
          Service you represent and warrant that you meet these requirements.
        </Paragraph>

        {/* ─── 4. THE WAITLIST ─── */}
        <SectionTitle>4. The waitlist</SectionTitle>
        <Paragraph>
          By submitting your email through the waitlist form on our website, you:
        </Paragraph>
        <ul className="mt-2 list-disc pl-6">
          <ListItem>
            Receive a confirmation email with your position on the waitlist
          </ListItem>
          <ListItem>
            Consent to receive no more than two pre-launch emails from us: a story in
            July and a launch invitation in August 2026
          </ListItem>
          <ListItem>
            Will receive an invitation to join the Service when it launches in
            September 2026
          </ListItem>
        </ul>
        <Paragraph>
          You may unsubscribe at any time by clicking the unsubscribe link in the
          footer of any email we send. Your removal is recorded immediately. Being on
          the waitlist does not guarantee acceptance into the Service when it
          launches, nor any specific pricing or features.
        </Paragraph>

        {/* ─── 5. ACCEPTABLE USE ─── */}
        <SectionTitle>5. Acceptable use</SectionTitle>
        <Paragraph>You agree not to:</Paragraph>
        <ul className="mt-2 list-disc pl-6">
          <ListItem>
            Submit false, misleading, or someone else&rsquo;s email address to the
            waitlist
          </ListItem>
          <ListItem>
            Attempt to access, probe, or breach the security of the Service
          </ListItem>
          <ListItem>
            Use automated tools to scrape, crawl, or harvest data from the Service
            beyond what robots.txt allows
          </ListItem>
          <ListItem>
            Interfere with the operation of the Service, send malicious traffic, or
            attempt denial-of-service attacks
          </ListItem>
          <ListItem>
            Impersonate Experio, its founders, or affiliated venues
          </ListItem>
          <ListItem>
            Use the Service for any unlawful purpose or in violation of these Terms
          </ListItem>
        </ul>
        <Paragraph>
          We reserve the right to suspend or terminate access for any user who
          violates this section.
        </Paragraph>

        {/* ─── 6. INTELLECTUAL PROPERTY ─── */}
        <SectionTitle>6. Intellectual property</SectionTitle>
        <Paragraph>
          The Service, including its design, content, code, trademarks, and the
          selection and arrangement of content, is the property of Experio and is
          protected by Danish, EU, and international intellectual property laws.
        </Paragraph>
        <Paragraph>
          You may view and interact with the Service for personal, non-commercial
          purposes. You may not copy, reproduce, distribute, modify, or create
          derivative works of any part of the Service without our prior written
          consent.
        </Paragraph>
        <Paragraph>
          Venue names, logos, and content visible through the Service belong to the
          respective venues. During the pre-launch phase, their inclusion does not
          imply formal partnership unless explicitly stated. Our venue partnerships
          will be described in the full membership terms presented at launch.
        </Paragraph>

        {/* ─── 7. DISCLAIMERS ─── */}
        <SectionTitle>7. Disclaimers</SectionTitle>
        <Paragraph>
          The Service is provided <strong>&ldquo;as is&rdquo; and &ldquo;as
          available&rdquo;</strong>, without warranties of any kind, express or
          implied, except to the extent prohibited by mandatory consumer protection
          law.
        </Paragraph>
        <Paragraph>
          We do not warrant that the Service will be uninterrupted, error-free, or
          completely secure. Information shown on the website (including launch
          dates, venue lists, and pricing) is subject to change before the product
          launches.
        </Paragraph>

        {/* ─── 8. LIMITATION OF LIABILITY ─── */}
        <SectionTitle>8. Limitation of liability</SectionTitle>
        <Paragraph>
          To the maximum extent permitted by applicable law, Experio and its
          co-founders shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising out of your use of the Service
          during the pre-launch phase.
        </Paragraph>
        <Paragraph>
          Nothing in these Terms limits any liability that cannot be excluded under
          mandatory law, including liability for damages caused intentionally or by
          gross negligence, and liability under Danish consumer protection law. For
          clarity, nothing in this section limits your statutory rights as a consumer
          under Danish law.
        </Paragraph>

        {/* ─── 9. TERMINATION ─── */}
        <SectionTitle>9. Termination</SectionTitle>
        <Paragraph>
          You may stop using the Service or remove yourself from the waitlist at any
          time by unsubscribing (see Section 4). We may suspend or terminate your
          access without notice if you breach these Terms, if we are required to do
          so by law, or if we discontinue the Service.
        </Paragraph>
        <Paragraph>
          If the Service is discontinued before launch, we will inform waitlist
          members by email and delete their personal data in accordance with our{" "}
          <a
            href="/legal/privacy"
            className="text-accent underline hover:no-underline"
          >
            Privacy Policy
          </a>
          .
        </Paragraph>

        {/* ─── 10. CHANGES TO THESE TERMS ─── */}
        <SectionTitle>10. Changes to these terms</SectionTitle>
        <Paragraph>
          We may update these Terms from time to time, particularly when we launch
          the membership product or expand into new services. The most current
          version is always available at{" "}
          <a href="/legal/terms" className="text-accent underline hover:no-underline">
            myexperio.com/legal/terms
          </a>
          . If we make material changes, we will notify waitlist members by email at
          least 14 days before the changes take effect.
        </Paragraph>

        {/* ─── 11. GOVERNING LAW ─── */}
        <SectionTitle>11. Governing law and disputes</SectionTitle>
        <Paragraph>
          These Terms are governed by Danish law. The Danish courts shall have
          exclusive jurisdiction to resolve any dispute arising out of or in
          connection with these Terms, unless mandatory consumer protection law
          gives you the right to bring proceedings in your country of residence.
        </Paragraph>
        <Paragraph>
          Before going to court, we encourage you to contact us first at{" "}
          <a
            href="mailto:members@myexperio.com"
            className="text-accent underline hover:no-underline"
          >
            members@myexperio.com
          </a>{" "}
          so we can try to resolve the matter amicably.
        </Paragraph>
        <Paragraph>
          If you are a consumer resident in the EU, you may also use the European
          Commission&rsquo;s online dispute resolution platform at{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:no-underline"
          >
            ec.europa.eu/consumers/odr
          </a>
          .
        </Paragraph>
        <Paragraph>
          You may also contact the Danish Consumer Complaints Board
          (<em>Forbrugerklagenævnet</em>) at{" "}
          <a
            href="https://www.forbrug.dk/klagemuligheder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:no-underline"
          >
            forbrug.dk/klagemuligheder
          </a>
          .
        </Paragraph>

        {/* ─── 12. CONTACT ─── */}
        <SectionTitle>12. Contact us</SectionTitle>
        <Paragraph>
          If you have questions about these Terms or the Service, please contact us
          at:
        </Paragraph>
        <Paragraph>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:members@myexperio.com"
            className="text-accent underline hover:no-underline"
          >
            members@myexperio.com
          </a>
        </Paragraph>
        <Paragraph>
          <strong>Address:</strong> Ved Hegnet 1, 3.tv, 2100 København Ø, Denmark
        </Paragraph>

        {/* Footer back link */}
        <div className="mt-16 border-t border-line pt-8">
          <a
            href="/"
            className="font-sans text-sm text-ink-muted underline hover:text-ink"
          >
            ← Back to Experio
          </a>
        </div>
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
