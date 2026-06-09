"use server"

import { Resend } from "resend"

export async function sendContactEmail(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set")
    return { success: false, error: "Email service is not configured" }
  }

  const resend = new Resend(apiKey)
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  try {
    const { data, error } = await resend.emails.send({
      from: "Pilataise <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "taisiyabeez@gmail.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    console.error("Submission error:", err)
    return { success: false, error: "Failed to send email" }
  }
}
