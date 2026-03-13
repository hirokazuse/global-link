"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl font-light tracking-wide text-foreground"
        >
          Global <span className="text-primary">Link</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#structure"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              Structure
            </Link>
          </li>
          <li>
            <Link
              href="#vision"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              Vision
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
