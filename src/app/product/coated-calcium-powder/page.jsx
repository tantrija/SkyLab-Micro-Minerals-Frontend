"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/header"
import Footer from "@/components/footer"

import CosmeticImage from "../../../../public/images/successful-business-meeting-in-industrial-setting.jpg";
import CP600Img from "../../../../public/images/productsimages/coated-calcium-carbonate-powder-0001.jpg";
import bgDefaultRow1 from "../../../../public/images/row-01.png";
import CCP600Img from "../../../../public/images/productsimages/coated-calcium-powder-c600.webp";
import CCP2100Img from "../../../../public/images/productsimages/coated-calcium-carbonate-011.avif";
import CCP3100Img from "../../../../public/images/productsimages/coated-calcium-carbonate-12.webp";
import { ChevronDown } from "lucide-react";
import GetBestQuote from "@/app/getBestQuote";
import { useScroll } from "framer-motion";

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
      question: "What is coated calcium carbonate and why is it used?",
      answer: (
        <>
          Coated calcium carbonate is a high-purity CaCO₃ powder treated with stearic acid to improve its compatibility with polymers.
          The coating enhances dispersion, bonding strength, and moisture resistance, making it ideal for plastics, rubber, adhesives, and industrial coatings.
        </>
      ),
    },
    {
      question: "What advantages does stearic acid coating provide?",
      answer: (
        <>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Improves compatibility with PP, PE, PVC and other polymers</li>
            <li>Enhances dispersion and prevents agglomeration</li>
            <li>Reduces moisture absorption and increases shelf life</li>
            <li>Boosts tensile strength, surface gloss, and product finish</li>
            <li>Reduces screw and die wear during extrusion or molding</li>
          </ul>
          <p>The coating results in smoother processing and better final product performance.</p>
        </>
      ),
    },
    {
      question: "Where is coated CaCO₃ commonly used?",
      answer: (
        <>
          <p className="mb-3">Coated calcium carbonate is widely used in:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Plastic manufacturing (PP, PE, PVC)</li>
            <li>Masterbatch and compounding</li>
            <li>Rubber products and automotive components</li>
            <li>Paints, powder coatings, and industrial finishes</li>
            <li>Wire & cable insulation formulations</li>
          </ul>
        </>
      ),
    },
    {
      question: "Does the coating impact chemical stability or safety?",
      answer: (
        <>
          No. The coating uses industrial-grade stearic acid which is chemically stable and widely used in polymer production.
          It does not cause degradation or discoloration; instead, it improves product durability and weather resistance.
        </>
      ),
    },
    {
      question: "What particle size grades are available?",
      answer: (
        <>
          <p className="mb-3">Our coated calcium carbonate range includes:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>C600 — Coarse-medium grade</li>
            <li>C1100 — Medium-fine performance filler</li>
            <li>C2100 — Fine grade for high-finish applications</li>
            <li>C3100 — Ultra-fine grade for engineering plastics</li>
          </ul>
          <p>Customized micron sizes are available based on requirement.</p>
        </>
      ),
    },
    {
      question: "How does coated CaCO₃ reduce production cost?",
      answer: (
        <>
          <p className="mb-3">
            Manufacturers can replace 20%–40% of expensive polymer resin with coated CaCO₃ while maintaining strength and quality. This reduces:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Total raw material cost</li>
            <li>Power consumption during processing</li>
            <li>Dependency on virgin polymers</li>
          </ul>
          <p>It significantly improves cost-efficiency and profit margins.</p>
        </>
      ),
    },
    {
      question: "What packaging options are available?",
      answer: (
        <>
          <p className="mb-3">We supply coated CaCO₃ in:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>25kg laminated HDPE bags</li>
            <li>50kg industrial-grade bags</li>
            <li>1 MT jumbo bags</li>
            <li>Custom private-label packaging</li>
          </ul>
        </>
      ),
    },
    {
      question: "Do you offer technical assistance for using coated CaCO₃?",
      answer: (
        <>
          <p className="mb-3">Yes, we help with:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Selecting the right grade for your polymer</li>
            <li>Providing trial samples and test recommendations</li>
            <li>Optimizing extrusion and molding parameters</li>
            <li>Long-term supply planning</li>
          </ul>
          <p>Our team ensures smooth integration into your manufacturing process.</p>
        </>
      ),
    },
  ];

  return (
    <div>
      <Header />
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(../images/coated-calcium-powder-banner.webp)` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-0 text-center text-white max-w-4xl px-6">

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Coated<br />
            <span className="text-white">Calcium Powder</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Royal Micron Coated Calcium Powder delivers the ideal balance of technical performance, product enhancement, and material cost efficiency — powering next-generation plastic & rubber manufacturing.
          </p>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4">Coated Calcium Powder (CCC) is a specialized performance-enhancing mineral filler where high-purity calcium powder particles are uniformly coated with stearic acid or similar fatty acids. This advanced surface modification significantly improves dispersion, water resistance, and compatibility with polymer matrices — making coated CaCO₃ an essential additive in high-performance plastic, rubber, adhesive, and coating applications.</p>
          <p>Manufactured using precision engineering and controlled treatment technology, coated calcium powder delivers superior results compared to uncoated grades, especially in environments requiring improved mechanical strength, higher process stability, and reduced moisture absorption.</p>


        </div>
      </section>

      <div className="py-20 px-6 bg-gray-50">
        <h3 className="text-2xl font-semibold">Coated Calcium Powder</h3>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative">
            <a href="#" className="block"> <Image src={CP600Img} alt=" Coated Calcium Powder c1100" loading="lazy" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" /></a>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-700">
                  Coated Calcium Powder c1100
                </h3>

              </div>

              <button className="bg-[#9b1c31] h-10 py-0 rounded-lg cursor-pointer px-3 text-sm/3 text-white inline-flex items-center border border-[#9b1c31] whitespace-nowrap"> Get a Quote</button>
            </div>
          </div>
          <div className="group relative">
            <a href="#" className="block"> <Image src={CCP2100Img} alt=" Coated Calcium Powder c2100" loading="lazy" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" /></a>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-700">
                  Coated Calcium Powder c2100
                </h3>

              </div>

              <button className="bg-[#9b1c31] h-10 py-0 rounded-lg cursor-pointer px-3 text-sm/3 text-white inline-flex items-center border border-[#9b1c31] whitespace-nowrap"> Get a Quote</button>
            </div>
          </div>
          <div className="group relative">
            <a href="#" className="block"> <Image src={CCP3100Img} alt=" Coated Calcium Powder c3100" loading="lazy" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" /></a>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-700">
                  Coated Calcium Powder c3100
                </h3>

              </div>

              <button className="bg-[#9b1c31] h-10 py-0 rounded-lg cursor-pointer px-3 text-sm/3 text-white inline-flex items-center border border-[#9b1c31] whitespace-nowrap"> Get a Quote</button>
            </div>
          </div>
          <div className="group relative">
            <a href="#" className="block"> <Image src={CCP600Img} alt="Coated Calcium Powder c600" loading="lazy" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" /></a>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-700">
                  Coated Calcium Powder c600
                </h3>

              </div>

              <div className="bg-[#9b1c31] h-10 py-0 rounded-lg cursor-pointer px-3 text-sm/3 text-white inline-flex items-center border border-[#9b1c31] whitespace-nowrap"> Get a Quote</div>
            </div>
          </div>
        </div>
      </div>




      <div className="py-32 px-6 industrial-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Image src={CosmeticImage} loading="lazy" alt="Products & Solutions" className="max-w-[520px] w-full" />
            </div>
            <div className="space-y-8 slide-in-left stagger-2">

              <h2 className="text-headline mb-12 text-4xl">Key Performance Advantages</h2>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Enhanced bonding with PP, PE, PVC & engineering plastics</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Superior dispersion — reduces agglomeration in melt flow</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Better tensile strength & dimensional stability</span>
              </div>

              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Low moisture affinity for improved shelf-life</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Reduced wear on machine screws, dies, & extruders</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Cost reduction by replacing high-cost polymer resins</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Excellent smoothness, whiteness & impact properties</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-32 px-6 industrial-gradient bg-gray-50">
        <h2 className="text-headline mb-12 text-3xl text-center">Technical Performance Improvements in Plastics</h2>
        <div className="max-w-3xl mx-auto">

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm">
                  <th className="px-4 py-3 border-b">Property</th>
                  <th className="px-4 py-3 border-b">Effect of Coated CaCO₃</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="bg-white">
                  <td className="px-4 py-3 border-b border-gray-200">Melt Flow</td>
                  <td className="px-4 py-3 border-b border-gray-200">Smoother flow, reduced torque load</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border-b border-gray-200">Mechanical Strength</td>
                  <td className="px-4 py-3 border-b border-gray-200">Higher tensile & flexural properties</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border-b border-gray-200">Surface Finish</td>
                  <td className="px-4 py-3 border-b border-gray-200">Improved gloss & polish</td>
                </tr>

                <tr className="bg-white">
                  <td className="px-4 py-3 border-b border-gray-200">Water Resistance</td>
                  <td className="px-4 py-3 border-b border-gray-200">Better dimensional stability</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border-b border-gray-200">Cost Efficiency</td>
                  <td className="px-4 py-3 border-b border-gray-200">Replaces 20–40% primary polymer</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="py-32 px-6 industrial-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Image src={CosmeticImage} loading="lazy" alt="Products & Solutions" className="max-w-[520px] w-full" />
            </div>
            <div className="space-y-8 slide-in-left stagger-2">
              <h2 className="text-headline mb-12 text-4xl">Why Manufacturers Choose Coated CaCO₃?</h2>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Stronger products at lower production cost</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Improved processing speed & reduction in energy usage</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Superior finish and functional performance</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Reliable long-term alternative to pure polymer resins</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Applications */}
      <section
        className="py-20 px-4 bg-muted bg-cover bg-center bg-no-repeat h-full"
        style={{
          backgroundImage: `url(${bgDefaultRow1.src})`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-[#9b1c31] mb-2 font-italic bg-[#9b1c31]/5 px-3 py-1 inline-block">
                // Our Application
              </p>
              <h2 className="text-4xl font-bold text-balance">
                Uses & Applications in various Industry
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {applications.map((app) => {
              if (
                app.title == "Paints & Coatings" ||
                app.title == "Plastics & Masterbatch Industry" ||
                app.title == "Rubber Industry"
              ) {
                return (
                  <div
                    key={app._id}
                    className="group cursor-pointer bg-white p-2 rounded-lg shadow hover:shadow-lg transition"
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={
                          app.image
                            ? `${process.env.NEXT_PUBLIC_API_IMAGE}${app.image}`
                            : "/placeholder.png"
                        }
                        alt={app.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <h3 className="text-xl font-semibold text-white mb-2 font-italic px-3 py-1 inline-block">
                          {app.title}
                        </h3>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-2 font-italic px-3 py-1 inline-block">
                      {app.title}
                    </h3>
                    <p className="text-gray-700 text-sm px-3">{app.description}</p>
                    <div className="px-3">
                      <button onClick={() => setShowGetBestQuote(true)} className="py-3 px-12 rounded-xl bg-[#9b1c31] text-white inline-block mt-3 cursor-pointer">Get Quote</button>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gray-5">
        <div className="text-center mb-12 fade-in-up ">
          <h2 className="text-headline text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="w-full max-w-7xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg">
              <button
                onClick={() => toggle(i)}
                className="flex justify-between w-full px-6 py-4 text-left font-medium hover:bg-gray-50 cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${openIndex === i ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openIndex === i && (
                <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <GetBestQuote isOpen={showGetBestQuote} onClose={() => setShowGetBestQuote(false)} />
    </div>
  )
}

export default CoatedCalciumPowder
