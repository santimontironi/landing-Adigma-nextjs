"use client"
import Image from "next/image"
import { useState } from 'react'
import Link from "next/link"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full z-50 relative border-b-4 border-white/70 xl:sticky xl:top-0 flex items-center justify-between xl:h-[24vh] h-[18vh] 2xl:h-[19vh] pr-7 pl-7 xl:px-12 bg-[#4C5F26] shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
      <div className="bg-white xl:w-30 rounded-xl shadow-sm xl:h-25 w-20 h-20 flex justify-center items-center">
        <Image
          src="/images/logo.png"
          alt="Adigma Logo"
          width={150}
          height={150}
          priority
          className="object-contain"
        />
      </div>
      <nav>
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link
              href="/"
              className="text-white hvr-bounce-to-right p-2 rounded-lg transition-colors duration-300 font-medium"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="#nosotros"
              className="text-white hvr-bounce-to-right p-2 rounded-lg transition-colors duration-300 font-medium"
            >
              Quienes somos
            </Link>
          </li>
          <li>
            <Link
              href="#servicios"
              className="text-white hvr-bounce-to-right p-2 rounded-lg transition-colors duration-300 font-medium"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="#contacto"
              className="text-white hvr-bounce-to-right p-2 rounded-lg transition-colors duration-300 font-medium"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="xl:hidden bg-white p-3 rounded-2xl hover:bg-gray-100 transition-colors duration-300 shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <i className="bi bi-list text-3xl text-[#4C5F26]"></i>
      </button>


      <nav className={`xl:hidden h-screen w-72 fixed top-0 right-0 bg-[#4C5F26] flex flex-col z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex justify-end p-5">
          <button
            className="bg-[#3d4c1f] p-3 rounded-2xl hover:bg-[#2d3916] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <i className="bi bi-x-lg text-3xl text-white"></i>
          </button>
        </div>
        <ul className="flex flex-col gap-2 px-8 pt-8">
          <li>
            <Link
              href="/"
              className="block text-white hover:bg-[#5d7230] px-5 py-4 rounded-xl transition-all duration-300 font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="#nosotros"
              className="block text-white hover:bg-[#5d7230] px-5 py-4 rounded-xl transition-all duration-300 font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              Quienes somos
            </Link>
          </li>
          <li>
            <Link
              href="#servicios"
              className="block text-white hover:bg-[#5d7230] px-5 py-4 rounded-xl transition-all duration-300 font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="#contacto"
              className="block text-white hover:bg-[#5d7230] px-5 py-4 rounded-xl transition-all duration-300 font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>


    </header>
  )
}

export default Header