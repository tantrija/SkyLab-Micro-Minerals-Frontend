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
      question: "What is Quick Lime?",
      answer: (
        <>
         Quick Lime, also known as Calcium Oxide (CaO), is a highly reactive chemical compound produced by heating limestone. It is used across industries for moisture control, pH adjustment, purification, and material processing.
        </>
      ),
    },
    {
      question: "How is Quick Lime different from Hydrated Lime?",
      answer: (
        <>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Quick Lime (CaO) is the raw, highly reactive form.</li>
            <li>Hydrated Lime (Ca(OH)₂) is produced by adding water to Quick Lime.</li>
          </ul>
          <p>Quick Lime is preferred where strong reactivity, desiccant properties, or high heat generation are required.</p>
        </>
      ),
    },
    {
      question: "What are the major industrial applications of Quick Lime?",
      answer: (
        <>
          <p className="mb-3">Quick Lime is widely used in:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Plastics & rubber compounding (moisture control)</li>
            <li>Steel & metal refining</li>
            <li>Construction materials</li>
            <li>Water & wastewater treatment</li>
            <li>Chemical manufacturing</li>
            <li>Paper, sugar, and food processing</li>
            <li>Agriculture and soil treatment</li>
          </ul>
        </>
      ),
    },
    {
      question: "Why is Quick Lime used in plastics production?",
      answer: (
        <>
         Quick Lime acts as a powerful desiccant, removing residual moisture from polymers. This reduces defects such as bubbles, splay, fish-eyes, and improves mechanical strength and processing efficiency.
        </>
      ),
    },
    {
      question: "Is Quick Lime safe to handle?",
      answer: (
        <>
         Quick Lime is safe when proper precautions are followed. It is highly reactive with water and can generate heat. Use protective gloves, masks, and eye protection, and store it in dry, moisture-free conditions.
        </>
      ),
    },
    {
      question: "How should Quick Lime be stored?",
      answer: (
        <>
         Store in airtight, moisture-protected containers or bags. Exposure to moisture can cause premature reaction and reduce its effectiveness.
        </>
      ),
    },
    
  ];

  return (
    <div>
  {/* Hero Section with Enhanced Design */}
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(../images/productsimages/quick-lime.jpg)` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
    
    {/* Animated Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0057ff]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0057ff]/5 rounded-full blur-3xl" />
    </div>
    
    <div className="relative z-10 text-center text-white max-w-6xl px-6">
      <div className="inline-flex items-center gap-2 bg-[#0057ff]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#0057ff]/30">
        <span className="w-2 h-2 bg-[#0057ff] rounded-full animate-pulse"></span>
        <span className="text-sm font-medium">Industrial Grade</span>
      </div>
      
      <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
        Quick Lime
        <span className="block text-3xl md:text-4xl font-normal mt-4 text-[#0057ff]">
          Calcium Oxide (CaO) · Burnt Lime
        </span>
      </h1>
      
      <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
        High-purity Calcium Oxide produced through precise thermal decomposition above 900°C for superior industrial performance
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
          <div className="text-[#0057ff] font-bold text-lg">CaO Content</div>
          <div className="text-white">≥ 90%</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
          <div className="text-[#0057ff] font-bold text-lg">Reactivity</div>
          <div className="text-white">High</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
          <div className="text-[#0057ff] font-bold text-lg">Form</div>
          <div className="text-white">Powder/Granules</div>
        </div>
      </div>
    </div>
    
    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <div className="animate-bounce">
        <svg className="w-6 h-6 text-[#0057ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>

  {/* Introduction Section with Enhanced Details */}
  <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            What is <span className="text-[#0057ff]">Quick Lime</span>?
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              Quick lime, chemically known as <strong>Calcium Oxide (CaO)</strong>, is a white, caustic, alkaline crystalline solid produced through the thermal decomposition of limestone or other calcium carbonate materials at temperatures exceeding 900°C.
            </p>
            
            <div className="bg-[#0057ff]/5 border-l-4 border-[#0057ff] p-4 rounded-r-lg">
              <h4 className="font-bold text-[#0057ff] mb-2">Production Process</h4>
              <p>CaCO₃ (Limestone) + Heat (900°C+) → CaO (Quick Lime) + CO₂</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-[#0057ff] font-bold">CAS Number</div>
                <div className="text-gray-700">1305-78-8</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-[#0057ff] font-bold">Molecular Weight</div>
                <div className="text-gray-700">56.08 g/mol</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-[#0057ff]/10 to-transparent p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Key Characteristics</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#0057ff] rounded-full"></div>
              <span>Highly reactive with water (exothermic reaction)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#0057ff] rounded-full"></div>
              <span>Strong alkaline properties (pH ~12.4)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#0057ff] rounded-full"></div>
              <span>Melting point: 2,572°C (4,662°F)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#0057ff] rounded-full"></div>
              <span>Density: 3.34 g/cm³</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Performance Advantages Section - Enhanced */}
  <div className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#0057ff]/10 px-4 py-2 rounded-full mb-4">
          <span className="text-[#0057ff] font-bold">PERFORMANCE</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Key Performance <span className="text-[#0057ff]">Advantages</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Engineered for exceptional industrial performance across multiple applications
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#0057ff]/10 to-transparent rounded-3xl blur-xl opacity-50"></div>
          <Image 
            src={CosmeticImage} 
            loading="lazy" 
            alt="Quick Lime Industrial Application" 
            className="relative rounded-2xl shadow-2xl max-w-full"
          />
        </div>
        
        <div className="space-y-2">
          {[
            {
              title: "Enhanced Purity Levels",
              description: "Minimum 90% CaO content ensuring consistent chemical reactivity and predictable performance"
            },
            {
              title: "Superior Moisture Absorption",
              description: "Exceptional hygroscopic properties for effective drying and moisture control in manufacturing"
            },
            {
              title: "Thermal Stability",
              description: "Maintains structural integrity at high temperatures up to 2,500°C"
            },
            {
              title: "High Reactivity Rate",
              description: "Fast reaction times with water and acids for efficient industrial processing"
            },
            {
              title: "Cost-Effective Optimization",
              description: "Reduces processing time and energy consumption while improving yield"
            },
            {
              title: "Versatile Particle Size",
              description: "Available in multiple granulations from fine powder to coarse aggregates"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group bg-white p-4 rounded-xl border border-gray-200 hover:border-[#0057ff]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#0057ff]/10 rounded-lg flex items-center justify-center group-hover:bg-[#0057ff]/20 transition-colors">
                  <span className="text-[#0057ff] font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#0057ff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Technical Specifications Table - Enhanced */}
  <div className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#0057ff]/10 px-4 py-2 rounded-full mb-4">
          <span className="text-[#0057ff] font-bold">TECHNICAL SPECIFICATIONS</span>
        </div>
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Detailed <span className="text-[#0057ff]">Technical Data</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <div className="w-3 h-3 bg-[#0057ff] rounded-full"></div>
            Chemical Properties
          </h3>
          <div className="space-y-4">
            {[
              ["Chemical Formula", "CaO"],
              ["Common Name", "Calcium Oxide / Burnt Lime"],
              ["Purity (CaO)", "≥ 90%"],
              ["Reactants", "Water, Acids, Silica"],
              ["By-product", "Calcium Hydroxide (Hydrated Lime)"],
              ["Solubility", "Reacts with water, insoluble in organic solvents"]
            ].map(([property, value], idx) => (
              <div key={idx} className="flex justify-between py-3 border-b border-gray-100">
                <span className="font-medium text-gray-700">{property}</span>
                <span className="font-bold text-[#0057ff]">{value}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <div className="w-3 h-3 bg-[#0057ff] rounded-full"></div>
            Physical Properties
          </h3>
          <div className="space-y-4">
            {[
              ["Appearance", "White crystalline solid"],
              ["Odor", "Odorless"],
              ["Density", "3.34 g/cm³"],
              ["Melting Point", "2,572°C"],
              ["Boiling Point", "2,850°C"],
              ["Bulk Density", "0.9 - 1.3 g/cm³"]
            ].map(([property, value], idx) => (
              <div key={idx} className="flex justify-between py-3 border-b border-gray-100">
                <span className="font-medium text-gray-700">{property}</span>
                <span className="font-bold text-[#0057ff]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Technical Performance Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#0057ff] to-[#0041b8] p-6">
          <h3 className="text-2xl font-bold text-white">
            Technical Performance Improvements in Plastics & Polymers
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-8 py-4 text-left font-bold text-gray-700 uppercase tracking-wider">
                  Property Enhanced
                </th>
                <th className="px-8 py-4 text-left font-bold text-gray-700 uppercase tracking-wider">
                  Mechanism & Advantage
                </th>
                <th className="px-8 py-4 text-left font-bold text-gray-700 uppercase tracking-wider">
                  Industry Impact
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  property: "Moisture Control",
                  mechanism: "Absorbs residual moisture in polymers to prevent hydrolysis and degradation",
                  impact: "Reduces defects by 40%, extends material shelf life"
                },
                {
                  property: "Surface Quality",
                  mechanism: "Reduces bubbles, splay marks, voids, and fish-eyes for cleaner molded parts",
                  impact: "Improves product aesthetics, reduces finishing costs"
                },
                {
                  property: "Mechanical Strength",
                  mechanism: "Enhances tensile strength and dimensional stability through better particle bonding",
                  impact: "Increases load-bearing capacity by 25-30%"
                },
                {
                  property: "Melt Flow Optimization",
                  mechanism: "Improves flow characteristics, enabling lower processing temperatures and faster cycle times",
                  impact: "Reduces energy consumption by 15-20%"
                },
                {
                  property: "Thermal Resistance",
                  mechanism: "Increases heat tolerance of plastics during extrusion and molding processes",
                  impact: "Allows higher temperature applications"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0057ff] rounded-full"></div>
                      <span className="font-bold text-gray-800">{row.property}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-gray-700">{row.mechanism}</td>
                  <td className="px-8 py-4">
                    <span className="inline-flex items-center gap-2 bg-[#0057ff]/10 px-3 py-1 rounded-full text-sm font-medium text-[#0057ff]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {row.impact}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  {/* Applications Section */}
  <div className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#0057ff]/10 px-4 py-2 rounded-full mb-4">
          <span className="text-[#0057ff] font-bold">INDUSTRIAL APPLICATIONS</span>
        </div>
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Where Quick Lime <span className="text-[#0057ff]">Excels</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Steel Manufacturing",
            description: "Fluxing agent in basic oxygen furnaces to remove impurities",
            icon: "🏭"
          },
          {
            title: "Water Treatment",
            description: "pH adjustment, softening, and heavy metal removal",
            icon: "💧"
          },
          {
            title: "Construction",
            description: "Mortar, plaster, and soil stabilization applications",
            icon: "🏗️"
          },
          {
            title: "Chemical Production",
            description: "Precursor for calcium compounds and reagent in synthesis",
            icon: "⚗️"
          },
          {
            title: "Environmental",
            description: "Flue gas desulfurization and waste treatment",
            icon: "🌱"
          },
          {
            title: "Pulp & Paper",
            description: "Kraft process and pH control in paper mills",
            icon: "📄"
          }
        ].map((app, idx) => (
          <div 
            key={idx} 
            className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#0057ff] hover:shadow-xl transition-all duration-300"
          >
            <div className="text-4xl mb-4">{app.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#0057ff] transition-colors">
              {app.title}
            </h3>
            <p className="text-gray-600">{app.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Manufacturers Choice Section - Enhanced */}
  <div className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0057ff]/20 to-transparent rounded-3xl blur-xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-[#0057ff]/10 to-white p-10 rounded-2xl border border-[#0057ff]/20">
              <h3 className="text-3xl font-bold mb-8 text-gray-800">
                Why <span className="text-[#0057ff]">Manufacturers</span> Choose Our Quick Lime
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Batch-to-Batch Consistency",
                    description: "Rigorous QC ensures identical chemical composition in every delivery"
                  },
                  {
                    title: "Technical Support",
                    description: "Dedicated engineering team for application optimization"
                  },
                  {
                    title: "Supply Chain Reliability",
                    description: "Multiple production facilities ensure uninterrupted supply"
                  },
                  {
                    title: "Custom Formulations",
                    description: "Tailored particle size and reactivity for specific applications"
                  },
                  {
                    title: "Safety Compliance",
                    description: "MSDS certified, proper handling guidelines provided"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0057ff]/10 rounded-full flex items-center justify-center group-hover:bg-[#0057ff] transition-colors">
                      <svg className="w-4 h-4 text-[#0057ff] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="text-right">
            <div className="inline-flex items-center gap-2 bg-[#0057ff]/10 px-4 py-2 rounded-full mb-6">
              <span className="text-[#0057ff] font-bold">QUALITY ASSURED</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 text-left">
              Trusted by <span className="text-[#0057ff]">Industry Leaders</span>
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0057ff]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Certified Quality</h4>
                    <p className="text-sm text-gray-600">ISO 9001:2015 Certified</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Our quick lime meets or exceeds international standards for purity, reactivity, and particle size distribution.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0057ff]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Fast Delivery</h4>
                    <p className="text-sm text-gray-600">24-72 Hour Dispatch</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Strategically located warehouses ensure quick delivery across major industrial regions.
                </p>
              </div>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* FAQ Section - Enhanced */}
  <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#0057ff]/10 px-4 py-2 rounded-full mb-4">
          <span className="text-[#0057ff] font-bold">FAQ</span>
        </div>
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Frequently Asked <span className="text-[#0057ff]">Questions</span>
        </h2>
      </div>
      
      <div className="space-y-4">
        {[
          {
            question: "What is the shelf life of quick lime?",
            answer: "When stored properly in airtight containers away from moisture, quick lime can last indefinitely. However, once opened, it's recommended to use within 6 months for optimal reactivity."
          },
          {
            question: "Is quick lime hazardous to handle?",
            answer: "Yes, quick lime is caustic and can cause severe burns. Always use proper PPE including gloves, goggles, and respiratory protection. Follow MSDS guidelines for safe handling."
          },
          {
            question: "What's the difference between quick lime and hydrated lime?",
            answer: "Quick lime (CaO) is produced by heating limestone, while hydrated lime (Ca(OH)₂) is created by adding water to quick lime. They have different reactivity levels and applications."
          },
          {
            question: "Can quick lime be used in food applications?",
            answer: "Yes, food-grade quick lime is used in traditional corn processing (nixtamalization) and as a pH regulator in certain food products. Always ensure you're using food-grade certified material."
          },
          {
            question: "How should quick lime be stored?",
            answer: "Store in a cool, dry place in sealed containers. Avoid contact with moisture or acids. Keep away from combustible materials as the reaction with water generates significant heat."
          }
        ].map((faq, i) => (
          <div 
            key={i} 
            className="group border border-gray-200 rounded-xl hover:border-[#0057ff] transition-all duration-300"
          >
            <button
              onClick={() => toggle(i)}
              className="flex justify-between items-center w-full px-8 py-6 text-left font-medium hover:bg-gray-50/50 cursor-pointer group-hover:bg-[#0057ff]/5 transition-colors"
            >
              <span className="text-lg font-bold text-gray-800 group-hover:text-[#0057ff] transition-colors">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-6 w-6 transition-transform text-gray-400 group-hover:text-[#0057ff] ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>

            {openIndex === i && (
              <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>

  <GetBestQuote isOpen={showGetBestQuote} onClose={() => setShowGetBestQuote(false)} />
</div>
  )
}

export default UncoatedCalciumCarbonate
