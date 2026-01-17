"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CosmeticImage from "../../../../public/images/successful-business-meeting-in-industrial-setting.jpg";
import CP600Img from "../../../../public/images/productsimages/activatedcalciumImage.png";
import CP1100Img from "../../../../public/images/productsimages/calcium-powder-1100.webp";
import CP2100Img from "../../../../public/images/productsimages/calcium-powder-2100.webp";
import CP3100Img from "../../../../public/images/productsimages/calcium-powder-3100.webp";
import bgDefaultRow1 from "../../../../public/images/row-01.png";
import { ChevronDown } from "lucide-react";
import GetBestQuote from "@/app/getBestQuote";
import { useScroll, useTransform } from "framer-motion";

const UncoatedCalciumCarbonate = () => {
  const [showGetBestQuote, setShowGetBestQuote] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applications, setApplications] = useState([]);
  const [industrialData, setIndustrialData] = useState({});

  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 600], [0, -100]);
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
      question: "What is Limestone Powder?",
      answer: (
        <>
        Limestone Powder is finely ground Calcium Carbonate (CaCO₃) obtained from high-purity natural limestone. It is widely used as a filler, performance enhancer, and cost reducer in plastics and other industries.
        </>
      ),
    },
    {
      question: "How is Limestone Powder used in plastics?",
      answer: (
        <>
         It is used as a functional filler to improve stiffness, surface finish, dimensional stability, melt flow, and cost-efficiency in polymers such as PVC, PE, PP, and masterbatches.
        </>
      ),
    },
    {
      question: "What mesh sizes or micron ranges are available?",
      answer: (
        <>
          <p className="mb-3">Limestone Powder is typically available in:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>200–400 mesh</li>
            <li>5–25 micron</li>
            <li>Ultra-fine micronized grades (1–5 micron)</li>
          </ul>
          <p>Custom particle sizes can be produced based on application needs.</p>
        </>
      ),
    },
    {
      question: "Does Limestone Powder affect product color?",
      answer: (
        <>
         Yes—high-purity Limestone Powder enhances whiteness, brightness, and overall appearance of finished products, making it ideal for color-sensitive applications.
        </>
      ),
    },
    {
      question: "Is Limestone Powder safe to handle?",
      answer: (
        <>
         Yes, it is non-toxic and chemically stable. Standard dust-control practices such as masks and ventilation are recommended during handling.
        </>
      ),
    },
    {
      question: "How does Limestone Powder improve mechanical strength?",
      answer: (
        <>
         Its fine particles reinforce the polymer matrix, improving rigidity, hardness, and structural stability of plastic components.
        </>
      ),
    },
    {
      question: "Is Limestone Powder suitable for outdoor products?",
      answer: (
        <>
        Yes. It enhances UV stability and improves long-term weather resistance when used with suitable polymer additives.
        </>
      ),
    },
    {
      question: "Does Limestone Powder reduce production costs?",
      answer: (
        <>
          Absolutely. It acts as an economical filler, reducing polymer usage while maintaining performance, making it a key component for cost-optimized formulations.
        </>
      ),
    },
  ];

  return (
    <div>
  {/* Hero Section - Enhanced with more content */}
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-zoom-pulse"
        style={{ backgroundImage: `url(../images/productsimages/limestone-powder.jpg)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
    </div>
    
    <div className="relative z-10 text-center text-white max-w-5xl px-6 mx-auto">
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        <span className="text-sm font-medium">Industrial Minerals</span>
      </div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up">
        Limestone Powder
        <span className="block text-2xl md:text-3xl font-normal mt-4 text-gray-200">
          High-Purity Calcium Carbonate for Advanced Applications
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200 leading-relaxed">
        Premium-grade filler and functional additive engineered for plastics, paints, rubber, 
        and construction materials
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <button 
          onClick={() => setShowGetBestQuote(true)}
          className="px-8 py-3 bg-[#0057ff] hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Request Technical Sheet
        </button>
        <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300">
          View Applications
        </button>
      </div>
    </div>
    
    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>

  {/* Overview Section - Enhanced */}
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Limestone Powder
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              Limestone Powder (LSP) is derived from high-purity limestone rocks, primarily composed 
              of calcium carbonate (CaCO₃). The composition varies based on geological formation, 
              allowing us to offer tailored grades for specific industrial requirements.
            </p>
            <p className="text-lg leading-relaxed">
              Our advanced processing capabilities enable precise particle size control, ranging from 
              <span className="font-semibold text-blue-700"> 200 Mesh to 2 Microns</span>, ensuring 
              optimal performance across diverse applications.
            </p>
          </div>
          
          {/* Specifications */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">Chemical Formula</div>
              <div className="font-semibold text-lg">CaCO₃</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">Purity</div>
              <div className="font-semibold text-lg">95-99%</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">pH Range</div>
              <div className="font-semibold text-lg">8-9</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">Brightness</div>
              <div className="font-semibold text-lg">90-95%</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Characteristics</h3>
          <ul className="space-y-4">
            {[
              "High whiteness and brightness",
              "Excellent chemical stability",
              "Low abrasion value",
              "Controlled particle size distribution",
              "Free from toxic elements",
              "Consistent quality batch-to-batch"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#0057ff] rounded-full"></div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* Performance Advantages - Enhanced with icons and animation */}
  <section className="py-20 px-6 industrial-gradient">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Performance Advantages
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Engineered to enhance material properties across multiple dimensions
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/50 to-blue-100/50 rounded-3xl blur-xl"></div>
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <Image 
              src={CosmeticImage} 
              loading="lazy" 
              alt="Limestone Powder Applications" 
              className="rounded-xl w-full h-auto object-cover"
            />
            <div className="mt-6 grid grid-cols-2 gap-4">
              {["Plastics Industry", "Paints & Coatings", "Rubber", "Construction", "Paper", "Adhesives"].map((industry, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <div className="w-2 h-2 bg-[#0057ff] rounded-full"></div>
                  <span className="text-sm font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          {[
            {
              title: "Enhanced Mechanical Strength",
              description: "Improves tensile strength and impact resistance in polymer composites"
            },
            {
              title: "Cost-Effective Filler",
              description: "Reduces material costs while maintaining or improving performance"
            },
            {
              title: "Improved Processability",
              description: "Enhances melt flow and reduces processing energy requirements"
            },
            {
              title: "High Purity & Stability",
              description: "Chemically inert with consistent performance across conditions"
            },
            {
              title: "Superior Surface Finish",
              description: "Provides excellent whiteness and smooth surface characteristics"
            },
            {
              title: "Thermal Benefits",
              description: "Improves heat distribution and dimensional stability"
            },
            {
              title: "Versatile Applications",
              description: "Compatible with multiple industries and material systems"
            }
          ].map((advantage, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0057ff] to-[#0057ff] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Technical Performance Table - Enhanced */}
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Technical Improvements in Plastics
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive enhancement of plastic properties with limestone powder integration
        </p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gradient-to-r from-gray-900 to-gray-800">
                <th className="px-8 py-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Property
                </th>
                <th className="px-8 py-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Advantage & Benefit
                </th>
                <th className="px-8 py-6 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Typical Improvement
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  property: "Rigidity & Hardness",
                  advantage: "Improves stiffness and surface hardness",
                  improvement: "↑ 15-25%"
                },
                {
                  property: "Dimensional Stability",
                  advantage: "Reduces shrinkage and warpage during processing",
                  improvement: "↓ 30-40%"
                },
                {
                  property: "Surface Finish",
                  advantage: "Enhances smoothness and visual quality",
                  improvement: "↑ 20-30%"
                },
                {
                  property: "Thermal Conductivity",
                  advantage: "Improves heat distribution and cooling efficiency",
                  improvement: "↑ 25-35%"
                },
                {
                  property: "Melt Flow Performance",
                  advantage: "Better mold filling and reduced energy consumption",
                  improvement: "↑ 15-20%"
                },
                {
                  property: "Tensile Strength",
                  advantage: "Reinforces polymer matrix integrity",
                  improvement: "↑ 10-15%"
                },
                {
                  property: "Cost Optimization",
                  advantage: "Reduces polymer usage while maintaining performance",
                  improvement: "↓ 10-30% Cost"
                },
                {
                  property: "UV Resistance",
                  advantage: "Enhances weatherability and outdoor durability",
                  improvement: "↑ 20-25%"
                }
              ].map((row, index) => (
                <tr 
                  key={index} 
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#0057ff] rounded-full mr-3"></div>
                      <span className="font-semibold text-gray-900">{row.property}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-gray-700">{row.advantage}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                      {row.improvement}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Custom Specifications?</h3>
            <p className="text-gray-600">We can tailor limestone powder to your exact requirements</p>
          </div>
          <button 
            onClick={() => setShowGetBestQuote(true)}
            className="px-8 py-3 bg-[#0057ff] hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Request Custom Grade
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* Industry Applications - New Section */}
  <section className="py-20 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Industry Applications
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Versatile solutions across multiple sectors
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          {
            title: "Plastics & Polymers",
            applications: ["PVC pipes", "WPC", "Masterbatch", "Films", "Injection molding"],
            icon: "🧪"
          },
          {
            title: "Paints & Coatings",
            applications: ["Architectural paints", "Industrial coatings", "Textured finishes", "Primers"],
            icon: "🎨"
          },
          {
            title: "Construction",
            applications: ["Concrete", "Tile adhesives", "Grouts", "Plasters", "Sealants"],
            icon: "🏗️"
          },
          {
            title: "Rubber Industry",
            applications: ["Tire manufacturing", "Rubber sheets", "Gaskets", "Footwear"],
            icon: "🛞"
          },
          {
            title: "Paper Industry",
            applications: ["Filler", "Coating pigment", "Brightness enhancement"],
            icon: "📄"
          },
          {
            title: "Other Applications",
            applications: ["Adhesives", "Animal feed", "Water treatment", "Cosmetics"],
            icon: "⚗️"
          }
        ].map((industry, index) => (
          <div 
            key={index} 
            className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-4xl mb-6">{industry.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{industry.title}</h3>
            <ul className="space-y-3">
              {industry.applications.map((app, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-700">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Why Choose Us - Enhanced */}
  <section className="py-20 px-6 industrial-gradient">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Why Industry Leaders <span className="text-blue-700">Choose Our</span> Limestone Powder?
          </h2>
          
          <div className="space-y-2">
            {[
              {
                title: "Uncompromised Quality Control",
                description: "Every batch undergoes rigorous testing for consistency, purity, and particle size distribution"
              },
              {
                title: "Technical Expertise",
                description: "Dedicated R&D team for custom formulations and application-specific solutions"
              },
              {
                title: "Sustainable Sourcing",
                description: "Responsibly mined and processed with minimal environmental impact"
              },
              {
                title: "Reliable Supply Chain",
                description: "Guaranteed timely delivery with nationwide logistics network"
              },
              {
                title: "Cost Optimization",
                description: "Significant material cost reduction without compromising performance"
              },
              {
                title: "Technical Support",
                description: "Comprehensive application guidance and troubleshooting support"
              }
            ].map((reason, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#a6c3fd] to-[#0057ff] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-700">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-blue-100 rounded-3xl blur-xl"></div>
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <Image 
              src={CosmeticImage} 
              loading="lazy" 
              alt="Quality Assurance" 
              className="rounded-xl w-full h-auto mb-8"
            />
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Certifications</h3>
                <div className="flex justify-center space-x-6">
                  {["ISO 9001", "ISO 14001", "GMP", "REACH"].map((cert, idx) => (
                    <span key={idx} className="px-4 py-2 bg-gray-100 rounded-lg font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setShowGetBestQuote(true)}
                className="w-full py-4 bg-gradient-to-r from-[#0057ff] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                Download Technical Data Sheet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  {/* FAQ Section - Enhanced */}
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600">
          Get answers to common questions about limestone powder
        </p>
      </div>
      
      <div className="space-y-4">
        {[
          {
            question: "What is the typical calcium carbonate content in your limestone powder?",
            answer: "Our limestone powder typically contains 95-99% calcium carbonate (CaCO₃), with variations available based on specific application requirements and purity grades."
          },
          {
            question: "Can you provide custom particle size distributions?",
            answer: "Yes, we offer custom micronization services to achieve specific particle size distributions ranging from 200 Mesh to 2 Microns, tailored to your application needs."
          },
          {
            question: "How does limestone powder improve plastic properties?",
            answer: "Limestone powder enhances plastic properties by improving rigidity, dimensional stability, surface finish, and thermal conductivity while reducing material costs and processing energy."
          },
          {
            question: "Is your limestone powder suitable for food contact applications?",
            answer: "We offer food-grade limestone powder that complies with FDA regulations for direct and indirect food contact applications."
          },
          {
            question: "What packaging options are available?",
            answer: "We provide multiple packaging options including 25kg and 50kg bags, bulk bags (FIBC), and customized packaging solutions based on customer requirements."
          },
          {
            question: "Do you offer technical support for application development?",
            answer: "Yes, our technical team provides comprehensive support including formulation guidance, trial assistance, and troubleshooting for optimal product performance."
          }
        ].map((faq, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full px-8 py-6 text-left group"
            >
              <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[#0057ff]" : ""
                  }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-8 pb-6 pt-2">
                <div className="text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-8">
          Have more specific questions? Our technical experts are ready to help.
        </p>
        <button 
          onClick={() => setShowGetBestQuote(true)}
          className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#0057ff] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Contact Technical Support
        </button>
      </div>
    </div>
  </section>
  
  {/* CTA Section - New */}
  <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Ready to Enhance Your Products?
      </h2>
      <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
        Get in touch with our team to discuss how our high-quality limestone powder 
        can improve your products and reduce costs.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <button 
          onClick={() => setShowGetBestQuote(true)}
          className="px-10 py-4 bg-[#0057ff] hover:bg-[#0057ff] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Request Free Sample
        </button> 
      </div>
      <div className="mt-12 pt-8 border-t border-gray-700">
        <div className="grid md:grid-cols-3 gap-8 text-gray-400">
          <div>
            <div className="font-semibold text-white mb-2">Email</div>
            <div>alwarrmpl@gmail.com</div>
          </div>
          <div>
            <div className="font-semibold text-white mb-2">Phone</div>
            <div>9983211547</div>
          </div>
          <div>
            <div className="font-semibold text-white mb-2">Response Time</div>
            <div>Within 24 business hours</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <GetBestQuote isOpen={showGetBestQuote} onClose={() => setShowGetBestQuote(false)} />
</div>
  )
}

export default UncoatedCalciumCarbonate
