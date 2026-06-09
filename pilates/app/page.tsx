import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Studio } from "@/components/studio"
import { Membership } from "@/components/membership"
import { ContactForm } from "@/components/contact-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Philosophy />
      <Studio />
      <Membership />
      <ContactForm />
      <SiteFooter />
    </main>
  )
}
