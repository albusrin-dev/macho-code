import { siteConfig } from "@/config/site"

export function Stats() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <dl className="grid grid-cols-2 divide-border lg:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-start gap-1 px-2 py-8 sm:px-6"
            >
              <dt className="order-2 text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="order-1 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col items-center gap-6 border-t border-border py-8 sm:flex-row sm:justify-between">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by gyms everywhere
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {siteConfig.trustedBy.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold tracking-wide text-muted-foreground/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
