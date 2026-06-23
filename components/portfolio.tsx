import Image from "next/image"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import { siteConfig } from "@/config/site"
import { SectionHeading } from "@/components/section-heading"

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Gym websites that drive real results"
          description="Every project is built around one goal: more members through the door."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.name} website project`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {project.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  <TrendingUp className="h-3.5 w-3.5" />
                  {project.result}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
