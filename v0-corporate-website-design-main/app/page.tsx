import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Structure } from "@/components/structure"
import { Vision } from "@/components/vision"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Structure />
      <Vision />
      <Footer />
    </main>
  )
}
