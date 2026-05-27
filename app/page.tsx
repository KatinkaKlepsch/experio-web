// Experio waitlist landing — English version (post-feedback rewrite).
// Source of truth for messaging: docs/Marketing strategy.html (in main Experio repo).
// Source of truth for visual: docs/CVI.md.
// Open business-model decisions: ARCHITECTURE.md sektion 2.1.
//
// Subscription-psychology principles applied throughout:
//   - "Included" framing (bundling perception, not "discount")
//   - Identity claim ("Part of Copenhagen's culture", not "join Copenhagen's culture")
//   - Decision-fatigue relief ("less planning, more being there")
//   - Connect to known concept (subscription for the city)
//   - Social reframing (default activity, not occasional treat)
//
// Sections in order:
//  1. Header
//  2. Hero
//  3. Three pillars (Editorial · Spontaneous · Social)
//  4. How it works (horizontal flow)
//  5. Categories
//  6. Pricing argument
//  7. Waitlist form (with 2 questions)
//  8. FAQ
//  9. Footer
//
// Personas section deleted per feedback 2026-05-10.

import WaitlistForm from "@/components/WaitlistForm";

// City Grid logo — first draft of CVI v1.0 (sektion 1.3).
function CityGrid({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Experio symbol"
      role="img"
    >
      <line x1="40" y1="6" x2="40" y2="74" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="40" x2="74" y2="40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="40" cy="40" r="12" fill="var(--color-accent)" />
      <circle cx="40" cy="40" r="5" fill="var(--color-bg)" />
      <circle cx="59" cy="24" r="6" fill="var(--color-accent)" opacity="0.85" />
      <circle cx="59" cy="24" r="2.5" fill="var(--color-bg)" />
    </svg>
  );
}

function Wordmark({ size = "text-2xl" }: { size?: string }) {
  return (
    <span className={`font-display font-black tracking-tight text-ink ${size}`}>
      Experi<span className="text-accent">o</span>
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-ink-muted">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      {/* ─── 1. HEADER ─── */}
      <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <CityGrid size={28} className="text-ink" />
            <Wordmark size="text-xl" />
          </a>
          <div className="flex items-center gap-4">
            {/* Instagram — @experioCPH */}
            <a
              href="https://www.instagram.com/experioCPH"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Experio on Instagram"
              className="text-ink transition-colors hover:text-accent"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" role="img" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="#waitlist"
              className="rounded-full bg-ink px-5 py-2 font-sans text-xs font-medium text-card transition-opacity hover:opacity-90"
            >
              Apply for access
            </a>
          </div>
        </div>
      </header>
      


      {/* ─── 2. HERO — anti-pattern headline ─── */}
      <section id="top" className="relative overflow-hidden px-6 pb-24 pt-20 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Copenhagen · Est. 2026</Eyebrow>
          <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight text-ink md:text-7xl">
            Unlock your city.<br />
            Your subscription to <span className="text-accent">Copenhagen culture</span>.
          </h1>
          <p className="mx-auto mt-8 max-w-xl font-display text-lg italic leading-relaxed text-ink-soft md:text-xl">
            Decide today. Show up. Enjoy.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3">
            <a
              href="#waitlist"
              className="rounded-full bg-ink px-8 py-3.5 font-sans font-medium text-card transition-transform hover:scale-[1.02]"
            >
              Apply for access
            </a>
          </div>

          {/* Discrete trust line — fills the authority gap left by removing founder voice. */}
          <p className="mt-8 font-sans text-[11px] uppercase tracking-[2px] text-ink-muted">
            Built in Copenhagen  ·  by event organisers
          </p>

          <div className="mt-16 flex justify-center">
            <CityGrid size={56} className="text-ink opacity-80" />
          </div>
        </div>
      </section>

      {/* ─── 3. THREE PILLARS ─── */}
      <section className="border-t border-line bg-card/60 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>What it is</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
              Like Spotify changed your music.<br />
              Experio changes your <span className="italic text-accent whitespace-nowrap">cultural lifestyle</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-ink-soft">
              One monthly subscription. The city's culture, ready to discover.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                eyebrow: "Editorial",
                title: "Easy to find\nwhat you want.",
                body:
                  "And easier to discover something new. We curate, you choose - filtering and top picks instead of endless scrolling.",
              },
              {
                eyebrow: "Spontaneous",
                title: "Today,\nnot two months out.",
                body:
                  "Decide on the way home from work. Book what's just around the corner.",
              },
              {
                eyebrow: "Social",
                title: "Where culture \nconnects.",
                body:
                  "Culture made social - beyond coffee and walks. Meet up at a museum, share a wine tasting, discover new ways to spend time together.",
              },
            ].map((pillar) => (
              <article
                key={pillar.eyebrow}
                className="rounded-2xl border border-line bg-card p-7 transition-shadow hover:shadow-sm"
              >
                <p className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-accent">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-3 whitespace-pre-line font-display text-2xl font-bold leading-tight text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-ink-soft">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. HOW IT WORKS — horizontal flow ─── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
              Three steps, and you&rsquo;re{" "}
              <span className="italic text-accent">at the event</span>.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-4">
            {[
              {
                num: "01",
                title: "See today's pick",
                body: "Filter by category, see the top picks for the day or this week. Curated to fit your taste. Invite friends directly through the app.",
              },
              {
                num: "02",
                title: "Book with one tap",
                body: "Pick your event and whether you bring someone. No checkout, no payment details - just tap and it’s yours.",
              },
              {
                num: "03",
                title: "Show up - scan and enjoy",
                body: "Scan at the door and you're in. Change of plans? Cancel up to 8 hours before - your spot reopens for someone else.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="flex flex-col rounded-2xl border border-line bg-card p-7"
              >
                <div className="font-display text-3xl font-black text-accent">{step.num}</div>
                <h3 className="mt-4 font-display text-xl font-bold leading-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. CATEGORIES ─── */}
      <section className="border-t border-line bg-card/60 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Eyebrow>What's included</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
              For<span className="italic text-accent"> finding </span> new places - and<span className="italic text-accent"> falling </span>back in love with old ones.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-center font-sans text-base leading-relaxed text-ink-soft">
              Categories for every taste. New venues announced until launch.
            </p>
          </div>
  
          {/* Feedback: Change icons to fit category*/}
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              { emoji: "🎷", label: "Concert" },
              { emoji: "🎭", label: "Theater" },
              { emoji: "🎤", label: "Stand-up" },
              { emoji: "💬", label: "Talks" },
              { emoji: "🎬", label: "Cinema" },
              { emoji: "🏛", label: "Museum" },
              { emoji: "🎨", label: "Creative" },
              { emoji: "🏃", label: "Sports" },
            ].map((cat) => (
              <div
                key={cat.label}
                className="flex items-center gap-4 rounded-2xl border border-line bg-bg px-5 py-5 transition-colors hover:border-accent"
              >
                <span className="text-3xl">{cat.emoji}</span>
                <span className="font-display text-lg font-bold text-ink">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. PRICING ARGUMENT — Godo-style receipt aesthetic adapted to Experio brand ─── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          {/* Heavy headline + receipt subtitle */}
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
              The numbers don't <span className="text-accent">lie</span>.
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-ink-soft md:text-lg">
             See for yourself.
            </p>
          </div>

          {/* Receipt card */}
          <div className="mt-14 overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
            {/* Gold accent stripe (Godo uses red — we use Experio gold) */}
            <div className="h-[6px] bg-accent" />

            <div className="p-8 md:p-10">
              {/* Header row — WITHOUT EXPERIO + date */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-xl font-bold leading-none tracking-tight text-ink md:text-2xl">
                    Without Experio
                  </h3>
                  <p className="mt-3 font-sans text-[10px] tracking-[1.5px] text-ink-muted">
                    Market ticket prices
                  </p>
                </div>
                <div className="text-right">
                </div>
              </div>

              {/* Top divider */}
              <div className="mt-6 h-px bg-line" />

              {/* Line items — receipt style */}
              <ul className="mt-6 space-y-4">
                {[
                  { week: "Week 1", item: "1× Cinema ticket", price: "120 kr" },
                  { week: "Week 2", item: "1× Concert ticket", price: "350 kr" },
                  { week: "Week 3", item: "1× Stand-up ticket", price: "130 kr" },
                  { week: "Week 4", item: "1× Theatre ticket", price: "425 kr" },
                ].map((row) => (
                  <li
                    key={row.item}
                    className="grid grid-cols-[80px_1fr_auto] items-baseline gap-4 font-sans text-sm"
                  >
                    <span className="text-[11px] tracking-wider text-ink-muted">
                      {row.week}
                    </span>
                    <span className="font-bold tracking-wide text-ink">
                      {row.item}
                    </span>
                    <span className="text-ink">{row.price}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom divider (heavy line, receipt-style) */}
              <div className="mt-7 h-[2px] bg-ink" />

              {/* Total — strikethrough */}
              <div className="mt-5 flex items-baseline justify-between">
                <span className="font-sans text-[11px] tracking-[1.5px] text-ink-muted">
                  Total value
                </span>
                <span className="font-display text-xl font-bold text-ink-muted line-through decoration-accent decoration-[3px] md:text-2xl">
                  1.025 kr
                </span>
              </div>

              {/* WITH EXPERIO highlight block */}
              <div className="mt-6 rounded-xl bg-bg px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-xl font-bold leading-none tracking-tight text-ink md:text-2xl">
                      With Experio
                    </p>
                    <p className="mt-2 font-sans text-[10px] tracking-[1.5px] text-ink-muted">
                      Plus access to everything else the city has to offer.
                    </p>
                  </div>
                  <p className="font-display text-5xl font-black leading-none text-ink md:text-6xl">
                    459 kr
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting lifestyle copy — preserved from earlier rewrite */}
          <p className="mx-auto mt-6 max-w-2xl text-center font-sans text-xs leading-relaxed text-ink-muted">
            Prices are averages from Copenhagen venues 2026, verified against actual partner
            pricing before launch.
          </p>
        </div>
      </section>

      {/* ─── 7. WAITLIST FORM ─── */}
      <section id="waitlist" className="border-t border-line bg-card/60 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>The waitlist is open</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
            Join the <span className="italic text-accent">waitlist</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed text-ink-soft">
            Just your email. Follow along while we build it.
          </p>

          {/* Social CTAs — Instagram, Facebook, LinkedIn */}
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="https://www.instagram.com/experioCPH"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Experio on Instagram"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 font-sans text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" role="img" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61589233517764"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Experio on Facebook"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 font-sans text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" role="img" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/myexperio/about/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Experio on LinkedIn"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 font-sans text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" role="img" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Loss aversion — non-pricing scarcity. First wave shapes the experience;
              later waves get the city someone else built. */}

          <WaitlistForm />
            <p className="mx-auto mt-4 max-w-md font-display text-sm italic text-ink">
            Copenhagen culture. Your access starts in September. 
          </p>
        </div>
      </section>

      {/* ─── 8. FAQ ─── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
              Questions you <span className="italic text-accent">probably</span> have.
            </h2>
          </div>

          <dl className="mt-12 space-y-3">
            {[
              {
                q: "When do you launch?",
                a: "The waitlist is open. We're opening to the first members in September. Waitlist members hear from us in August with the next steps.",
              },
              {
                q: "What does it cost?",
                a: "459 DKK / month. No commitment - cancel or pause anytime. The membership also lets you bring a guest to most events for a small per-guest fee.",
              },
              {
                q: "How many events can I book?",
                a: "Access to all types of events, with limits per category to keep the experience varied and sustainable for venues. The exact structure is being finalised with our venues and announced before launch.",
              },
              {
                q: "Can I book without having a subscription?",
                a: "No - Experio isn't a ticket marketplace. You subscribe to your cultural lifestyle. You can always add another ticket for your friend.",
              },
              {
                q: "Which venues are included?",
                a: "We're announcing venues continuously up to launch. Expect various venues across concert, cinema, stand-up, museum, wine, and creative - choose for taste.",
              },
              {
                q: "What if I can't make it to an event?",
                a: "Cancel free up to 8 hours before. Repeated no-shows may limit your booking frequency (we track, but we're fair).",
              },
              {
                q: "What if I don't use it enough in a month?",
                a: "If you don't use it enough, you can always cancel or pause your subscription at anytime.",
              },
              {
                q: "How do I book a ticket?",
                a: "Subscribe to experio, download the app. Choose your event and tap to book. Show up and scan the QR code at the venue. Enjoy!",
              }
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-line bg-card px-6 py-5 transition-colors open:border-accent/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-sans text-base font-medium text-ink">
                  {item.q}
                  <span className="ml-4 text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 font-sans text-sm leading-relaxed text-ink-soft">{item.a}</p>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── 9. FOOTER ─── */}
      <footer className="border-t border-line bg-bg px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <CityGrid size={28} className="text-ink" />
                <Wordmark size="text-xl" />
              </div>
              <p className="mt-3 font-sans text-xs uppercase tracking-[1.5px] text-ink-muted">
                Made in Copenhagen · Est. 2026
              </p>
            </div>
            <div className="flex flex-col gap-2 font-sans text-sm text-ink-soft sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              <a href="#waitlist" className="transition-colors hover:text-ink">
                Apply for access
              </a>
              <a href="/legal/privacy" className="transition-colors hover:text-ink">
                Privacy
              </a>
              <a href="/legal/terms" className="transition-colors hover:text-ink">
                Terms
              </a>
              <a
                href="mailto:members@myexperio.com"
                className="transition-colors hover:text-ink"
              >
                <span className="text-ink-muted">Members ·</span> members@myexperio.com
              </a>
              <a
                href="mailto:partnerships@myexperio.com"
                className="transition-colors hover:text-ink"
              >
                <span className="text-ink-muted">Partners ·</span> partnerships@myexperio.com
              </a>
            </div>
          </div>
          <p className="mt-10 font-sans text-xs text-ink-muted">
            © {new Date().getFullYear()} Experio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
