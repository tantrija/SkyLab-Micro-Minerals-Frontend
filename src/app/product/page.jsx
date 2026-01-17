"use client";

import { ArrowRight, CheckCircle, Quote } from "lucide-react";
import powerTechnology from "../../../public/images/power-technology-industrial-storage-tanks.jpg";
import bgDefaultRow1 from "../../../public/images/row-01.png";
import industrialCityscape from "../../../public/images/banner-image.jpg";
import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import uncoatedBgDefaultRow1 from "../../../public/images/productsimages/calcium-powder-2100.webp";
import coatedBgDefaultRow1 from "../../../public/images/productsimages/coated-calcium-carbonate-powder-0001.jpg";

import UnCoatedCalcium from "../../../public/images/activatedcalciumImage.png";
import CoatedCalcium from "../../../public/images/productsimages/coated-calcium-carbonate-011.avif";

import DolomitePowder from "../../../public/images/productsimages/dolomite-powder.jpg";
import LimestonePowder from "../../../public/images/productsimages/limestone-powder.jpg";
import QuickLime from "../../../public/images/productsimages/quick-lime.jpg";
import CalcitePowder from "../../../public/images/productsimages/calcite-powder2.jpeg";


const ServicesPage = () => {
  // Static data to replace API calls
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [industrialData, setIndustrialData] = useState({});

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

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-destructive text-lg">{error}</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Sophisticated Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${industrialCityscape.src})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
          <div className="fade-in-up stagger-1">
            <p className="text-sm font-light tracking-[0.2em] uppercase mb-8 text-white/80">
              Industrial Excellence
            </p>
          </div>
          <h1 className="text-display fade-in-up stagger-2 mb-8 text-balance text-4xl font-bold">
            Premium Industrial
            <br />
            <span className="text-accent">Solutions</span>
          </h1>
          <p className="text-xl font-light leading-relaxed fade-in-up stagger-3 max-w-2xl mx-auto mb-12 text-white/90">
            Transform your industrial processes with our cutting-edge solutions
            designed for excellence and sustainability.
          </p>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="inline-flex items-center gap-2 bg-[#f5f8ff] text-[#0084fd] px-4 py-2 rounded-full text-sm font-medium mb-6 uppercase fade-in-up">
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

          <div className="space-y-32">
            <div key={"dolomite-powder"}
              className={`grid lg:grid-cols-2 gap-16 items-center lg:grid-flow-col-dense`}
            >
              <div
                className={`lg:col-start-2 fade-in-up stagger-1`}
              >
                <img
                  src={DolomitePowder.src}
                  alt={"Coated Calcium Powder"}
                  className="w-full h-[500px] object-cover rounded-2xl hover-scale"
                />
              </div>

              <div
                className={`lg:col-start-1 lg:row-start-1 space-y-8 slide-in-left stagger-1`}
              >
                <div>
                  <h3 className="text-subheadline mb-6 text-3xl font-medium">
                    Dolomite Powder
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    We are one of the leading manufacturers and suppliers of dolomite powder in India. This powder is formed from rocks with calcium and magnesium as its main content and the proportion of their presence can vary by location of the different mining areas. We offer certain grades of dolomite powder, as per the need of our clients. We have the capabilities to manufacture the particle size ranging from 200 Mesh to 2 Microns
                  </p>
                </div>

                <Link
                  href={`/product/dolomite-powder`}
                  className="
                    inline-flex items-center gap-2
                    px-5 py-2.5
                    rounded-full
                    bg-white
                    text-blue-700
                    font-medium
                    shadow-md
                    hover:bg-[#9b1c31] hover:text-white
                    transition-all duration-300
                  "
                >
                  More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div
              key={"quick-lime"}
              className={`grid lg:grid-cols-2 gap-16 items-center`}
            >
              <div
                className={`fade-in-up stagger-2`}
              >
                <img
                  src={QuickLime.src}
                  alt={"quick-lime"}
                  className="w-full h-[500px] object-cover rounded-2xl hover-scale"
                />
              </div>

              <div
                className={`space-y-8 slide-in-left stagger-2`}
              >
                <div>
                  <h3 className="text-subheadline mb-6 text-3xl font-medium">
                    Quick Lime
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Quick lime, also known as Calcium Oxide or burnt lime, is a powerful substance that is produced through the thermal decomposition of materials containing Calcium Carbonate at temperatures above 900°C. This white, crystalline solid is highly alkaline and caustic at room temperature, and is commonly used across a range of industries.
                  </p>
                </div>

                <Link
                  href={`/product/quick-lime`}
                  className="
                    inline-flex items-center gap-2
                    px-5 py-2.5
                    rounded-full
                    bg-white
                    text-blue-700
                    font-medium
                    shadow-md
                    hover:bg-[#9b1c31] hover:text-white
                    transition-all duration-300
                  "
                >
                  More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div key={"coated-calcium-powder"}
              className={`grid lg:grid-cols-2 gap-16 items-center lg:grid-flow-col-dense`}
            >
              <div className={`lg:col-start-2 fade-in-up stagger-1`}
              >
                <img src={LimestonePowder.src}
                  alt={"Coated Calcium Powder"}
                  className="w-full h-[500px] object-cover rounded-2xl hover-scale"
                />
              </div>

              <div className={`lg:col-start-1 lg:row-start-1 space-y-8 slide-in-left stagger-1`}
              >
                <div>
                  <h3 className="text-subheadline mb-6 text-3xl font-medium">
                    Limestone Powder
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    LSP is made from limestone rocks, these rocks have calcium carbonate as its main element. This proportion can vary by location of the different mining areas. We offer certain grades of limestone powder, as per the need of our clients. We have the capabilities to manufacture the particle size ranging from 200 Mesh to 2 Microns.
                  </p>
                </div>

                <Link
                  href={`/product/limestone-powder`}
                  className="
                    inline-flex items-center gap-2
                    px-5 py-2.5
                    rounded-full
                    bg-white
                    text-blue-700
                    font-medium
                    shadow-md
                    hover:bg-[#9b1c31] hover:text-white
                    transition-all duration-300
                  "
                >
                  More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>


            <div key={"calcite-powder"} className={`grid lg:grid-cols-2 gap-16 items-center`}            >
              <div className={`fade-in-up stagger-2`}              >
                <img src={CalcitePowder.src} alt={"Calcite Powder"} className="w-full h-[500px] object-cover rounded-2xl hover-scale" />
              </div>

              <div className={`space-y-8 slide-in-left stagger-2`}              >
                <div>
                  <h3 className="text-subheadline mb-6 text-3xl font-medium">
                    Calcite Powder
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Chanda minerals are leading Calcite Powder manufacture company in Alwar, India. Calcite powder also popular with the name calc-spar or calcium carbonate powder. We provide calcite powder top class limestone minerals.
                  </p>
                </div>

                <Link href={`/product/calcite-powder`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full  bg-white  not-[]: text-blue-700                    font-medium                    shadow-md                    hover:bg-[#9b1c31] hover:text-white                    transition-all duration-300                  "                >
                  More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>



          <div className="grid lg:grid-cols-2 gap-16 items-center ">

            <div className=" space-y-8 slide-in-left stagger-2">
              <h3 className="text-subheadline mb-6 text-3xl font-medium">Coated Calcium Powder</h3>
              <div>Coated Calcium Powder (CCC) is a specialized performance-enhancing mineral filler where high-purity calcium powder particles are uniformly coated with stearic acid or similar fatty acids. This advanced surface modification significantly improves dispersion, water resistance, and compatibility with polymer matrices — making coated CaCO₃ an essential additive in high-performance plastic, rubber, adhesive, and coating applications.
              </div><div className="flex flex-wrap gap-3"></div><a className=" inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-blue-700 font-medium shadow-md hover:bg-[#9b1c31] hover:text-white transition-all duration-300 " href="/product/coated-calcium-powder">More<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></div>
            <div className=" fade-in-up stagger-1">
              <Image src={UnCoatedCalcium} alt=" RMPL - 3100C" loading="lazy" className="aspect-square w-full  bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto h-[500px] rounded-2xl hover-scale" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center ">
            <div className=" fade-in-up stagger-1">
              <Image src={CoatedCalcium} alt=" RMPL - 3100C" loading="lazy" className="aspect-square w-full  bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto h-[500px] rounded-2xl hover-scale" />
            </div>
            <div className=" space-y-8 slide-in-left stagger-2">
              <h3 className="text-subheadline mb-6 text-3xl font-medium">Uncoated Calcium Powder</h3>
              <div>Coated Calcium Powder (CCC) is a specialized performance-enhancing mineral filler where high-purity calcium powder particles are uniformly coated with stearic acid or similar fatty acids. This advanced surface modification significantly improves dispersion, water resistance, and compatibility with polymer matrices — making coated CaCO₃ an essential additive in high-performance plastic, rubber, adhesive, and coating applications.
              </div>
              <div className="flex flex-wrap gap-3">
              </div>
              <a className=" inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-blue-700 font-medium shadow-md hover:bg-[#9b1c31] hover:text-white transition-all duration-300 "
                href="/product/uncoated-calcium-powder">
                More
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  <path d="M5 12h14">
                  </path>
                  <path d="m12 5 7 7-7 7">
                  </path>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Company Excellence Section */}
      <section className="py-32 px-6 industrial-gradient hidden"
        style={{
          backgroundImage: `url(${bgDefaultRow1.src})`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative fade-in-up">
              <img
                src={
                  industrialData?.image
                    ? `${process.env.NEXT_PUBLIC_API_IMAGE}${industrialData.image}`
                    : powerTechnology.src
                }
                alt="Industrial Excellence"
                className="w-full h-[600px] object-cover rounded-2xl"
                width={800}
                height={600}
              />
              <div className="absolute -bottom-8 -right-8 glass-effect p-8 rounded-2xl bg-white shadow-2xl">
                <div className="text-3xl font-light mb-2 text-black">
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
                    <CheckCircle className="w-5 h-5  flex-shrink-0 mt-1" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="glass-effect p-8 rounded-2xl fade-in-up stagger-6">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8  flex-shrink-0" />
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

      {/* Call to Action */}

      <Footer />
    </div>
  );
};

export default ServicesPage;
