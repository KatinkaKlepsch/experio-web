// Preview-page — 3 forskellige layouts til "The Math"-sektionen.
// Åbn på http://localhost:3000/math-versions for at sammenligne.
// Vælg én, fortæl Claude hvilken (A / B / C), så swappes den ind i app/page.tsx.

export default function MathVersions() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      {/* ─── PAGE HEADER ─── */}
      <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="font-display text-xl font-black tracking-tight text-ink">
            Experi<span className="text-accent">o</span> — Math layout preview
          </p>
          <a
            href="/"
            className="font-sans text-xs text-ink-muted underline hover:text-ink"
          >
            ← tilbage til forsiden
          </a>
        </div>
      </header>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* OPTION A — Receipt (current live version, for reference)    */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section className="border-b-2 border-dashed border-ink/15 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 rounded-full bg-ink px-5 py-2 text-center font-sans text-xs font-medium uppercase tracking-[2px] text-card md:inline-block">
            Option A · Receipt (current)
          </div>

          <div className="text-center">
            <h2 className="font-display text-5xl font-black uppercase leading-none tracking-tight text-ink md:text-7xl">
              The math
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-ink-soft md:text-lg">
              One month. Normal prices. Then the Experio price.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
            <div className="h-[6px] bg-accent" />
            <div className="p-8 md:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl font-black uppercase leading-none tracking-tight text-ink md:text-3xl">
                    Without Experio
                  </h3>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[1.5px] text-ink-muted">
                    Standard ticket prices
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[10px] uppercase tracking-[1.5px] text-ink-muted">
                    Date
                  </p>
                  <p className="mt-1 font-mono text-sm text-ink">14/05/2026</p>
                </div>
              </div>
              <div className="mt-6 h-px bg-line" />
              <ul className="mt-6 space-y-4">
                {[
                  { week: "Week 1", item: "1× Cinema ticket", price: "120 kr" },
                  { week: "Week 2", item: "1× Concert ticket", price: "350 kr" },
                  { week: "Week 3", item: "1× Stand-up ticket", price: "130 kr" },
                  { week: "Week 4", item: "1× Theatre ticket", price: "425 kr" },
                ].map((row) => (
                  <li
                    key={row.item}
                    className="grid grid-cols-[80px_1fr_auto] items-baseline gap-4 font-mono text-sm"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-ink-muted">
                      {row.week}
                    </span>
                    <span className="font-bold uppercase tracking-wide text-ink">
                      {row.item}
                    </span>
                    <span className="text-ink">{row.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 h-[2px] bg-ink" />
              <div className="mt-5 flex items-baseline justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-ink-muted">
                  Total market value
                </span>
                <span className="font-display text-2xl font-black text-ink-muted line-through decoration-accent decoration-[3px] md:text-3xl">
                  1.025 kr
                </span>
              </div>
              <div className="mt-6 rounded-xl bg-bg px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl font-black uppercase leading-none tracking-tight text-ink md:text-3xl">
                      With Experio
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[1.5px] text-ink-muted">
                      Plus unlimited access to Copenhagen culture
                    </p>
                  </div>
                  <p className="font-display text-5xl font-black leading-none text-ink md:text-6xl">
                    459 kr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* OPTION B — Side-by-side comparison cards                    */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section className="border-b-2 border-dashed border-ink/15 bg-card/40 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 rounded-full bg-ink px-5 py-2 text-center font-sans text-xs font-medium uppercase tracking-[2px] text-card md:inline-block">
            Option B · Side-by-side comparison
          </div>

          <div className="text-center">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-ink-muted">
              The math
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight text-ink md:text-6xl">
              One month. <span className="italic text-accent">Two paths.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
            {/* LEFT: Without Experio */}
            <div className="relative rounded-3xl border border-line bg-card p-8">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[2px] text-ink-muted">
                Without Experio
              </p>
              <p className="mt-2 font-display text-2xl font-bold text-ink">
                Four nights, four tickets
              </p>
              <ul className="mt-6 space-y-3 font-sans text-sm">
                {[
                  { item: "Cinema", price: "120 kr" },
                  { item: "Concert", price: "350 kr" },
                  { item: "Stand-up", price: "130 kr" },
                  { item: "Theatre", price: "425 kr" },
                ].map((row) => (
                  <li
                    key={row.item}
                    className="flex items-baseline justify-between border-b border-line/60 pb-2"
                  >
                    <span className="text-ink-soft">{row.item}</span>
                    <span className="font-display font-bold text-ink">{row.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-baseline justify-between border-t-2 border-ink pt-4">
                <span className="font-sans text-xs uppercase tracking-wider text-ink-muted">
                  Total
                </span>
                <span className="font-display text-3xl font-black text-ink line-through decoration-accent decoration-[3px]">
                  1.025 kr
                </span>
              </div>
              <p className="mt-3 text-right font-sans text-xs italic text-ink-muted">
                per month, if you book individually
              </p>
            </div>

            {/* MIDDLE: vs */}
            <div className="flex flex-row items-center justify-center gap-2 md:flex-col">
              <div className="h-px w-12 bg-ink/30 md:h-12 md:w-px" />
              <p className="font-display text-2xl font-black italic text-accent">vs</p>
              <div className="h-px w-12 bg-ink/30 md:h-12 md:w-px" />
            </div>

            {/* RIGHT: With Experio — gold-accent dark card */}
            <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-card">
              <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
              <p className="font-sans text-[10px] font-medium uppercase tracking-[2px] text-accent">
                With Experio
              </p>
              <p className="mt-2 font-display text-2xl font-bold">
                One subscription, everything in
              </p>
              <div className="mt-10 text-center">
                <p className="font-display text-7xl font-black leading-none text-accent md:text-8xl">
                  459 kr
                </p>
                <p className="mt-3 font-sans text-xs uppercase tracking-wider text-card/60">
                  per month · cancel anytime
                </p>
              </div>
              <ul className="mt-10 space-y-2 font-sans text-sm text-card/85">
                <li className="flex items-baseline gap-2">
                  <span className="text-accent">✓</span> All categories included
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-accent">✓</span> Bring a guest
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-accent">✓</span> No commitment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* OPTION C — Big-number minimalist (poster)                   */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section className="border-b-2 border-dashed border-ink/15 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 rounded-full bg-ink px-5 py-2 text-center font-sans text-xs font-medium uppercase tracking-[2px] text-card md:inline-block">
            Option C · Big-number minimalist
          </div>

          <div className="text-center">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-ink-muted">
              The math · one month in Copenhagen
            </p>

            {/* Old price strikethrough */}
            <p className="mt-10 font-display text-3xl font-bold text-ink-muted line-through decoration-accent decoration-[4px] md:text-5xl">
              1.025 kr
            </p>
            <p className="mt-3 font-sans text-sm text-ink-muted">
              Four nights, four tickets, four checkouts.
            </p>

            {/* Divider */}
            <p className="mt-12 font-display text-2xl font-bold italic text-ink-soft md:text-3xl">
              or
            </p>

            {/* New price — massive */}
            <p className="mt-10 font-display text-[120px] font-black leading-[0.9] tracking-tight text-ink md:text-[200px]">
              459<span className="text-accent">.</span>
            </p>
            <p className="mt-2 font-sans text-base uppercase tracking-[4px] text-ink md:text-lg">
              kroner per month
            </p>

            {/* Description */}
            <p className="mx-auto mt-12 max-w-md font-display text-lg italic leading-relaxed text-ink-soft md:text-xl">
              Cinema. Concerts. Stand-up. Theatre. Museums.
              <br />
              <span className="not-italic font-bold text-ink">Unlimited access.</span>
            </p>

            {/* Small fine print */}
            <p className="mt-10 font-sans text-xs uppercase tracking-[2px] text-ink-muted">
              cancel anytime · no fine print · just Copenhagen
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* OPTION D — Bar chart comparison (visual ratio)              */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section className="bg-card/40 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 rounded-full bg-ink px-5 py-2 text-center font-sans text-xs font-medium uppercase tracking-[2px] text-card md:inline-block">
            Option D · Bar chart visual
          </div>

          <div className="text-center">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-ink-muted">
              The math
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight text-ink md:text-6xl">
              Less than half the price.
              <br />
              <span className="italic text-accent">All of the city.</span>
            </h2>
          </div>

          {/* Bars */}
          <div className="mt-14 space-y-8">
            {/* Without Experio bar */}
            <div>
              <div className="mb-3 flex items-baseline justify-between">
                <p className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-ink-muted">
                  Without Experio · 4 tickets
                </p>
                <p className="font-display text-2xl font-black text-ink line-through decoration-accent decoration-[3px] md:text-3xl">
                  1.025 kr
                </p>
              </div>
              <div className="h-12 w-full overflow-hidden rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-ink"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            {/* With Experio bar (proportional — 459/1025 ≈ 45%) */}
            <div>
              <div className="mb-3 flex items-baseline justify-between">
                <p className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-accent">
                  With Experio · unlimited
                </p>
                <p className="font-display text-2xl font-black text-ink md:text-3xl">
                  459 kr
                </p>
              </div>
              <div className="h-12 w-full overflow-hidden rounded-full bg-line">
                <div
                  className="flex h-full items-center justify-end rounded-full bg-accent pr-4"
                  style={{ width: "44.78%" }}
                />
              </div>
            </div>
          </div>

          {/* Savings callout */}
          <div className="mt-10 rounded-2xl border border-accent/40 bg-bg p-6 text-center">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-ink-muted">
              You save
            </p>
            <p className="mt-2 font-display text-5xl font-black text-accent md:text-6xl">
              566 kr / month
            </p>
            <p className="mt-3 font-sans text-sm text-ink-soft">
              And unlock everything else included — cinema, museums, stand-up, theatre.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER — choose CTA ─── */}
      <footer className="bg-ink px-6 py-16 text-card">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl font-bold md:text-3xl">
            Which one feels right?
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-card/70">
            Sig <span className="font-bold text-accent">A · B · C · D</span> til Claude,
            så swappes den valgte ind i hovedsiden{" "}
            <code className="rounded bg-card/10 px-2 py-1 font-mono text-xs">
              app/page.tsx
            </code>{" "}
            sektion 6 (Pricing argument).
          </p>
        </div>
      </footer>
    </div>
  );
}
