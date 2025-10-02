"use client"

import { Button } from "@/components/ui/button"
import industrialWorker from '../../../public/images/beijing-china-june-modern.webp'
import Image from "next/image"

const HeroPage  = () =>{
  return (
    <section aria-label="Hero" className="container mx-auto px-4 pt-6 md:pt-10">
      <div className="relative overflow-hidden rounded-[1rem]">
        {/* Background image */}
        <Image
          src={industrialWorker}
          alt="Industrial skyline"
          className="h-[360px] md:h-[520px] w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#111]/70" aria-hidden />
        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-12 max-w-2xl">
            <p className="text-white/80 text-xs md:text-sm mb-2">Reliable • Safe • Scalable</p>
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight text-balance">
              Engineering the <span className="text-[#0146a3]">Future of Industry</span>
            </h1>
            <p className="text-white/85 mt-3 md:mt-4 max-w-prose">
              Precision-built components and manufacturing expertise to move your business forward.
            </p>
            <div className="mt-5 flex gap-3">
              <Button className="bg-[#0146a3] text-base text-white hover:bg-[#0146a3]">Get Started</Button>
               
            </div>
          </div>
        </div>

        {/* Floating CTA card (bottom-left) */}
        <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6">
          <div className="flex items-center gap-3 rounded-xl bg-background/95 shadow border p-3">
            <Image
              src={industrialWorker}
              alt="Engineer"
              className="size-11 rounded-lg object-cover"
            />
            <div>
              <p className="text-xs text-muted-foreground">New Customer?</p>
              <p className="text-sm font-medium">Talk with an Expert</p>
            </div>
            <Button size="sm" className="bg-[#0146a3] text-white hover:bg-[#0146a3]/90">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPage