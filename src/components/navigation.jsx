"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Contact } from "lucide-react";
import axiosClientAuth from "@/Services/api";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

// Replace with your actual image URL prefix
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL || "https://example.com/uploads/";

const Navigation = () => {
  const [header, setHeader] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const res = await axiosClientAuth.get("/site-setting");
        setHeader(res?.data?.data?.[0] || {});
      } catch (err) {
        console.error("Error fetching header data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHeader();
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50">
      {/* 🔹 Top Bar */}
      {!loading && (
        <div className="bg-[#0146a3] text-white py-3 px-4 sm:px-6 lg:px-8 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <Link href={header?.facebook || "#"} target="_blank" className="hover:text-white text-base transition-colors">
                Facebook
              </Link>
              <Link href={header?.instagram || "#"} target="_blank" className="hover:text-white text-base transition-colors">
                Instagram
              </Link>
              <Link href={header?.twitter || "#"} target="_blank" className="hover:text-white text-base transition-colors">
                Twitter
              </Link>
              <Link href={header?.linkedin || "#"} target="_blank" className="hover:text-white text-base transition-colors">
                LinkedIn
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span>Email:</span>
              <Link
                href={`mailto:${header?.email || "info@example.com"}`}
                className="hover:text-white text-base transition-colors"
              >
                {header?.email || "info@example.com"}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 Main Navbar */}
      <nav className="mx-auto max-w-7xl">
        <div className="flex h-16 justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {header?.logo?.[0] ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_IMAGE}/${header.logo[0]}`}
                  alt="Logo"
                  width={150}
                  height={40}
                  className="object-contain"
                />
              ) : (
                <span className="font-bold text-xl text-foreground">Skylab Microminerals</span>
              )}

            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#212121] hover:text-[#0146a3] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-[#0146a3] hover:bg-[#0146a3]/90">
              <Link href="/contact"><Contact /> Enquiry</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              aria-label="Toggle Menu"
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden border-t py-4 transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}
        >
          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-[#212121] hover:text-[#0146a3] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
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
      </nav>
    </header>
  );
};

export default Navigation;
