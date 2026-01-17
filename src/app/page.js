"use client";
import Link from "next/link"
import HeroPage from "@/components/landing/hero"
import Committed from "@/components/landing/committed"
import Services from "@/components/landing/services"
import Team from "@/components/landing/team"
import BigHeadline from "@/components/landing/big-headline"
import StatsBanner from "@/components/landing/stats-banner"
import FAQ from "@/components/landing/faq"
import WhyChooseSection from "@/components/landing/why-choose"
import { CheckCircle, Zap } from "lucide-react"
import Image from "next/image"
import { useState } from "react";
import PaintsCoatings from "../../public/images/services/PaintsCoatings.jpg"
import PaperPrintingImg from "../../public/images/services/PaperPrinting.jpg"
import CeramicsImg from "../../public/images/services/Ceramics.jpg"
import PlasticsMasterbatchIndustryImg from "../../public/images/services/PlasticsMasterbatchIndustry.webp"
import RubberIndustryImg from "../../public/images/services/RubberIndustry.jpg"
import AquacultureImg from "../../public/images/services/Aquaculture.avif"
import DetergentsImg from "../../public/images/services/Detergents.jpg"
import GetBestQuote from "./getBestQuote"


import CP600Img from "../../public/images/productsimages/coated-calcium-carbonate-powder-0001.jpg";
import CP1100Img from "../../public/images/productsimages/calcium-powder-1100.webp";
import CP2100Img from "../../public/images/productsimages/calcium-powder-2100.webp";
import CP3100Img from "../../public/images/productsimages/calcium-powder-3100.webp";
import CCP600Img from "../../public/images/productsimages/coated-calcium-powder-c600.webp";
import CCP2100Img from "../../public/images/productsimages/coated-calcium-carbonate-011.avif";
import CCP3100Img from "../../public/images/productsimages/coated-calcium-carbonate-12.webp";
import ActivatedCalciumImage from "../../public/images/activatedcalciumImage.png";




const HomePage = () => {
  const [showGetBestQuote, setShowGetBestQuote] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroPage />

      <section className="py-20 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-[#0057ff] px-5 py-2.5 rounded-full text-sm font-semibold mb-6 fade-in-up shadow-sm border border-blue-100">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
              </svg>
              Our Premium Products
            </div>
            <h2 className="text-headline fade-in-up stagger-1 mb-6 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Engineered for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Industrial Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto fade-in-up stagger-2 leading-relaxed">
              Discover our comprehensive range of premium industrial solutions designed for superior performance and reliability
            </p>
          </div>


          {/* Product Grid - Uncoated Calcium Powder */}
          <div className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Uncoated Calcium Powder</h3>
                <p className="text-gray-500 mt-1">High-purity solutions for industrial applications</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                </svg>
                <span>4 products</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Product Card 1 */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
                <div className="relative overflow-hidden h-52 bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={CP600Img}
                    alt="SM - 600"
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                    Best Seller
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">SM - 2020</h3>

                  <div className="flex items-center justify-between mt-6">
                    <button
                      onClick={() => setShowGetBestQuote(true)}
                      className="w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md inline-flex items-center justify-between gap-2"
                    >
                      Get Quote
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
                <div className="relative overflow-hidden h-52 bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={CP1100Img}
                    alt="SM - 1100"
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">SM - 3030</h3>

                  <div className="flex items-center justify-between mt-6">

                    <button
                      onClick={() => setShowGetBestQuote(true)}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md inline-flex items-center justify-between gap-2"
                    >
                      Get Quote
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
                <div className="relative overflow-hidden h-52 bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={CP2100Img}
                    alt="SM - 2100"
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">SM - 4040</h3>

                  <div className="flex items-center justify-between mt-6">

                    <button
                      onClick={() => setShowGetBestQuote(true)}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md inline-flex items-center justify-between gap-2"
                    >
                      Get Quote
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 4 */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
                <div className="relative overflow-hidden h-52 bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={CP3100Img}
                    alt="Calcium Powder 3100"
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">SM - 5050</h3>

                  <div className="flex items-center justify-between mt-6">
                    <button
                      onClick={() => setShowGetBestQuote(true)}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md inline-flex items-center justify-between gap-2"
                    >
                      Get Quote
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coated Calcium Powder Section */}
          <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 rounded-3xl p-4 md:p-5 mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Coated Calcium Powder</h3>
                </div>
                <p className="text-gray-600 ml-13">Surface-treated for enhanced performance and durability</p>
              </div>
              <div className="hidden sm:block">
                <span className="text-sm font-medium text-blue-600 bg-white/80 px-4 py-2 rounded-full border border-blue-100">
                  Advanced Coating Technology
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { img: ActivatedCalciumImage, title: "SM - T2020", color: "blue" },
                { img: CCP2100Img, title: "SM - T3030", color: "green" },
                { img: CCP3100Img, title: "SM - T4040", color: "purple" },
                { img: CCP600Img, title: "SM - T5050", color: "amber" }
              ].map((product, index) => (
                <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-white">
                  <div className="relative overflow-hidden h-56 bg-gradient-to-br from-gray-50 to-blue-50/50">
                    <Image
                      src={product.img}
                      alt={product.title}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                    <div className="mt-6">

                      <button
                        onClick={() => setShowGetBestQuote(true)}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md text-sm"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 pt-8 border-t border-blue-100/50">
              <p className="text-gray-600 mb-6">Need a custom formulation or bulk pricing?</p>
              <button
                onClick={() => setShowGetBestQuote(true)}
                className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-medium py-3 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Contact Our Sales Team
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-semibold mb-4">Industries We Serve</h3>
            <p className="text-base text-gray-700 max-w-2xl mx-auto">We support third-party inspections by any customer-approved laboratory prior to shipment, ensuring complete transparency and quality assurance.</p>

            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Paints & Coatings",
                description: "We supply a range of functional fillers—especially Calcium Carbonate—used across multiple coating applications. Available in particle sizes ranging from below 1.0 micrometer to large decorative white chips, our products enhance opacity, brightness, and overall coating quality",
                image: PaintsCoatings,
                icon: "🎨"
              },
              {
                title: "Paper & Printing",
                description: "Our bright white Calcium Carbonate is used both as a filler in alkaline papermaking and as a coating pigment. Alkaline papers produced using Calcium Carbonate offer longer durability and improved printability, making this an increasingly preferred choice in modern papermaking.",
                image: PaperPrintingImg,
                icon: "📄"
              },
              {
                title: "Ceramics",
                description: "Calcium Carbonate is a key raw material in ceramic production. As an economical source of calcium oxide, it acts as a melting agent, improves mechanical and chemical strength, and reduces firing shrinkage—enhancing the overall quality and durability of ceramic products.",
                image: CeramicsImg,
                icon: "🏺"
              },
              {
                title: "Plastics & Masterbatch Industry",
                description: "Coated calcium carbonate improves plastic strength, surface finish, thermal resistance, and processing efficiency. It reduces raw material cost in PVC, PP, PE films, and molding applications.",
                image: PlasticsMasterbatchIndustryImg,
                icon: "🔄"
              },
              {
                title: "Rubber Industry",
                description: "Used as a reinforcing filler in tyres, hoses, belts, and footwear soles. It enhances durability, elasticity, and abrasion resistance while lowering production cost.",
                image: RubberIndustryImg,
                icon: "🛞"
              },
              {
                title: "Aquaculture",
                description: "Our products are very useful in the aquaculture industry as a disinfectant because they reduce soil acidity and can sterilize the top few inches of soil.",
                image: AquacultureImg,
                icon: "🐟"
              },
              {
                title: "Detergents",
                description: "Dolomite is used as a filler in detergents as it brightens it's colour and helps in enhancing the shade of detergents. It is used just as a filler.",
                image: DetergentsImg,
                icon: "🧼"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white text-2xl">{service.icon}</span>
                  </div>
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                    <span className="text-xl">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-8 bg-blue-600 rounded-full mr-3"></div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <button
                    onClick={() => setShowGetBestQuote(true)}
                    className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-300"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Committed />

      <WhyChooseSection />
      <StatsBanner />

      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-20 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
              Why Customers <br /> Love To Choose Us?
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Our Mines Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⛏️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mines</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Skylab Microminerals for Chemicals & Mining offers an extensive range of Ground and Coated Calcium Powder products, along with Talc powder, designed for diverse industrial applications. Backed by years of industry expertise and global R&D capabilities, we provide guidance on optimal mineral usage and can develop customized products to meet specific performance requirements.
              </p>
            </div>

            {/* Our Products Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Products</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Skylab Microminerals for Chemicals & Mining offers an extensive range of Ground and Coated Calcium Powder products, along with Talc powder, designed for diverse industrial applications. Backed by years of industry expertise and global R&D capabilities, we provide guidance on optimal mineral usage and can develop customized products to meet specific performance requirements.
              </p>
            </div>

            {/* Our Plants Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-r-4 border-purple-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Plants</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our newest dry-milling line incorporates state-of-the-art German milling and classifier technology. By mid-year, we will introduce a new ball-mill line to double our production capacity. Our advanced coating system—one of the most sophisticated in India—produces premium Coated Calcium Powder that delivers cost-saving, high-performance solutions across multiple industries.
              </p>
            </div>

            {/* Our Logistics Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-b-4 border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Logistics</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                With decades of experience, Royal Minerals ensures reliable, on-time delivery—an essential factor for our global clients. Our expertise in transportation and specialized handling allows us to serve Calcium Powder and Talc customers in more than 60 countries. We also offer import consolidation services and understand the unique shipping needs of our international partners.
              </p>
            </div>

            {/* Our Quality System Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-cyan-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Quality System</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                In our laboratory, experienced staff operate the latest analytical technologies to maintain strict quality control at every stage of production. All equipment undergoes regular calibration and maintenance. Continuous sampling throughout the manufacturing process ensures consistent, reliable product quality.
              </p>
            </div>
          </div>

          {/* Optional: Stats Section */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Skilled Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Quality Control</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-1 md:px-8 space-y-16 md:space-y-24">

        <FAQ />
      </section>
      <GetBestQuote isOpen={showGetBestQuote} onClose={() => setShowGetBestQuote(false)} />
    </div>
  )
}


export default HomePage