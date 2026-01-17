"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import industrialWorker from "../../../public/images/beijing-china-june-modern.webp";
import axiosClientAuth from "@/Services/api";
import { useEffect, useState } from "react";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [siteSetting, setSiteSetting] = useState({});
  const [loading, setLoading] = useState(true);

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
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      try {
        console.log("Submitting form with values:", values);
         
        const errors = await formik.validateForm();
        if (Object.keys(errors).length > 0) {
          throw new Error("Please fill all required fields correctly");
        }
         
        const response = await axiosClientAuth.post("/royal/contact", values);
        console.log(axiosClientAuth, "=========================");
        console.log(response, "=========================response");
        
        console.log("API Response status:", response.status);
        console.log("API Response data:", response.data);
        
        if (response.status === 200 || response.status === 201) {
          setSubmitStatus({ 
            type: 'success', 
            message: response.data?.message || 'Form submitted successfully! Our team will contact you soon.' 
          });
          resetForm();
        } else {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
      } catch (error) {
        console.error("Form submission error:", error);
        console.error("Error details:", error.response?.data);
        
        let errorMessage = "Failed to submit form. ";
        
        if (error.response) { 
          const errorData = error.response?.data;
           
          if (typeof errorData === 'string') {
            errorMessage += errorData;
          } else if (errorData?.message) {
            errorMessage += errorData.message;
          } else if (errorData?.msg) {
            errorMessage += errorData.msg;
          } else if (error.response.status === 404) {
            errorMessage += "API endpoint not found (404). Please contact support.";
          } else if (error.response.status === 500) {
            errorMessage += "Server error (500). Please try again later.";
          } else if (error.response.status === 401) {
            errorMessage += "Authentication failed. Please check your API token.";
          } else {
            errorMessage += `Server error: ${error.response.status}`;
          }
        } else if (error.request) {
          // No response received
          errorMessage += "No response from server. Please check your internet connection.";
        } else if (error.message.includes("Unexpected token")) {
          // JSON parsing error
          errorMessage += "Server returned invalid response format. Please contact support.";
        } else {
          // Request setup error
          errorMessage += error.message;
        }
        
        setSubmitStatus({ type: 'error', message: errorMessage });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

 

  useEffect(() => {
    const fetchSiteSetting = async () => {
      try {
        const res = await axiosClientAuth.get("/site-setting");
        console.log("Site settings data:", res.data.data);
        setSiteSetting(res?.data?.data || {});
      } catch (err) {
        console.error("Error fetching site setting data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSiteSetting();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a href="/" className="text-gray-500 hover:text-blue-600 transition-colors">
                Home
              </a>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-blue-600 font-medium">Contact Us</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
                Your Industrial Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Precision Engineering
                <span className="block text-blue-600 mt-2">Industrial Solutions</span>
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Uplorix delivers more than components—we provide reliable partnerships 
                built on precision engineering, rapid turnaround, and scalable solutions 
                that evolve with your operational needs.
              </p>
              
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={industrialWorker}
                alt="Industrial manufacturing team"
                width={800}
                height={600}
                className="w-full h-[400px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">24-48 Hours</p>
                  <p className="text-sm text-gray-600">Average response time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info Panel */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-3xl p-8 md:p-10 lg:p-12">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Get in Touch</h2>
                <p className="text-blue-200">
                  Have a project in mind? Let's discuss how we can help your business grow.
                </p>
              </div>

              <div className="space-y-10">
                {/* Address */}
                <div className="group">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-800/50 flex items-center justify-center group-hover:bg-blue-700/50 transition-colors">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-blue-200 text-sm font-medium">Address</h3>
                  </div>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed pl-13">
                    F-261 MIA Alwar (301030)<br />Rajasthan, India
                  </p>
                </div>

                {/* Email */}
                <div className="group">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-800/50 flex items-center justify-center group-hover:bg-blue-700/50 transition-colors">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-blue-200 text-sm font-medium">Email</h3>
                  </div>
                  <a 
                    href="mailto:alwarrmpl@gmail.com" 
                    className="text-xl md:text-2xl font-bold hover:text-blue-300 transition-colors pl-13 block"
                  >
                    alwarrmpl@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="group">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-800/50 flex items-center justify-center group-hover:bg-blue-700/50 transition-colors">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-blue-200 text-sm font-medium">Phone</h3>
                  </div>
                  <a 
                    href="tel:+9199832115477" 
                    className="text-xl md:text-2xl font-bold hover:text-blue-300 transition-colors pl-13 block"
                  >
                    +91 99832115477
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-8 border-t border-blue-700/50">
                <h4 className="text-blue-200 text-sm font-medium mb-2">Working Hours</h4>
                <p className="font-medium">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-blue-300 text-sm">Response within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-xl border border-gray-100">
            <div className="max-w-2xl">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Start Your Project
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will contact you within 24 hours 
                  to discuss your manufacturing requirements.
                </p>
              </div>

              <form onSubmit={formik.handleSubmit} className="space-y-6"> 
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    className="w-full h-14 px-5 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="mt-2 text-sm text-red-600">{formik.errors.name}</p>
                  )}
                </div>

                {/* Email & Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="hello@company.com"
                      className="w-full h-14 px-5 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 1234567890"
                      className="w-full h-14 px-5 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="e.g., Custom Components, Bulk Manufacturing"
                    className="w-full h-14 px-5 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project requirements, quantities, timeline, and any specific details..."
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="mt-2 text-sm text-red-600">{formik.errors.message}</p>
                  )}
                </div>

                {/* Submit Button Section */}
                <div className="pt-4 flex flex-col gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center gap-3 h-14 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </>
                    )}
                  </button>
               
                  
                  {/* Status messages */}
                  {submitStatus && (
                    <div className={`p-3 rounded-lg mt-2 ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <p className="mt-2 text-sm text-gray-500">
                    By submitting, you agree to our Privacy Policy and allow us to contact you 
                    regarding your project requirements.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;