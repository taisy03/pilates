const offerings = [
  {
    title: "The Reformer Ritual",
    text: "Private and semi-private reformer sessions on bespoke walnut apparatus, guided one-on-one or in intimate trios.",
  },
  {
    title: "Mat & Movement",
    text: "Classical mat work refined for control, alignment, and the long, lean lines our members are known for.",
  },
  {
    title: "Restore & Recover",
    text: "Breath, mobility, and recovery sessions in our limestone-walled sanctuary to reset the nervous system.",
  },
]

export function Studio() {
  return (
    <section id="studio" className="bg-card py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-xs font-light uppercase tracking-[0.4em] text-gold">
              The Studio
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight text-cream text-balance sm:text-5xl">
              A sanctuary behind the arch
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-cream/75">
              Inspired by Mayfair members&apos; clubs and the calm of an Aman
              retreat — warm limestone walls, charcoal ceilings, brushed brass,
              and oxblood accents. Arched mirrors draw the eye upward and the
              breath inward.
            </p>

            <div className="mt-10 divide-y divide-gold/15 border-y border-gold/15">
              {offerings.map((o) => (
                <div key={o.title} className="py-6">
                  <h3 className="font-serif text-2xl font-light text-cream">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                    {o.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
