import { CircularBadge } from "@/components/landing/circular-badge"
import Image from "next/image"
import industrialWorker from "../../../public/images/beijing-china-june-modern.webp";

const SocialIcon = ({ children, label }) => {
  return (
    <span
      role="img"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500"
      title={label}
    >
      {children}
    </span>
  )
}

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        <p className="text-sm font-medium tracking-widest text-[#0146a3]">
          Home / Contact us
        </p>

        <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-start">
          {/* Left */}
          <div>
            <h2 className="text-balance font-sans text-4xl font-bold leading-tight md:text-6xl">
              Built for Industrial
              <br />
              Performance
            </h2>

            <div className="mt-6 space-y-5 text-base text-gray-600 leading-relaxed">
              <p>
                Uplorix isn’t just a manufacturer—we’re a reliable extension of
                your operation. We partner with businesses to provide
                precision-engineered components, fast lead times, and scalable
                solutions that adapt to your needs.
              </p>
              <p>
                Whether you need custom components or scalable production,
                Uplorix is your trusted partner in industrial growth.
              </p>
            </div>
          </div>

          {/* Right */}
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

      {/* Contact Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left blue info panel */}
          <aside
            aria-label="Company contact information"
            className="bg-blue-700 text-white rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[520px]"
          >
            <div className="space-y-8">
              <div>
                <p className="text-blue-200 text-sm md:text-base">Address</p>
                <p className="mt-2 text-2xl md:text-4xl font-semibold leading-tight">
                  KLLG st, No.99, PKU City, ID 28289
                </p>
              </div>

              <div>
                <p className="text-blue-200 text-sm md:text-base">E-mail</p>
                <p className="mt-2 text-2xl md:text-4xl font-semibold leading-tight">
                  hello@domainsite.com
                </p>
              </div>

              <div>
                <p className="text-blue-200 text-sm md:text-base">Phone Number</p>
                <p className="mt-2 text-2xl md:text-4xl font-semibold leading-tight">
                  0761-8523-398
                </p>
              </div>

              <div>
                <p className="text-blue-200 text-sm md:text-base">Open Hours</p>
                <p className="mt-2 text-2xl md:text-4xl font-semibold leading-tight">
                  Monday - Friday
                  <br />
                  9.00 am - 5.00 pm
                </p>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-10 flex items-center gap-4">
              <SocialIcon label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
                  <path d="M22 12.06C22 6.49 17.52 2 12 2S2 6.49 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.97h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
                </svg>
              </SocialIcon>

              <SocialIcon label="YouTube">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
                  <path d="M23.5 6.2a3.1 3.1 0 0 0-2.17-2.2C19.8 3.5 12 3.5 12 3.5s-7.8 0-9.33.5A3.1 3.1 0 0 0 .5 6.2 32.6 32.6 0 0 0 0 12a32.6 32.6 0 0 0 .5 5.8c.29 1.03 1.12 1.83 2.17 2.12 1.53.5 9.33.5 9.33.5s7.8 0 9.33-.5a3.1 3.1 0 0 0 2.17-2.12c.34-1.93.5-3.89.5-5.8s-.16-3.87-.5-5.8ZM9.75 15.5V8.5l6 3.5-6 3.5Z" />
                </svg>
              </SocialIcon>

              <SocialIcon label="X">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
                  <path d="M18.244 2H21l-6.55 7.48L22 22h-6.828l-4.79-6.253L4.9 22H2.142l7.02-8.02L2 2h6.93l4.35 5.78L18.244 2Zm-2.392 18h1.773L8.248 4H6.36l9.492 16Z" />
                </svg>
              </SocialIcon>

              <SocialIcon label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
                  <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.95.25 2.63.54.71.28 1.31.66 1.9 1.25.58.59.97 1.19 1.25 1.9.29.68.49 1.46.54 2.63.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.95-.54 2.63a5.1 5.1 0 0 1-1.25 1.9 5.1 5.1 0 0 1-1.9 1.25c-.68.29-1.46.49-2.63.54-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.95-.25-2.63-.54a5.1 5.1 0 0 1-1.9-1.25 5.1 5.1 0 0 1-1.25-1.9c-.29-.68-.49-1.46-.54-2.63C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.95.54-2.63.28-.71.66-1.31 1.25-1.9.59-.58 1.19-.97 1.9-1.25.68-.29 1.46-.49 2.63-.54C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52.01-4.76.07-.98.05-1.51.21-1.86.35-.47.18-.8.4-1.15.76-.35.35-.58.68-.76 1.15-.14.35-.3.88-.35 1.86-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05.98.21 1.51.35 1.86.18.47.4.8.76 1.15.35.35.68.58 1.15.76.35.14.88.3 1.86.35 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.98-.05 1.51-.21 1.86-.35.47-.18.8-.4 1.15-.76.35-.35.58-.68.76-1.15.14-.35.3-.88.35-1.86.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-.98-.21-1.51-.35-1.86a3.3 3.3 0 0 0-.76-1.15 3.3 3.3 0 0 0-1.15-.76c-.35-.14-.88-.3-1.86-.35-1.24-.06-1.61-.07-4.76-.07Zm0 3.4a6.6 6.6 0 1 1 0 13.2 6.6 6.6 0 0 1 0-13.2Zm0 1.8a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm5.28-2.04a1.08 1.08 0 1 0 0 2.16 1.08 1.08 0 0 0 0-2.16Z" />
                </svg>
              </SocialIcon>
            </div>
          </aside>

          {/* Right content: heading and form */}
          <div className="flex flex-col">
            <header className="mb-6 md:mb-8">
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">
                Let’s Start Building Together
              </h1>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Contact us to explore custom manufacturing solutions tailored to your business needs.
              </p>
            </header>

            <form
              className="grid gap-4"
               
            >
              {/* Name */}
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Rometheme STD"
                className="h-14 w-full rounded-xl bg-gray-100 text-gray-900 placeholder:text-gray-400 px-4"
                required
              />

              {/* Row: Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="hello@domainsite.com"
                    className="h-14 w-full rounded-xl bg-gray-100 text-gray-900 placeholder:text-gray-400 px-4"
                    required
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="h-14 w-full rounded-xl bg-gray-100 text-gray-900 placeholder:text-gray-400 px-4"
                  />
                </div>
              </div>

              {/* Subject */}
              <label className="sr-only" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="h-14 w-full rounded-xl bg-gray-100 text-gray-900 placeholder:text-gray-400 px-4"
              />

              {/* Message */}
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                className="min-h-[160px] w-full rounded-xl bg-gray-100 text-gray-900 placeholder:text-gray-400 p-4"
              />

              {/* CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-xl bg-blue-700 text-white px-5 h-12 shadow-sm"
                >
                  <span>Get Started</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" aria-hidden="true">
                      <path fill="currentColor" d="M13 5l7 7-7 7-1.41-1.41L16.17 13H4v-2h12.17l-4.58-4.59L13 5Z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
