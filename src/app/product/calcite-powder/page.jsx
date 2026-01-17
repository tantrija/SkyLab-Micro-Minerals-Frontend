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
    question: "What is Calcite Powder?",
    answer: (
      <>
        Calcite Powder is finely ground natural calcium carbonate (CaCO₃) used as a mineral filler 
        and performance enhancer in plastics, rubber, paints, paper, sealants, and construction materials.
      </>
    ),
  },
  {
    question: "Is Calcite Powder the same as Calcium Carbonate?",
    answer: (
      <>
        Yes. Calcite is a natural, high-purity form of calcium carbonate known for its brightness, 
        whiteness, and stable performance across various industries.
      </>
    ),
  },
  {
    question: "Why is Calcite Powder used in plastics?",
    answer: (
      <>
        <p className="mb-3">Calcite enhances multiple functional properties, including:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Mechanical strength</li>
          <li>Surface finish</li>
          <li>Dimensional stability</li>
          <li>Melt flow</li>
          <li>Cost efficiency</li>
          <li>Whiteness and brightness</li>
        </ul>
        <p>It is widely used in PVC pipes, sheets, profiles, masterbatches, and filler applications.</p>
      </>
    ),
  },
  {
    question: "What particle sizes are available?",
    answer: (
      <>
        <p className="mb-3">Common Calcite Powder grades include:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>200–600 mesh</li>
          <li>5–20 micron</li>
          <li>Ultrafine micronized grades (1–5 micron)</li>
        </ul>
        <p>Custom particle sizes can be produced on request.</p>
      </>
    ),
  },
  {
    question: "Is coated Calcite Powder available?",
    answer: (
      <>
        Yes. Stearic-acid–coated Calcite grades improve dispersion, compatibility, and performance 
        in polymers such as PP, PE, and masterbatches.
      </>
    ),
  },
  {
    question: "Does Calcite Powder improve product strength?",
    answer: (
      <>
        Yes. Calcite enhances tensile strength, stiffness, and overall structural stability—especially 
        in rigid PVC and engineering plastic applications.
      </>
    ),
  },
  {
    question: "Is Calcite safe and environmentally friendly?",
    answer: (
      <>
        Calcite Powder is non-toxic, chemically stable, and safe for industrial use.  
        Standard dust control practices are recommended during handling to ensure workplace safety.
      </>
    ),
  },
  {
    question: "Does Calcite Powder reduce production cost?",
    answer: (
      <>
        Yes. Calcite reduces polymer consumption and lowers overall production costs while maintaining 
        high performance and mechanical integrity.
      </>
    ),
  },
  {
    question: "What industries commonly use Calcite Powder?",
    answer: (
      <>
        <p className="mb-3">Calcite Powder is widely used in:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Plastics & masterbatches</li>
          <li>Rubber compounding</li>
          <li>Paints & coatings</li>
          <li>Adhesives & sealants</li>
          <li>Paper industry</li>
          <li>Construction materials</li>
          <li>Chemical processing</li>
        </ul>
      </>
    ),
  },
  {
    question: "Can Calcite Powder be customized for specific needs?",
    answer: (
      <>
        <p className="mb-3">Yes. Calcite Powder can be tailored based on:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Particle size</li>
          <li>Brightness & whiteness</li>
          <li>Surface coating (treated or untreated)</li>
          <li>Purity level</li>
        </ul>
      </>
    ),
  },
];


  return (
   <div>
  {/* Hero Section with Primary Color */}
  <section className="relative min-h-[95vh] flex items-center justify-center">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(../images/productsimages/calcite-powder2.jpeg)` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
    <div className="relative z-10 text-white max-w-6xl px-6 mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold leading-tight">
            High-Quality Calcite Powder
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Premium Calcium Carbonate Powder for Industrial Excellence. 
            Engineered for superior performance in plastics, paints, adhesives, 
            and construction applications.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <span className="px-4 py-2 bg-[#0057ff]/20 backdrop-blur-sm rounded-full text-sm border border-[#0057ff]/30">
              Whiteness: 95-98%
            </span>
            <span className="px-4 py-2 bg-[#0057ff]/20 backdrop-blur-sm rounded-full text-sm border border-[#0057ff]/30">
              Mesh: 300-700 BSS
            </span>
            <span className="px-4 py-2 bg-[#0057ff]/20 backdrop-blur-sm rounded-full text-sm border border-[#0057ff]/30">
              Purity: 98.5%+
            </span>
            <span className="px-4 py-2 bg-[#0057ff]/20 backdrop-blur-sm rounded-full text-sm border border-[#0057ff]/30">
              Micronized: 5-20μ
            </span>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
          <h3 className="text-2xl font-semibold mb-4">Key Specifications</h3>
          <div className="space-y-3">
            <div className="flex justify-between border-b border-white/20 pb-2">
              <span>CaCO₃ Content</span>
              <span className="font-semibold text-[#0057ff]">≥ 98.5%</span>
            </div>
            <div className="flex justify-between border-b border-white/20 pb-2">
              <span>Whiteness</span>
              <span className="font-semibold text-[#0057ff]">95-98%</span>
            </div>
            <div className="flex justify-between border-b border-white/20 pb-2">
              <span>Moisture</span>
              <span className="font-semibold text-[#0057ff]">≤ 0.5%</span>
            </div>
            <div className="flex justify-between border-b border-white/20 pb-2">
              <span>Oil Absorption</span>
              <span className="font-semibold text-[#0057ff]">18-22 ml/100g</span>
            </div>
            <div className="flex justify-between">
              <span>Bulk Density</span>
              <span className="font-semibold text-[#0057ff]">0.8-1.2 g/cm³</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Enhanced Introduction Section */}
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            About <span className="text-[#0057ff]">Calcite Powder</span>
          </h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Skylab, a leading Calcite Powder manufacturer based in Alwar, India, 
              produces premium quality Calcium Carbonate powder, also known as Calc-spar. 
              Our Calcite Powder is sourced from high-grade limestone minerals and 
              processed using state-of-the-art technology to ensure exceptional purity 
              and consistency.
            </p>
            <p className="text-lg leading-relaxed">
              With its excellent whiteness, low moisture content, and free-flowing nature, 
              our Calcite Powder serves as a versatile mineral filler across multiple 
              industries including plastics, paints, adhesives, construction, and agriculture.
            </p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#0057ff]">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Available Grades & Specifications</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Mesh Sizes</h4>
              <div className="flex flex-wrap gap-2">
                {['300 Mesh', '400 Mesh', '500 Mesh', '600 Mesh', '700 Mesh'].map((mesh) => (
                  <span key={mesh} className="px-3 py-1 bg-[#0057ff]/10 text-[#0057ff] rounded-full text-sm">
                    {mesh}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Micronized Grades</h4>
              <div className="flex flex-wrap gap-2">
                {['5μ', '10μ', '15μ', '20μ'].map((micron) => (
                  <span key={micron} className="px-3 py-1 bg-[#0057ff]/10 text-[#0057ff] rounded-full text-sm">
                    Top Cut {micron}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Packaging Options</h4>
              <div className="flex flex-wrap gap-2">
                {['25kg PP Bags', '50kg PP Bags', '1MT Jumbo Bags', 'Custom Packaging'].map((pack) => (
                  <span key={pack} className="px-3 py-1 bg-[#0057ff]/10 text-[#0057ff] rounded-full text-sm">
                    {pack}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Key Performance Advantages */}
  <div className="py-32 px-6 bg-gradient-to-br from-[#0057ff]/5 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <Image 
            src={CosmeticImage} 
            loading="lazy" 
            alt="Calcite Powder Applications" 
            className="rounded-2xl shadow-2xl max-w-[600px] w-full"
          />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Key <span className="text-[#0057ff]">Performance</span> Advantages
            </h2>
            <p className="text-gray-600 mb-8">
              Engineered to deliver superior performance across diverse industrial applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Excellent Whiteness & Brightness",
                desc: "95-98% whiteness ensures superior visual appeal and color consistency"
              },
              {
                title: "Enhanced Mechanical Strength",
                desc: "Improves stiffness and tensile strength by up to 40% in polymer composites"
              },
              {
                title: "Cost-Efficient Filler",
                desc: "Reduces formulation costs while maintaining or enhancing product performance"
              },
              {
                title: "Superior Dispersion",
                desc: "Uniform particle distribution ensures consistent performance in all applications"
              },
              {
                title: "Thermal Stability",
                desc: "Withstands high processing temperatures up to 800°C without degradation"
              },
              {
                title: "Surface Smoothness",
                desc: "Provides excellent surface finish in paints, coatings, and plastic products"
              },
              {
                title: "Chemical Resistance",
                desc: "Inert nature ensures compatibility with various chemical formulations"
              },
              {
                title: "UV Resistance",
                desc: "Enhances weatherability and outdoor performance in polymer applications"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-[#0057ff]/20">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0057ff]/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0057ff" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Technical Specifications Table */}
  <div className="py-32 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Technical <span className="text-[#0057ff]">Specifications</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Comprehensive technical data for informed material selection and formulation
        </p>
      </div>
      
      <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-200">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-[#0057ff] to-[#0041cc] text-white">
            <tr>
              <th className="px-8 py-4 text-left font-semibold">Parameter</th>
              <th className="px-8 py-4 text-left font-semibold">Specification</th>
              <th className="px-8 py-4 text-left font-semibold">Test Method</th>
              <th className="px-8 py-4 text-left font-semibold">Significance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              {
                parameter: "Calcium Carbonate (CaCO₃)",
                spec: "≥ 98.5%",
                method: "Volumetric Analysis",
                significance: "Determines purity and reactivity"
              },
              {
                parameter: "Whiteness (Hunter)",
                spec: "95-98%",
                method: "Hunter Lab Colorimeter",
                significance: "Affects final product appearance"
              },
              {
                parameter: "Moisture Content",
                spec: "≤ 0.5%",
                method: "Loss on Drying @ 105°C",
                significance: "Prevents processing issues"
              },
              {
                parameter: "Particle Size (D50)",
                spec: "5-20 microns",
                method: "Laser Particle Analyzer",
                significance: "Controls dispersion and surface area"
              },
              {
                parameter: "Oil Absorption",
                spec: "18-22 ml/100g",
                method: "Spatula Rub-out Method",
                significance: "Indicates binder demand"
              },
              {
                parameter: "Bulk Density",
                spec: "0.8-1.2 g/cm³",
                method: "Volumetric Measurement",
                significance: "Affects packaging and handling"
              },
              {
                parameter: "pH Value (10% slurry)",
                spec: "8.5-9.5",
                method: "pH Meter",
                significance: "Compatibility with systems"
              },
              {
                parameter: "Brightness (ISO)",
                spec: "92-96%",
                method: "ISO 2470",
                significance: "Reflectance properties"
              }
            ].map((row, index) => (
              <tr key={index} className="hover:bg-[#0057ff]/5 transition-colors">
                <td className="px-8 py-4 font-medium text-gray-800">{row.parameter}</td>
                <td className="px-8 py-4">
                  <span className="px-3 py-1 bg-[#0057ff]/10 text-[#0057ff] rounded-full text-sm font-medium">
                    {row.spec}
                  </span>
                </td>
                <td className="px-8 py-4 text-gray-600">{row.method}</td>
                <td className="px-8 py-4 text-gray-600">{row.significance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  {/* Industrial Applications Section */}
  <div className="py-32 px-6 bg-gradient-to-br from-[#0057ff]/5 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Industrial <span className="text-[#0057ff]">Applications</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Versatile applications across multiple industries with proven performance benefits
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Plastics & Polymers",
            icon: "🔄",
            applications: [
              "PVC Pipes & Fittings",
              "Wires & Cables",
              "Masterbatch",
              "Injection Molding",
              "Extrusion Profiles"
            ],
            benefits: "Improves stiffness, reduces costs, enhances surface finish"
          },
          {
            title: "Paints & Coatings",
            icon: "🎨",
            applications: [
              "Interior Emulsions",
              "Exterior Coatings",
              "Industrial Paints",
              "Powder Coatings",
              "Primers"
            ],
            benefits: "Enhances opacity, improves rheology, reduces TiO₂ usage"
          },
          {
            title: "Adhesives & Sealants",
            icon: "🔗",
            applications: [
              "Construction Adhesives",
              "Automotive Sealants",
              "Ceramic Tile Adhesives",
              "PU Sealants",
              "MS Polymers"
            ],
            benefits: "Controls viscosity, improves bonding, reduces shrinkage"
          },
          {
            title: "Construction",
            icon: "🏗️",
            applications: [
              "Concrete Admixtures",
              "Tile Grouts",
              "Wall Putty",
              "Self-Leveling Compounds",
              "Waterproofing"
            ],
            benefits: "Enhances durability, improves workability, reduces costs"
          }
        ].map((industry, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:border-[#0057ff] border border-transparent">
            <div className="w-12 h-12 bg-[#0057ff]/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">{industry.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">{industry.title}</h3>
            <div className="space-y-3 mb-4">
              <h4 className="font-semibold text-gray-700">Applications:</h4>
              <ul className="space-y-1">
                {industry.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0057ff" strokeWidth="2" className="mr-2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {app}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <h4 className="font-semibold text-gray-700 mb-2">Key Benefits:</h4>
              <p className="text-sm text-gray-600">{industry.benefits}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Manufacturing Excellence Section */}
  <div className="py-32 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <Image 
            src={CosmeticImage} 
            loading="lazy" 
            alt="Manufacturing Process" 
            className="rounded-2xl shadow-2xl"
          />
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose <span className="text-[#0057ff]">Our</span> Calcite Powder?
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: "Consistent Quality",
                description: "Rigorous quality control at every stage ensures batch-to-batch consistency"
              },
              {
                title: "Advanced Processing",
                description: "State-of-the-art micronization technology for precise particle size distribution"
              },
              {
                title: "Technical Support",
                description: "Expert technical assistance for formulation optimization and problem-solving"
              },
              {
                title: "Custom Formulations",
                description: "Tailored grades and specifications to meet specific application requirements"
              },
              {
                title: "Sustainable Sourcing",
                description: "Ethically sourced raw materials with minimal environmental impact"
              },
              {
                title: "Reliable Supply",
                description: "Consistent supply chain with multiple packaging and delivery options"
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#0057ff] to-[#0041cc] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Quality Assurance Section */}
  <div className="py-20 px-6 bg-gradient-to-br from-[#0057ff]/5 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Quality <span className="text-[#0057ff]">Assurance</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Comprehensive quality management system ensuring product excellence
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Raw Material Testing",
            icon: "🧪",
            points: ["Source verification", "Chemical analysis", "Physical properties"]
          },
          {
            title: "Process Control",
            icon: "⚙️",
            points: ["Real-time monitoring", "Statistical process control", "Parameter optimization"]
          },
          {
            title: "Final Product Testing",
            icon: "✅",
            points: ["Multi-point sampling", "Complete analysis", "Performance validation"]
          }
        ].map((qa, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-[#0057ff]/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">{qa.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">{qa.title}</h3>
            <ul className="space-y-2">
              {qa.points.map((point, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0057ff" strokeWidth="2" className="mr-2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Enhanced FAQ Section */}
  <section className="py-32 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Frequently Asked <span className="text-[#0057ff]">Questions</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Find answers to common questions about Calcite Powder
        </p>
      </div>
      
      <div className="space-y-4 max-w-4xl mx-auto">
        {[
          {
            question: "What is the typical lead time for orders?",
            answer: "Standard grades are typically available within 7-10 days. Custom formulations may require 2-3 weeks depending on specifications."
          },
          {
            question: "What packaging options are available?",
            answer: "We offer 25kg and 50kg PP bags, 1MT jumbo bags, and custom packaging solutions based on customer requirements."
          },
          {
            question: "Do you provide technical data sheets?",
            answer: "Yes, comprehensive technical data sheets with complete specifications are available for all our grades."
          },
          {
            question: "Can you customize particle size distribution?",
            answer: "Absolutely. We can tailor particle size distributions to meet specific application requirements."
          },
          {
            question: "What industries commonly use your Calcite Powder?",
            answer: "Our powder is widely used in plastics, paints, adhesives, construction, paper, rubber, and agriculture industries."
          },
          {
            question: "Do you offer sample quantities for testing?",
            answer: "Yes, we provide sample quantities for testing and evaluation purposes."
          }
        ].map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#0057ff] transition-colors">
            <button
              onClick={() => toggle(i)}
              className="flex justify-between items-center w-full px-6 py-4 text-left font-medium bg-gray-50 hover:bg-[#0057ff]/5 cursor-pointer transition-colors"
            >
              <span className="text-lg text-gray-900">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-[#0057ff] transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>

            {openIndex === i && (
              <div className="px-6 py-4 text-gray-700 bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="inline-flex flex-col items-center bg-gradient-to-r from-[#0057ff] to-[#0041cc] text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Elevate Your Products?</h3>
          <p className="mb-6 max-w-2xl">
            Contact us for samples, technical consultation, or to discuss your specific requirements
          </p>
          <button 
            onClick={() => setShowGetBestQuote(true)}
            className="px-8 py-3 bg-white text-[#0057ff] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  </section>
  
  <GetBestQuote isOpen={showGetBestQuote} onClose={() => setShowGetBestQuote(false)} />
</div>
  )
}

export default UncoatedCalciumCarbonate
