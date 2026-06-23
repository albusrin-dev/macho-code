import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export function Hero() {
  const { hero } = siteConfig

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {hero.badge}
          </div>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {hero.ctas.map((cta, i) => (
              <Button
                key={cta.href}
                render={<a href={cta.href} />}
                size="lg"
                variant={i === 0 ? "default" : "outline"}
              >
                {i === 0 ? <Sparkles className="h-4 w-4" /> : null}
                {cta.label}
                {i === 0 ? <ArrowRight className="h-4 w-4" /> : null}
              </Button>
            ))}
          </div>
        </div>

        <div className="animate-fade-in-up [animation-delay:120ms]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border sm:aspect-square">
            <Image
              src={hero.image || "/placeholder.svg"}
              alt="Modern gym website project preview"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
