"use client"
import Image from "next/image"
import { useState } from 'react'
import Link from "next/link"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full z-50 relative flex items-center justify-between h-35 pr-12 pl-5 xl:px-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
      <div>
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
        <ul className="hidden md:flex items-center gap-7">
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:text-[#4C5F26] transition-colors duration-300 font-medium"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/nosotros"
              className="text-gray-700 hover:text-[#4C5F26] transition-colors duration-300 font-medium"
            >
              Quienes somos
            </Link>
          </li>
          <li>
            <Link
              href="/servicios"
              className="text-gray-700 hover:text-[#4C5F26] transition-colors duration-300 font-medium"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="text-gray-700 hover:text-[#4C5F26] transition-colors duration-300 font-medium"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="xl:hidden bg-[#4C5F26] p-3 rounded-2xl hover:bg-[#3d4c1f] transition-colors duration-300 shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <i className="bi bi-list text-3xl text-white"></i>
      </button>


      <nav className={`h-screen w-72 fixed top-0 right-0 bg-[#4C5F26] flex flex-col z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
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
              href="/nosotros"
              className="block text-white hover:bg-[#5d7230] px-5 py-4 rounded-xl transition-all duration-300 font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              Quienes somos
            </Link>
          </li>
          <li>
            <Link
              href="/servicios"
              className="block text-white hover:bg-[#5d7230] px-5 py-4 rounded-xl transition-all duration-300 font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
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