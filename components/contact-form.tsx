"use client"

import { useState } from "react"
import { CheckCircle2, Send } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const { contact } = siteConfig
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Wire this up to your CRM, email service, or server action.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
          <div className="flex flex-col gap-3 text-center">
            <span className="mx-auto text-xs font-semibold uppercase tracking-widest text-primary">
              Free Demo
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              {contact.headline}
            </h2>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              {contact.subheadline}
            </p>
          </div>

          {submitted ? (
            <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center">
              <CheckCircle2 className="h-10 w-10 text-primary" />
              <p className="text-lg font-semibold">Thanks — your demo request is in!</p>
              <p className="text-sm text-muted-foreground">
                I&apos;ll review your gym and send a custom demo within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              {contact.fields.map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <Label htmlFor={field.name}>{field.label}</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                  />
                </div>
              ))}
              <Button type="submit" size="lg" className="mt-2 w-full">
                <Send className="h-4 w-4" />
                {contact.submitLabel}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
