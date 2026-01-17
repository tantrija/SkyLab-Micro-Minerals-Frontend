"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import CosmeticImage from "../../../../public/images/successful-business-meeting-in-industrial-setting.jpg";

import CP600Img from "../../../../public/images/productsimages/activatedcalciumImage.png";
import CP1100Img from "../../../../public/images/productsimages/calcium-powder-1100.webp";
import CP2100Img from "../../../../public/images/productsimages/calcium-powder-2100-c.jpg";
import CP3100Img from "../../../../public/images/productsimages/calcium-powder-3100.webp";
// import activatedcalciumImage from "../../../../public/images/activatedcalciumImage.png";
import bgDefaultRow1 from "../../../../public/images/row-01.png";
import CCP600Img from "../../../../public/images/productsimages/coated-calcium-powder-c600.webp";
import CCP2100Img from "../../../../public/images/productsimages/coated-calcium-powder-c2100.png";
import CCP3100Img from "../../../../public/images/productsimages/coated-calcium-powder-c3100.webp";
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
  {/* Hero Section */}
  <section className="relative min-h-[95vh] flex items-center">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(../images/calcium-carbonate-powder.webp)` }}
      />
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <div className="max-w-3xl">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-[#fff]/10 text-[#fff] rounded-full text-sm font-semibold mb-4 border border-[#0057ff]/30">
            High-Performance Mineral Fillers
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
          Uncoated
          <span className="block text-red-300 mt-2">Calcium Powder</span>
        </h1>
        
        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-12">
          Skylab Coated Calcium Powder delivers the ideal balance of technical performance, 
          product enhancement, and material cost efficiency — powering next-generation 
          plastic & rubber manufacturing.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 bg-[#0057ff] text-white font-semibold rounded-lg hover:bg-[#0057ff] transition-colors">
            Request Sample
          </button>
          <button className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
            View Technical Data
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* Introduction Section */}
  <section className="py-24 px-6 lg:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What is Coated Calcium Powder?
          </h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Coated Calcium Powder (CCC) is a specialized performance-enhancing mineral filler 
              where high-purity calcium powder particles are uniformly coated with stearic acid 
              or similar fatty acids.
            </p>
            <p>
              This advanced surface modification significantly improves dispersion, water resistance, 
              and compatibility with polymer matrices — making coated CaCO₃ an essential additive 
              in high-performance plastic, rubber, adhesive, and coating applications.
            </p>
            <p>
              Manufactured using precision engineering and controlled treatment technology, 
              coated calcium powder delivers superior results compared to uncoated grades, 
              especially in environments requiring improved mechanical strength, higher process 
              stability, and reduced moisture absorption.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Specifications</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Purity</span>
                <span className="font-semibold">98.5%+</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#0057ff] w-[98.5%]"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Moisture Content</span>
                <span className="font-semibold">≤0.2%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#0057ff] w-[20%]"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Coating Level</span>
                <span className="font-semibold">1.0-1.5%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#0057ff] w-[60%]"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Applications</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#0057ff]/10 text-[#0057ff] rounded-full text-sm">PVC Pipes</span>
              <span className="px-3 py-1 bg-[#0057ff]/10 text-[#0057ff] rounded-full text-sm">PE Films</span>
              <span className="px-3 py-1 bg-[#0057ff]/10 text-[#0057ff] rounded-full text-sm">Rubber Sheets</span>
              <span className="px-3 py-1 bg-[#0057ff]/10 text-[#0057ff] rounded-full text-sm">Automotive Parts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Products Grid */}
  <section className="py-24 px-6 lg:px-8 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Range</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from our comprehensive range of uncoated calcium powders designed for various industrial applications
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { id: 'SM-2020', image: CP600Img, description: 'Fine grade for premium applications' },
          { id: 'SM-3030', image: CP1100Img, description: 'Standard industrial grade' },
          { id: 'SM-4040', image: CP2100Img, description: 'Medium particle size' },
          { id: 'SM-5050', image: CP3100Img, description: 'Coarse grade for bulk processing' }
        ].map((product) => (
          <div key={product.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#0057ff]/10 transition-all duration-300 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src={product.image} 
                alt={product.id}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.id}</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="flex justify-between items-center">
                <button className="px-6 py-3 bg-[#0057ff] text-white font-semibold rounded-lg hover:bg-[#0057ff] transition-colors text-sm w-full">
                  Get Quote
                </button> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Benefits Section */}
  <section className="py-24 px-6 lg:px-8 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Key Performance<br />
            <span className="text-[#0057ff]">Advantages</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Enhanced bonding with PP, PE, PVC & engineering plastics",
              "Superior dispersion — reduces agglomeration in melt flow",
              "Better tensile strength & dimensional stability",
              "Low moisture affinity for improved shelf-life",
              "Reduced wear on machine screws, dies, & extruders",
              "Cost reduction by replacing high-cost polymer resins",
              "Excellent smoothness, whiteness & impact properties"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#0057ff]/10 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0057ff]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0057ff]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden">
            <Image 
              src={CosmeticImage}
              alt="Calcium Powder Application"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#0057ff] text-white p-8 rounded-2xl max-w-xs">
            <div className="text-3xl font-bold">40%</div>
            <div className="text-sm opacity-90">Average material cost reduction achieved</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Technical Table */}
  <section className="py-24 px-6 lg:px-8 bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Technical Performance Improvements
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Quantitative benefits of using coated calcium carbonate in plastic manufacturing
        </p>
      </div>
      
      <div className="overflow-hidden rounded-2xl border border-gray-700">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-8 py-4 text-left font-semibold text-gray-200">Property</th>
              <th className="px-8 py-4 text-left font-semibold text-gray-200">Effect of Coated CaCO₃</th>
              <th className="px-8 py-4 text-left font-semibold text-gray-200">Improvement</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Melt Flow", "Smoother flow, reduced torque load", "↑ 25-35%"],
              ["Mechanical Strength", "Higher tensile & flexural properties", "↑ 15-25%"],
              ["Surface Finish", "Improved gloss & polish", "↑ 30-40%"],
              ["Water Resistance", "Better dimensional stability", "↑ 50-60%"],
              ["Cost Efficiency", "Replaces 20–40% primary polymer", "↓ 25-35%"]
            ].map(([property, effect, improvement], index) => (
              <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                <td className="px-8 py-6 font-medium">{property}</td>
                <td className="px-8 py-6 text-gray-300">{effect}</td>
                <td className="px-8 py-6">
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                    improvement.startsWith('↑') 
                      ? 'bg-green-900/30 text-green-400' 
                      : 'bg-red-900/30 text-red-400'
                  }`}>
                    {improvement}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="py-24 px-6 lg:px-8 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Cost Efficiency",
                description: "Stronger products at lower production cost",
                icon: "💰"
              },
              {
                title: "Energy Savings",
                description: "Improved processing speed & reduction in energy usage",
                icon: "⚡"
              },
              {
                title: "Quality Enhancement",
                description: "Superior finish and functional performance",
                icon: "⭐"
              },
              {
                title: "Long-term Reliability",
                description: "Reliable alternative to pure polymer resins",
                icon: "🛡️"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-2xl hover:border-red-200 border border-transparent transition-all">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Leading Manufacturers Choose<br />
            <span className="text-[#0057ff]">Our Coated CaCO₃?</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We provide more than just calcium powder — we deliver engineered solutions 
            that transform your manufacturing process and end-product quality.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#0057ff] rounded-full"></div>
              <span className="font-medium">ISO 9001:2015 Certified Production</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#0057ff] rounded-full"></div>
              <span className="font-medium">Custom coating formulations available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#0057ff] rounded-full"></div>
              <span className="font-medium">Technical support & application guidance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="py-24 px-6 lg:px-8 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Get answers to common questions about coated calcium powder
        </p>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggle(i)}
              className="flex justify-between items-center w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            
            {openIndex === i && (
              <div className="px-8 pb-6 pt-2 border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
       
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-red-900 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">
        Ready to Enhance Your Products?
      </h2>
      <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
        Get your free sample and discover how our coated calcium powder can transform 
        your manufacturing process and product quality.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => setShowGetBestQuote(true)}
          className="px-10 py-4 bg-white text-[#0057ff] font-bold rounded-xl hover:bg-gray-100 transition-colors text-lg"
        >
          Request Free Sample
        </button> 
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-gray-300">Technical Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-gray-300">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">ISO</div>
            <div className="text-gray-300">Quality Certified</div>
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
