import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
              {siteConfig.brand.initials}
            </span>
            {siteConfig.brand.name}
          </div>

          <nav className="flex flex-wrap items-center gap-6">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {siteConfig.brand.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">{siteConfig.footer.note}</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
