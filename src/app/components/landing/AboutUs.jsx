const AboutUs = () => {
  return (
    <section id="nosotros" className="relative bg-[#4C5F26] py-20 px-5 md:px-12 lg:px-20 overflow-hidden">
     
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5d7230] rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3d4c1f] rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
    
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Quiénes Somos
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Llevamos a cabo la implementación de Odoo, ayudando a empresas a optimizar sus procesos de negocio mediante soluciones ERP integrales y personalizadas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          
          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-xl">
                <i className="bi bi-bullseye text-4xl text-white"></i>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Nuestra Misión
                </h3>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              Transformar digitalmente a las empresas mediante la implementación efectiva de Odoo, optimizando sus procesos operativos y administrativos para maximizar la eficiencia, reducir costos y potenciar el crecimiento sostenible de nuestros clientes.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-xl">
                <i className="bi bi-eye-fill text-4xl text-white"></i>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Nuestra Visión
                </h3>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              Ser el partner de referencia en implementación de Odoo en la región, reconocidos por nuestra excelencia técnica, servicio personalizado y capacidad para convertir sistemas complejos en soluciones simples que impulsan el éxito empresarial.
            </p>
          </div>

        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="bg-white/20 p-4 rounded-xl">
                <i className="bi bi-heart-fill text-4xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-white">
                Nuestros Valores
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                <i className="bi bi-gear-fill text-white text-3xl"></i>
                <span className="text-white font-semibold text-lg">Excelencia Técnica</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                <i className="bi bi-people-fill text-white text-3xl"></i>
                <span className="text-white font-semibold text-lg">Enfoque al Cliente</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                <i className="bi bi-lightbulb-fill text-white text-3xl"></i>
                <span className="text-white font-semibold text-lg">Innovación</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                <i className="bi bi-shield-check text-white text-3xl"></i>
                <span className="text-white font-semibold text-lg">Compromiso</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutUs