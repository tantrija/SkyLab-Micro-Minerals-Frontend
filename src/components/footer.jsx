"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="dark-section ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SM</span>
              </div>
              <span className="font-bold text-xl text-white">Skylab Microminerals</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Skylab helps businesses achieve manufacturing excellence through precision engineering and innovative
              solutions.
            </p>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-white font-semibold mb-4">Stay Updated with Skylab</h3>
              <div className="flex gap-2 max-w-md">
                <Input
                  placeholder="Enter your e-mail"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-300"
                />
                <Button className="bg-[#0146a3] hover:bg-[#0146a3]/90 px-6">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-white font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Homepage
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/custom-fabrication" className="text-gray-300 hover:text-white transition-colors">
                  Custom Fabrication
                </Link>
              </li>
              <li>
                <Link
                  href="/services/component-manufacturing"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Component Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/services/assembly-services" className="text-gray-300 hover:text-white transition-colors">
                  Assembly Services
                </Link>
              </li>
              <li>
                <Link href="/services/machinery-solutions" className="text-gray-300 hover:text-white transition-colors">
                  Machinery Solutions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">KLLG St. No.99, PKU City, ID 28289</p>
              <p className="text-gray-300 text-sm">0761-8523-398</p>
              <p className="text-gray-300 text-sm">hello@skylabminerals.com</p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">Copyright © 2025 Skylab Microminerals. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer