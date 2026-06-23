/**
 * SINGLE SOURCE OF TRUTH
 * ----------------------
 * Edit ONLY this file to rebrand the entire website for a new client.
 * Every section of the UI renders dynamically from the values below.
 */

export type CTA = {
  label: string
  href: string
}

export type Stat = {
  label: string
  value: string
}

export type Testimonial = {
  name: string
  role: string
  quote: string
  image: string
}

export type Project = {
  name: string
  category: string
  result: string
  description: string
  image: string
  link: string
}

export type Service = {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  href: string
  highlighted?: boolean
}

export type ProcessStep = {
  step: string
  title: string
  description: string
}

export const siteConfig = {
  brand: {
    name: "Marcus Reed",
    initials: "MR",
    tagline: "Gym Website Specialist",
    description:
      "High-converting gym websites that turn visitors into paying members.",
    email: "hello@marcusreed.studio",
    socials: [
      { label: "Twitter", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },

  nav: [
    { label: "Work", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    badge: "Available for new projects",
    headline: "I help gym owners get more members with high-converting websites",
    subheadline:
      "Websites engineered to turn casual visitors into paying members — built fast, optimized for leads, and designed to make your gym look unmissable.",
    ctas: [
      { label: "View My Work", href: "#portfolio" },
      { label: "Get a Free Demo", href: "#contact" },
    ] as CTA[],
    image: "/images/hero.png",
  },

  stats: [
    { label: "Avg. Membership Growth", value: "+120%" },
    { label: "Lead Increase", value: "3x" },
    { label: "Gym Clients Served", value: "50+" },
    { label: "Avg. Build Time", value: "14 days" },
  ] as Stat[],

  trustedBy: ["IRON GYM", "PULSE FITNESS", "APEX BOX", "FORGE ATHLETIC", "RISE STUDIO"],

  projects: [
    {
      name: "Iron Gym",
      category: "Strength & Conditioning",
      result: "+200 leads / month",
      description:
        "A bold, conversion-first redesign with a free-trial funnel that tripled qualified inquiries.",
      image: "/images/project1.png",
      link: "#",
    },
    {
      name: "Pulse Fitness Studio",
      category: "Boutique Studio",
      result: "+85% class bookings",
      description:
        "Integrated class schedule and one-tap booking turned browsers into booked sessions.",
      image: "/images/project2.png",
      link: "#",
    },
    {
      name: "Apex CrossFit Box",
      category: "CrossFit Box",
      result: "+150 trial sign-ups",
      description:
        "Trainer profiles, social proof, and a sticky lead form built for mobile-first members.",
      image: "/images/project3.png",
      link: "#",
    },
  ] as Project[],

  testimonials: [
    {
      name: "James Carter",
      role: "Owner, Iron Gym",
      quote:
        "We doubled our leads in the first 30 days. The site finally matches the energy of our gym.",
      image: "/images/testimonial1.png",
    },
    {
      name: "Sarah Mitchell",
      role: "Founder, Pulse Fitness Studio",
      quote:
        "Bookings went through the roof. Members tell me the website is the reason they walked in.",
      image: "/images/testimonial2.png",
    },
    {
      name: "Devon Brooks",
      role: "Head Coach, Apex CrossFit",
      quote:
        "Fast, beautiful, and built to convert. Marcus understands gyms better than any agency we tried.",
      image: "/images/testimonial3.png",
    },
  ] as Testimonial[],

  services: [
    {
      name: "Starter",
      price: "PHP 9,000",
      description: "A sharp single-page site to start capturing leads.",
      features: [
        "High-converting landing page",
        "Mobile optimized",
        "Lead capture form",
        "1-week delivery",
      ],
      cta: "Get Started",
      href: "#contact",
    },
    {
      name: "Standard",
      price: "PHP 15,000",
      description: "A complete multi-page site with a lead funnel.",
      features: [
        "Multi-page website",
        "Lead generation funnel",
        "On-page SEO setup",
        "Class & schedule section",
        "2-week delivery",
      ],
      cta: "Get Started",
      href: "#contact",
      highlighted: true,
    },
    {
      name: "Premium",
      price: "PHP 50,000",
      description: "Everything you need to dominate your local market.",
      features: [
        "Full conversion funnel",
        "Email & lead automation",
        "Custom design system",
        "Advanced SEO & analytics",
        "Priority support",
      ],
      cta: "Get Started",
      href: "#contact",
    },
  ] as Service[],

  process: [
    {
      step: "01",
      title: "Audit",
      description: "I analyze your current website, competitors, and member journey.",
    },
    {
      step: "02",
      title: "Build",
      description: "I design and develop a fast, conversion-focused site for your gym.",
    },
    {
      step: "03",
      title: "Launch",
      description: "We deploy, connect your tools, and go live with confidence.",
    },
    {
      step: "04",
      title: "Optimize",
      description: "I track results and refine the site to keep leads climbing.",
    },
  ] as ProcessStep[],

  contact: {
    headline: "Get your free gym website demo",
    subheadline:
      "Tell me about your gym and I'll send back a custom demo — no commitment, no pressure.",
    fields: [
      { name: "name", label: "Your Name", type: "text", placeholder: "John Smith" },
      { name: "gymName", label: "Gym Name", type: "text", placeholder: "Iron Gym" },
      { name: "email", label: "Email", type: "email", placeholder: "you@gym.com" },
    ],
    submitLabel: "Get My Free Demo",
  },

  footer: {
    note: "Designing & building high-converting websites for gyms worldwide.",
  },
}

export type SiteConfig = typeof siteConfig
