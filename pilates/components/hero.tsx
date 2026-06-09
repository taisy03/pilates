export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src="/images/studio-interior.png"
        alt="The Pilataise studio interior with walnut reformers, arched mirrors, and warm brass lighting"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-background" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28">
        <p className="mb-6 text-xs font-light uppercase tracking-[0.4em] text-gold">
          Private Pilates Club
        </p>
        <h1 className="max-w-2xl font-serif text-6xl font-light leading-[0.95] text-cream text-balance sm:text-7xl md:text-8xl">
          Private Reformer Club
        </h1>
        <p className="mt-8 max-w-md text-base font-light leading-relaxed text-cream/80">
          An invitation-only sanctuary where movement becomes ritual. Where
          women who lead come to reset, refine, and rise.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#membership"
            className="border border-gold bg-gold px-9 py-4 text-center text-xs font-light uppercase tracking-[0.25em] text-background transition-colors hover:bg-transparent hover:text-gold"
          >
            Request Invitation
          </a>
          <a
            href="#studio"
            className="border border-cream/30 px-9 py-4 text-center text-xs font-light uppercase tracking-[0.25em] text-cream transition-colors hover:border-cream"
          >
            Explore The Studio
          </a>
        </div>
      </div>


    </section>
  )
}
