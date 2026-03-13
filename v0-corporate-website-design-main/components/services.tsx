import { ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    status: "live",
    statusLabel: "Live",
    icon: "🌿",
    title: "Suan Khrob Khrua",
    location: "Japan · Thai Community",
    description:
      "สวนครอบครัว — Collective purchasing of Thai fruits, vegetables, and herbs for the Thai community in Japan.",
    href: "https://hirokazuse.github.io/suan-khrob-khrua/",
  },
  {
    status: "soon",
    statusLabel: "Coming Soon",
    icon: "👘",
    title: "Thai Pants Shop",
    location: "Japan · Thai Goods",
    description:
      "Thai fashion and lifestyle goods. Authentic Thai clothing delivered directly to customers in Japan.",
    href: null,
  },
  {
    status: "future",
    statusLabel: "Open to Partners",
    icon: "🤝",
    title: "Partner Services",
    location: "Global · Any Community",
    description:
      "Have a community and a product? List your service on Global Link and reach your audience through our platform.",
    href: null,
  },
  {
    status: "future",
    statusLabel: "Future",
    icon: "🌐",
    title: "Community Projects",
    location: "Global · Expanding",
    description:
      "Vietnamese, Filipino, and other overseas communities. The platform grows with demand.",
    href: null,
  },
]

function StatusBadge({ status, label }: { status: string; label: string }) {
  const variants = {
    live: "bg-emerald-50 text-emerald-700 border-emerald-200",
    soon: "bg-amber-50 text-amber-700 border-amber-200",
    future: "bg-muted text-muted-foreground border-border",
  }

  const dots = {
    live: "●",
    soon: "◐",
    future: "○",
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border ${
        variants[status as keyof typeof variants]
      }`}
    >
      <span>{dots[status as keyof typeof dots]}</span>
      {label}
    </span>
  )
}

export function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">
          Services
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
          Our Platforms
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl leading-relaxed">
          Each service is a dedicated community purchasing platform, built for a
          specific audience and product category.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const CardWrapper = service.href ? Link : "div"
            const cardProps = service.href
              ? { href: service.href, target: "_blank", rel: "noopener noreferrer" }
              : {}

            return (
              <CardWrapper
                key={service.title}
                {...cardProps}
                className="group relative p-8 bg-card border border-border rounded-lg hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <StatusBadge status={service.status} label={service.statusLabel} />

                <div className="mt-6 mb-4">
                  <span className="text-3xl">{service.icon}</span>
                </div>

                <h3 className="font-serif text-xl font-medium text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-xs tracking-wide uppercase text-muted-foreground mb-4">
                  {service.location}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {service.href && (
                  <ArrowRight className="absolute bottom-8 right-8 w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all duration-300" />
                )}
              </CardWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
