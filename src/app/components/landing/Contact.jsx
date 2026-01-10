"use client"
import ItemContact from '../ui/ItemContact'
import { useForm } from 'react-hook-form'

const Contact = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  return (
    <section id="contacto" className="relative bg-[#4C5F26] py-20 px-5 md:px-12 lg:px-20 overflow-hidden">

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5c6d3b] rounded-full opacity-80 -translate-y-[30%] translate-x-[30%]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5c6d3b] rounded-full opacity-80 translate-y-[30%] -translate-x-[30%]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contáctanos
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte, contáctanos para conseguir tu demo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <i className="bi bi-geo-alt-fill text-4xl"></i>
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <ItemContact logo="bi bi-envelope-fill" title="Email" data="contacto@adigma.com" />
                <ItemContact logo="bi bi-telephone-fill" title="Teléfono" data="+52 55 1234 5678" />
                <ItemContact logo="bi bi-geo-alt-fill" title="Ubicación" data="Santa Fé, Argentina" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 w-73 xl:w-50">
              <h3 className="text-2xl font-bold text-white mb-6">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-white/20 hover:bg-white/30 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110" >
                  <i className="bi bi-linkedin text-white text-xl"></i>
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <i className="bi bi-instagram text-white text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-[#4C5F26] mb-6">
              Envíanos un Mensaje
            </h3>

            <form className="space-y-5">

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nombre *
                  </label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4C5F26] focus:border-transparent transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="surname" className="block text-gray-700 font-medium mb-2">
                    Apellido *
                  </label>
                  <input type="text" id="surname" name="surname" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4C5F26] focus:border-transparent transition-all" placeholder="Tu apellido" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4C5F26] focus:border-transparent transition-all" placeholder="tu@email.com" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Teléfono *
                </label>
                <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4C5F26] focus:border-tr transition-all" placeholder="+54 9 11 1234-5678" />
              </div>

              <div>
                <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                  Mensaje *
                </label>
                <textarea id="content" name="content" required rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4C5F26] focus:border-tr trans resize-none" placeholder="Cuéntanos sobre tu proyecto o consulta..."
                ></textarea>
              </div>

              <button type="submit" className="w-full cursor-pointer bg-[#4C5F26] hover:bg-[#3d4c1f] text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scal shadow-lg flex items-center justify-center gap-2">
                <i className="bi bi-send-fill"></i>
                Enviar Mensaje
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact