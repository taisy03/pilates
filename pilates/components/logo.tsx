import { cn } from "@/lib/utils"

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 130"
      fill="none"
      className={cn("text-gold", className)}
      aria-hidden="true"
    >
      {/* Arch outline */}
      <path
        d="M10 60a40 40 0 0180 0v58a2 2 0 01-2 2H12a2 2 0 01-2-2V60z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M18 60a32 32 0 0164 0v52H18V60z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      {/* Stylised P */}
      <path
        d="M44 38v54M44 38h16a14 14 0 010 28H44"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M56 52c0 14-6 26-14 34"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  )
}

export function Wordmark({
  className,
  tagline = "PRIVATE PILATES CLUB",
  showMark = true,
}: {
  className?: string
  tagline?: string
  showMark?: boolean
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {showMark && <LogoMark className="h-9 w-auto" />}
      <div className="flex flex-col leading-none">
        <span className="font-serif text-2xl font-medium tracking-[0.25em] text-cream">
          PILATAISE
        </span>
        {tagline && (
          <span className="mt-1 text-[0.55rem] font-light tracking-[0.35em] text-gold">
            {tagline}
          </span>
        )}
      </div>
    </div>
  )
}
