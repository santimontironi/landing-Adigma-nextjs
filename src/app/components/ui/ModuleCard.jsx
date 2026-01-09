const ModuleCard = ({ icon, title, description, features, color }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#4C5F26]/30">
     
      <div className={`bg-linear-to-br from-[#4C5F26] to-[#5d7230] p-8 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10">
          <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-4">
            <i className={`${icon} text-4xl text-white`}></i>
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-white/90 text-lg">
            {description}
          </p>
        </div>
      </div>

      <div className="p-8">
        <ul className="space-y-4">
          {features.map((feature, id) => (
            <li
              key={id}
              className="flex items-start gap-3 text-gray-700"
            >
              <div className="bg-[#4C5F26]/10 rounded-full p-1 mt-1 shrink-0">
                <i className="bi bi-check-lg text-[#4C5F26] text-sm font-bold"></i>
              </div>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default ModuleCard