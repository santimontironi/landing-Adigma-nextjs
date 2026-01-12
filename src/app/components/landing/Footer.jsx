import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#2d3916] text-white">

            <div className="max-w-7xl mx-auto md:px-12 lg:px-20 py-16">
                <div className="grid items-center justify-center content-center md:grid-cols-2 lg:grid-cols-4 gap-12">

                    <div>
                        <div className="bg-white p-3 rounded-xl">
                            <Image
                                src="/images/logo.png"
                                alt="Adigma Logo"
                                width={124}
                                height={124}
                                className="object-contain mx-auto"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">Enlaces Rápidos</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                                >
                                    <i className="bi bi-chevron-right text-sm group-hover:translate-x-1 transition-transform"></i>
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#nosotros"
                                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                                >
                                    <i className="bi bi-chevron-right text-sm group-hover:translate-x-1 transition-transform"></i>
                                    Quiénes Somos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#servicios"
                                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                                >
                                    <i className="bi bi-chevron-right text-sm group-hover:translate-x-1 transition-transform"></i>
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contacto"
                                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                                >
                                    <i className="bi bi-chevron-right text-sm group-hover:translate-x-1 transition-transform"></i>
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">Nuestros Servicios</h3>
                        <ul className="space-y-3">
                            <li>
                                <h5 className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group" >
                                    <i className="bi bi-chevron-right text-sm group-hover:translate-x-1 transition-transform"></i>
                                    Implementación Odoo
                                </h5>
                            </li>
                            <li>
                                <h5 className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                                    <i className="bi bi-chevron-right text-sm group-hover:translate-x-1 transition-transform"></i>
                                    Consultoría ERP
                                </h5>
                            </li>
                            <li>
                                <h5 className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group" >
                                    <i className="bi bi-chevron-right text-sm group-hover:translate-x-1 transition-transform"></i>
                                    Capacitación
                                </h5>
                            </li>
                            <li>
                                <h5 className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                                    <i className="bi bi-chevron-right text-sm group-hover:translate-x-1 transition-transform"></i>
                                    Soporte Técnico
                                </h5>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <i className="bi bi-geo-alt-fill text-[#4C5F26] text-xl mt-1"></i>
                                <span className="text-white/80">
                                    Santa Fe, Argentina
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="bi bi-envelope-fill text-[#4C5F26] text-xl mt-1"></i>
                                <a
                                    href="mailto:contacto@adigma.com"
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    contacto@adigma.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="bi bi-telephone-fill text-[#4C5F26] text-xl mt-1"></i>
                                <a
                                    href="tel:+5491112345678"
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    +54 9 3476 64-7997
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="flex flex-col text-center p-8 md:flex-row justify-center items-center gap-4">
                    <p className="text-white/60 text-sm md:text-left">
                        © {currentYear} Adigma. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer