import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowUpRight, ChevronRight, Play } from "lucide-react"
import industrialWorker from '../../../public/images/activatedcalciumImage.webp'
import { cn } from "@/lib/utils"
import { CircularBadge } from "@/components/landing/circular-badge"
import Services from "@/components/landing/services"
import BigHeadline from "@/components/landing/big-headline"
import WhyChooseSection from "@/components/landing/why-choose"
import CoatedCalciumImg from '../../../public/images/coated-calcium-carbonate-011.webp'


const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url("https://royalmicrons.com/_next/static/media/banner-image.012cc5a6.jpg")` }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0057ff]/10 via-gray-900 to-gray-900">
        </div>
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6 py-16">
          <div className="fade-in-up stagger-1">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-6 text-[#0057ff]">Industrial Excellence</p>
          </div>
          <h1 className="text-display fade-in-up stagger-2 mb-8 text-balance text-5xl md:text-6xl font-bold leading-tight">
            Premium Industrial
            <span className="block mt-2 bg-gradient-to-r from-white via-white to-[#0057ff]/80 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl font-light leading-relaxed fade-in-up stagger-3 max-w-2xl mx-auto mb-12 text-gray-300">
            Transform your industrial processes with our cutting-edge solutions designed for excellence and sustainability.
          </p>
          <div className="fade-in-up stagger-4">
            <div className="inline-flex items-center gap-3">
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#0057ff] to-transparent"></div>
              <span className="text-sm font-medium text-gray-400">Scroll to explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-12 md:py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0057ff]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0057ff]"></span>
            <p className="text-sm font-semibold tracking-wider text-[#0057ff]">OUR PRODUCTS</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industrial <span className="text-[#0057ff]">Minerals</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-quality mineral solutions for diverse industrial applications
          </p>
        </div>

        {/* Product Cards */}
        <div className="space-y-24">
          {/* Product 1: Dolomite Powder */}
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="order-1 md:order-none">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold tracking-wider text-[#0057ff]">01</span>
                <div className="h-px w-8 bg-[#0057ff]"></div>
                <span className="text-sm font-medium text-gray-500 uppercase">Dolomite</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dolomite <span className="text-[#0057ff]">Powder</span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We are one of the leading manufacturers and suppliers of dolomite powder in India.
                  This powder is formed from rocks with calcium and magnesium as its main content.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0057ff]"></span>
                    <span>Particle size: 200 Mesh to 2 Microns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0057ff]"></span>
                    <span>Custom grades available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0057ff]"></span>
                    <span>High purity and consistency</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <a href="/product/dolomite-powder"
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="text-base font-semibold text-[#0057ff] group-hover:text-[#0057ff]/80 transition-colors">
                    Explore Details
                  </span>
                  <span className="grid size-10 place-items-center rounded-full bg-[#0057ff]/10 text-[#0057ff] group-hover:bg-[#0057ff] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0057ff]/20 to-transparent rounded-3xl blur-xl opacity-50"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://royalmicrons.com/_next/static/media/dolomite-powder.481b51f8.jpg"
                  alt="Dolomite Powder"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Product 2: Quick Lime - Reversed */}
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-l from-[#0057ff]/20 to-transparent rounded-3xl blur-xl opacity-50"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://royalmicrons.com/_next/static/media/quick-lime.c69b54cb.jpg"
                  alt="Quick Lime"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold tracking-wider text-[#0057ff]">02</span>
                <div className="h-px w-8 bg-[#0057ff]"></div>
                <span className="text-sm font-medium text-gray-500 uppercase">Calcium Oxide</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quick <span className="text-[#0057ff]">Lime</span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Quick lime, also known as Calcium Oxide or burnt lime, is a powerful substance
                  produced through the thermal decomposition of materials containing Calcium Carbonate.
                </p>
                <div className="inline-flex items-center gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="p-2 rounded-lg bg-[#0057ff]/10">
                    <span className="text-sm font-semibold text-[#0057ff]">900°C+</span>
                  </div>
                  <span className="text-sm text-gray-600">Production temperature</span>
                </div>
              </div>
              <div className="mt-8">
                <a href="/product/quick-lime"
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="text-base font-semibold text-[#0057ff] group-hover:text-[#0057ff]/80 transition-colors">
                    Explore Details
                  </span>
                  <span className="grid size-10 place-items-center rounded-full bg-[#0057ff]/10 text-[#0057ff] group-hover:bg-[#0057ff] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Product 3: Limestone Powder */}
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold tracking-wider text-[#0057ff]">03</span>
                <div className="h-px w-8 bg-[#0057ff]"></div>
                <span className="text-sm font-medium text-gray-500 uppercase">Limestone</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Limestone <span className="text-[#0057ff]">Powder</span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  LSP is made from limestone rocks with calcium carbonate as its main element.
                  We offer various grades with particle sizes ranging from 200 Mesh to 2 Microns.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#0057ff]/10 text-[#0057ff] text-sm font-medium">200 Mesh</span>
                  <span className="px-3 py-1 rounded-full bg-[#0057ff]/10 text-[#0057ff] text-sm font-medium">2 Microns</span>
                  <span className="px-3 py-1 rounded-full bg-[#0057ff]/10 text-[#0057ff] text-sm font-medium">Custom Grades</span>
                </div>
              </div>
              <div className="mt-8">
                <a href="/product/limestone-powder"
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="text-base font-semibold text-[#0057ff] group-hover:text-[#0057ff]/80 transition-colors">
                    Explore Details
                  </span>
                  <span className="grid size-10 place-items-center rounded-full bg-[#0057ff]/10 text-[#0057ff] group-hover:bg-[#0057ff] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0057ff]/20 to-transparent rounded-3xl blur-xl opacity-50"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://royalmicrons.com/_next/static/media/limestone-powder.45abd106.jpg"
                  alt="Limestone Powder"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Product 4: Calcite Powder - Reversed */}
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-l from-[#0057ff]/20 to-transparent rounded-3xl blur-xl opacity-50"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://royalmicrons.com/_next/static/media/calcite-powder2.857d8441.jpeg"
                  alt="Calcite Powder"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold tracking-wider text-[#0057ff]">04</span>
                <div className="h-px w-8 bg-[#0057ff]"></div>
                <span className="text-sm font-medium text-gray-500 uppercase">Calcium Carbonate</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Calcite <span className="text-[#0057ff]">Powder</span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Leading Calcite Powder manufacturer providing top-class limestone minerals
                  for various industrial applications. Also known as calc-spar or calcium carbonate powder.
                </p>
              </div>
              <div className="mt-8">
                <a href="/product/calcite-powder"
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="text-base font-semibold text-[#0057ff] group-hover:text-[#0057ff]/80 transition-colors">
                    Explore Details
                  </span>
                  <span className="grid size-10 place-items-center rounded-full bg-[#0057ff]/10 text-[#0057ff] group-hover:bg-[#0057ff] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Product 5: Coated Calcium Powder */}
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold tracking-wider text-[#0057ff]">05</span>
                <div className="h-px w-8 bg-[#0057ff]"></div>
                <span className="text-sm font-medium text-gray-500 uppercase">Surface Modified</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Coated <span className="text-[#0057ff]">Calcium Powder</span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Coated Calcium Powder (CCC) is a specialized performance-enhancing mineral filler where
                  high-purity calcium powder particles are uniformly coated with stearic acid or similar fatty acids.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0057ff]"></span>
                    <span>Improved dispersion and water resistance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0057ff]"></span>
                    <span>Enhanced compatibility with polymer matrices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0057ff]"></span>
                    <span>Essential for plastic, rubber, adhesive applications</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <a href="/product/coated-calcium-powder"
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="text-base font-semibold text-[#0057ff] group-hover:text-[#0057ff]/80 transition-colors">
                    Explore Details
                  </span>
                  <span className="grid size-10 place-items-center rounded-full bg-[#0057ff]/10 text-[#0057ff] group-hover:bg-[#0057ff] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0057ff]/20 to-transparent rounded-3xl blur-xl opacity-50"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://royalmicrons.com/_next/static/media/activatedcalciumImage.d3de5c32.png"
                  alt="Coated Calcium Powder"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Product 6: Uncoated Calcium Powder - Reversed */}
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-l from-[#0057ff]/20 to-transparent rounded-3xl blur-xl opacity-50"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://royalmicrons.com/_next/static/media/coated-calcium-carbonate-011.a65a2def.avif"
                  alt="Uncoated Calcium Powder"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold tracking-wider text-[#0057ff]">06</span>
                <div className="h-px w-8 bg-[#0057ff]"></div>
                <span className="text-sm font-medium text-gray-500 uppercase">Natural Form</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Uncoated <span className="text-[#0057ff]">Calcium Powder</span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Pure calcium powder in its natural form, ideal for applications where surface modification
                  is not required. Provides excellent chemical properties for various industrial uses.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <span className="text-sm font-semibold text-[#0057ff]">High Purity</span>
                    <p className="text-xs text-gray-500 mt-1">Natural mineral composition</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <span className="text-sm font-semibold text-[#0057ff]">Cost-Effective</span>
                    <p className="text-xs text-gray-500 mt-1">No surface treatment required</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a href="/product/uncoated-calcium-powder"
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="text-base font-semibold text-[#0057ff] group-hover:text-[#0057ff]/80 transition-colors">
                    Explore Details
                  </span>
                  <span className="grid size-10 place-items-center rounded-full bg-[#0057ff]/10 text-[#0057ff] group-hover:bg-[#0057ff] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Banner */}
        <div className="mt-24 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0057ff] mb-2">6+</div>
              <div className="text-gray-600">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0057ff] mb-2">200+</div>
              <div className="text-gray-600">Mesh Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0057ff] mb-2">100%</div>
              <div className="text-gray-600">Quality Assured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0057ff] mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-[#0057ff] to-[#0057ff]/90 p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Mineral Solutions?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              Contact us for tailored mineral products that meet your specific industrial requirements.
              Our experts are ready to assist you with customized solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0057ff] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <span>Contact Our Experts</span>
                <ArrowUpRight className="size-5" />
              </a>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default ServicesPage