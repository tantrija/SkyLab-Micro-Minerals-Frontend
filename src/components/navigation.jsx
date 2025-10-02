"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Contact } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  // {
  //   name: "Services",
  //   href: "/services",
  //   submenu: [
  //     { name: "Custom Fabrication", href: "/services/custom-fabrication" },
  //     { name: "Component Manufacturing", href: "/services/component-manufacturing" },
  //     { name: "Assembly Services", href: "/services/assembly-services" },
  //     { name: "Machinery Solutions", href: "/services/machinery-solutions" },
  //   ],
  // },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
]

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="bg-[#0146a3] text-white py-3 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <Link href='/' className="hover:text-white text-base transition-colors">
              facebook
            </Link>
            <Link href='/' className="hover:text-white text-base transition-colors">
              instagram
            </Link>
            <Link href='/' className="hover:text-white text-base transition-colors">
              twitter
            </Link>
            <Link href='/' className="hover:text-white text-base transition-colors">
              linkedin
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span>Email :</span>
            <Link href='/' className="hover:text-white text-base transition-colors">
              hello@skylabminerals.com
            </Link>
          </div>
        </div>
      </div>
      <nav className="mx-auto max-w-7xl ">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#0146a3] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base">SM</span>
              </div>
              <span className="font-bold text-xl text-foreground">Skylab Microminerals</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-base text-[#212121] hover:text-[#0146a3] transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-base  text-[#212121] hover:text-[#0146a3] hover:bg-muted transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href} className="text-[#212121] hover:text-[#0146a3] transition-colors">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild className="bg-[#0146a3] hover:bg-[#0146a3]/90">
              <Link href="/contact"><Contact /> Enquiry</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-[#212121] hover:text-[#0146a3] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-base text-[#212121] hover:text-[#0146a3] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full bg-[#0146a3] hover:bg-[#0146a3]/90">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                   <Contact /> Enquiry
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}


export default Navigation