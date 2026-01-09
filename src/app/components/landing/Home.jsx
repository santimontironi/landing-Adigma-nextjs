import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <section className="w-full h-full xl:h-[82vh] bg-linear-to-br from-gray-50 via-white to-gray-50 flex items-center">

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 md:py-18 py-12">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 items-center">

          <div className="text-center md:text-left space-y-8">
          
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Bienvenido a{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4C5F26] to-[#6B8635]">
                Adigma
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
              Soluciones de software empresarial basadas en Odoo.
              Digitalizamos y optimizamos los procesos de tu empresa
              para que puedas crecer con control y eficiencia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Link href="/#contacto" className="group relative bg-[#4C5F26] text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-[#4C5F26]/25 hover:shadow-xl hover:shadow-[#4C5F26]/30 hover:-translate-y-0.5 transition-all duration-200">
                Solicitar demo
                <span className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>

              <Link href="/#servicios" className="group relative border-2 border-[#4C5F26] text-[#4C5F26] px-8 py-4 rounded-lg font-semibold hover:bg-[#4C5F26] hover:text-white transition-all duration-200">
                Ver más
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-[#4C5F26]/10 to-transparent rounded-full blur-2xl scale-110"></div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-br from-[#4C5F26]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl group-hover:shadow-[#4C5F26]/20 transition-all duration-300 group-hover:-translate-y-2">
                  <Image
                    src="/images/logo.png"
                    alt="Adigma Logo"
                    width={400}
                    height={400}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home