"use client"

import React, { useEffect, useState } from "react"
import { ArrowRight, Plus, Minus } from "lucide-react"
import Footer from "@/components/footer"
import axios from "axios"
import Link from "next/link"

const ProductDetailsPage = (props) => {
  const params = React.use(props.params);
  const { id } = params;
  const [activeTab, setActiveTab] = useState("overview")
  const [openFaq, setOpenFaq] = useState(null)
  const [faqs, setFaqs] = useState([])
  const [product, setProduct] = useState([])
  const [relatedServices, setRelatedServices] = useState([])

  // const product = {
  //   id: 1,
  //   title: "Premium Industrial Marble",
  //   subtitle: "Engineered Excellence",
  //   description:
  //     "High-grade marble solutions engineered for industrial applications with superior durability and aesthetic appeal.",
  //   price: "25",
  //   images: [
  //     "/premium-industrial-marble-processing-facility.jpg",
  //     "/sophisticated-industrial-equipment-manufacturing.jpg",
  //     "/modern-chemical-processing-industrial-facility.jpg",
  //   ],
  //   specifications: {
  //     "Material Grade": "Premium A+",
  //     Density: "2.7 g/cm³",
  //     "Compressive Strength": "120 MPa",
  //     "Water Absorption": "< 0.1%",
  //     "Thermal Resistance": "Up to 800°C",
  //     "Finish Options": "Polished, Honed, Brushed",
  //   },
  //   features: [
  //     "Superior durability and longevity",
  //     "Exceptional aesthetic appeal",
  //     "Chemical and heat resistance",
  //     "Low maintenance requirements",
  //     "Sustainable sourcing practices",
  //     "Custom sizing available",
  //   ],
  // }
  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
    const getProduct = async () => {
      try {

        const res = await axios.get(`${API_URL}/royal/products/${id}`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        })
        setFaqs(res.data.data.faqs || []);
        setProduct(res.data.data)
      } catch (err) {
        console.error(err)
      }
    }
    getProduct()
    const fetchProducts = async () => {
      try {



        const res = await axios.get(`${API_URL}/royal/products`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
        setRelatedServices(res.data.data || [])
      } catch (err) {
        console.log(err);

      }
    };

    fetchProducts();
  }, [])
  // const relatedServices = [
  //   {
  //     id: 2,
  //     title: "Advanced Chemical Processing",
  //     description: "State-of-the-art chemical processing solutions designed for maximum efficiency.",
  //     price: "50",
  //     image: "/modern-chemical-processing-industrial-facility.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Industrial Equipment Solutions",
  //     description: "Comprehensive industrial equipment and machinery solutions.",
  //     price: "100",
  //     image: "/sophisticated-industrial-equipment-manufacturing.jpg",
  //   },
  // ]

  // const faqs = [
  //   {
  //     question: "What makes this marble suitable for industrial applications?",
  //     answer:
  //       "Our premium industrial marble is specifically engineered with enhanced density and chemical resistance, making it ideal for high-stress industrial environments while maintaining aesthetic appeal.",
  //   },
  //   {
  //     question: "What are the available sizing options?",
  //     answer:
  //       "We offer standard sizes from 12x12 inches to 48x96 inches, with custom sizing available for specific project requirements. Thickness ranges from 10mm to 30mm.",
  //   },
  //   {
  //     question: "How do you ensure quality and consistency?",
  //     answer:
  //       "Every batch undergoes rigorous quality testing including density, absorption, and strength tests. We maintain ISO 9001 certification and provide detailed quality certificates with each shipment.",
  //   },
  //   {
  //     question: "What is the typical delivery timeframe?",
  //     answer:
  //       "Standard orders are typically delivered within 2-3 weeks. Custom sizing may require 4-6 weeks. We provide tracking information and regular updates throughout the process.",
  //   },
  //   {
  //     question: "Do you provide installation services?",
  //     answer:
  //       "Yes, we offer professional installation services through our certified partner network. Installation includes site preparation, precision cutting, and finishing work.",
  //   },
  //   {
  //     question: "What warranty do you provide?",
  //     answer:
  //       "We provide a comprehensive 10-year warranty covering material defects and structural integrity. This includes replacement and installation costs for qualifying issues.",
  //   },
  // ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/industrial-cityscape-with-oil-refineries-and-manuf.jpg)` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-0 text-center text-white max-w-4xl px-6">
          <p className="uppercase tracking-[0.2em] text-sm text-white/70 mb-6">
            Industrial Excellence
          </p>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Premium Industrial <br />
            <span className="text-[#9b1c31]">Solutions</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Transform your industrial processes with cutting-edge solutions designed for
            excellence and sustainability.
          </p>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="mb-12 flex gap-10">
            {["overview"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 uppercase text-sm font-[500] transition ${activeTab === tab
                  ? "border-b-2 border-[#9b1c31] text-[#9b1c31]"
                  : "text-gray-500 hover:text-gray-800"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              {activeTab === "overview" && (

                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {product?.price}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {product?.description}
                  </p>

                </div>
              )}

              {activeTab === "specifications" && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b py-2 text-sm">
                      <span className="font-medium">{key}</span>
                      <span className="text-gray-500">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "features" && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="grid gap-3">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-[#9b1c31] rounded-full"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {product?.images?.map((img, i) => (
                <img
                  key={i}
                  src={`${process.env.NEXT_PUBLIC_API_IMAGE}${img}`}
                  alt={`product-${i}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      

      {/* Related Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase text-[#9b1c31] text-sm font-medium mb-2">Related Services</p>
          <h2 className="text-3xl font-bold mb-4">Complete Industrial Solutions</h2>
          <p className="text-gray-600 mb-12">
            Discover our comprehensive range of complementary services
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            {relatedServices?.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img src={`${process.env.NEXT_PUBLIC_API_IMAGE}${s.images[0]}`} alt={s.title} className="w-full h-60 object-cover" />
                <div className="p-6 text-left">
                  <h4 className="text-lg font-medium mb-2">{s.title}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-md font-bold text-[#9b1c31]">{s.price}</span>
                    <Link href={`/product/${product._id}`} className="flex items-center gap-1 text-[#9b1c31] hover:underline">
                      More <ArrowRight size={16} />
                    </Link >
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 hidden">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase text-[#9b1c31] text-sm mb-2">Frequently Asked</p>
          <h2 className="text-3xl font-bold mb-4">Questions & Answers</h2>
          <p className="text-gray-600 mb-10">
            Everything you need to know about our premium industrial marble
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(i)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50"
              >
                <span className="font-medium">{faq.question}</span>
                {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProductDetailsPage
