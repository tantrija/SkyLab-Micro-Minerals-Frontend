"use client"

import Image from "next/image"
import industrialWorker from "../../../public/images/beijing-china-june-modern.webp"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import * as React from "react"
import Link from "next/link"
import axiosClientAuth from "@/Services/api"

const services = [
  {
    title: "Custom Fabrication",
    image: industrialWorker,
    alt: "Custom fabrication preview",
  },
  {
    title: "Component Manufacturing",
    image: industrialWorker,
    alt: "Component manufacturing preview",
  },
  {
    title: "Assembly Services",
    image: industrialWorker,
    alt: "Assembly services preview",
  },
  {
    title: "Machinery Solutions",
    image: industrialWorker,
    alt: "Machinery solutions preview",
  },
]

const Services = () => {
  const [hovered, setHovered] = React.useState(null)
  const [services, setServices] = React.useState([])
  React.useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axiosClientAuth.get("/services");
        console.log(res.data.data);
        setServices(res?.data?.data);
      } catch (err) {
        console.log("Error fetching services:", err);
      }
    };

    fetchServices();
  }, []);


  
  return (
    <section className="mx-auto w-full max-w-7xl  px-1 md:px-8 py-5 md:py-24">
      <div className="grid items-stretch md:gap-8 gap-3 md:grid-cols-[1.05fr_1.2fr] ">
        {/* Left Large Photo */}
        <div className="relative">
          <div className="overflow-hidden rounded-[28px]">
            <Image
              src={industrialWorker}
              alt="Industrial team discussing work near machinery"
              width={640}
              height={560}
              className="md:h-screen w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Blue Panel */}
        <div
          className={cn(
            "relative overflow-hidden rounded-[36px] p-8 md:p-10",
            "bg-[#0057ff] text-white ring-1 ring-[#0057ff]/5"
          )}
        >
          {/* Eyebrow and Title */}
          <p className="text-sm font-semibold tracking-widest/relaxed opacity-85">{"SERVICES"}</p>
          <h3 className="mt-3 text-balance font-sans text-3xl font-bold leading-tight md:text-5xl">
            {"Tailored Industrial Solutions"}
            <br className="hidden md:block" />
            {" for Every Challenge"}
          </h3>

          {/* Top-right square button */}
          <button
            type="button"
            aria-label="Explore services"
            className="absolute right-6 top-6 grid size-10 place-items-center rounded-lg bg-[#0057ff]/10 text-[#0057ff] ring-1 ring-white/25 transition-colors hover:bg-[#0057ff]/15"
          >
            <ArrowUpRight className="size-5 text-white" aria-hidden="true" />
          </button>

          {/* Services List */}
          <div className="relative mt-8 md:mt-10">
            <ul className="relative space-y-0">
              {services.map((s, i) => (
                <li key={s.title} className="relative">
                  {/* Divider line above except the first */}
                  {i > 0 && <div className="absolute -top-px left-0 right-0 h-px bg-brand-foreground/30" />}

                  <Link href={`/services/${s._id}`}
                    className={cn(
                      "group flex w-full items-center justify-between py-6 text-left relative",
                      "transition-colors hover:text-brand-foreground/90 focus:outline-none"
                    )}
                    onMouseEnter={() => setHovered(i)}
                    onFocus={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onBlur={() => setHovered(null)}
                  >
                    <span className="text-lg md:text-xl font-normal">{s.title}</span>
                    <ArrowRight
                      className={cn(
                        "size-5 shrink-0 transition-transform duration-200",
                        hovered === i ? "translate-x-1" : ""
                      )}
                      aria-hidden="true"
                    />

                    {/* Hover preview image just above this item */}
                    {hovered === i && (
                      <div className="absolute -top-2 right-16 hidden -rotate-[10deg] md:block">
                        <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_IMAGE}/${s.images[0]}`}
                            alt={s.alt}
                            width={200}
                            height={140}
                            className="h-auto w-[200px] object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
