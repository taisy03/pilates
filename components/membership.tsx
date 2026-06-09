import { Check } from "lucide-react"

const tiers = [
  {
    name: "Resident",
    price: "£320",
    cadence: "per month",
    features: [
      "Four private reformer sessions",
      "Unlimited mat & movement classes",
      "Studio lounge & amenities access",
      "Oxblood towel & locker service",
    ],
    featured: false,
  },
  {
    name: "Founding Member",
    price: "£580",
    cadence: "per month",
    features: [
      "Eight private reformer sessions",
      "Unlimited classes & priority booking",
      "Personalised programming",
      "Guest privileges & member events",
      "Concierge & recovery suite access",
    ],
    featured: true,
  },
]

export function Membership() {
  return (
    <section id="membership" className="bg-background py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="mb-6 text-xs font-light uppercase tracking-[0.4em] text-gold">
            Membership
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-cream text-balance sm:text-5xl">
            By invitation only
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-cream/75">
            Membership is limited and personal. Begin with a request — we
            extend invitations to ensure every member belongs.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={
                tier.featured
                  ? "relative border border-gold bg-accent/40 p-10"
                  : "relative border border-gold/20 bg-card p-10"
              }
            >
              {tier.featured && (
                <span className="absolute right-6 top-6 text-[0.6rem] font-light uppercase tracking-[0.25em] text-gold">
                  Most Sought
                </span>
              )}
              <h3 className="font-serif text-3xl font-light text-cream">
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-serif text-5xl font-light text-gold">
                  {tier.price}
                </span>
                <span className="text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                  {tier.cadence}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                    <span className="text-sm font-light leading-relaxed text-cream/85">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={
                  tier.featured
                    ? "mt-10 block border border-gold bg-gold px-8 py-4 text-center text-xs font-light uppercase tracking-[0.25em] text-background transition-colors hover:bg-transparent hover:text-gold"
                    : "mt-10 block border border-gold/40 px-8 py-4 text-center text-xs font-light uppercase tracking-[0.25em] text-gold transition-colors hover:border-gold"
                }
              >
                Request Invitation
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
