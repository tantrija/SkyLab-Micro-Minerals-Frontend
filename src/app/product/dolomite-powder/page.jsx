"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import CosmeticImage from "../../../../public/images/successful-business-meeting-in-industrial-setting.jpg";
import CP600Img from "../../../../public/images/productsimages/activatedcalciumImage.png";
import bgDefaultRow1 from "../../../../public/images/row-01.png";
import CCP600Img from "../../../../public/images/productsimages/coated-calcium-powder-c600.webp";
import CCP2100Img from "../../../../public/images/productsimages/coated-calcium-carbonate-011.avif";
import CCP3100Img from "../../../../public/images/productsimages/coated-calcium-carbonate-12.webp";
import { ChevronDown } from "lucide-react";
import GetBestQuote from "@/app/getBestQuote";
import { useScroll } from "framer-motion";
import Head from "next/head";

const CoatedCalciumPowder = () => {
  const [showGetBestQuote, setShowGetBestQuote] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applications, setApplications] = useState([]);
  const [industrialData, setIndustrialData] = useState({});

  const { scrollY } = useScroll();
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  useEffect(() => {
    const fetchIndustrialLeadership = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

        const res = await axios.get(`${API_URL}/royal/industrial-leadership`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
        setIndustrialData(res?.data?.data?.data?.[0] || {});
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchIndustrialLeadership();
  }, []);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setError(null);
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
        if (!API_URL || !API_TOKEN) throw new Error("API variables missing");

        const res = await fetch(`${API_URL}/royal/applications`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
        const json = await res.json();
        setApplications(json.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const faqs = [
    {
      question: "What is Dolomite Powder?",
      answer: (
        <>
          Dolomite Powder is a mineral filler composed of Calcium Magnesium Carbonate. It is widely used in plastics, rubber, paints, ceramics, agriculture, and construction for improving mechanical and thermal properties.
        </>
      ),
    },
    {
      question: "How does Dolomite Powder differ from Limestone Powder?",
      answer: (
        <>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Dolomite = Calcium + Magnesium Carbonate</li>
            <li>Limestone = Primarily Calcium Carbonate</li>
          </ul>
          <p>Dolomite provides better impact resistance, elasticity, and thermal stability due to its magnesium content.</p>
        </>
      ),
    },
    {
      question: "Why is Dolomite Powder used in plastics?",
      answer: (
        <>
          <p className="mb-3">Because it enhances:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Rigidity and impact strength</li>
            <li>Thermal resistance</li>
            <li>Surface quality</li>
            <li>Dimensional stability</li>
            <li>Whiteness and color performance</li>
          </ul>
        </>
      ),
    },
    {
      question: "What particle sizes are available?",
      answer: (
        <>
          <p className="mb-3">Typical grades include:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>200–600 mesh</li>
            <li>5–25 micron</li>
            <li>Micronized and ultrafine grades</li>
          </ul>
          <p>Custom sizing is available depending on application.</p>
        </>
      ),
    },
    {
      question: "What particle size grades are available?",
      answer: (
        <>
          Yes. It is non-toxic and environmentally safe. Standard dust protection (masks/ventilation) is recommended during use.
        </>
      ),
    },
    {
      question: "Does Dolomite improve product strength?",
      answer: (
        <>
          <p className="mb-3">
            Yes. Its dual Ca–Mg structure improves:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tensile strength</li>
            <li>Impact resistance</li>
            <li>Surface durability</li>
          </ul>
          <p>This makes it ideal for PVC, PP, PE, and masterbatch applications.</p>
        </>
      ),
    },

  ];

  return ( 

<div className="min-h-screen bg-white">
  {/* Head Section with Title and Description */}
  <Head>
    <title>Premium Dolomite Powder Manufacturer | High-Quality Calcium Magnesium Carbonate</title>
    <meta 
      name="description" 
      content="Leading manufacturer of high-purity dolomite powder in India. Custom grades from 200 Mesh to 2 Microns. Enhances mechanical strength & thermal stability for plastics, paints, ceramics & construction." 
    />
    <meta name="keywords" content="dolomite powder, calcium magnesium carbonate, industrial minerals, filler material, plastics additive, ceramics raw material" />
  </Head>

  {/* Hero Section */}
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 animate-zoom-slow"
        style={{ backgroundImage: `url(../images/productsimages/dolomite-powder.jpg)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
    
    <div className="relative z-10 text-white max-w-7xl mx-auto px-6 lg:px-8 w-full">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Leading Manufacturer in India</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up">
          Dolomite Powder
          <span className="block text-3xl md:text-4xl font-normal mt-2 text-blue-100">
            Premium Quality Calcium Magnesium Carbonate
          </span>
        </h1>
        
        <p className="text-xl mb-8 text-gray-200 max-w-xl animate-fade-up animation-delay-200">
          High-purity dolomite powder for enhanced mechanical strength and thermal stability across multiple industries.
        </p>
        
        <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-300">
          <button 
            onClick={() => setShowGetBestQuote(true)}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            Get Best Quote
          </button>
          <button className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all duration-300">
            Technical Specifications
          </button>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
  </section>

  {/* Quick Stats */}
  <section className="py-12 bg-gray-50 -mt-1">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-2">200 Mesh</div>
          <div className="text-gray-600">To 2 Microns</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
          <div className="text-gray-600">Purity Level</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
          <div className="text-gray-600">Industry Applications</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-2">ISO</div>
          <div className="text-gray-600">Certified Quality</div>
        </div>
      </div>
    </div>
  </section>

  {/* Introduction */}
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Premium Dolomite Powder Solutions
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We are one of India's leading manufacturers and suppliers of high-quality dolomite powder. 
              Our product is sourced from carefully selected mining areas to ensure optimal calcium and 
              magnesium composition.
            </p>
            <p>
              We offer customized grades of dolomite powder tailored to specific industrial requirements, 
              with particle sizes ranging from 200 Mesh to 2 Microns. Our advanced processing technology 
              ensures consistent quality and performance.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src={CosmeticImage} 
              alt="Dolomite Powder Production" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
            <div className="text-sm text-gray-600">Available Sizes</div>
            <div className="text-lg font-semibold">200 Mesh - 2 Microns</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Key Advantages */}
  <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
          Performance Advantages
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Choose Our Dolomite Powder?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Engineered for superior performance across diverse industrial applications
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: "⚡",
            title: "Enhanced Mechanical Strength",
            description: "Increases rigidity and durability in composite materials"
          },
          {
            icon: "⚖️",
            title: "Balanced Composition",
            description: "Optimal calcium-magnesium ratio for consistent performance"
          },
          {
            icon: "🔥",
            title: "Thermal Stability",
            description: "Withstands high-temperature processing conditions"
          },
          {
            icon: "✨",
            title: "Superior Finish",
            description: "Enhances surface smoothness and aesthetic appeal"
          },
          {
            icon: "📊",
            title: "Better Dispersion",
            description: "Uniform particle distribution for homogeneous mixtures"
          },
          {
            icon: "💰",
            title: "Cost-Effective",
            description: "High-performance filler reducing production costs"
          }
        ].map((item, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Technical Specifications */}
  <section className="py-20 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Technical Performance Data
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive improvements in plastic manufacturing and processing
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Property Enhancements
          </h3>
          <div className="space-y-6">
            {[
              { property: "Mechanical Strength", improvement: "+40%" },
              { property: "Thermal Resistance", improvement: "+35%" },
              { property: "Surface Finish", improvement: "+50%" },
              { property: "Dimensional Stability", improvement: "+45%" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-medium text-gray-900">{item.property}</span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold">
                  {item.improvement}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="bg-blue-600 text-white px-6 py-4">
              <h3 className="text-xl font-bold">Performance Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Property
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Advantage
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { property: "Impact Resistance", advantage: "Magnesium enhances toughness" },
                    { property: "Melt Flow", advantage: "Better dispersion & processing" },
                    { property: "Color Quality", advantage: "Enhanced whiteness & brightness" },
                    { property: "Cost Efficiency", advantage: "Optimal performance ratio" }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.property}</td>
                      <td className="px-6 py-4 text-gray-700">{row.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Applications */}
  <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Industry Applications
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Versatile performance across multiple industrial sectors
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: "Plastics", icon: "🧪", count: "12+ Applications" },
          { name: "Paints", icon: "🎨", count: "8+ Formulations" },
          { name: "Ceramics", icon: "🏺", count: "6+ Processes" },
          { name: "Construction", icon: "🏗️", count: "10+ Uses" }
        ].map((industry, index) => (
          <div 
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
          >
            <div className="text-3xl mb-4">{industry.icon}</div>
            <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
            <p className="text-blue-200">{industry.count}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Find answers to common questions about our dolomite powder
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full px-8 py-6 text-left"
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${openIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                  {openIndex === index ? '−' : '+'}
                </div>
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
              </div>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>

            {openIndex === index && (
              <div className="px-8 pb-6 ml-12 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Elevate Your Products?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Get customized dolomite powder solutions for your specific needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setShowGetBestQuote(true)}
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
          >
            Request Custom Quote
          </button> 
        </div>
      </div>
    </div>
  </section>

  <GetBestQuote isOpen={showGetBestQuote} onClose={() => setShowGetBestQuote(false)} />
</div>
  )
}

export default CoatedCalciumPowder
