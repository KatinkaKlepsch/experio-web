// Experio waitlist landing — English version.
// Source of truth for messaging: docs/Marketing strategy.html (in main Experio repo).
// Source of truth for visual: docs/CVI.md.
// Open business-model decisions reflected here: ARCHITECTURE.md sektion 2.1.
//
// Sections in order:
//  1. Header (sticky, lightweight)
//  2. Hero
//  3. Three pillars (Editorial · Spontaneous · Social)
//  4. How it works (3 steps)
//  5. Categories
//  6. Pricing argument (the "killer slide")
//  7. Who it's for (3 personas)
//  8. Waitlist form (Supabase + Resend)
//  9. FAQ
//  10. Footer

import WaitlistForm from "@/components/WaitlistForm";

// --------------------------------------------------------------------------- //
// CITY GRID SYMBOL — first draft of CVI v1.0 logo (sektion 1.3, status: TODO)
// Spec: 80×80 viewbox, cross stroke 1.5px round caps, big ring r=12 (inner r=5),
// discovery dot at 59,24 r=6 (inner r=2.5). Rings break the lines visually.
// --------------------------------------------------------------------------- //
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

// --------------------------------------------------------------------------- //
// PAGE
// --------------------------------------------------------------------------- //
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
          <a
            href="#waitlist"
            className="rounded-full bg-ink px-5 py-2 font-sans text-xs font-medium text-card transition-opacity hover:opacity-90"
          >
            Apply for access
          </a>
        </div>
      </header>

      {/* ─── 2. HERO ─── */}
      <section id="top" className="relative overflow-hidden px-6 pb-20 pt-20 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Copenhagen · Est. 2026 · Coming September</Eyebrow>
          <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight text-ink md:text-7xl">
            Become part of<br />
            Copenhagen&rsquo;s <span className="italic text-accent">culture</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl font-display text-lg italic leading-relaxed text-ink-soft md:text-xl">
            One monthly membership. Concerts, cinema, stand-up, museums, wine tastings,
            and workshops — without commitment.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="rounded-full bg-ink px-8 py-3.5 font-sans font-medium text-card transition-transform hover:scale-[1.02]"
            >
              Apply for access
            </a>
            <span className="font-sans text-xs text-ink-muted">
              Soft launch September 2026 · Limited spots
            </span>
          </div>

          <div className="mt-20 flex justify-center">
            <CityGrid size={56} className="text-ink opacity-80" />
          </div>
        </div>
      </section>

      {/* ─── 3. THREE PILLARS ─── */}
      <section className="border-t border-line bg-card/60 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>What Experio is</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              An <span className="italic text-accent">editorial</span> membership —{" "}
              not a ticket marketplace.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                eyebrow: "Editorial",
                title: "We curate.\nYou experience.",
                body:
                  "Fewer, better events. We curate weekly together with the city's venues, so you don't have to scroll through 50 options.",
              },
              {
                eyebrow: "Spontaneous",
                title: "Tonight,\nnot two months out.",
                body:
                  "Decide on the way home from work. Book what's just around the corner. No long planning meetings with yourself.",
              },
              {
                eyebrow: "Social",
                title: "Bring a friend\nalong.",
                body:
                  "Solo lets you bring a +1 to most events. Your guest doesn't need to subscribe — you book for both of you.",
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

      {/* ─── 4. HOW IT WORKS ─── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              Three steps.<br />
              <span className="italic text-accent">The rest</span> is just experiences.
            </h2>
          </div>

          <ol className="mt-14 space-y-6">
            {[
              {
                num: "01",
                title: "Browse — in the app",
                body: "A handpicked selection of culture in Copenhagen this week. Filter by date or category. See what's still available.",
              },
              {
                num: "02",
                title: "Book — with one tap",
                body: "Pick your event and whether you bring someone. You get a QR code in the app and a confirmation by email. No card details every time.",
              },
              {
                num: "03",
                title: "Show up — with your QR",
                body: "Scan at the door and you're in. Change of plans? Cancel up to 8 hours before — your spot reopens for someone else.",
              },
            ].map((step) => (
              <li key={step.num} className="flex gap-6 rounded-2xl border border-line bg-card p-6 md:p-8">
                <div className="font-display text-3xl font-black text-accent md:text-4xl">{step.num}</div>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft md:text-base">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── 5. CATEGORIES ─── */}
      <section className="border-t border-line bg-card/60 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Eyebrow>What's included</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              Six categories.<br />
              <span className="italic text-accent">Twenty+</span> curated venues.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {[
              { emoji: "🎷", label: "Concert" },
              { emoji: "🎬", label: "Cinema" },
              { emoji: "🎤", label: "Stand-up" },
              { emoji: "🏛", label: "Museum" },
              { emoji: "🍷", label: "Wine tasting" },
              { emoji: "🎨", label: "Creative" },
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

          <p className="mt-10 text-center font-sans text-sm text-ink-muted">
            New venues announced weekly until launch.
          </p>
        </div>
      </section>

      {/* ─── 6. PRICING ARGUMENT ─── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <Eyebrow>The math</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              Four events typically cost <span className="italic text-accent">1,025 DKK</span>.<br />
              A membership costs <span className="italic text-accent">459 DKK</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-sans text-base text-ink-soft">
              And you get to explore across categories — not just stick to one.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-card">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { event: "Cinema", price: "120" },
                { event: "Stand-up", price: "130" },
                { event: "Concert", price: "350" },
                { event: "Theater", price: "425" },
              ].map((p, i, arr) => (
                <div
                  key={p.event}
                  className={`p-6 text-center ${
                    i < arr.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
                  } ${i < 2 ? "border-r" : ""} ${i < 2 ? "md:border-b-0" : ""} border-line`}
                >
                  <p className="font-sans text-xs uppercase tracking-wider text-ink-muted">
                    {p.event}
                  </p>
                  <p className="mt-2 font-display text-3xl font-bold text-ink">{p.price}</p>
                  <p className="font-sans text-xs text-ink-muted">DKK / ticket</p>
                </div>
              ))}
            </div>

            <div className="border-t border-line bg-bg-soft/50 px-6 py-5 text-center">
              <p className="font-sans text-xs uppercase tracking-wider text-ink-muted">
                Four events individually
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-ink-muted line-through">
                1,025 DKK
              </p>
            </div>

            <div className="bg-ink px-6 py-8 text-center">
              <p className="font-sans text-xs uppercase tracking-wider text-accent-soft">
                Experio · Solo
              </p>
              <p className="mt-2 font-display text-5xl font-black text-accent">459 DKK</p>
              <p className="mt-2 font-sans text-sm text-card/70">
                per month · no commitment · with a guest option
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center font-sans text-sm leading-relaxed text-ink-soft">
            Prices are averages from Copenhagen venues 2026. Verified against actual partner
            pricing before launch. Categories like museum and creative often have lower
            individual ticket prices — but less predictable access.
          </p>
        </div>
      </section>

      {/* ─── 7. WHO IT'S FOR ─── */}
      <section className="border-t border-line bg-card/60 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Eyebrow>Who it's for</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              For you who want to <span className="italic text-accent">experience</span> more{" "}
              — without planning more.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                num: "01",
                name: "The young professional",
                age: "25–40",
                body:
                  "Has the means. Too busy to research. Wants a cultural rhythm without it becoming a project.",
              },
              {
                num: "02",
                name: "The new Copenhagener",
                age: "Expat",
                body:
                  "Just moved to the city. Wants in to the scene but doesn't know anyone or where to start. Experio is your curatorial guide.",
              },
              {
                num: "03",
                name: "The seasoned culture fan",
                age: "50+",
                body:
                  "More free time, disposable income. Looking for experiences without doing the math on individual tickets or scrolling ticket platforms.",
              },
            ].map((p) => (
              <div
                key={p.num}
                className="flex flex-col rounded-2xl border border-line bg-bg p-7"
              >
                <div className="font-display text-2xl font-black text-accent">{p.num}</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <h3 className="font-display text-xl font-bold text-ink">{p.name}</h3>
                  <span className="font-sans text-xs uppercase tracking-wider text-ink-muted">
                    {p.age}
                  </span>
                </div>
                <p className="mt-4 font-sans text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. WAITLIST FORM ─── */}
      <section id="waitlist" className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Apply for access</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
            Be one of the <span className="italic text-accent">first</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed text-ink-soft">
            We're opening quietly in September 2026 with a limited number of members.
            Add yourself to the waitlist — and you'll hear from us first.
          </p>

          <WaitlistForm />
        </div>
      </section>

      {/* ─── 9. FAQ ─── */}
      <section className="border-t border-line bg-card/60 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              Questions you <span className="italic text-accent">probably</span> have.
            </h2>
          </div>

          <dl className="mt-12 space-y-3">
            {[
              {
                q: "When do you launch?",
                a: "Soft launch September 2026 for the first waitlist members. Full public launch November 2026.",
              },
              {
                q: "What does Solo cost?",
                a: "459 DKK / month. No commitment — cancel anytime. Solo also lets you bring a guest to most events for a small per-guest fee. Final guest pricing is being set with our partner venues and will be shared with waitlist members first.",
              },
              {
                q: "How many events can I book?",
                a: "Solo gives you a generous monthly allowance, with limits per category to keep the experience varied and sustainable for venues. The exact structure is being finalised with our co-creation venues and announced before launch.",
              },
              {
                q: "Can I book without being a member?",
                a: "No — Experio isn't a ticket marketplace. It's about being part of a curated frame, not buying single tickets.",
              },
              {
                q: "Which venues are included?",
                a: "We're announcing venues continuously up to launch. Goal: 20+ active partners by soft launch in September. Co-creation venues are announced first.",
              },
              {
                q: "What if I can't make it to an event?",
                a: "Cancel free up to 8 hours before. Your spot opens for the waitlist. Repeated no-shows may limit your booking frequency (we track, but we're fair).",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-line bg-bg px-6 py-5 transition-colors open:border-accent/40"
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

      {/* ─── 10. FOOTER ─── */}
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
            <div className="flex flex-col gap-2 font-sans text-sm text-ink-soft sm:flex-row sm:gap-6">
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
                href="mailto:hello@myexperio.com"
                className="transition-colors hover:text-ink"
              >
                hello@myexperio.com
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
