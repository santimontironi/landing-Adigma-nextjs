import ModuleCard from '@/app/components/ui/ModuleCard'
import serviceData from '@/data/modulesData'

const Services = () => {
  
  const services = serviceData

  return (
    <section id="servicios" className="relative bg-white py-20 px-5 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#4C5F26] mb-6">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-[#4C5F26] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Implementamos los módulos principales de Odoo para digitalizar y optimizar tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ModuleCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              color={service.color}
            />
          ))}
        </div>

        <div className="mt-20 bg-linear-to-br from-[#4C5F26] to-[#5d7230] rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-white mb-4">
              ¿Listo para optimizar tu negocio?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Implementamos Odoo de forma personalizada según las necesidades de tu empresa
            </p>
            <button className="bg-white text-[#4C5F26] font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Solicitar Consultoría Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services