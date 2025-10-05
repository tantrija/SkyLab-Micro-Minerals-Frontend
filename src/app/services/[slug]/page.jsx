"use client"
import Image from "next/image"
import industrialWorker from "../../../../public/images/beijing-china-june-modern.webp"
import { CircularBadge } from "@/components/landing/circular-badge"
import { cn } from "@/lib/utils"
import axiosClientAuth from "@/Services/api"
import * as React from "react"


const SERVICES = [
  { label: "Custom Fabrication" },
  { label: "Component Manufacturing", active: true },
  { label: "Assembly Services" },
  { label: "Machinery Solutions" },
]

const ServiceDetailPage = ({ className }) => {
  const [service, setServices] = React.useState({})
  React.useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axiosClientAuth.get("/services");
        console.log(res.data.data);
        setServices(res?.data?.data[0]);
      } catch (err) {
        console.log("Error fetching services:", err);
      }
    };

    fetchServices();
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        <p className="text-sm font-medium tracking-widest text-[#0146a3]">
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

            <div className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 md:-left-16">
              <CircularBadge />
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default ServiceDetailPage
