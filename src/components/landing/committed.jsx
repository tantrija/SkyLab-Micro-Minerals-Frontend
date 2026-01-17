"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowUpRight, CheckCircle, ChevronRight, Zap, Star, Target, Award, Users } from "lucide-react";

import axiosClientAuth from "@/Services/api";
import * as React from "react"

import ThrivingImage from "../../../public/images/thriving-through-collaboration.png";


const Committed = ({ className }) => {
  const [aboutUs, setAboutUs] = React.useState({});

  React.useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const res = await axiosClientAuth.get("/about-setting");
        console.log(res.data.data);
        setAboutUs(res?.data?.data);
      } catch (err) {
        console.log("Error fetching about us:", err);
      }
    };

    fetchAboutUs();
  }, []);


  const API_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE;
  const imageUrl =
    aboutUs?.images?.length && API_IMAGE
      ? `${API_IMAGE}${aboutUs.images[0]}`
      : "/images/avatar-2.png";


  const stats = [
    { value: "25+", label: "Years Experience", icon: Star },
    { value: "100+", label: "Happy Clients", icon: Users },
    { value: "300+", label: "Products Delivered", icon: Target },
    { value: "100%", label: "Quality Rated", icon: Award },
  ];
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 md:py-24 lg:py-32">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-blue-500/10 text-blue-700 font-semibold tracking-wide px-4 py-2 rounded-full border border-blue-200 text-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              ABOUT SKYLAB
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {aboutUs?.title || "Leading Excellence in Mineral Manufacturing"}
                </span>
              </h1>

              <div
                className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{
                  __html: aboutUs?.content || `
                    <p>With over three decades of expertise, we make it easier for organizations to grow and operate on a global scale. Skylabs is one of India's leading manufacturers of high-performance minerals, including <strong>Calcium Carbonate powder</strong> and <strong>Dolomite Powder</strong>.</p>
                    <p>Our products cater to a wide range of industries such as Paper, PVC & Masterbatches, Pipes, Paints, Rubber, Cattle Feed, Footwear, Adhesives & Sealants, Ink, Agriculture, and more. Backed by deep industry knowledge and decades of experience, our dedicated team ensures that the finest quality products are offered at the most competitive prices.</p>
                  `
                }}
              />

              

              {/* CTA Button */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Get in Touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-blue-400 transition-all duration-300 hover:shadow-md"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            

            {/* Right Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent z-10"></div>
                <img
                  src='https://api-royalmicron.tantrija.com/uploads/aboutUs/0b299f3ef8d7ce6e77ed10e07c24f68c.jpg'
                  alt="Advanced mineral processing facility at Skylab Microminerals"
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white z-20">
                  <span className="text-3xl font-bold">25+</span>
                  <span className="text-xs font-semibold tracking-wide">YEARS</span>
                  <span className="text-xs opacity-90">EXPERIENCE</span>
                </div>
              </div>

              {/* Decorative Element */}
              
            </div>
          </div>
          {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                        <stat.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230057ff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-blue-100 text-blue-700 font-medium px-4 py-1 rounded-full text-sm mb-4">
                OUR COMMITMENT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-blue-600">Skylab</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We combine decades of expertise with cutting-edge technology to deliver unmatched quality and service in the mineral industry.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Quality Assurance Card */}
              <div className="group relative">
                <div className="absolute -inset-1 rounded-3xl  transition duration-500"></div>
                <div className="relative border border-gray-100 bg-white rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-500">
                        <CheckCircle className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        Quality Assurance
                         
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our facility features an in-house particle size testing laboratory with the Malvern 2000E Particle Size Analyzer, ensuring precise and consistent particle sizes. We maintain A-rating from clients through rigorous quality checks at every production stage.
                      </p>

                      {/* Features List */}
                      <ul className="mt-6 space-y-2">
                        {['Advanced Testing Equipment', 'Stringent Quality Control', 'ISO Standards Compliance', 'Continuous Monitoring'].map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industry Representation Card */}
              <div className="group relative">
                <div className="absolute -inset-1 transition duration-500"></div>
                <div className="relative border border-gray-100 bg-white rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-500">
                        <Zap className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Leadership</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Recognized as a front-runner in the mineral industry, we provide genuine, safe, and effective products. Our commitment to exceptional service and competitive pricing has established us as a reliable source for high-quality minerals across multiple industries in India.
                      </p>

                      {/* Features List */}
                      <ul className="mt-6 space-y-2">
                        {['Industry Recognition', 'Wide Product Range', 'Competitive Pricing', 'Nationwide Network'].map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who trust Skylab for their mineral requirements. Get competitive quotes and expert consultation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Request Quote
                </a>
                <a
                  href="tel:+919983211547"
                  className="bg-blue-800/50 hover:bg-blue-900/50 text-white font-bold px-8 py-3 rounded-xl border border-blue-400 transition-all duration-300 hover:scale-105"
                >
                  Call Now: +91-9983211547
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-gray-100/80" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('https://royalmicrons.com/_next/static/media/row-01.27306049.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">
                Our Commitment
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Company Committed to <span className="text-blue-600">Performance</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Skylab Microminerals provides a wide range of high-quality Calcium Powder products,
              offering flexible solutions aligned with performance targets and cost models.
              Our products deliver specific advantages across various applications.
            </p>
          </div>

          {/* Benefits Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-5 max-w-7xl mx-auto lg:px-10">
            {/* Manufacturers Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">For Nonwoven Manufacturers</h3>
                </div>

                <div className="space-y-4">
                  {[
                    "Lower bonding temperatures",
                    "Better opacity and delusterization",
                    "Increased softness",
                    "Better filtration performance",
                    "Higher air permeability",
                    "Lower production costs"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 group/item">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-sm text-gray-500 italic">Optimizing manufacturing efficiency and cost-effectiveness</p>
                </div>
              </div>
            </div>

            {/* End Users Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">For Nonwoven End Users</h3>
                </div>

                <div className="space-y-4">
                  {[
                    "Better printability",
                    "Enhanced strength",
                    "Improved dust removal",
                    "Water repellency",
                    "Superior filtration performance"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 group/item">
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-sm text-gray-500 italic">Enhancing product performance and user experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA/Note */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-gray-600 bg-gray-50 px-6 py-4 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-700">
                Our offerings range from cost-effective Ground Limestone (Calcium Powder) fillers to Talc,
                which provides excellent impermeability and chemical resistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section 
      className="relative py-32 px-6 md:px-8 lg:px-12 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.9)), url(${ThrivingImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-blue-400"></div>
            <span className="text-blue-300 font-semibold uppercase tracking-wider text-sm">
              Collaborative Excellence
            </span>
            <div className="w-12 h-0.5 bg-blue-400"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Thriving Through
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Collaboration
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              We've moved beyond the era where individual effort alone solves complex challenges. 
              Modern success depends on <span className="font-semibold text-blue-300">collaboration</span>, 
              <span className="font-semibold text-purple-300"> data-driven insight</span>, and 
              <span className="font-semibold text-cyan-300"> collective intelligence</span>.
            </p> 
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Committed;
