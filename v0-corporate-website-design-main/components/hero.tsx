import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 pb-16 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      
      {/* Soft radial gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Community Commerce Platform
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-foreground leading-tight mb-6 text-balance">
          Global <em className="text-primary not-italic">Link</em>
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto text-pretty">
          Connecting overseas communities with the products they love.
          <br className="hidden sm:block" />
          A community-driven collective purchasing platform.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#services"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            View Services
          </Link>
          <Link
            href="#vision"
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground text-sm font-medium rounded-md hover:bg-muted transition-colors"
          >
            Our Vision
          </Link>
        </div>
      </div>
    </section>
  )
}
