"use client"

import Link from "next/link" 
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react"
import { useEffect, useState } from "react"
import axiosClientAuth from "@/Services/api"
import Image from "next/image"

const Footer = () => {
    const [siteSetting, setSiteSetting] = useState({});

    useEffect(() => {
      const fetchSiteSetting = async () => {
        try {
          const res = await axiosClientAuth.get("/site-setting");
          console.log(res.data.data);

          setSiteSetting(res?.data?.data || {});
        } catch (err) {
          console.error("Error fetching site Setting data:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchSiteSetting();
    }, []);
  


  return (
    <footer className="dark-section ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {siteSetting?.logo ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_IMAGE}${siteSetting.logo}`}
                  alt="Logo"
                  width={150}
                  height={40}
                  className="object-contain"
                />
              ) : (
                <span className="font-bold text-xl text-white">Skylab Microminerals</span>
              )}
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {siteSetting?.footerText}
            </p>


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
            <h3 className="text-white font-semibold mb-4">Our Addres</h3>
            <div className="mb-6 md:mb-0">
              <p className="text-gray-300 text-sm mb-2"> {siteSetting?.address || "KLLG St. No.99, PKU City, ID 28289"}</p>
              <p className="text-gray-300 text-sm mb-2"> {siteSetting?.phone || "9983211547"}</p>
              <p className="text-gray-300 text-sm"> {siteSetting?.email || "hello@skylabminerals.com"}</p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <Link href={siteSetting?.facebook || "#"} className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href={siteSetting?.youtube || "#"} className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href={siteSetting?.twitter || "#"} className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href={siteSetting?.instagram || "#"} className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">{siteSetting?.footerCopyright || "Copyright © 2025 Skylab Microminerals. All Rights Reserved."}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer