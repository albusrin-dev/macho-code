import { siteConfig } from "@/config/site"
import { SectionHeading } from "@/components/section-heading"

export function Process() {
  return (
    <section id="process" className="border-y border-border bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The Process"
          title="From audit to optimized in four steps"
          description="A clear, proven process that gets your gym online fast — and keeps it converting."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.process.map((item) => (
            <li
              key={item.step}
              className="relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
            >
              <span className="text-sm font-bold text-primary">{item.step}</span>
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
