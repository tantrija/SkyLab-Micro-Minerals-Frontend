"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/header"
import Footer from "@/components/footer"
import CosmeticImage from "../../../../public/images/successful-business-meeting-in-industrial-setting.jpg";
import CP600Img from "../../../../public/images/productsimages/activatedcalciumImage.png";
import CP1100Img from "../../../../public/images/productsimages/calcium-powder-1100.webp";
import CP2100Img from "../../../../public/images/productsimages/calcium-powder-2100.jpeg";
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
      question: "What is uncoated calcium carbonate and where is it used?",
      answer: (
        <>
          Uncoated calcium carbonate is a natural, untreated CaCO₃ mineral used across construction, paper, agriculture, pharmaceuticals, food, and general industrial applications.
          It provides excellent brightness, bulk density, and cost efficiency for high-volume usage.
        </>
      ),
    },
    {
      question: "What are the advantages of using uncoated CaCO₃?",
      answer: (
        <>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>High purity and natural whiteness</li>
            <li>Improves bulk density and structural strength</li>
            <li>Economical filler for large-scale applications</li>
            <li>Non-reactive and safe for various industries</li>
            <li>Excellent thermal stability</li>
          </ul>
          <p>It is commonly used in construction materials, putty, feed supplements, and paper.</p>
        </>
      ),
    },
    {
      question: "Where is uncoated calcium carbonate commonly applied?",
      answer: (
        <>
          <p className="mb-3">Major applications include:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Cement, concrete, AAC blocks, wall putty</li>
            <li>Ceramics, tiles, and chemical industries</li>
            <li>Poultry feed and livestock nutrition</li>
            <li>Paper brightness and opacity enhancement</li>
            <li>Pharmaceutical antacids and supplements</li>
          </ul>
        </>
      ),
    },
    {
      question: "Is uncoated CaCO₃ safe for use in food or pharma industries?",
      answer: (
        <>
          Yes, food-grade and pharma-grade calcium carbonate meets strict standards and is widely used in tablets, syrups, antacids, and food fortification.
          Industrial-grade CaCO₃ is not suitable for human consumption but is safe for construction and industrial applications.
        </>
      ),
    },
    {
      question: "What grades of uncoated calcium carbonate are available?",
      answer: (
        <>
          <p className="mb-3">Our uncoated Royal Micron series includes:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>1100 — Medium-fine grade for general industrial use</li>
            <li>2100 — Fine grade for putty, paints, and PVC fillers</li>
            <li>3100 — Ultra-fine grade for premium coatings & plastics</li>
            <li>600 — Coarse-medium grade for agriculture & feed</li>
          </ul>
        </>
      ),
    },
    {
      question: "Why do industries prefer uncoated CaCO₃ for bulk applications?",
      answer: (
        <>
          <p className="mb-3">Industries choose uncoated CaCO₃ because it:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reduces manufacturing cost significantly</li>
            <li>Provides natural whiteness and good opacity</li>
            <li>Improves material stability and structure</li>
            <li>Is available in high-volume, consistent quality</li>
          </ul>
        </>
      ),
    },
    {
      question: "What packaging options are available for uncoated CaCO₃?",
      answer: (
        <>
          <p className="mb-3">We provide:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>25kg / 50kg HDPE bags</li>
            <li>1 MT jumbo bags</li>
            <li>Bulk supply for industrial customers</li>
          </ul>
        </>
      ),
    },
    {
      question: "Do you offer technical support for selecting uncoated CaCO₃ grades?",
      answer: (
        <>
          Yes. Our technical team helps with grade selection, application testing, and optimizing formulations for industries like construction, putty, feed, and paper.
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
          style={{ backgroundImage: `url(../images/calcium-carbonate-powder.webp)` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-0 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Uncoated<br />
            <span className="text-white">Calcium Powder</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Royal Micron Uncoated Calcium Carbonate delivers superior purity, brightness, and performance, making it the perfect natural mineral solution for construction, agriculture, pharmaceuticals, paints, and industrial manufacturing.
          </p>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4">Uncoated Calcium Carbonate is one of the most versatile, essential, and widely used industrial minerals across construction, agriculture, pharmaceutical, chemical, and manufacturing sectors. Produced from high-purity natural limestone, uncoated CaCO₃ undergoes controlled crushing, grinding, and micronization to deliver consistent particle size, high whiteness, and excellent chemical stability. With no surface treatment, it offers high absorption, better reactivity, and maximum compatibility for applications where natural calcium behavior is required.</p>
          <p>Our Royal Micron Uncoated Series is engineered to deliver optimum brightness, uniform distribution, low oil absorption, and superior performance across a wide spectrum of industries. Whether used as a cost-effective filler in construction materials or a functional mineral in pharma and food formulations, uncoated calcium carbonate provides strength, volume enhancement, and improved process stability. It is preferred where purity, safety, and natural mineral properties are crucial.</p>
        </div>
      </section>
      <div className="py-20 px-6 bg-gray-50">
        <h3 className="text-2xl font-semibold">Uncoated Calcium Powder</h3>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative">
            <a href="#" className="block"> <Image src={CP600Img} alt="Calcium Powder 600" loading="lazy" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" /></a>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-700">
                  Calcium Powder 600
                </h3>
              </div>
              <button className="bg-[#9b1c31] h-10 py-0 rounded-lg cursor-pointer px-3 text-sm/3 text-white inline-flex items-center border border-[#9b1c31]"> Get a Quote</button>
            </div>
          </div>
          <div className="group relative">
            <a href="#" className="block"> <Image src={CP1100Img} alt="Calcium Powder 1100" loading="lazy" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" /></a>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-700">
                  Calcium Powder 1100
                </h3>
              </div>
              <button className="bg-[#9b1c31] h-10 py-0 rounded-lg cursor-pointer px-3 text-sm/3 text-white inline-flex items-center border border-[#9b1c31]"> Get a Quote</button>
            </div>
          </div>
          <div className="group relative">
            <a href="#" className="block"> <Image src={CP2100Img} alt=" Calcium Powder 2100" loading="lazy" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" /></a>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-700">
                  Calcium Powder 2100
                </h3>
              </div>
              <button className="bg-[#9b1c31] h-10 py-0 rounded-lg cursor-pointer px-3 text-sm/3 text-white inline-flex items-center border border-[#9b1c31]"> Get a Quote</button>
            </div>
          </div>
          <div className="group relative">
            <a href="#" className="block"> <Image src={CP3100Img} alt="Calcium Powder 3100" loading="lazy" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" /></a>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-700">
                  Calcium Powder 3100
                </h3>
              </div>
              <div className="bg-[#9b1c31] h-10 py-0 rounded-lg cursor-pointer px-3 text-sm/3 text-white inline-flex items-center border border-[#9b1c31]"> Get a Quote</div>
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
                <span className="text-base leading-relaxed">High brightness & whiteness for better surface finish</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Excellent bulk density & filling capability</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Natural pH-neutralizing and reactive properties</span>
              </div>

              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Improves mechanical stability in construction materials</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Safe for use in feed, food & pharmaceutical applications (specific grades)</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Reduces production cost by replacing expensive raw materials</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Enhances opacity, smoothness & rheology in paints and putty</span>
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
                  <th className="px-4 py-3 border-b">Advantage</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="bg-white">
                  <td className="px-4 py-3 border-b border-gray-200">CaCO₃ Purity</td>
                  <td className="px-4 py-3 border-b border-gray-200">90% – 98% (grade dependent)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border-b border-gray-200">Particle Fineness</td>
                  <td className="px-4 py-3 border-b border-gray-200">600 to 3100 grades</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border-b border-gray-200">Whiteness</td>
                  <td className="px-4 py-3 border-b border-gray-200">Superior brightness for aesthetic applications</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border-b border-gray-200">Reactivity</td>
                  <td className="px-4 py-3 border-b border-gray-200">Ideal for agriculture & chemical use</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 border-b border-gray-200">Natural Mineral Structure</td>
                  <td className="px-4 py-3 border-b border-gray-200">No coating, high absorption</td>
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

              <h2 className="text-headline mb-12 text-4xl">Why Manufacturers Choose Uncoated CaCO₃?</h2>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Highly cost-effective natural mineral filler that reduces overall raw material expenses</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Improves bulk density, strength, and stability in construction materials like putty, plaster, cement, and AAC blocks</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Enhances brightness, opacity & smoothness in paints, coatings, and paper</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Safe and naturally bioavailable, making it suitable for food, pharmaceuticals, and animal feed applications</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Neutralizes acidity & improves soil quality, ideal for agriculture and environmental uses</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Consistent performance without surface treatment, perfect for industries requiring natural mineral reactivity</span>
              </div>
              <div className="flex items-start gap-3 fade-in-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className="text-base leading-relaxed">Reliable, easy-to-process, and versatile, fitting into multiple industrial formulations with minimal adjustments</span>
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
                app.title == "Paper & Printing" ||
                app.title == "Oil & Gas Drilling Minerals" ||
                app.title == "Ceramics" ||
                app.title == "Cement / Construction" ||
                app.title == "Agriculture" ||
                app.title == "Pharmaceutical" ||
                app.title == "Food & Beverage Industry" ||
                app.title == "Water Treatment"
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

export default UncoatedCalciumCarbonate
