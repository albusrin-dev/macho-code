import { Check } from "lucide-react"
import { siteConfig } from "@/config/site"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services & Pricing"
          title="Simple pricing, serious results"
          description="Pick the package that fits your gym. Every plan is built to convert visitors into members."
        />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {siteConfig.services.map((service) => (
            <div
              key={service.name}
              className={cn(
                "relative flex h-full flex-col rounded-2xl border bg-card p-6 sm:p-8",
                service.highlighted
                  ? "border-primary shadow-[0_0_0_1px] shadow-primary/30 lg:scale-[1.03]"
                  : "border-border",
              )}
            >
              {service.highlighted ? (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              ) : null}

              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-bold tracking-tight">{service.price}</span>
                <span className="pb-1 text-sm text-muted-foreground">/ project</span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8 w-full"
                variant={service.highlighted ? "default" : "outline"}
                render={<a href={service.href} />}
              >
                {service.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
