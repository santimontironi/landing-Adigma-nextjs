"use client"
import ItemContact from '../ui/ItemContact'
import { messageContactAxios } from '@/app/services/api'
import { useForm } from 'react-hook-form'

const Contact = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  async function formSubmit(data){
    try{
      await messageContactAxios(data)
      reset()
    }
    catch(error){
      console.log(error)
    }
  }

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
                <ItemContact logo="bi bi-envelope-fill" title="Email" data="contacto@adigmasolutions.com" />
                <ItemContact logo="bi bi-telephone-fill" title="Teléfono" data="+54 9 3476 64-7997" />
                <ItemContact logo="bi bi-geo-alt-fill" title="Ubicación" data="Santa Fé, Argentina" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 w-[87%] 2xl:w-[95%] shadow-2xl">
            <h3 className="text-3xl font-bold text-[#4C5F26] mb-6">
              Envíanos un Mensaje
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit(formSubmit)}>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nombre *
                  </label>
                  <input {...register("name", { required: true })} type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4C5F26] focus:border-transparent transition-all" placeholder="Tu nombre" />
                  {errors.name && <span className="text-red-500 text-sm">El nombre es requerido</span>}
                </div>
                <div>
                  <label htmlFor="surname" className="block text-gray-700 font-medium mb-2">
                    Apellido *
                  </label>
                  <input {...register("surname", { required: true })} type="text" id="surname" name="surname" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4C5F26] focus:border-transparent transition-all" placeholder="Tu apellido" />
                  {errors.surname && <span className="text-red-500 text-sm">El apellido es requerido</span>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <input {...register("email", { required: true })} type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4C5F26] focus:border-transparent transition-all" placeholder="tu@email.com" />
                {errors.email && <span className="text-red-500 text-sm">El email es requerido</span>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Teléfono *
                </label>
                <input {...register("phone", { required: true })} type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4C5F26] focus:border-tr transition-all" placeholder="+54 9 11 1234-5678" />
                {errors.phone && <span className="text-red-500 text-sm">El teléfono es requerido</span>}
              </div>

              <div>
                <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                  Mensaje *
                </label>
                <textarea {...register("content", { required: true })} id="content" name="content" rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4C5F26] focus:border-tr trans resize-none" placeholder="Cuéntanos sobre tu proyecto o consulta..."
                ></textarea>
                {errors.content && <span className="text-red-500 text-sm">El mensaje es requerido</span>}
              </div>

              <button type="submit" className="w-full cursor-pointer bg-[#4C5F26] hover:bg-[#3d4c1f] text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scal shadow-lg flex items-center justify-center gap-2">
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