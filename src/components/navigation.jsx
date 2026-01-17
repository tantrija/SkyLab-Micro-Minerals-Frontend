// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu, X, Contact, Phone } from "lucide-react";
// import axiosClientAuth from "@/Services/api";
// import Image from "next/image";
// import WhatsAppIcon from '../../public/images/WhatsApp.svg'
// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/about" },
//   { name: "Services", href: "/services" },
//   // { name: "Gallery", href: "/gallery" },
//   { name: "Contact Us", href: "/contact" },
// ];


// const Navigation = () => {
//   const [header, setHeader] = useState({});
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchHeader = async () => {
//       try {
//         const res = await axiosClientAuth.get("/site-setting");
//         console.log(res.data.data);

//         setHeader(res?.data?.data || {});
//       } catch (err) {
//         console.error("Error fetching header data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchHeader();
//   }, []);

//   return (
//     <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
//       {/* 🔹 Top Bar */}
//       {!loading && (
//         <div className="bg-[#f9f9f9] py-3 px-4 sm:px-6 lg:px-8 md:block border-b obrder-[#ececec]">
//           <div className="max-w-7xl mx-auto md:flex grid gap-2 justify-between items-center text-sm">

//             <div className="flex items-center gap-2">
//               <span>Email:</span>
//               <Link
//                 href={`mailto:${header?.email || "alwarrmpl@gmail.com"}`}
//                 className="text-black text-base transition-colors"
//               >
//                 {header?.email || "alwarrmpl@gmail.com"}
//               </Link>
//             </div>
//             <div className="flex items-center gap-2">
//               <span>Contact Us:</span>
//               <div className="flex items-center gap-1">
//                 <Link
//                   href="tele:+919983211547"
//                   className="text-black text-base transition-colors"
//                 >
//                   +91-9983211547,
//                 </Link>
//                 <Link
//                   href="tele:+919214356044"
//                   className="text-black text-base transition-colors"
//                 >
//                   9214356044
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 🔹 Main Navbar */}
//       <nav className="mx-auto max-w-7xl">
//         <div className="flex h-16 justify-between items-center px-4 sm:px-6 lg:px-8">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center space-x-2">
//               {header?.logo ? (
//                 <Image
//                   src={`${process.env.NEXT_PUBLIC_API_IMAGE}${header.logo}`}
//                   alt="Logo"
//                   width={150}
//                   height={40}
//                   className="object-contain"
//                 />
//               ) : (
//                 <span className="font-bold text-2xl text-foreground text-[#0057ff]">Skylab <span>Microminerals</span></span>
//               )}

//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-[#212121] hover:text-[#0057ff] transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//             {/* <Button asChild className="bg-[#0057ff] hover:bg-[#0057ff]/90">
//               <Link href="/contact"><Contact /> Enquiry</Link>
//             </Button> */}
//             <a href={`https://wa.me/${header.phone}`} // WhatsApp link
//               className="bg-[#29b63e] text-white px-5 py-2 rounded-lg hidden lg:flex items-center gap-3"
//               target="_blank" // open in new tab
//               rel="noopener noreferrer"
//             >
//               <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//                 <Phone className="h-5 w-5" />
//                 <Image src={WhatsAppIcon} alt="WhatsApp" className="" />
//               </div>
//               <div>
//                 <div className="text-sm opacity-90">Get a Quote</div>
//                 <div className="font-semibold">+91-9983211547</div>
//               </div>
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <Button
//               aria-label="Toggle Menu"
//               variant="ghost"
//               size="lg"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="bg-[#0057ff] text-white"
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div
//           className={`md:hidden border-t py-2 transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
//             }`}
//         >
//           <div className="space-y-2">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="block px-3 py-2 text-[#212121] hover:text-[#0057ff] transition-colors"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <div className="pt-4 md:mx-0 mx-2">
//               {/* <Button asChild className="w-full bg-[#0057ff] hover:bg-[#0057ff]/90">
//                 <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
//                   <Contact /> Enquiry
//                 </Link>
//               </Button> */}
//               <a href={`https://wa.me/${header.phone}`} // WhatsApp link
//                 className="bg-[#29b63e] text-white px-5 py-2 rounded-lg hidden lg:flex items-center gap-3"
//                 target="_blank" // open in new tab
//                 rel="noopener noreferrer"
//               >
//                 <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//                   <Phone className="h-5 w-5" />
//                   <Image src={WhatsAppIcon} alt="WhatsApp" className="" />
//                 </div>
//                 <div>
//                   <div className="text-sm opacity-90">Get a Quote</div>
//                   <div className="font-semibold">+91-9983211547</div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navigation;


"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import axiosClientAuth from "@/Services/api";
import Image from "next/image";
import WhatsAppIcon from '../../public/images/WhatsApp.svg';

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const Navigation = () => {
  const [header, setHeader] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const res = await axiosClientAuth.get("/site-setting");
        setHeader(res?.data?.data || {});
      } catch (err) {
        console.error("Error fetching header data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHeader();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactNumbers = header?.phone?.split(",") || ["+91-9983211547", "9214356044"];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg border-b border-gray-100" : "bg-white border-b border-gray-100"
      }`}>
      {/* 🔹 Top Contact Bar */}
      {!loading && (
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 py-2.5 px-4 sm:px-6 lg:px-8 hidden md:block">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm text-gray-600">
            <div className="flex items-center gap-6">
              {/* Email */}
              <Link
                href={`mailto:${header?.email || "alwarrmpl@gmail.com"}`}
                className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
              >
                <Mail className="w-4 h-4 text-blue-500 group-hover:text-blue-600" />
                <span className="font-medium">{header?.email || "alwarrmpl@gmail.com"}</span>
              </Link>

              {/* Phone Numbers */}
              <div className="flex items-center gap-4">
                {contactNumbers.map((number, index) => (
                  <Link
                    key={index}
                    href={`tel:${number.trim()}`}
                    className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-blue-500 group-hover:text-blue-600" />
                    <span className="font-medium">{number.trim()}</span>
                  </Link>
                ))}
              </div>
            </div>

             
            <a href={`https://wa.me/${header.phone}`} // WhatsApp link
              className="bg-[#29b63e] text-white px-5 py-2 rounded-lg hidden lg:flex items-center gap-3"
              target="_blank" // open in new tab
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5" />
                <Image src={WhatsAppIcon} alt="WhatsApp" className="" />
              </div>
              <div>
                <div className="text-sm opacity-90">Get a Quote</div>
                <div className="font-semibold">+91-9983211547</div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* 🔹 Main Navbar */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              {header?.logo ? (
                <div className="relative w-40 h-12 md:w-48 md:h-14">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_IMAGE}${header.logo}`}
                    alt="Logo"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-200"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="font-bold text-2xl md:text-3xl text-blue-600">
                    Skylab Microminerals
                  </span>
                  <span className="text-xs text-gray-500 tracking-wider">
                    PRECISION & QUALITY
                  </span>
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm uppercase tracking-wide group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Desktop CTA */}
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Get Free Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile WhatsApp Button */}
            <a
              href={`https://wa.me/${contactNumbers[0]?.replace(/\D/g, '')}`}
              className="bg-green-600 text-white p-2 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={WhatsAppIcon}
                alt="WhatsApp"
                className="w-5 h-5 brightness-0 invert"
              />
            </a>

            <Button
              aria-label="Toggle Menu"
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-x-0 top-0 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <Link
                href="/"
                className="flex items-center space-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {header?.logo ? (
                  <div className="relative w-32 h-10">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_IMAGE}${header.logo}`}
                      alt="Logo"
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>
                ) : (
                  <span className="font-bold text-xl text-blue-600">
                    Skylab Microminerals
                  </span>
                )}
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 overflow-y-auto py-6">
              <div className="space-y-1 px-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    <div className="w-2 h-2 rounded-full bg-blue-100"></div>
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-8 px-4 space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Info</h3>

                  <Link
                    href={`mailto:${header?.email || "alwarrmpl@gmail.com"}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Mail className="w-5 h-5 text-blue-500" />
                    <span>{header?.email || "alwarrmpl@gmail.com"}</span>
                  </Link>

                  {contactNumbers.map((number, index) => (
                    <Link
                      key={index}
                      href={`tel:${number.trim()}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Phone className="w-5 h-5 text-blue-500" />
                      <span>{number.trim()}</span>
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 text-base font-semibold rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="/contact">
                      Get Free Quote
                    </Link>
                  </Button>

                  <a
                    href={`https://wa.me/${contactNumbers[0]?.replace(/\D/g, '')}`}
                    className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      src={WhatsAppIcon}
                      alt="WhatsApp"
                      className="w-5 h-5 brightness-0 invert"
                    />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Navigation;