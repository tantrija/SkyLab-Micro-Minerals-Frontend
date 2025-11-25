"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Phone,
  Mail,
  MapPin,
  FacebookIcon, 
  X,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import Link from "next/link";
import LogoWebSite from '../../public/logo/RoyalMicrins.png'
import Image from "next/image";
const Footer = () => {
  const [footer, setFooter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        setError(null);

        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

        if (!API_URL || !API_TOKEN) throw new Error("API variables missing");

        const res = await axios.get(`${API_URL}/royal/site-setting`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        console.log("API Response:", res.data);
        setFooter(res.data.data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch footer data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFooter();
  }, []);

  if (loading) return null; // Or loader
  if (error) return <div className="text-red-500">{error}</div>;
  if (!footer) return null;

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="">
                <Image src={LogoWebSite} loading="lazy" alt="logo" className="rounded-sm object-contain w-[250px]"/>
              </div> 
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              {footer.footerText}
            </p>
            <div className="flex gap-2">
              {footer.facebook && (
                <a
                  href={footer.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-full p-2 flex items-center justify-center hover:bg-[#9b1c31]/90 transition-colors"
                >
                  <FacebookIcon />
                </a>
              )}
              {footer.twitter && (
                <a
                  href={footer.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-full p-2 flex items-center justify-center hover:bg-[#9b1c31]/90 transition-colors"
                >
                  <X />
                </a>
              )}
              {footer.instagram && (
                <a
                  href={footer.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-full p-2 flex items-center justify-center hover:bg-[#9b1c31]/90 transition-colors"
                >
                  <InstagramIcon />
                </a>
              )}
              {footer.linkedin && (
                <a
                  href={footer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-full p-2 flex items-center justify-center hover:bg-[#9b1c31]/90 transition-colors"
                >
                  <LinkedinIcon />
                </a>
              )}
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Useful Links</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#9b1c31] text-[#ffffff80] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="hover:text-[#9b1c31] text-[#ffffff80] transition-colors"
                >
                  Product
                </Link>
              </li>
              {/* <li>
                <a
                  href="/gallery"
                  className="hover:text-[#9b1c31] text-[#ffffff80] transition-colors"
                >
                  Gallery
                </a>
              </li> */}
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#9b1c31] text-[#ffffff80] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3 hover:text-[#9b1c31] text-[#ffffff80]">
                <MapPin className="h-4 w-4 mt-1 text-[#9b1c31]" />
                <span>{footer.address}</span>
              </div>
              <div className="flex items-center gap-3 hover:text-[#9b1c31] text-[#ffffff80]">
                <Phone className="h-4 w-4 text-[#9b1c31]" />
                <span>{footer.phone}</span>
              </div>
              <div className="flex items-center gap-3 hover:text-[#9b1c31] text-[#ffffff80]">
                <Mail className="h-4 w-4 text-[#9b1c31]" />
                <span>{footer.email}</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Newsletter</h3>
            <p className="text-sm text-white/80">
              Subscribe to our newsletter to get updates on our latest projects and services.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-1 py-3 bg-transparent border-0 border-b-[1px] border-b-gray-800 text-white focus:outline-none focus:ring-0 focus:none"
              />
              <button className="w-full bg-[#9b1c31] hover:bg-[#9b1c31]/90 text-white p-3 rounded-xl cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white/80">{footer.footerCopyright}</p>
          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              className="hover:text-[#9b1c31] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-[#9b1c31] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
