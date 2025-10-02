import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowUpRight, Play } from "lucide-react"
import industrialWorker from '../../../public/images/beijing-china-june-modern.webp'
import { cn } from "@/lib/utils"
import { CircularBadge } from "@/components/landing/circular-badge"
import Services from "@/components/landing/services"
import BigHeadline from "@/components/landing/big-headline" 
import WhyChooseSection from "@/components/landing/why-choose"
 


const ServicesPage = () =>  {
  return (
    <div className="min-h-screen"> 
      <section className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
      {/* Eyebrow */}
      <p className="text-sm font-medium tracking-widest text-[#0146a3]">{"Home / Services"}</p>

      {/* Headline + Layout */}
      <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-start">
        {/* Left: Headline & Copy */}
        <div className="order-1 md:order-none">
          <h2 className="text-balance font-sans text-4xl font-bold leading-tight md:text-6xl">
            {"Built for Industrial"}
            <br />
            {"Performance"}
          </h2>

          <div className="mt-6 space-y-5 text-base text-gray-600 leading-relaxed">
            <p>
              {
                "Uplorix isn’t just a manufacturer—we’re a reliable extension of your operation. We partner with businesses to provide precision-engineered components, fast lead times, and scalable solutions that adapt to your needs. Your success is our mission."
              }
            </p>
            <p>
              {
                "Whether you need custom components or scalable production, Uplorix is your trusted partner in industrial growth."
              }
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button
              className={cn(
                "inline-flex items-center gap-3 rounded-12 px-6 py-6 text-base",
                // Ensure strong contrast when overriding background
                "bg-[#0146a3] text-background hover:bg-[#0146a3]/90",
              )}
            >
              <span>{"Read More"}</span>
              <span className="grid size-8 place-items-center rounded-md bg-white text-[#0146a3]">
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </span>
            </Button>
          </div>

          
        </div>

        {/* Right: Main Image with Circular Badge */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[28px]">
            <Image
              src={industrialWorker}
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
      <section className="container mx-auto px-4 space-y-16 md:space-y-24">
        <Services /> 
        <BigHeadline /> 
      </section>
      {/* <WhyChooseSection/>  */}
      <section className="container mx-auto px-4 space-y-16 md:space-y-24"> 
        <WhyChooseSection />  
      </section>
    </div>
  )
}


export default ServicesPage