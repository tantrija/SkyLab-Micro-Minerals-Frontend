import BigHeadline from "@/components/landing/big-headline"
import Committed from "@/components/landing/committed"
import FAQ from "@/components/landing/faq"
import Services from "@/components/landing/services"
import Team from "@/components/landing/team" 
import WhyChooseSection from "@/components/landing/why-choose"
import Link from "next/link"  


const AboutPage = () =>  {
  return (
    <div className="min-h-screen"> 
      <Committed /> 
      {/* <section className="container mx-auto md:px-4 space-y-16 md:space-y-24">
      <WhyChooseSection/> 
        <Team /> */}
        {/* <BigHeadline />  */}
      {/* </section>  */}
    </div>
  )
}


export default AboutPage