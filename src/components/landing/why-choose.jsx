"use client"
import axiosClientAuth from "@/Services/api"
import Image from "next/image"

import * as React from "react"

const WhyChooseSection = () => {
  const [whyChooseUs, setWhyChooseUs] = React.useState({})

  React.useEffect(() => {
    const fetchWhyChoose = async () => {
      try {
        const res = await axiosClientAuth.get("/why-choose-us");
        console.log(res.data.data.data);
        setWhyChooseUs(res?.data?.data?.data[0]);
      } catch (err) {
        console.log("Error fetching why choose us:", err);
      }
    };

    fetchWhyChoose();
  }, []);

  const features = [
    {
      title: "Precision-Driven Manufacturing",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a1 1 0 0 1 1 1v1.06A8.004 8.004 0 0 1 19.94 11H21a1 1 0 1 1 0 2h-1.06A8.004 8.004 0 0 1 13 19.94V21a1 1 0 1 1-2 0v-1.06A8.004 8.004 0 0 1 4.06 13H3a1 1 0 1 1 0-2h1.06A8.004 8.004 0 0 1 11 4.06V3a1 1 0 0 1 1-1Zm0 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7Zm0 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z"
          />
        </svg>
      ),
    },
    {
      title: "Advanced Technology Equipment",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M7 7h10v10H7z" />
          <path
            fill="currentColor"
            d="M4 10h2v4H4zm14 0h2v4h-2zM10 4h4v2h-4zm0 14h4v2h-4zM6 2h2v3H6zm10 0h2v3h-2zM6 19h2v3H6zm10 0h2v3h-2z"
          />
        </svg>
      ),
    },
    {
      title: "Scalable Solutions for Any Industry",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M3 20h18v2H3zM6 10h3v8H6zm5-4h3v12h-3zm5 6h3v6h-3z" />
        </svg>
      ),
    },
    {
      title: "Reliable Delivery & Quality Control",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M9 2h6a2 2 0 0 1 2 2h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2a2 2 0 0 1 2-2Zm0 2v2h6V4H9Zm2 6h6v2h-6zm0 4h6v2h-6zm-4-4h2v2H7zm0 4h2v2H7z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section aria-labelledby="why-choose" className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-4">
        <div className="grid items-start gap-10 lg:grid-cols-3">
          {/* LEFT: Eyebrow, heading, body, CTA */}
          <div className="max-w-xl">
            <p className="text-sm tracking-widest text-muted-foreground">{whyChooseUs?.sectionTitle}</p>
            <h2 id="why-choose" className="mt-4 text-gray-900 text-4xl md:text-6xl font-semibold ">
              {whyChooseUs?.heading}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {whyChooseUs?.description}
            </p>
            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#0146a3] px-5 py-3 text-white"
            >
              <span className="text-base font-medium">Our Services</span>
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#0146a3]-foreground/15 text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m8 5l8 0l0 8l-2 0l0 -4.586l-7.293 7.293l-1.414 -1.414l7.293 -7.293l-4.586 0z"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* MIDDLE: Large rounded image with pills at bottom */}
          <div className="relative overflow-hidden rounded-[2rem] bg-muted">
            {whyChooseUs?.image ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_API_IMAGE}${whyChooseUs?.image}`}
                alt={whyChooseUs?.heading || "Why Choose Us Image"}
                width={540}
                height={600}
                className="object-cover min-h-[450px] w-full"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
                No Image Available
              </div>
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-4 flex flex-col items-center gap-3 px-4">
              <div className="flex flex-wrap justify-center gap-3">
                <span className="pointer-events-auto rounded-full bg-[#0146a3] px-4 py-2 text-sm text-primary-foreground shadow">
                  Scalable Production
                </span>
                <span className="pointer-events-auto rounded-full bg-[#0146a3] px-4 py-2 text-sm text-primary-foreground shadow">
                  Custom Fabrication
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="pointer-events-auto rounded-full bg-background px-4 py-2 text-sm text-foreground shadow ring-1 ring-border">
                  On-Time Delivery
                </span>
                <span className="pointer-events-auto rounded-full bg-background px-4 py-2 text-sm text-foreground shadow ring-1 ring-border">
                  High-Precision Components
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Feature tiles */}
          <div className="flex flex-col gap-6">
            {whyChooseUs?.features?.map((feature, index) => (
              <div
                key={feature._id || index}
                className="flex items-center gap-4 rounded-2xl bg-muted px-5 py-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0146a3]/30 text-[#0146a3]">
                  {/* Simple icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-lg font-medium text-foreground">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection