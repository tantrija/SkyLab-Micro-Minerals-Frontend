"use client";

import { useEffect, useState } from "react";
import { CheckCircle, ArrowLeft, ArrowRight, Target, Zap, Users, Award } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import productsImg from "../../../public/images/successful-business-meeting-in-industrial-setting.jpg";
import MaiaGordian from "../../../public/images/avatar-1.png";
import Image from "next/image";
import bgSliderImage from "../../../public/images/about-banner-img.png";
import axios from "axios";
import CosmeticImage from "./images/img-new.png";
import ThrivingImage from "./images/thriving-through-collaboration.png";


import PaintsImage from "./images/paints.png";
import PetrochemicalsImage from "./images/petrochemicals.png";
import RubberImage from "./images/rubber.png";
import CosmeticsImage from "./images/cosmetics.png";
import PaperImage from "./images/paper.png";
import FootwearImage from "./images/footwear-industry.png";


const AboutPage = () => {
  const [offsetY, setOffsetY] = useState(0)
  const [aboutUs, setAboutUs] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [counter, setCounter] = useState([]);
  const [partner, setPartner] = useState({});

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        setError(null)
        const API_URL = process.env.NEXT_PUBLIC_API_URL
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN

        if (!API_URL || !API_TOKEN) throw new Error("API variables missing")

        const res = await fetch(`${API_URL}/royal/about-setting`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        })

        const json = await res.json()
        console.log("API Response:", json)

        setAboutUs(json.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch")
      } finally {
        setLoading(false)
      }
    }

    fetchAboutUs()
  }, [])

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
        console.log("API Response:", json);

        setCounter(json.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };
    const fetchPartner = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;


        const res = await axios.get(`${API_URL}/royal/our-partners`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        console.log("API Response:", res.data.data);

        setPartner(res?.data?.data?.data[0]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };
    fetchCounter();
    fetchPartner();
  }, []);


  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-destructive text-lg">{error}</p>
        </div>
      </div>
    )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Premium Industrial */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden texture-overlay">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${bgSliderImage.src})`,
            transform: `translateY(${offsetY * 0.3}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Hero Content */}
        <div className="relative z-1  text-center text-white max-w-6xl mx-auto px-6">
          <div className="fade-in-up ">
           

            <h1 className="text-display mb-8 text-4xl">
             About Us
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            We are fully committed to delivering complete satisfaction to our clients and have opened new chapters in the Indian mineral industry.
            </p>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm tracking-wide">SCROLL TO EXPLORE</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
          </div>
        </div>
      </section>


      {/* Company Story Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image Column */}
            <div className="relative fade-in-up   stagger-1">
              <div className="relative overflow-hidden rounded-3xl">
                {aboutUs.images?.[0] && (
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_IMAGE}${aboutUs.images[0]}`}
                    alt={aboutUs.title}
                    className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent text-gray-800"></div>
              </div>

              {/* Floating Stats */}
              {/* <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-8 shadow-2xl border border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold  text-gray-800 mb-2">{aboutUs.since || "2018"}</div>
                </div>
              </div> */}
            </div>

            {/* Content Column */}
            <div className="space-y-8 fade-in-up stagger-2 bg-white">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#9b1c31]/5 text-[#9b1c31] px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  SINCE {aboutUs.since || "2018"}
                </div>

                <h2 className="text-3xl mb-6 text-balance text-gray-900 font-semibold">
                  {aboutUs.title || "Building Tomorrow's Industrial Solutions"}
                </h2>

                <p
                  className="text-lg text-gray-600 leading-relaxed mb-8"
                  dangerouslySetInnerHTML={{
                    __html:
                      aboutUs?.content ||
                      "We transform raw materials into premium industrial solutions through decades of expertise, cutting-edge technology, and an unwavering commitment to quality that sets industry standards.",
                  }}
                />


              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6">
                {counter.map((item) => (
                  <>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground mb-1">32+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground mb-1">50+</div>
                      <div className="text-sm text-gray-600">Skilled Professionals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground mb-1">100%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Quality Section */}
      <section className="py-32 px-6 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-up  ">
         
            <h2 className="text-headline mb-6 text-2xl">We Would Love to Talk</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             We value meaningful conversations and look forward to connecting with you—whether you're seeking collaboration, career opportunities, or wish to explore our offerings. We’re always happy to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Values Card */}
            <div className="group bg-card border border-border rounded-3xl p-10 hover-lift fade-in-up   stagger-1">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#9b1c31]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#9b1c31]/20 transition-colors">
                  <CheckCircle className="w-8 h-8 text-[#9b1c31]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
                  <p className="text-gray-600 leading-relaxed">
                   Our facility is equipped with an in-house particle size testing laboratory featuring the Malvern 2000E Particle Size Analyzer. This advanced equipment enables us to maintain precise and consistent particle sizes, ensuring reliable and high-quality end products. We are proud to be a quality-rated supplier, holding an A-rating from our valued clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Card */}
            <div className="group bg-card border border-border rounded-3xl p-10 hover-lift fade-in-up   stagger-2">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#9b1c31]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#9b1c31]/20 transition-colors">
                  <Zap className="w-8 h-8 text-[#9b1c31]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Representation</h3>
                  <p className="text-gray-600 leading-relaxed">
                   We are recognized as one of the front-runners in the mineral industry, offering genuine, safe, and effective products. Over the years, we have become a reliable and economical source of high-quality minerals for a wide range of industries. Our commitment to exceptional service and competitive pricing has earned us a strong and satisfied customer base across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-32 px-6  bg-white text-gray-700">
        <div className="max-w-7xl mx-auto">
          {/* <div className="text-center mb-16 fade-in-up  ">
            <h3 className="text-headline mb-4 text-balance">{partner?.small_heading}</h3>
            <p className="text-xl text-gray-700">{partner?.main_heading}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center fade-in-up   stagger-1">
            {partner?.partners?.map((partner, index) => (
              <div key={partner} className="text-center group cursor-pointer">
                <div className="text-2xl font-bold text-gray-700 group-hover:text-accent transition-colors duration-300 text-center">
                  {partner}
                </div>
              </div>
            ))}
          </div> */}
          <div className="text-center mb-16 fade-in-up  ">
            <h3 className="text-3xl font-semibold mb-4">Industries We Serve</h3>
            <p className="text-base text-gray-700 max-w-2xl mx-auto">We support third-party inspections by any customer-approved laboratory prior to shipment, ensuring complete transparency and quality assurance.</p>
          </div>

             <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-lg rounded-xl relative overflow-hidden">
                      <Image src={PaintsImage} loading="lazy" alt="Paints" className="w-full " />
                     <div className="absolute bottom-0 left-0 w-full px-6 py-4 text-white bg-black/50">
                       <h3 className="text-xl font-semibold mb-2">Paints</h3>
                      <p className="text-sm">Talc is widely used in the paint industry due to its platy structure, which enhances smoothness, coverage, and suspension properties.</p>
                     </div>
                </div>
                 <div className="bg-white shadow-lg rounded-xl relative overflow-hidden">
                      <Image src={PetrochemicalsImage} loading="lazy" alt="Petrochemicals" className="w-full " />
                     <div className="absolute bottom-0 left-0 w-full px-6 py-4 text-white bg-black/50">
                       <h3 className="text-xl font-semibold mb-2">Petrochemicals</h3>
                      <p className="text-sm">Talc plays a significant role in the petrochemical sector, offering performance benefits in various processing applications.</p>
                     </div>
                </div>
                 <div className="bg-white shadow-lg rounded-xl relative overflow-hidden">
                      <Image src={RubberImage} loading="lazy" alt="Rubber" className="w-full " />
                     <div className="absolute bottom-0 left-0 w-full px-6 py-4 text-white bg-black/50">
                       <h3 className="text-xl font-semibold mb-2">Rubber</h3>
                      <p className="text-sm">In the rubber industry, talc functions as an effective partitioning agent, helping reduce friction and improve processing efficiency.</p>
                     </div>
                </div>
                <div className="bg-white shadow-lg rounded-xl relative overflow-hidden">
                      <Image src={CosmeticsImage} loading="lazy" alt="Cosmetics" className="w-full " />
                     <div className="absolute bottom-0 left-0 w-full px-6 py-4 text-white bg-black/50">
                       <h3 className="text-xl font-semibold mb-2">Cosmetics</h3>
                      <p className="text-sm">Talc is one of the most essential ingredients in a variety of cosmetic formulations, valued for its softness, absorbency, and skin-friendly properties.</p>
                     </div>
                </div>
                <div className="bg-white shadow-lg rounded-xl relative overflow-hidden">
                      <Image src={PaperImage} loading="lazy" alt="Paper" className="w-full " />
                     <div className="absolute bottom-0 left-0 w-full px-6 py-4 text-white bg-black/50">
                       <h3 className="text-xl font-semibold mb-2">Paper</h3>
                      <p className="text-sm">Talc is used extensively in the paper industry to improve printability, opacity, and surface smoothness.</p>
                     </div>
                </div>
                <div className="bg-white shadow-lg rounded-xl relative overflow-hidden">
                      <Image src={FootwearImage} loading="lazy" alt="Footwear Industry" className="w-full " />
                     <div className="absolute bottom-0 left-0 w-full px-6 py-4 text-white bg-black/50">
                       <h3 className="text-xl font-semibold mb-2">Footwear Industry</h3>
                      <p className="text-sm">Talc enhances mixing, improves finish quality, and provides smoothness in footwear manufacturing processes.</p>
                     </div>
                </div>
             </div>

              <div className="text-center my-16 fade-in-up  ">
            <h3 className="text-3xl font-semibold mb-4">Industrial Factory</h3>
            <p className="text-base text-gray-700 max-w-3xl mx-auto mb-3">The industrial sector plays a vital role in shaping modern society.</p>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">Our active involvement with the Government of India, strategic trade partnerships, and commitment to technological advancement offer us opportunities to unlock the full potential of this dynamic industry. Together, we aim to achieve a future where every component is 100% made in India, enabling the nation to emerge as a powerful global manufacturing hub.</p>
          </div>

<div className="py-32 px-6 industrial-gradient">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div>
         <Image src={CosmeticImage} loading="lazy" alt="Products & Solutions" className="max-w-[520px] w-full" />
      </div>
      <div className="space-y-8 slide-in-left stagger-2">
        <p className="text-accent text-sm font-medium tracking-[0.15em] uppercase mb-5">Dream Big. Deliver Inspiring Solutions.</p>
        <h2 className="text-headline mb-5 text-4xl">Products & Solutions</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">We offer solutions that support long-term industrial reliability and operational excellence:</p>
        <div className="flex items-start gap-3 fade-in-up">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          <span className="text-base leading-relaxed">Assured plant availability and operational security</span>
        </div>
         <div className="flex items-start gap-3 fade-in-up">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          <span className="text-base leading-relaxed">Improved operating conditions</span>
        </div>
         <div className="flex items-start gap-3 fade-in-up">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          <span className="text-base leading-relaxed">Reduced strain on internal maintenance resources</span>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
     
      </section>
   <div className="bg-[#f3f4f6] py-32 px-6 industrial-gradient ">
<div className=" container mx-auto">
  <div className="text-center mb-16 fade-in-up  ">
            <h3 className="text-3xl font-semibold mb-4">A Company Committed to Performance</h3>
            <p className="text-base text-gray-700 max-w-2xl mx-auto">Royal Microns provides a wide range of high-quality Calcium Powder products, offering flexible solutions aligned with performance targets and cost models. Our products deliver specific advantages across various applications, including nonwoven manufacturing.</p>
          </div>
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div className="stagger-1 bg-card border border-border rounded-3xl p-10">
        <h2 className="text-headline mb-4 text-2xl">Benefits for Nonwoven Manufacturers</h2>
        <div className="flex items-start gap-3 fade-in-up mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          <span className="text-md leading-relaxed">Lower bonding temperatures</span>
        </div>
         <div className="flex items-start gap-3 fade-in-up mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          <span className="text-md leading-relaxed">Better opacity and delusterization</span>
        </div>
         <div className="flex items-start gap-3 fade-in-up mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          <span className="text-md leading-relaxed">Increased softness</span>
        </div>

        <div className="flex items-start gap-3 fade-in-up mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          <span className="text-md leading-relaxed">Better filtration performance</span>
        </div>
        <div className="flex items-start gap-3 fade-in-up mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          <span className="text-md leading-relaxed">Higher air permeability</span>
        </div>
        <div className="flex items-start gap-3 fade-in-up mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          <span className="text-md leading-relaxed">Lower production costs</span>
        </div>
      </div>
      <div className="stagger-2 bg-card border border-border rounded-3xl p-10 h-full">
        <h2 className="text-headline mb-4 text-2xl">Benefits for Nonwoven End Users</h2>
        <div className="flex items-start gap-3 fade-in-up mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          <span className="text-md leading-relaxed">Better printability</span>
        </div>
         <div className="flex items-start gap-3 fade-in-up mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          <span className="text-md leading-relaxed">Enhanced strength</span>
        </div>
         <div className="flex items-start gap-3 fade-in-up mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          <span className="text-md leading-relaxed">Improved dust removal</span>
        </div>

        <div className="flex items-start gap-3 fade-in-up mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          <span className="text-md leading-relaxed">Water repellency</span>
        </div>
        <div className="flex items-start gap-3 fade-in-up mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          <span className="text-md leading-relaxed">Superior filtration performance</span>
        </div>
      </div>
    </div>
    <p className="mt-12 text-sm max-w-3xl">Our offerings range from cost-effective Ground Limestone (Calcium Powder) fillers to Talc, which provides excellent impermeability and chemical resistance.</p>
  </div>
</div>

</div>

 <div className="py-32 px-6 " style={{
            backgroundImage: `url(${ThrivingImage.src})`,
           backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          }}>
            <div className="text-center text-white">
            <h3 className="text-5xl font-semibold mb-8">Thriving Through Collaboration</h3>
            <p className="text-lg text-white max-w-2xl mx-auto">We’ve surpassed the era where individual effort alone can solve today’s complex industrial challenges. Modern success depends on collaboration, data-driven insight, and collective intelligence. This cooperative approach is our “secret sauce”—the driving force behind our growth and our ability to build better products every day.</p>
          </div>
          </div>

      {/* Expert Team Section */}
      {/* <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
             
            <div className="space-y-8 fade-in-up  ">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#9b1c31]/10 text-[#9b1c31] px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Users className="w-4 h-4" />
                  OUR EXPERTS
                </div>

                <h2 className="text-headline mb-6 text-balance">Decades of Experience, Honest Excellence</h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Today's industrial solutions were formed through years of dedication, when expert knowledge settled
                  into the foundation of our operations and were refined under rigorous standards.
                </p>
              </div>

              
              <div className="space-y-6">
                {[
                  "Taking into account the impact to Mother Earth's Ecology",
                  "We faced with declining production from its aging fields",
                  "Power & fertilizer services to give a greener per production",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            
            <div className="space-y-6 fade-in-up   stagger-1">
            
              <div className="group bg-card border border-border rounded-3xl p-8 hover-lift">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <Image
                      src={MaiaGordian || "/placeholder.svg"}
                      alt="Maria Gordian"
                      className="w-20 h-20 rounded-2xl object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full border-4 border-card"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1">Maria Gordian</h4>
                    <p className="text-primary font-medium mb-2">Senior Technologist</p>
                    <p className="text-sm text-gray-600 mb-4">WORKING SINCE 2018</p>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

               
              <div className="group bg-card border border-border rounded-3xl p-8 hover-lift">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <Image
                      src={MaiaGordian || "/placeholder.svg"}
                      alt="David Kingston"
                      className="w-20 h-20 rounded-2xl object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full border-4 border-card"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1">David Kingston</h4>
                    <p className="text-accent font-medium mb-2">Managing Director</p>
                    <p className="text-sm text-gray-600 mb-4">WORKING SINCE 2016</p>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default AboutPage;
