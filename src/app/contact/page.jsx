"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { CircularBadge } from "@/components/landing/circular-badge";
import Image from "next/image";
import industrialWorker from "../../../public/images/beijing-china-june-modern.webp";
import axiosClientAuth from "@/Services/api";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

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
  );
};

const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string(),
      subject: Yup.string(),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("Form values:", values);
      await axiosClientAuth.post("/contact", values);
      alert("Form submitted successfully!");
      resetForm();
    },
  });


    const [siteSetting, setSiteSetting] = useState({});
  
    useEffect(() => {
      const fetchSiteSetting = async () => {
        try {
          const res = await axiosClientAuth.get("/site-setting");
          console.log(res.data.data);

          setSiteSetting(res?.data?.data || {});
        } catch (err) {
          console.error("Error fetching site Setting data:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchSiteSetting();
    }, []);
  
  

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
                  {siteSetting?.address}
                </p>
              </div>

              <div>
                <p className="text-blue-200 text-sm md:text-base">E-mail</p>
                <p className="mt-2 text-2xl md:text-4xl font-semibold leading-tight">
                  {siteSetting?.email}
                </p>
              </div>

              <div>
                <p className="text-blue-200 text-sm md:text-base">Phone Number</p>
                <p className="mt-2 text-2xl md:text-4xl font-semibold leading-tight">
                  {siteSetting?.phone}
                </p>
              </div>
 
            </div>

            {/* Social icons */}
            <div className="mt-10 ">
               <div className="flex space-x-4 mt-4">
              <Link href={siteSetting?.facebook || "#"} className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href={siteSetting?.youtube || "#"} className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href={siteSetting?.twitter || "#"} className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href={siteSetting?.instagram || "#"} className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
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

            <form className="grid gap-4" onSubmit={formik.handleSubmit}>
              {/* Name */}
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Rometheme STD"
                className="h-14 w-full rounded-xl bg-gray-100 text-gray-900 placeholder:text-gray-400 px-4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              ) : null}

              {/* Row: Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="hello@domainsite.com"
                  className="h-14 w-full rounded-xl bg-gray-100 text-gray-900 placeholder:text-gray-400 px-4"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                ) : null}

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="h-14 w-full rounded-xl bg-gray-100 text-gray-900 placeholder:text-gray-400 px-4"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
              </div>

              {/* Subject */}
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="h-14 w-full rounded-xl bg-gray-100 text-gray-900 placeholder:text-gray-400 px-4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
              />

              {/* Message */}
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="min-h-[160px] w-full rounded-xl bg-gray-100 text-gray-900 placeholder:text-gray-400 p-4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-sm">{formik.errors.message}</div>
              ) : null}

              {/* CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-xl bg-blue-700 text-white px-5 h-12 shadow-sm"
                >
                  <span>Get Started</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-white"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M13 5l7 7-7 7-1.41-1.41L16.17 13H4v-2h12.17l-4.58-4.59L13 5Z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
