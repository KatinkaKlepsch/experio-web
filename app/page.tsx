export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        <p className="text-center font-sans text-[11px] uppercase tracking-[2px] text-ink-muted">
          København · Est. 2026
        </p>

        <h1 className="mt-6 text-center font-display text-7xl font-black tracking-tight text-ink">
          Experi<span className="text-accent">o</span>
        </h1>

        <p className="mt-8 text-center font-display text-2xl italic leading-relaxed text-ink-soft">
          Et kurateret kulturelt abonnement.
        </p>

        <p className="mx-auto mt-6 max-w-lg text-center font-sans text-base leading-relaxed text-ink-soft">
          Book koncerter, biograf, stand-up, museer, vinsmagninger og workshops i København —
          spontant, socialt og uden binding.
        </p>

        <div className="mt-12 flex justify-center">
          <button
            disabled
            className="cursor-not-allowed rounded-full bg-ink/40 px-8 py-3 font-sans font-medium text-card"
          >
            Tilmeld waitlist (kommer snart)
          </button>
        </div>

        <p className="mt-16 text-center font-sans text-xs text-ink-muted">
          Lanceres første halvår 2027 · Pre-launch i efteråret 2026
        </p>
      </div>
    </main>
  );
}