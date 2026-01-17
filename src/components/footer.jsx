"use client"

import Link from "next/link" 
import { Facebook, Youtube, Twitter, Instagram, Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import axiosClientAuth from "@/Services/api"
import Image from "next/image"

const Footer = () => {
    const [siteSetting, setSiteSetting] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchSiteSetting = async () => {
        try {
          const res = await axiosClientAuth.get("/site-setting");
          setSiteSetting(res?.data?.data || {});
        } catch (err) {
          console.error("Error fetching site Setting data:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchSiteSetting();
    }, []);

    const menuItems = [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact Us", href: "/contact" },
    ]

    // const socialLinks = [
    //   { icon: Facebook, href: siteSetting?.facebook || "#", label: "Facebook" },
    //   { icon: Youtube, href: siteSetting?.youtube || "#", label: "YouTube" },
    //   { icon: Twitter, href: siteSetting?.twitter || "#", label: "Twitter" },
    //   { icon: Instagram, href: siteSetting?.instagram || "#", label: "Instagram" },
    // ]

    const contactInfo = [
      {
        icon: MapPin,
        title: "Our Address",
        content: siteSetting?.address || "F-261 MIA Alwar (301030) Rajasthan",
        href: `https://maps.google.com/?q=${encodeURIComponent(siteSetting?.address || "F-261 MIA Alwar (301030) Rajasthan")}`
      },
      {
        icon: Phone,
        title: "Phone Number",
        content: siteSetting?.phone || "+91-9983211547",
        href: `tel:${siteSetting?.phone || "+919983211547"}`
      },
      {
        icon: Mail,
        title: "Email Address",
        content: siteSetting?.email || "alwarrmpl@gmail.com",
        href: `mailto:${siteSetting?.email || "alwarrmpl@gmail.com"}`
      },
      // {
      //   icon: Clock,
      //   title: "Business Hours",
      //   content: siteSetting?.hours || "Mon - Sat: 9:00 AM - 6:00 PM",
      // }
    ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              {siteSetting?.logo ? (
                <div className="relative w-48 h-14 lg:w-56 lg:h-16">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_IMAGE}${siteSetting.logo}`}
                    alt="Skylab Microminerals Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 192px, 224px"
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="font-bold text-2xl lg:text-3xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Skylab Microminerals
                  </span>
                  <span className="text-sm text-gray-400 mt-1">PRECISION & EXCELLENCE</span>
                </div>
              )}
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-lg">
              Leading manufacturer and supplier of high-quality calcium carbonate and mineral products. 
              We provide comprehensive industrial solutions with a commitment to quality, reliability, 
              and customer satisfaction.
            </p>
            
            {/* Newsletter Subscription
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-blue-600">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="flex items-center text-gray-300 hover:text-white transition-all duration-200 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-blue-600">
              Contact Info
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-900/30 to-blue-600/30 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-200">
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 mb-1">{item.title}</p>
                    {item.href ? (
                      <Link 
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors font-medium"
                      >
                        {item.content}
                      </Link>
                    ) : (
                      <p className="text-gray-300 font-medium">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media 
            <div className="pt-4">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                {siteSetting?.footerCopyright || "Copyright © 2026 Skylab Microminerals. All Rights Reserved."}
              </p>
            </div>
            
            {/* Optional: Policy Links */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-center mt-6 absolute right-8 bottom-8 fixed">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:shadow-lg hover:scale-105"
              aria-label="Scroll to top"
            >
              <svg 
                className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Bar */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"></div>
    </footer>
  )
}

export default Footer