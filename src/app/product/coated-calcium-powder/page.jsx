"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";


import CosmeticImage from "../../../../public/images/successful-business-meeting-in-industrial-setting.jpg";

import CP600Img from "../../../../public/images/activatedcalciumImage.png";
import CP1100Img from "../../../../public/images/productsimages/calcium-powder-1100.webp";
import CP2100Img from "../../../../public/images/productsimages/calcium-powder-2100-c.jpg";
import CP3100Img from "../../../../public/images/productsimages/calcium-powder-3100.webp";
// import activatedcalciumImage from "../../../../public/images/activatedcalciumImage.png";
import bgDefaultRow1 from "../../../../public/images/row-01.png";
import CCP600Img from "../../../../public/images/productsimages/coated-calcium-powder-c600.webp";
import CCP2100Img from "../../../../public/images/productsimages/coated-calcium-carbonate-011.avif";
import CCP3100Img from "../../../../public/images/productsimages/coated-calcium-carbonate-12.webp";
import { ChevronDown } from "lucide-react";
import GetBestQuote from "@/app/getBestQuote";
import { useScroll, useTransform } from "framer-motion";

const CoatedCalciumPowder = () => {
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
      question: "What makes coated calcium carbonate different from uncoated calcium carbonate?",
      answer: (
        <>
          Coated calcium carbonate undergoes a stearic acid surface treatment that improves its compatibility with polymers. This coating enhances dispersion, strengthens mechanical bonding in plastics, reduces moisture absorption, and improves smoothness. Uncoated CaCO₃ is mainly used in construction, agriculture, pharma, and food, while coated grades are designed for high-performance plastics, rubber, and coatings.
        </>
      ),
    },
    {
      question: "Why is coated CaCO₃ preferred in plastic & masterbatch industries?",
      answer: (
        <>
         <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Improves melt flow and extrusion speed</li>
          <li>Reduces wear on screws and dies</li>
          <li>Enhances product strength and surface shine</li>
          <li>Lowers polymer usage and total manufacturing cost</li>
          <li>Prevents lump formation by ensuring better dispersion</li>
        </ul>
        <p>This leads to higher productivity and better aesthetic performance in final products.</p>
        </>
      ),
    },
    {
      question: "Which polymers are compatible with coated calcium carbonate?",
      answer: (
        <>
        <p className="mb-3">Coated CaCO₃ is highly recommended for:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>PP, PE, PVC</li>
          <li>ABS, EVA, TPR</li>
          <li>Masterbatch compounds</li>
          <li>WPC (Wood Plastic Composite)</li>
        </ul>
        <p>It blends well with both extrusion and injection molding systems.</p>
        </>
        
      ),
    },
    {
      question: "Does the coating affect product life or safety?",
      answer: (
        <>
        No. The coating is typically food-safe grade stearic acid, widely used in industrial and consumer products. It does not interfere with chemical stability or cause degradation. Instead, it improves weather resistance, dimensional stability, and product durability.
          
        </>
      ),
    },
    {
      question: "What mesh or particle size options are available?",
      answer: (
        <>
        <p className="mb-3">Our coated range includes:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>C600 — Coarse-medium grade</li>
          <li>C1100 — Medium-fine performance filler</li>
          <li>C2100 — Fine grade for superior finish</li>
          <li>C3100 — Ultra-fine for advanced engineering plastics</li>
        </ul>
        <p>Customized micron sizes can be produced for specific requirements.</p>
        </>
      ),
    },
    {
      question: "Is coated CaCO₃ cost-effective compared to pure polymers or other fillers?",
      answer: (
        <>
        <p className="mb-3">
          Yes — manufacturers typically replace 20% to 40% of expensive polymer resin with coated CaCO₃ without losing strength. This reduces:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cost per kg of final product</li>
          <li>Power consumption during processing</li>
          <li>Raw material dependency</li>
        </ul>
        <p>Hence, it is widely adopted to maximize profit margins.</p>
        </>
      ),
    },
    {
      question: "How is it packed and delivered?",
      answer: (
        <>
          <p className="mb-3">
         We provide:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>25kg / 50kg laminated HDPE bags</li>
          <li>1 MT jumbo bags</li>
          <li>Export packing and private labeling options</li>
        </ul>
        </>
      ),
    },
    {
      question: "Do you provide technical support for product integration?",
      answer: (
        <>
         <p className="mb-3">Yes. We assist customers with:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 mb-3">
            <li>Grade selection for their specific polymer type</li>
            <li>Trial sample supply and performance testing</li>
            <li>Machine parameter optimization for maximum efficiency</li>
          </ul>
          <p>We believe in long-term partnerships with consistent and reliable support.</p>
        </>
      ),
    },
   
  ];

  return (
    <div>
      {/* Hero Section with Enhanced Gradient */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(../images/coated-calcium-powder-banner.webp)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-[#0057ff]/10 mix-blend-overlay" />

        <div className="relative z-10 text-white max-w-6xl px-6 mx-auto">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 bg-[#0057ff]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-[#0057ff] rounded-full animate-pulse" />
              <span className="text-sm font-medium">High-Performance Mineral Fillers</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
              Coated<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#0057ff]/60">
                Calcium Carbonate Powder
              </span>
            </h1>

            <p className="text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
              Engineered with precision surface modification, our coated CaCO₃ delivers superior
              dispersion, enhanced mechanical properties, and optimal cost efficiency for
              next-generation polymer applications.
            </p>
 
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Enhanced Introduction Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-[#0057ff] font-semibold text-sm uppercase tracking-wider">
                  Advanced Surface Modification
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Precision-Engineered Coated Calcium Powder
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Coated Calcium Carbonate (CCC) represents a technological advancement in mineral
                  fillers, where ultra-fine CaCO₃ particles undergo uniform surface treatment with
                  stearic acid or specialized coupling agents. This proprietary coating process
                  fundamentally transforms particle-polymer interaction dynamics.
                </p>
                <p className="leading-relaxed">
                  The engineered hydrophobic surface layer dramatically improves compatibility with
                  non-polar polymer matrices, reduces interfacial tension, and enables higher
                  loading percentages without compromising mechanical integrity—making it essential
                  for demanding applications in automotive components, high-strength packaging,
                  engineering plastics, and premium-grade rubber formulations.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0057ff]/5 to-transparent p-8 rounded-2xl border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-[#0057ff] rounded-full" />
                Technical Highlights
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border">
                  <div className="text-2xl font-bold text-[#0057ff] mb-2">99.5%</div>
                  <div className="text-sm text-gray-600">Minimum CaCO₃ Purity</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border">
                  <div className="text-2xl font-bold text-[#0057ff] mb-2">0.8-2.5%</div>
                  <div className="text-sm text-gray-600">Stearic Acid Coating</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border">
                  <div className="text-2xl font-bold text-[#0057ff] mb-2">&lt;0.2%</div>
                  <div className="text-sm text-gray-600">Moisture Content</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border">
                  <div className="text-2xl font-bold text-[#0057ff] mb-2">ISO 9001</div>
                  <div className="text-sm text-gray-600">Quality Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Product Grid with Specifications */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-4 h-0.5 bg-[#0057ff]" />
              <span className="text-[#0057ff] font-semibold text-sm uppercase tracking-wider">
                Product Portfolio
              </span>
              <div className="w-4 h-0.5 bg-[#0057ff]" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Engineered for Specific Applications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each grade is optimized for different particle size distributions and coating levels
              to match specific polymer systems and processing requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                id: 'SM-T2020',
                img: CP600Img,
                mesh: '400-600',
                coating: '1.0-1.2%',
                applications: ['PVC Pipes', 'Profiles', 'Cables'],
                description: 'Coarse grade for high loading in rigid PVC'
              },
              {
                id: 'SM-T3030',
                img: CCP2100Img,
                mesh: '800-1000',
                coating: '1.2-1.5%',
                applications: ['PP Compounds', 'LDPE Films', 'Masterbatches'],
                description: 'Medium grade for balanced properties'
              },
              {
                id: 'SM-T4040',
                img: CCP3100Img,
                mesh: '1250-1500',
                coating: '1.5-1.8%',
                applications: ['Engineering Plastics', 'Automotive', 'Premium Rubber'],
                description: 'Fine grade for superior surface finish'
              },
              {
                id: 'SM-T5050',
                img: CCP600Img,
                mesh: '2000-2500',
                coating: '1.8-2.2%',
                applications: ['High-Gloss Coatings', 'TPU', 'Medical Devices'],
                description: 'Ultra-fine for critical applications'
              }
            ].map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.id}
                    className="aspect-square w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0057ff] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.mesh} Mesh
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.id}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Coating Level:</span>
                      <span className="font-semibold text-gray-900">{product.coating}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Particle Size:</span>
                      <span className="font-semibold text-gray-900">{product.mesh}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#0057ff] to-[#0048d6] hover:from-[#0048d6] hover:to-[#0057ff] text-white py-3 rounded-lg font-semibold transition-all hover:scale-[1.02]">
                    Get Technical Specifications
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Advantages with Enhanced Visuals */}
      <section className="py-32 px-6 bg-gradient-to-br from-white via-gray-50/30 to-[#0057ff]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0057ff]/10 to-transparent rounded-3xl blur-xl" />
              <Image
                src={CosmeticImage}
                loading="lazy"
                alt="Coated Calcium Carbonate Microscopic Structure"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <div className="inline-block mb-4">
                <span className="text-[#0057ff] font-semibold text-sm uppercase tracking-wider">
                  Performance Advantages
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-10">
                Transform Your Polymer Performance
              </h2>

              <div className="space-y-1">
                {[
                  {
                    icon: '⚡',
                    title: 'Enhanced Polymer Compatibility',
                    description: 'Superior bonding with non-polar matrices including PP, PE, PVC, and engineering plastics'
                  },
                  {
                    icon: '🌊',
                    title: 'Optimized Melt Flow Dynamics',
                    description: 'Reduced viscosity and torque requirements by up to 35%, enabling faster processing'
                  },
                  {
                    icon: '💪',
                    title: 'Mechanical Property Enhancement',
                    description: 'Improved tensile strength, flexural modulus, and impact resistance'
                  },
                  {
                    icon: '💧',
                    title: 'Hydrophobic Surface Properties',
                    description: 'Moisture absorption reduced by 60-80% compared to uncoated grades'
                  },
                  {
                    icon: '💰',
                    title: 'Cost Optimization',
                    description: 'Replace 20-40% of primary polymer while maintaining or enhancing properties'
                  },
                  {
                    icon: '🛡️',
                    title: 'Equipment Protection',
                    description: 'Reduced abrasive wear on processing equipment, extending machinery life'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0057ff]/10 to-[#0057ff]/5 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Technical Data Table */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Performance Matrix
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comparative analysis showing the performance improvement of coated CaCO₃ versus
              uncoated calcium carbonate in polypropylene composite applications
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-[#0057ff]/10 to-[#0057ff]/5 px-8 py-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">
                PP Composite Performance Comparison (30% Filler Loading)
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-8 py-4 text-left font-semibold text-gray-700">Property</th>
                    <th className="px-8 py-4 text-left font-semibold text-gray-700">ASTM Method</th>
                    <th className="px-8 py-4 text-left font-semibold text-gray-700">Uncoated CaCO₃</th>
                    <th className="px8 py-4 text-left font-semibold text-[#0057ff]">Coated CaCO₃</th>
                    <th className="px-8 py-4 text-left font-semibold text-gray-700">Improvement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { property: 'Tensile Strength', method: 'D638', uncoated: '24 MPa', coated: '31 MPa', improvement: '+29%' },
                    { property: 'Flexural Modulus', method: 'D790', uncoated: '2.8 GPa', coated: '3.4 GPa', improvement: '+21%' },
                    { property: 'Impact Strength', method: 'D256', uncoated: '4.2 kJ/m²', coated: '5.8 kJ/m²', improvement: '+38%' },
                    { property: 'Melt Flow Index', method: 'D1238', uncoated: '12 g/10min', coated: '18 g/10min', improvement: '+50%' },
                    { property: 'Water Absorption', method: 'D570', uncoated: '0.45%', coated: '0.12%', improvement: '-73%' },
                    { property: 'Surface Gloss', method: 'D523', uncoated: '65 GU', coated: '89 GU', improvement: '+37%' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-8 py-4 font-medium text-gray-900">{row.property}</td>
                      <td className="px-8 py-4 text-gray-600">{row.method}</td>
                      <td className="px-8 py-4 text-gray-500">{row.uncoated}</td>
                      <td className="px-8 py-4 font-semibold text-[#0057ff]">{row.coated}</td>
                      <td className="px-8 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${parseFloat(row.improvement) > 0 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                          {row.improvement}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Test conditions: 30% filler loading in PP homopolymer, injection molded at 210°C</p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industry Applications
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our coated calcium carbonate powders are engineered to meet the specific demands
              of various industries, providing enhanced performance across multiple applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Plastics & Polymers',
                applications: ['PVC Pipes & Profiles', 'PP/PE Films & Sheets', 'Engineering Plastics', 'Masterbatches'],
                benefits: ['Higher loading capacity', 'Improved surface finish', 'Reduced polymer usage'],
                color: 'from-blue-500/10 to-[#0057ff]/5'
              },
              {
                category: 'Rubber & Elastomers',
                applications: ['Tire Components', 'Industrial Belts', 'Seals & Gaskets', 'Footwear'],
                benefits: ['Enhanced tear strength', 'Better dispersion', 'Improved processing'],
                color: 'from-green-500/10 to-[#0057ff]/5'
              },
              {
                category: 'Coatings & Adhesives',
                applications: ['Industrial Coatings', 'Automotive Paints', 'Construction Adhesives', 'Sealants'],
                benefits: ['Superior gloss', 'Better rheology', 'Improved durability'],
                color: 'from-purple-500/10 to-[#0057ff]/5'
              }
            ].map((industry, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${industry.color} p-8 rounded-2xl border border-gray-200/50 hover:border-[#0057ff]/30 transition-all hover:shadow-xl`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{industry.category}</h3>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-700 mb-3">Key Applications:</h4>
                  <ul className="space-y-2">
                    {industry.applications.map((app, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#0057ff] rounded-full" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Primary Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.benefits.map((benefit, i) => (
                      <span key={i} className="bg-white/80 text-gray-700 px-3 py-1.5 rounded-full text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Enhanced Design */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#0057ff]" />
              <span className="text-[#0057ff] font-semibold text-sm uppercase tracking-wider">
                Technical Support
              </span>
              <div className="w-8 h-0.5 bg-[#0057ff]" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is the optimal loading percentage for coated calcium carbonate in PP applications?",
                a: "Typically 20-40% by weight, depending on the specific grade and desired properties. RMPL-2100C allows up to 45% loading in injection molding applications without significant property degradation."
              },
              {
                q: "How does coated CaCO₃ affect processing temperatures?",
                a: "The hydrophobic coating reduces melt viscosity, allowing processing at 5-15°C lower temperatures compared to uncoated grades, resulting in energy savings of 8-12%."
              },
              {
                q: "What is the shelf life of coated calcium carbonate powder?",
                a: "Minimum 24 months when stored in original packaging at temperatures below 30°C and relative humidity below 60%. The hydrophobic coating provides excellent moisture resistance."
              },
              {
                q: "Can coated calcium carbonate be used in food-contact applications?",
                a: "Yes, all grades are manufactured using food-grade stearic acid and comply with FDA 21 CFR 178.3297 and EU Regulation 10/2011 for food contact materials."
              },
              {
                q: "What is the difference between various coating percentages?",
                a: "Higher coating percentages (1.8-2.2%) provide better compatibility with non-polar polymers like PP and PE, while lower percentages (1.0-1.5%) are optimal for PVC and polar polymers."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="group border border-gray-200 rounded-xl hover:border-[#0057ff]/30 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center w-full px-8 py-6 text-left bg-white hover:bg-gray-50/50 transition-colors"
                >
                  <span className="font-semibold text-lg text-gray-900 group-hover:text-[#0057ff] transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[#0057ff]" : ""
                      }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-6 pt-2 bg-gradient-to-r from-white to-gray-50/30">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoatedCalciumPowder
