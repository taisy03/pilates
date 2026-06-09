export function Philosophy() {
  return (
    <section id="philosophy" className="bg-background py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-6 text-xs font-light uppercase tracking-[0.4em] text-gold">
          Our Philosophy
        </p>
        <h2 className="font-serif text-4xl font-light leading-tight text-cream text-balance sm:text-5xl">
          Movement, elevated to an art of living
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-cream/75">
          Pilataise is not a gym. It is a private members&apos; club built
          around the discipline of the reformer — walnut and brass, limestone
          and warm light. Every detail is considered so that your only focus is
          the work, the breath, and the quiet pursuit of your best form.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-gold/15 sm:grid-cols-3">
          {[
            { stat: "1:3", label: "Maximum class ratio" },
            { stat: "60", label: "Founding memberships" },
            { stat: "7", label: "Days a week, by appointment" },
          ].map((item) => (
            <div key={item.label} className="bg-card px-8 py-12">
              <p className="font-serif text-5xl font-light text-gold">
                {item.stat}
              </p>
              <p className="mt-3 text-[0.7rem] font-light uppercase tracking-[0.22em] text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
