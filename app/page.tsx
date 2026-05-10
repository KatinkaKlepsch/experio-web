// Experio waitlist landing — first draft.
// Source of truth for messaging: docs/Marketing strategy.html (in main Experio repo).
// Source of truth for visual: docs/CVI.md.

import WaitlistForm from "@/components/WaitlistForm";
//
// Sections in order:
//  1. Header (sticky, lightweight)
//  2. Hero
//  3. Three pillars (Redaktionelt · Spontant · Socialt)
//  4. How it works (3 steps)
//  5. Categories
//  6. Pricing argument (the "killer slide")
//  7. Who it's for (3 personas)
//  8. Waitlist form (disabled until Phase 5 wires Supabase + Resend)
//  9. FAQ
//  10. Footer

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
      {/* Cross — stroke uses currentColor so it adapts to context */}
      <line x1="40" y1="6" x2="40" y2="74" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="40" x2="74" y2="40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Big ring — gold donut, inner cut out matches surrounding bg */}
      <circle cx="40" cy="40" r="12" fill="var(--color-accent)" />
      <circle cx="40" cy="40" r="5" fill="var(--color-bg)" />
      {/* Discovery dot — top right, asymmetric, slightly translucent */}
      <circle cx="59" cy="24" r="6" fill="var(--color-accent)" opacity="0.85" />
      <circle cx="59" cy="24" r="2.5" fill="var(--color-bg)" />
    </svg>
  );
}

// Wordmark with the gold "o" — used in header and footer.
function Wordmark({ size = "text-2xl" }: { size?: string }) {
  return (
    <span className={`font-display font-black tracking-tight text-ink ${size}`}>
      Experi<span className="text-accent">o</span>
    </span>
  );
}

// Eyebrow — small uppercase label that sits above section titles.
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
            Ansøg om adgang
          </a>
        </div>
      </header>

      {/* ─── 2. HERO ─── */}
      <section id="top" className="relative overflow-hidden px-6 pb-20 pt-20 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>København · Est. 2026 · Kommer september</Eyebrow>
          <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight text-ink md:text-7xl">
            Bliv en del af<br />
            Københavns <span className="italic text-accent">kultur</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl font-display text-lg italic leading-relaxed text-ink-soft md:text-xl">
            Ét månedligt medlemskab. Koncerter, biograf, stand-up, museer, vinsmagninger og
            workshops — uden binding.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="rounded-full bg-ink px-8 py-3.5 font-sans font-medium text-card transition-transform hover:scale-[1.02]"
            >
              Ansøg om adgang
            </a>
            <span className="font-sans text-xs text-ink-muted">
              Soft launch september 2026 · Begrænsede pladser
            </span>
          </div>

          {/* Decorative gold dot reminiscent of city-grid discovery dot */}
          <div className="mt-20 flex justify-center">
            <CityGrid size={56} className="text-ink opacity-80" />
          </div>
        </div>
      </section>

      {/* ─── 3. THREE PILLARS (CVI brand promise) ─── */}
      <section className="border-t border-line bg-card/60 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Hvad Experio er</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              Et <span className="italic text-accent">redaktionelt</span> medlemskab —{" "}
              ikke et billet-marked.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                eyebrow: "Redaktionelt",
                title: "Vi vælger.\nDu oplever.",
                body:
                  "Færre, bedre events. Vi kuraterer ugentligt sammen med byens venues, så du ikke skal scrolle gennem 50 muligheder.",
              },
              {
                eyebrow: "Spontant",
                title: "Tonight,\nikke om to måneder.",
                body:
                  "Beslut på vejen hjem fra arbejde. Book det der ligger lige rundt om hjørnet. Ingen lange planlægningsmøder med dig selv.",
              },
              {
                eyebrow: "Socialt",
                title: "Tag en ven\nmed gratis.",
                body:
                  "Solo-medlemskabet inkluderer altid +1. Din ven behøver ikke at tilmelde sig — du booker for jer begge.",
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
            <Eyebrow>Sådan virker det</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              Tre skridt.<br />
              <span className="italic text-accent">Resten</span> er bare oplevelser.
            </h2>
          </div>

          <ol className="mt-14 space-y-6">
            {[
              {
                num: "01",
                title: "Browse — i appen",
                body: "Et håndplukket udvalg af kultur i København denne uge. Filtrer efter dato eller kategori. Se hvor der er pladser.",
              },
              {
                num: "02",
                title: "Book — med ét tryk",
                body: "Vælg event og om du tager nogen med. Du får en QR-kode i appen og en bekræftelse på mail. Ingen kreditkort hver gang.",
              },
              {
                num: "03",
                title: "Vis op — med din QR",
                body: "Scan ved indgangen og du er inde. Hvis du fortryder kan du afbestille indtil 8 timer før — så åbner pladsen for andre.",
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
            <Eyebrow>Hvad er inkluderet</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              Seks kategorier.<br />
              <span className="italic text-accent">Tyve+</span> kuraterede venues.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {[
              { emoji: "🎷", label: "Koncert" },
              { emoji: "🎬", label: "Biograf" },
              { emoji: "🎤", label: "Stand-up" },
              { emoji: "🏛", label: "Museum" },
              { emoji: "🍷", label: "Vinsmagning" },
              { emoji: "🎨", label: "Kreativt" },
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
            Nye venues annonceres ugentligt frem til launch.
          </p>
        </div>
      </section>

      {/* ─── 6. PRICING ARGUMENT — the killer slide ─── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <Eyebrow>Regnestykket</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              Fire events koster typisk <span className="italic text-accent">1.025 kr.</span><br />
              Et abonnement koster <span className="italic text-accent">459 kr.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-sans text-base text-ink-soft">
              Og du er aldrig begrænset til fire.
            </p>
          </div>

          {/* Price comparison card */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-card">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { event: "Biograf", price: "120" },
                { event: "Stand-up", price: "130" },
                { event: "Koncert", price: "350" },
                { event: "Teater", price: "425" },
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
                  <p className="font-sans text-xs text-ink-muted">kr. pr. billet</p>
                </div>
              ))}
            </div>

            <div className="border-t border-line bg-bg-soft/50 px-6 py-5 text-center">
              <p className="font-sans text-xs uppercase tracking-wider text-ink-muted">
                Fire events enkeltvis
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-ink-muted line-through">
                1.025 kr.
              </p>
            </div>

            <div className="bg-ink px-6 py-8 text-center">
              <p className="font-sans text-xs uppercase tracking-wider text-accent-soft">
                Experio · Solo
              </p>
              <p className="mt-2 font-display text-5xl font-black text-accent">459 kr.</p>
              <p className="mt-2 font-sans text-sm text-card/70">
                pr. måned · ingen binding · +1 gæst inkluderet
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center font-sans text-sm leading-relaxed text-ink-soft">
            Priser er gennemsnit fra københavnske venues 2026. Verificeres mod faktiske
            partner-priser inden launch. Kategorier som museum og kreativt har endnu lavere
            enkeltpriser — men også mere uforudsigelig adgang.
          </p>
        </div>
      </section>

      {/* ─── 7. WHO IT'S FOR ─── */}
      <section className="border-t border-line bg-card/60 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Eyebrow>Hvem er det for</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              Til dig der gerne vil <span className="italic text-accent">opleve</span> mere{" "}
              — uden at planlægge mere.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                num: "01",
                name: "Den unge professionelle",
                age: "25–40",
                body:
                  "Har råd. Har for travlt til at researche. Vil have en kulturel rytme uden at det bliver et projekt.",
              },
              {
                num: "02",
                name: "Den nye københavner",
                age: "Expat",
                body:
                  "Lige flyttet til byen. Vil ind i scenen, men kender ingen og ved ikke hvor man begynder. Experio er din kuratorise guide.",
              },
              {
                num: "03",
                name: "Den modne kulturentusiast",
                age: "50+",
                body:
                  "Mere fritid, disponibel indkomst. Søger oplevelser uden at regne på enkelt-billetter eller scrolle billet-platforme.",
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
          <Eyebrow>Ansøg om adgang</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
            Bliv en del af de <span className="italic text-accent">første</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed text-ink-soft">
            Vi åbner stille i september 2026 med et begrænset antal medlemmer. Skriv dig på
            ventelisten — så hører du fra os først.
          </p>

          {/* Form — wires to Supabase Edge Function `waitlist-signup` which
              inserts into waitlist_signups and sends a Resend welcome email. */}
          <WaitlistForm />
        </div>
      </section>

      {/* ─── 9. FAQ ─── */}
      <section className="border-t border-line bg-card/60 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              Spørgsmål du <span className="italic text-accent">sikkert</span> har.
            </h2>
          </div>

          <dl className="mt-12 space-y-3">
            {[
              {
                q: "Hvornår launcher I?",
                a: "Soft launch september 2026 for de første ventelistemedlemmer. Full launch november 2026.",
              },
              {
                q: "Hvad koster Solo-abonnementet?",
                a: "459 kr./md. Ingen binding — opsig hvornår du vil. Solo inkluderer +1 gæst pr. event uden ekstra fee.",
              },
              {
                q: "Hvor mange events kan jeg booke?",
                a: "Der er ingen hård grænse. Vi måler dog overforbrug og vil i fremtiden vejlede heavy users mod mindre populære events for at holde tilbuddet bæredygtigt.",
              },
              {
                q: "Kan jeg booke uden at være medlem?",
                a: "Nej — Experio er ikke et billet-marked. Det handler om at være en del af en kuraterende ramme, ikke at købe enkeltbilletter.",
              },
              {
                q: "Hvilke venues er med?",
                a: "Vi annoncerer venues løbende frem til launch. Mål: 20+ aktive partnere ved soft launch september. Co-creation venues annonceres først.",
              },
              {
                q: "Hvad sker der hvis jeg ikke kan komme?",
                a: "Du kan afbestille gratis indtil 8 timer før event. Så åbner pladsen for waitlisten. Gentagne no-shows kan begrænse din booking-frekvens (vi tracker, men er fair).",
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
                Made in København · Est. 2026
              </p>
            </div>
            <div className="flex flex-col gap-2 font-sans text-sm text-ink-soft sm:flex-row sm:gap-6">
              <a href="#waitlist" className="transition-colors hover:text-ink">
                Ansøg om adgang
              </a>
              <a href="/legal/privacy" className="transition-colors hover:text-ink">
                Privatlivspolitik
              </a>
              <a href="/legal/terms" className="transition-colors hover:text-ink">
                Vilkår
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
            © {new Date().getFullYear()} Experio. Alle rettigheder forbeholdes.
          </p>
        </div>
      </footer>
    </div>
  );
}
