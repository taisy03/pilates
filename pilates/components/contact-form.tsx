"use client"

import type React from "react"
import { useState } from "react"
import { sendContactEmail } from "@/app/actions"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const result = await sendContactEmail(formData)

    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.error || "Something went wrong. Please try again.")
    }
    setLoading(false)
  }

  return (
    <section id="contact" className="bg-card py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="mb-6 text-xs font-light uppercase tracking-[0.4em] text-gold">
          Request an Invitation
        </p>
        <h2 className="font-serif text-4xl font-light leading-tight text-cream text-balance sm:text-5xl">
          Begin the conversation
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-cream/75">
          Share your details and our membership team will be in touch
          personally.
        </p>

        {submitted ? (
          <div className="mt-12 border border-gold/40 bg-background px-8 py-12">
            <p className="font-serif text-2xl font-light text-gold">
              Thank you.
            </p>
            <p className="mt-3 text-sm font-light text-cream/75">
              Your request has been received. We will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-5 text-left">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="First Name" name="firstName" />
              <Field label="Last Name" name="lastName" />
            </div>
            <Field label="Email" name="email" type="email" />
            <Field label="Phone" name="phone" type="tel" />
            <div>
              <label
                htmlFor="message"
                className="text-[0.7rem] font-light uppercase tracking-[0.22em] text-gold"
              >
                A Note (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full border border-gold/25 bg-background px-4 py-3 text-sm font-light text-cream outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
                placeholder="Tell us a little about what draws you to Pilataise."
              />
            </div>
            {error && (
              <p className="text-sm font-light text-red-400">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full border border-gold bg-gold px-8 py-4 text-xs font-light uppercase tracking-[0.25em] text-background transition-colors hover:bg-transparent hover:text-gold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string
  name: string
  type?: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[0.7rem] font-light uppercase tracking-[0.22em] text-gold"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full border border-gold/25 bg-background px-4 py-3 text-sm font-light text-cream outline-none transition-colors focus:border-gold"
      />
    </div>
  )
}
