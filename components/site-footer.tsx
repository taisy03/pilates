import { Wordmark } from "./logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/15 bg-background py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Wordmark tagline="PRIVATE PILATES CLUB" />
          <p className="text-xs font-light tracking-[0.2em] text-muted-foreground">
            For women who lead.
          </p>
        </div>


      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-gold/10 px-6 pt-8">
        <p className="text-center text-[0.65rem] font-light uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} Pilataise · Strength. Poise. Balance.
        </p>
      </div>
    </footer>
  )
}
