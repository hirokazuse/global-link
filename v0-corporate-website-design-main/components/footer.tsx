import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto text-center">
        <span className="font-serif text-xl font-light text-foreground block mb-2">
          Global Link
        </span>
        <p className="text-sm text-muted-foreground mb-4">
          Community Commerce Platform
        </p>
        <Link
          href="https://hirokazuse.github.io/suan-khrob-khrua/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline"
        >
          Suan Khrob Khrua
        </Link>
        <p className="text-xs text-muted-foreground/50 mt-8">
          © 2025 Global Link. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
