import Link from "next/link" 
import HeroPage from "@/components/landing/hero"
import Committed from "@/components/landing/committed" 
import Services from "@/components/landing/services"
import Team from "@/components/landing/team"
import BigHeadline from "@/components/landing/big-headline" 
import StatsBanner from "@/components/landing/stats-banner"
import FAQ from "@/components/landing/faq"  
import WhyChooseSection from "@/components/landing/why-choose"


const HomePage = () =>  {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
       <HeroPage />
      <Committed /> 
      <section className="container mx-auto px-4 space-y-16 md:space-y-24">
        <Services />
        <Team />
        <BigHeadline /> 
      </section>
      <WhyChooseSection/>
      <StatsBanner />
      <section className="container mx-auto px-4 space-y-16 md:space-y-24">

        <FAQ />  
      </section>
    </div>
  )
}


export default HomePage