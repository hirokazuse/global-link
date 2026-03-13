const structurePoints = [
  {
    title: "Platform Layer",
    description:
      "Global Link owns the brand, infrastructure, and business model. This is the foundation everything else is built on.",
  },
  {
    title: "Service Layer",
    description:
      "Each service targets a specific community and product category. New services can be added without changing the platform.",
  },
  {
    title: "Event Layer",
    description:
      "Individual campaigns run within each service. Order → Collect → Import → Deliver. No inventory risk.",
  },
]

export function Structure() {
  return (
    <section id="structure" className="py-24 px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">
          How It Works
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
          3-Layer Structure
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl leading-relaxed">
          A clean hierarchy that scales from a single event to a global
          marketplace.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Diagram */}
          <div className="bg-muted/50 border border-border rounded-lg p-8 font-mono text-sm leading-loose">
            <div className="text-primary font-semibold">Global Link</div>
            <div className="text-muted-foreground ml-4">
              Platform / Company
            </div>
            <div className="my-4 ml-4 text-muted-foreground/50">↓</div>
            <div className="text-amber-600 font-semibold ml-4">Services</div>
            <div className="text-muted-foreground ml-8">Suan Khrob Khrua</div>
            <div className="text-muted-foreground ml-8">Thai Pants Shop</div>
            <div className="text-muted-foreground ml-8">Partner Services</div>
            <div className="my-4 ml-4 text-muted-foreground/50">↓</div>
            <div className="text-muted-foreground/60 ml-4">
              Events / Campaigns
            </div>
            <div className="text-muted-foreground/40 ml-8">
              March Mango 2025
            </div>
            <div className="text-muted-foreground/40 ml-8">May Durian 2025</div>
            <div className="text-muted-foreground/40 ml-8">
              Summer Collection...
            </div>
          </div>

          {/* Points */}
          <div className="space-y-6">
            {structurePoints.map((point) => (
              <div
                key={point.title}
                className="pl-6 border-l-2 border-primary"
              >
                <h4 className="font-medium text-foreground mb-2">
                  {point.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
