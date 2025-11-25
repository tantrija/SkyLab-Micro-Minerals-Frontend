"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LogoWebSite from '../../public/logo/RoyalMicrins.png'
import Image from "next/image";
import WhatsAppIcon from '../../public/images/WhatsApp.svg'


const Header = () => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [header, setHeader] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        setError(null);
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

        if (!API_URL || !API_TOKEN) throw new Error("API variables missing");

        const res = await fetch(`${API_URL}/royal/site-setting`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        const json = await res.json();
        console.log("API Response:", json);

        setHeader(json.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchHeader();
  }, []);

  if (loading) return null;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!header) return null;

  // Function to set active link class
  const navLinkClass = (path) =>
    pathname === path
      ? "text-[#9b1c31] font-semibold"
      : "text-gray-700 hover:text-[#9b1c31] transition-colors";

  return (
    <header className="w-full sticky top-0 z-10">
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-700 py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            {header.facebook && (
              <Link href={header.facebook} className="hover:text-[#9b1c31]">
                facebook
              </Link>
            )}
            {header.instagram && (
              <Link href={header.instagram} className="hover:text-[#9b1c31]">
                instagram
              </Link>
            )}
            {header.twitter && (
              <Link href={header.twitter} className="hover:text-[#9b1c31]">
                twitter
              </Link>
            )}
            {header.linkedin && (
              <Link href={header.linkedin} className="hover:text-[#9b1c31]">
                linkedin
              </Link>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span>Email :</span>
            <Link
              href={`mailto:${header.email}`}
              className="hover:text-[#9b1c31]"
            >
              {header.email}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className=" bg-white rounded-full flex items-center justify-center">
                 <Image src={LogoWebSite} loading="lazy" alt="logo" className="object-contain w-[250px]"/>
              </div> 
            </Link>
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-[#9b1c31]" />
              ) : (
                <Menu className="h-6 w-6 text-[#9b1c31]" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link href="/about" className={navLinkClass("/about")}>
              About
            </Link>
            <Link href="/product" className={navLinkClass("/product")}>
              Product
            </Link>
            {/* <Link href="/gallery" className={navLinkClass("/gallery")}>
              Gallery
            </Link> */}
            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact Us
            </Link>
          </div>

          {/* Contact/CTA */}
          <div className="flex items-center gap-2">
            <Link
              href={`mailto:${header.email}`}
              target="_blank"
              className="text-gray-700 hover:text-[#9b1c31]"
            >
              Enquiry
            </Link>
            <div className="bg-[#29b63e] text-white px-5 py-2 rounded-lg hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5" />
               
                <Image src={WhatsAppIcon} alt="" className="" />
              </div>
              <div>
                <div className="text-sm opacity-90">Get a Quote</div>
                <div className="font-semibold">+91-{header.phone}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className={navLinkClass("/") + " block py-2"}>
                Home
              </Link>
              <Link
                href="/about"
                className={navLinkClass("/about") + " block py-2"}
              >
                About
              </Link>
              <Link
                href="/product"
                className={navLinkClass("/product") + " block py-2"}
              >
                Product
              </Link>
              <Link
                href="/gallery"
                className={navLinkClass("/gallery") + " block py-2"}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className={navLinkClass("/contact") + " block py-2"}
              >
                Contact Us
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full bg-primary hover:bg-primary/90 text-white mb-4">
                  Get A Quote
                </button>
                <div className="bg-primary text-white p-4 rounded-lg">
                  <div className="text-sm opacity-90">Security Hotline</div>
                  <div className="font-semibold">+91-{header.phone}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
