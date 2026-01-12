import HomePage from "./components/landing/Home"
import AboutPage from "./components/landing/AboutUs"
import ServicesPage from "./components/landing/Services"
import ContactPage from "./components/landing/Contact"
import Footer from "./components/landing/Footer"

export default function Page() {
  return (
    <>
      <section id="inicio">
        <HomePage />
      </section>

      <section id="nosotros">
        <AboutPage />
      </section>

      <section id="servicios">
        <ServicesPage />
      </section>

      <section id="contacto">
        <ContactPage />
      </section>

      <section>
        <Footer />
      </section>

    </>
  )
}
