"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Odoo", href: "/odoo" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Adigma Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="font-semibold text-gray-900">
            Adigma
          </span>
        </Link>
        
        <nav className="flex gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  font-medium transition
                  ${isActive
                    ? "text-[#4C5F26]"
                    : "text-gray-600 hover:text-[#4C5F26]"
                  }
                `}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header