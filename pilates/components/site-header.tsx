"use client"

import { useState } from "react"
import { Wordmark } from "./logo"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Wordmark showMark className="scale-90 sm:scale-100" />

        <a
          href="#membership"
          className="hidden border border-gold/60 px-6 py-2.5 text-[0.65rem] font-light uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-background md:inline-block"
        >
          Request Invitation
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "h-px w-6 bg-cream transition-transform",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span className={cn("h-px w-6 bg-cream transition-opacity", open && "opacity-0")} />
          <span
            className={cn(
              "h-px w-6 bg-cream transition-transform",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 px-6 py-4 md:hidden">
          <a
            href="#membership"
            onClick={() => setOpen(false)}
            className="mt-2 border border-gold/60 px-6 py-3 text-center text-[0.65rem] font-light uppercase tracking-[0.25em] text-gold"
          >
            Request Invitation
          </a>
        </nav>
      )}
    </header>
  )
}
