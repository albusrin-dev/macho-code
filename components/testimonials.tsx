import Image from "next/image"
import { Quote } from "lucide-react"
import { siteConfig, type Testimonial } from "@/config/site"

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="rounded-2xl border border-border bg-card p-6">
      <Quote className="h-6 w-6 text-primary" aria-hidden />
      <blockquote className="mt-4 text-pretty text-base leading-relaxed text-foreground">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <Image
          src={t.image || "/placeholder.svg"}
          alt={t.name}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <div className="text-sm font-semibold">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  // Duplicate the list so the vertical marquee can loop seamlessly.
  const loop = [...siteConfig.testimonials, ...siteConfig.testimonials]

  return (
    <section className="border-y border-border bg-card/30 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Gym owners love the results
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground">
            Don&apos;t just take my word for it — here&apos;s what gym owners say after
            launching their new high-converting websites.
          </p>
        </div>

        <div className="marquee-group relative h-[420px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
          <div
            className="animate-marquee-up flex flex-col gap-4"
            style={{ ["--marquee-duration" as string]: "24s" }}
          >
            {loop.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
