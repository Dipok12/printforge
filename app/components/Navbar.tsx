"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "3D Model", href: "/3d-model" },
  { name: "Posts", href: "/posts" },
  { name: "About", href: "/about" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="py-3 px-5 border-b z-10 bg-white border-gray-300 fixed to-0 left-0 right-0">
      <div className="container-lg">
        <div className="flex items-center">
          <div className="logos">
            <Link href="/" className="hidden sm:block">
              <Image 
              src="/printforge-logo.svg" 
              alt="PrintForge Logo" 
              className="w-60 h-auto" width={240} height={48} 
              />
            </Link>
            <Link href="/" className="block sm:hidden">
              <Image src="/printforge-logo mobile.svg" alt="PrintForge Logo" className="w-13 h-auto" width={52} height={52} />
            </Link>
          </div>
          <div className="menus ml-auto">
            <nav className="flex gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-base font-medium transition-colors ${
                      isActive ? "text-[#F77429] font-semibold" : "text-[#606060] hover:text-[#F77429]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}