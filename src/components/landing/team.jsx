"use client"

import Image from "next/image"
import React, { useState } from "react"
import { ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

// ✅ Import real images
import industrialWorker from "../../../public/images/beijing-china-june-modern.webp"
import industrialWorker1 from "../../../public/images/beijing-china-june-modern.webp"
import industrialWorker2 from "../../../public/images/beijing-china-june-modern.webp"
import industrialWorker3 from "../../../public/images/beijing-china-june-modern.webp"

const members = [
  {
    name: "Sophia Liem",
    role: "Lead Manufacturing Engineer",
    image: industrialWorker,
    alt: "Portrait of Sophia Liem in a factory",
    bio: "Drives engineering excellence with a focus on safety, throughput, and continuous improvement.",
    socials: { linkedin: "#" },
  },
  {
    name: "John Maxwell",
    role: "Production Manager",
    image: industrialWorker1,
    alt: "Portrait of John Maxwell in a production facility",
    bio: "Manages the entire production floor, coordinating timelines, and quality control.",
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "Alex Tan",
    role: "Senior CNC Specialist",
    image: industrialWorker2,
    alt: "Portrait of Alex Tan operating CNC machinery",
    bio: "Specialist in precision machining with expertise in multi-axis tooling and tolerances.",
    socials: { linkedin: "#" },
  },
  {
    name: "David Kim",
    role: "Supply Chain Coordinator",
    image: industrialWorker3,
    alt: "Portrait of David Kim in a warehouse",
    bio: "Optimizes inbound materials and outbound logistics to ensure on-time delivery.",
    socials: { linkedin: "#" },
  },
]

const Team = () => {
  const [hovered, setHovered] = useState(null)
  const activeIndex = hovered // ✅ sirf hover par hi active hoga

  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-16 pt-6 md:pb-24 md:pt-12">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between md:mb-10">
        <div>
          <p className="text-sm font-semibold tracking-widest/relaxed text-foreground/60">03 / OUR TEAM</p>
          <h2 className="text-pretty font-sans text-4xl font-semibold leading-tight md:text-6xl">
            Your Manufacturing <br className="hidden md:block" />
            Partners
          </h2>
        </div>

        <a
          href="#"
          className={cn(
            "mt-3 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold",
            "bg-brand text-brand-foreground ring-1 ring-black/5 transition-colors hover:opacity-95 md:mt-0"
          )}
        >
          Read More
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m, i) => {
          const isActive = i === activeIndex

          return (
            <div
              key={m.name}
              className={cn(
                "relative h-[420px] overflow-hidden rounded-[28px]",
                "ring-1 ring-black/10",
                isActive ? "bg-[#0146a3] text-white transition-all" : "bg-card"
              )}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
            >
              {isActive ? (
                // Expanded card with details (sirf hover par)
                <div className="flex h-full flex-col p-8">
                  <div>
                    <h3 className="text-3xl font-semibold leading-tight">{m.name}</h3>
                    <p className="mt-2 text-lg/7 opacity-90">{m.role}</p>
                  </div>

                  <p className="mt-6 max-w-sm text-base/7 opacity-95">{m.bio}</p>

                  <div className="mt-auto flex items-center gap-3 pt-8">
                    {m.socials?.facebook && (
                      <a
                        href={m.socials.facebook}
                        aria-label="Facebook profile"
                        className="grid size-9 place-items-center rounded-lg bg-brand-foreground/10 text-[#fff] ring-1 ring-white/25 transition-colors hover:bg-brand-foreground/15"
                      >
                        <Facebook className="size-4" aria-hidden="true" />
                      </a>
                    )}
                    {m.socials?.linkedin && (
                      <a
                        href={m.socials.linkedin}
                        aria-label="LinkedIn profile"
                        className="grid size-9 place-items-center rounded-lg bg-brand-foreground/10 text-[#fff] ring-1 ring-white/25 transition-colors hover:bg-brand-foreground/15"
                      >
                        <Linkedin className="size-4" aria-hidden="true" />
                      </a>
                    )}
                    {m.socials?.instagram && (
                      <a
                        href={m.socials.instagram}
                        aria-label="Instagram profile"
                        className="grid size-9 place-items-center rounded-lg bg-brand-foreground/10 text-[#fff] ring-1 ring-white/25 transition-colors hover:bg-brand-foreground/15"
                      >
                        <Instagram className="size-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                // Default image card (normal state)
                <div className="relative h-full">
                  <Image
                    src={m.image}
                    alt={m.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    priority={i === 0}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                    <p className="text-xl font-semibold drop-shadow-sm">{m.name}</p>
                    <p className="text-sm opacity-90 drop-shadow-sm">{m.role}</p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Team
