"use client"
import Image from "next/image"
import industrialWorker from "../../../../public/images/beijing-china-june-modern.webp"
import { CircularBadge } from "@/components/landing/circular-badge"
import { cn } from "@/lib/utils"
import axiosClientAuth from "@/Services/api"
import * as React from "react"
import { ArrowRight } from "lucide-react"
// import FAQ from "@/components/landing/faq"
import { useParams } from "next/navigation"
import Link from "next/link"


const ServiceDetailPage = ({ className }) => {
  const [service, setServices] = React.useState({})
  const [rservice, setRservices] = React.useState([])
  const { slug } = useParams();
  console.log(slug);

  const [activeTab, setActiveTab] = React.useState("overview")

  React.useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axiosClientAuth.get(`/services/${slug}`);
        setServices(res?.data?.data);
      } catch (err) {
        console.log("Error fetching services:", err);
      }
    };

    fetchServices();
    
    const fetchRServices = async () => {
      try {
        const res = await axiosClientAuth.get(`/services`);
        console.log(res.data.data);

        setRservices(res?.data?.data);
      } catch (err) {
        console.log("Error fetching services:", err);
      }
    };

    fetchRServices();
  }, []);






  // Related services
  const relatedServices = [
    {
      id: 2,
      title: "Advanced Chemical Processing",
      description: "State-of-the-art chemical processing solutions designed for maximum efficiency.",
      price: "50",
      image: "/modern-chemical-processing-industrial-facility.jpg",
    },
    {
      id: 3,
      title: "Industrial Equipment Solutions",
      description: "Comprehensive industrial equipment and machinery solutions.",
      price: "100",
      image: "/sophisticated-industrial-equipment-manufacturing.jpg",
    },
  ]


  // Product data
  const product = {
    id: 1,
    title: "Premium Industrial Marble",
    subtitle: "Engineered Excellence",
    description:
      "High-grade marble solutions engineered for industrial applications with superior durability and aesthetic appeal. Perfect for commercial and residential projects requiring exceptional quality.",
    price: "25",
    images: [
      "/premium-industrial-marble-processing-facility.jpg",
      "/sophisticated-industrial-equipment-manufacturing.jpg",
      "/modern-chemical-processing-industrial-facility.jpg",
    ],
    specifications: {
      "Material Grade": "Premium A+",
      Density: "2.7 g/cm³",
      "Compressive Strength": "120 MPa",
      "Water Absorption": "< 0.1%",
      "Thermal Resistance": "Up to 800°C",
      "Finish Options": "Polished, Honed, Brushed",
    },
    features: [
      "Superior durability and longevity",
      "Exceptional aesthetic appeal",
      "Chemical and heat resistance",
      "Low maintenance requirements",
      "Sustainable sourcing practices",
      "Custom sizing available",
    ],
  }



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl md:px-6 px-5 py-5 md:py-24">
        <p className="text-sm font-medium tracking-widest text-[#0057ff]">
          Home / Services / Services Details
        </p>

        <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-start">
          {/* Left: Headline & Copy */}
          <div>
            <h2 className="text-balance font-sans text-4xl font-bold leading-tight md:text-6xl">
              {service?.title && "Built for Industrial"}
            </h2>

            <div className="mt-6 space-y-5 text-base text-gray-600 leading-relaxed">
              {service?.description ? (
                <div
                  dangerouslySetInnerHTML={{ __html: service?.description }}
                  className="text-base leading-relaxed"
                />
              ) : (
                "Built for Industrial"
              )}
            </div>
          </div>

          {/* Right: Main Image with Circular Badge */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_IMAGE}/${service?.images?.[0]}`}
                alt="Industrial team in a modern factory"
                width={720}
                height={520}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <div className="pointer-events-none md:block hidden absolute -left-10 top-1/2 -translate-y-1/2 md:-left-16">
              <CircularBadge />
            </div>
          </div>
        </div>
      </section>


      {/* Product Details Tabs */}
      <section className="md:py-32 py-10 px-6">
        <div className="max-w-7xl mx-auto"> 

          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="space-y-8 fade-in-up">
                <h2 className="text-headline-serif mb-6 text-3xl font-semibold">
                  {service?.title && "Built for Industrial"}
                </h2>
                {service?.description ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: service?.description }}
                    className="text-base leading-relaxed"
                  />
                ) : (
                  "Built for Industrial"
                )}
              </div>
            </div>

            <div className="space-y-6">
              {product.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={`${process.env.NEXT_PUBLIC_API_IMAGE}/${service?.images?.[0]}`}
                  alt={`${product.title} ${index + 2}`}
                  className="w-full h-64 object-cover rounded-lg elegant-hover"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="md:py-32 py-10 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-medium text-gray-600 tracking-[0.15em] uppercase mb-4 fade-in-up">
              Related Services
            </p>
            <h2 className="text-3xl mb-6 font-bold fade-in-up stagger-1">
              Complete Industrial Solutions
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto fade-in-up stagger-2">
              Discover our comprehensive range of complementary services
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {rservice?.map((service, index) => (
              <div
                key={service.id}
                className="group elegant-hover fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-lg overflow-hidden">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_IMAGE}/${service.images[0]}`}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="p-8">
                    <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                    <div className="flex items-center justify-between">

                      <Link href={`/services/${service._id}`} className="flex items-center gap-2 text-sm font-medium text-[#0057ff] hover:text-[#0057ff]/80 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FAQ />
        </div>
      </section> */}

    </div>
  )
}

export default ServiceDetailPage
