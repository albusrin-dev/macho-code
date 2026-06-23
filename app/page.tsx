import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Portfolio />
        <Testimonials />
        <Services />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
