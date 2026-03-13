const communities = [
  {
    flag: "🇹🇭",
    name: "Thai Community",
    status: "Japan · Active",
    active: true,
  },
  {
    flag: "🇻🇳",
    name: "Vietnamese",
    status: "Future",
    active: false,
  },
  {
    flag: "🇵🇭",
    name: "Filipino",
    status: "Future",
    active: false,
  },
  {
    flag: "🌐",
    name: "& More",
    status: "Open",
    active: false,
  },
]

export function Vision() {
  return (
    <section id="vision" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">
          Vision
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4 text-balance">
          Every Community.
          <br />
          Every Product.
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          Starting with the Thai community in Japan. Expanding to every overseas
          community that wants access to products from home.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {communities.map((community) => (
            <div
              key={community.name}
              className={`px-6 py-4 rounded-lg border min-w-[160px] transition-all ${
                community.active
                  ? "bg-primary/5 border-primary/30"
                  : "bg-card border-border opacity-50 border-dashed"
              }`}
            >
              <span className="text-2xl mb-2 block">{community.flag}</span>
              <div className="font-medium text-foreground text-sm">
                {community.name}
              </div>
              <div className="text-xs text-muted-foreground">
                {community.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
