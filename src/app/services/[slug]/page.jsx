import Image from "next/image"
import industrialWorker from "../../../../public/images/beijing-china-june-modern.webp"
import { CircularBadge } from "@/components/landing/circular-badge"
import { cn } from "@/lib/utils"

const SERVICES = [
  { label: "Custom Fabrication" },
  { label: "Component Manufacturing", active: true },
  { label: "Assembly Services" },
  { label: "Machinery Solutions" },
]

const ServiceDetailPage = ({ className }) => {
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
              Built for Industrial
              <br />
              Performance
            </h2>

            <div className="mt-6 space-y-5 text-base text-gray-600 leading-relaxed">
              <p>
                Uplorix isn’t just a manufacturer—we’re a reliable extension of your operation.
                We partner with businesses to provide precision-engineered components, fast lead times,
                and scalable solutions that adapt to your needs. Your success is our mission.
              </p>
              <p>
                Whether you need custom components or scalable production, Uplorix is your trusted
                partner in industrial growth.
              </p>
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

      {/* Why Choose Section */}
      <section
        aria-labelledby="why-choose-heading"
        className={cn(
          "w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",
          className
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: Content */}
          <article className="lg:col-span-8">
            <div className="rounded-3xl overflow-hidden bg-muted">
              <Image
                src={industrialWorker}
                alt="Technicians working in a manufacturing facility"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>

            <h2
              id="why-choose-heading"
              className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground"
            >
              Custom Fabrication
            </h2>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              At Uplorix, we specialize in delivering high-precision custom fabrication
              solutions tailored to your exact specifications. Whether you need one-off prototypes
              or large-scale production, our fabrication process ensures accuracy, durability,
              and reliable performance.
            </p>

            {/* Highlights */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-foreground">Service Highlights:</h3>
              <ul className="mt-3 space-y-3">
                {[
                  "Precision fabrication using advanced machinery and cutting-edge technology.",
                  "Support for both small-batch and large-volume production.",
                  "Wide range of materials including metals, alloys, and specialty composites.",
                  "Custom design integration to meet industry-specific standards.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/90 text-white">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          d="M5 10.5l3 3 7-7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-foreground/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={industrialWorker}
                  alt="Team discussing fabrication plans"
                  width={400}
                  height={300}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={industrialWorker}
                  alt="Factory machinery in operation"
                  width={400}
                  height={300}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </article>

          {/* Right: Sidebar */}
          <aside className="lg:col-span-4 space-y-4">
            {/* All Services */}
            <div className="rounded-2xl bg-[#0146a3] text-white p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold">All Services</h3>
              </div>

              <nav className="mt-3">
                <ul className="divide-y divide-white/15">
                  {SERVICES.map((s, idx) => (
                    <li key={s.label}>
                      <a
                        href="#"
                        className={cn("flex items-center gap-3 py-3 group")} 
                      >
                        <span
                          className={cn(
                            "inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-xs",
                            s.active
                              ? "bg-white text-primary"
                              : "bg-transparent text-primary-foreground/80"
                          )}
                          aria-hidden="true"
                        >
                          {idx + 1}
                        </span>
                        <span className="flex-1 text-sm font-medium">{s.label}</span>
                        <span
                          className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors"
                          aria-hidden="true"
                        >
                          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                            <path
                              d="M7 5l6 5-6 5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {s.active && (
                          <span
                            className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-white/40"
                            aria-hidden="true"
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Assistance */}
            <div className="rounded-2xl bg-muted p-4 sm:p-5">
              <div className="rounded-xl bg-background p-4 sm:p-5 shadow-sm">
                <h3 className="text-center text-base font-semibold text-foreground">
                  Need Assistance?
                  <br />
                  <span className="font-semibold">Let&apos;s Talk!</span>
                </h3>

                <p className="mt-3 text-center text-sm text-muted-foreground leading-relaxed">
                  Connect with our support team for fast answers and expert guidance.
                </p>

                <div className="mt-4 flex justify-center">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0146a3] px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                  >
                    Let&apos;s Connect
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                      <path
                        d="M7 5l6 5-6 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetailPage
