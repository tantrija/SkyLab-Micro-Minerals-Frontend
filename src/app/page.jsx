"use client";

import {
  Fuel,
  CheckCircle,
  Quote
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import bgDefault from "../../public/images/slider-01.jpg";
import bgDefaultRow1 from "../../public/images/row-01.png";
import powerTechnology from "../../public/images/power-technology-industrial-storage-tanks.jpg";
import ActivatedCalciumImage from "../../public/images/activatedcalciumImage.png";

import CP600Img from "../../public/images/productsimages/coated-calcium-carbonate-powder-0001.jpg";
import CP1100Img from "../../public/images/productsimages/calcium-powder-1100.webp";
import CP2100Img from "../../public/images/productsimages/calcium-powder-2100.jpeg";
import CP3100Img from "../../public/images/productsimages/calcium-powder-3100.webp";

import CCP600Img from "../../public/images/productsimages/coated-calcium-powder-c600.webp";
import CCP2100Img from "../../public/images/productsimages/coated-calcium-carbonate-011.avif";
import CCP3100Img from "../../public/images/productsimages/coated-calcium-carbonate-12.webp";

import { useEffect, useState } from "react";
import TestimonialSlider from "../components/testimonial-slider";
import PremiumServices from "../components/premium-services";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import GetBestQuote from "./getBestQuote";

const Home = () => {
  const [showGetBestQuote, setShowGetBestQuote] = useState(false);
  const [bgImage, setBgImage] = useState("");
  const [hero, setHero] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [applications, setApplications] = useState([]);
  const [counter, setCounter] = useState([]);
  const [industrialData, setIndustrialData] = useState({});

  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 600], [0, -100]);

  // Fetch hero and services
  useEffect(() => {
    const loadHero = async () => {
      try {
        setError(null);
        setLoading(true);

        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
        if (!API_URL || !API_TOKEN) {
          throw new Error("Environment variables are not properly configured");
        }

        const res = await fetch(`${API_URL}/royal/hero`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const json = await res.json();
        const heroData = json.data.hero?.[0] || null;
        const servicesData = json.data.service || [];

        setHero(heroData);
        setBgImage(
          heroData?.bgImage
            ? `${process.env.NEXT_PUBLIC_API_IMAGE}${heroData.bgImage}`
            : bgDefault.src
        );
        setServices(servicesData);
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err.message : "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

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

    loadHero();
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

  useEffect(() => {
    const fetchCounter = async () => {
      try {
        setError(null);
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
        if (!API_URL || !API_TOKEN) throw new Error("API variables missing");

        const res = await fetch(`${API_URL}/royal/counter`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
        const json = await res.json();
        setCounter(json.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchCounter();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <motion.div
        className="bg-cover bg-center bg-no-repeat flex-1 transition-all duration-500"
        style={{
          backgroundImage: `url(${bgImage || bgDefault.src})`,
          y: parallax,
        }}
      >
        <div className="bg-black/55">
          <section className="relative text-white pt-24 px-6 h-full">
            <div className="max-w-7xl mx-auto flex flex-col justify-center h-full text-left">
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                  <span className="ml-3">Loading hero content...</span>
                </div>
              ) : hero ? (
                <>
                  <motion.span
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#9b1c31] text-white text-xs px-3 py-1 rounded-sm w-fit mb-4 text-left"
                  >
                    New We serve the best
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-bold leading-tight mb-6"
                  >
                    {hero.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-lg md:text-xl mb-8 text-gray-200"
                  >
                    {hero.description}
                  </motion.p>
                </>
              ) : (
                <div className="text-center py-20">
                  <p className="text-red-500">Failed to load hero content.</p>
                </div>
              )}
              <div className="flex item-center gap-4">
                <a href="#" className="bg-white px-12 py-3 rounded-lg text-[#9b1c31] hover:bg-[#9b1c31] hover:text-white">View Products</a>
                <a href="#" className="bg-white px-12 py-3 rounded-lg text-[#9b1c31] hover:bg-[#9b1c31] hover:text-white">Contact Us</a>
              </div>
            </div>

          </section>

          {/* Services Section */}
          <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 mb-2 gap-2">
              {services?.slice(0, 2).map((service) => (
                <motion.div
                  key={service._id}
                  whileHover={{ scale: 1.01 }}
                  className="bg-black/50 h-[150px] text-white p-6 rounded-lg cursor-pointer hover:bg-[#9b1c31] transition border border-[#ffffff17]"
                  onMouseEnter={() => {
                    if (service?.image) {
                      setBgImage(
                        `${process.env.NEXT_PUBLIC_API_IMAGE}${service.image}`
                      );
                    }
                    setActiveService(service._id);
                  }}
                >
                  <div className="flex flex-col items-start space-y-3">
                    <Fuel className="w-10 h-10 text-red-500" />
                    <span className="text-sm uppercase text-gray-400">
                      {service.title}
                    </span>
                    <h3 className="text-lg font-semibold">{service.description}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
              {services?.slice(2).map((service) => (
                <motion.div
                  key={service._id}
                  whileHover={{ scale: 1.01 }}
                  className="bg-black/50 h-[200px] text-white rounded-lg p-6 cursor-pointer hover:bg-[#9b1c31] transition border border-[#ffffff17]"
                  onMouseEnter={() => {
                    if (service?.image) {
                      setBgImage(
                        `${process.env.NEXT_PUBLIC_API_IMAGE}${service.image}`
                      );
                    }
                  }}
                >
                  <div className="flex flex-col items-start space-y-3">
                    <Fuel className="w-10 h-10 text-red-500" />
                    <span className="text-sm uppercase text-gray-400">
                      {service.title}
                    </span>
                    <h3 className="text-lg font-semibold">{service.description}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <PremiumServices />

      {/* Statistics Section */}
      <section className="py-32 px-6 industrial-gradient hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative fade-in-up">
              <img
                src={
                  industrialData?.image
                    ? `${process.env.NEXT_PUBLIC_API_IMAGE}${industrialData.image}`
                    : powerTechnology.src
                }
                alt="Industrial Excellence" loading="lazy"
                className="w-full h-[600px] object-cover rounded-2xl"
                width={800}
                height={600}
              />
              <div className="absolute -bottom-8 -right-8 glass-effect p-8 rounded-2xl bg-white shadow-2xl">
                <div className="text-3xl font-light text-black mb-2">
                  {industrialData?.experience ?? 0}+
                </div>
                <div className="text-sm text-gray-700">Years of Excellence</div>
              </div>
            </div>

            {/* Right text block */}
            <div className="space-y-8 slide-in-left stagger-2">
              <div>
                <p className="text-accent text-sm font-medium tracking-[0.15em] uppercase mb-4">
                  Industrial Leadership
                </p>
                <h2 className="text-headline mb-8 text-3xl">
                  {industrialData?.main_heading}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                  {industrialData?.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {industrialData?.bullets?.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 fade-in-up"
                    style={{ animationDelay: `${0.1 * (index + 3)}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="glass-effect p-8 rounded-2xl fade-in-up stagger-6">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-foreground italic mb-4 text-lg">
                      {industrialData?.quote}
                    </p>
                    <div className="text-sm">
                      <div className="font-semibold text-foreground">
                        {industrialData?.author_name}
                      </div>
                      <div className="text-muted-foreground">
                        {industrialData?.author_designation}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="inline-flex items-center gap-2 bg-[#9b1c31]/5 text-[#9b1c31] px-4 py-2 rounded-full text-sm font-medium mb-6 uppercase fade-in-up">
              Our Products
            </p>
            <h2 className="text-headline fade-in-up stagger-1 mb-6 text-4xl">
              Engineered for
              <br />
              Industrial Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up stagger-2">
              Discover our comprehensive range of premium industrial solutions
            </p>
          </div>
          <div className="mb-22">
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
                  <button onClick={() => setShowGetBestQuote(true)} className="bg-[#9b1c31] h-10 py-0 rounded-lg cursor-pointer px-3 text-sm/3 text-white inline-flex items-center border border-[#9b1c31]"> Get a Quote</button>
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
                  <button onClick={() => setShowGetBestQuote(true)} className="bg-[#9b1c31] h-10 py-0 rounded-lg cursor-pointer px-3 text-sm/3 text-white inline-flex items-center border border-[#9b1c31]"> Get a Quote</button>
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
                  <button onClick={() => setShowGetBestQuote(true)} className="bg-[#9b1c31] h-10 py-0 rounded-lg cursor-pointer px-3 text-sm/3 text-white inline-flex items-center border border-[#9b1c31]"> Get a Quote</button>
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
          <div className="">
            <h3 className="text-2xl font-semibold">Coated Calcium Powder</h3>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div className="group relative">
                <a href="#" className="block"> <Image src={ActivatedCalciumImage} loading="lazy" alt="Coated Calcium Powder" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" /></a>
                <div className="mt-4 flex gap-2 justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-gray-700 ">
                      Coated Calcium Powder c1100
                    </h3>
                  </div>
                  <button onClick={() => setShowGetBestQuote(true)} className="bg-[#9b1c31] h-10 py-0 rounded-lg cursor-pointer px-3 text-sm/3 text-white inline-flex items-center border border-[#9b1c31] whitespace-nowrap"> Get a Quote</button>
                </div>
              </div>
              <div className="group relative">
                <a href="#" className="block"> <Image src={CCP2100Img} alt="Coated Calcium Powder c2100" loading="lazy" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" /></a>
                <div className="mt-4 flex gap-2 justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-gray-700">
                      Coated Calcium Powder c2100
                    </h3>
                  </div>
                  <button onClick={() => setShowGetBestQuote(true)} className="bg-[#9b1c31] h-10 py-0 rounded-lg cursor-pointer px-3 text-sm/3 text-white inline-flex items-center border border-[#9b1c31] whitespace-nowrap"> Get a Quote</button>
                </div>
              </div>
              <div className="group relative">
                <a href="#" className="block"> <Image src={CCP3100Img} alt="Coated Calcium Powder c3100" loading="lazy" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" /></a>

                <div className="mt-4 flex gap-2 justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-gray-700">
                      Coated Calcium Powder c3100
                    </h3>

                  </div>
                  <button onClick={() => setShowGetBestQuote(true)} className="bg-[#9b1c31] h-10 py-0 rounded-lg cursor-pointer px-3 text-sm/3 text-white inline-flex items-center border border-[#9b1c31] whitespace-nowrap"> Get a Quote</button>
                </div>
              </div>
              <div className="group relative">
                <a href="#" className="block"> <Image src={CCP600Img} alt="Coated Calcium Powder c600" loading="lazy" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" /></a>

                <div className="mt-4 flex gap-2 justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-gray-700">
                      Coated Calcium Powder c600
                    </h3>

                  </div>

                  <button onClick={() => setShowGetBestQuote(true)} className="bg-[#9b1c31] h-10 py-0 rounded-lg cursor-pointer px-3 text-sm/3 text-white inline-flex items-center border border-[#9b1c31] whitespace-nowrap"> Get a Quote</button>
                </div>
              </div>
            </div>
          </div>



          {/* <div className="space-y-32">
            
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="stagger-1">
              <Image src={ActivatedCalciumImage} alt="" className="max-w-[520px] w-full" />
            </div>
            <div className=" space-y-8 slide-in-left stagger-2">
                  <div>
                    <div className="text-subheadline mb-2 text-3xl font-medium">Uncoated Calcium Powder</div>
                    <h4 className="text-[#9b1c31] font-semibold text-xl mb-5">₹ 2,000</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">We offer premium-quality Uncoated Calcium Powder, formulated using carefully selected base materials. Coated with Stearic Acid or Titanate, our Uncoated Calcium Powder is known for its superior dispersion, enhanced stability, and excellent performance across a variety of applications.</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="glass-effect bg-[#9b1c31]/20 text-[#9b1c31] px-6 py-3 rounded-full text-sm font-medium">Packaging — Packaging — 25 K.G. Premium Grade K.G. Premium Grade
</span>
                  </div>
                 <div className="flex item-center gap-4">
                   <button className="bg-[#9b1c31] py-3 rounded-lg cursor-pointer px-12 text-white inline-block border border-[#9b1c31]"> Get a Quote</button>
                  <button className="bg-white py-3 rounded-lg cursor-pointer px-12 text-[#9b1c31] inline-block border border-[#9b1c31]"> More</button>
                 </div>
            </div>
          </div>

           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className=" space-y-8 slide-in-left stagger-2">
                  <div>
                    <div className="text-subheadline mb-2 text-3xl font-medium">Coated Calcium Powder</div>
                    <h4 className="text-[#9b1c31] font-semibold text-xl mb-5">₹ 2,000</h4>
                    <div>
                        <div className="flex gap-16">
                            <p className="font-semibold">Grade</p>
                            <p>Industrial Grade</p>
                        </div>
                        <div className="flex gap-16">
                            <p className="font-semibold">Purity/Concentration</p>
                            <p>99%</p>
                        </div>
                        <div className="flex gap-16">
                            <p className="font-semibold">Grade</p>
                            <p>Industrial Grade</p>
                        </div>
                        <div className="flex gap-16">
                            <p className="font-semibold">Grade</p>
                            <p>Industrial Grade</p>
                        </div>
                        <div className="flex gap-16">
                            <p className="font-semibold">Grade</p>
                            <p>Industrial Grade</p>
                        </div>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">We offer premium-quality Uncoated Calcium Powder, formulated using carefully selected base materials. Coated with Stearic Acid or Titanate, our Uncoated Calcium Powder is known for its superior dispersion, enhanced stability, and excellent performance across a variety of applications.</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="glass-effect bg-[#9b1c31]/20 text-[#9b1c31] px-6 py-3 rounded-full text-sm font-medium">Packaging — Packaging — 25 K.G. Premium Grade K.G. Premium Grade
</span>
                  </div>
                   <div className="flex item-center gap-4">
                    <button className="bg-[#9b1c31] py-3 rounded-lg cursor-pointer px-12 text-white inline-block border border-[#9b1c31]"> Get a Quote</button>
                    <button className="bg-white py-3 rounded-lg cursor-pointer px-12 text-[#9b1c31] inline-block border border-[#9b1c31]"> More</button>
                  </div>
            </div>
            <div className="stagger-1">
              <Image src={ActivatedCalciumImage} alt="" className="max-w-[520px] w-full" />
            </div>
          
          </div>
          </div> */}



        </div>
      </section>


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
            {applications.map((app) => (
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
            ))}
          </div>
        </div>
      </section>



      <div className="bg-[#f3f4f6]">
        <div className="container mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-medium mb-4 text-balance">
              Why Customers Love To Choose Us?
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-2xl font-semibold mb-3">Our Mines </h4>
              <p>Royal Microns for Chemicals & Mining offers an extensive range of Ground and Coated Calcium Powder products, along with Talc powder, designed for diverse industrial applications. Backed by years of industry expertise and global R&D capabilities, we provide guidance on optimal mineral usage and can develop customized products to meet specific performance requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-2xl font-semibold mb-3">Our Products</h4>
              <p>Royal Microns for Chemicals & Mining offers an extensive range of Ground and Coated Calcium Powder products, along with Talc powder, designed for diverse industrial applications. Backed by years of industry expertise and global R&D capabilities, we provide guidance on optimal mineral usage and can develop customized products to meet specific performance requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-2xl font-semibold mb-3">Our Plants</h4>
              <p>Our newest dry-milling line incorporates state-of-the-art German milling and classifier technology. By mid-year, we will introduce a new ball-mill line to double our production capacity. Our advanced coating system—one of the most sophisticated in India—produces premium Coated Calcium Powder that delivers cost-saving, high-performance solutions across multiple industries. </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-2xl font-semibold mb-3">Our Logistics</h4>
              <p>With decades of experience, Royal Minerals ensures reliable, on-time delivery—an essential factor for our global clients. Our expertise in transportation and specialized handling allows us to serve Calcium Powder and Talc customers in more than 60 countries. We also offer import consolidation services and understand the unique shipping needs of our international partners. </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-2xl font-semibold mb-3">Our Quality System </h4>
              <p>In our laboratory, experienced staff operate the latest analytical technologies to maintain strict quality control at every stage of production. All equipment undergoes regular calibration and maintenance. Continuous sampling throughout the manufacturing process ensures consistent, reliable product quality. </p>
            </div>
          </div>
        </div>
      </div>



      {/* Counter */}
      <section
        className="py-20 px-4 bg-black text-secondary-foreground bg-fixed bg-cover bg-center bg-no-repeat h-full"
        style={{
          backgroundImage: `url(${bgDefault.src})`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {counter.map((item) => (<>
              <div>
                <div className="text-4xl font-bold text-white mb-2">{item.yearsExperience}+</div>
                <div className="text-sm text-white">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">{item.skilledProfessional}+</div>
                <div className="text-sm text-white">Skilled Professionals</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">{item.visitedConference}+</div>
                <div className="text-sm text-white">Visited Conferences</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">{item.happyCustomers}+</div>
                <div className="text-sm text-white">Happy Customers</div>
              </div> </>))}
          </div>
        </div>
      </section>

      <TestimonialSlider />
      <Footer />
      <GetBestQuote isOpen={showGetBestQuote} onClose={() => setShowGetBestQuote(false)} />

    </div>
  );
};

export default Home;
