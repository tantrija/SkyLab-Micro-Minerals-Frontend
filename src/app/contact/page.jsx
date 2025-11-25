"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, AlertCircle, CheckCircle } from "lucide-react";
import industrialCityscape from "../../../public/images/industrial-oil-gas-facility-with-modern-equipment.jpg";
import Header from "@/components/header";
import Footer from "@/components/footer";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [validationErrors, setValidationErrors] = useState({});

  const [siteSetting, setSiteSetting] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSiteSetting = async () => {
      try {
        setError(null);

        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

        if (!API_URL || !API_TOKEN) throw new Error("API variables missing");

        const res = await axios.get(`${API_URL}/royal/site-setting`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        console.log("API Response:", res.data);
        setSiteSetting(res.data.data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch site setting data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSiteSetting();
  }, []);
  if (error) return <div className="text-red-500">{error}</div>;
  if (!siteSetting) return null;

  // Validation function
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (formData.message.length > 1000) {
      errors.message = "Message must be less than 1000 characters";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));


    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({ type: "error", message: "Please fix the errors above" });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;


      if (!API_URL || !API_TOKEN) {
        throw new Error("Configuration error: Please refresh the page and try again");
      }


      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      console.log("Form Data:", formData);


      const res = await fetch(`${API_URL}/royal/contact`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      console.log("Response Status:", res.status);

      if (!res.ok) {
        const errorText = await res.text();
        let errorMessage = `Server error: ${res.status} ${res.statusText}`;

        try {
          const errorJson = JSON.parse(errorText);
          errorMessage = errorJson.message || errorJson.error || errorMessage;
        } catch {
          errorMessage = errorText || errorMessage;
        }

        throw new Error(errorMessage);
      }

      const json = await res.json();

      if (json.success === false) {
        throw new Error(json.message || "Request failed");
      }

      // Success case
      setStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon."
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    } catch (err) {
      let errorMessage = "Failed to send message. Please try again.";

      if (err instanceof Error) {
        if (err.name === "AbortError") {
          errorMessage = "Request timeout. Please check your connection and try again.";
        } else {
          errorMessage = err.message;
        }
      }

      setStatus({ type: "error", message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  // Helper function to render input with validation
  const renderInput = (name, placeholder, type = "text") => (
    <div>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        className={validationErrors[name] ? "border-red-500" : ""}
        disabled={loading}
      />
      {validationErrors[name] && (
        <p className="text-red-500 text-xs mt-1 flex items-center">
          <AlertCircle className="w-3 h-3 mr-1" />
          {validationErrors[name]}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-black to-[#9b1c31] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${industrialCityscape.src})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span>Home</span>
            <span>/</span>
            <span className="text-[#9b1c31]">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-8 bg-muted/30 rounded-xl border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#9b1c31]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-[#9b1c31]" />
            </div>
            <h3 className="text-xl text-black font-semibold mb-4">Visit Our Office</h3>
            <p className="text-gray-700 text-sm">
              {siteSetting.address}
            </p>
          </div>

          <div className="text-center p-8 bg-muted/30 rounded-xl border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#9b1c31]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-[#9b1c31]" />
            </div>
            <h3 className="text-xl text-black font-semibold mb-4">Call Us</h3>
            <p className="text-gray-700 text-sm">Sales: {siteSetting.phone}7</p>
          </div>

          <div className="text-center p-8 bg-muted/30 rounded-xl border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#9b1c31]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-[#9b1c31]" />
            </div>
            <h3 className="text-xl text-black font-semibold mb-4">Email Us</h3>
            <p className="text-gray-700 text-sm">{siteSetting.email}</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-[#9b1c31] mb-3 bg-[#9b1c31]/5 px-3 py-1 inline-block">
              Our Contact
            </div>
            <h2 className="text-4xl font-bold mb-6 text-black">Don't Hesitate To Ask Us A Question</h2>
            <p className="text-gray-700">
              Book an appointment with us, just leave message with our{" "}
              <span className="text-[#9b1c31]">full service or inquiry</span> drop us email at front desk!
            </p>
          </div>

          <div className="p-8 bg-background rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-6">Send Your Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                {renderInput("name", "Full Name")}
                {renderInput("email", "Email Address", "email")}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {renderInput("phone", "Phone Number", "tel")}
                {renderInput("subject", "Subject")}
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your message (optional)"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={validationErrors.message ? "border-red-500" : "text-gray-900"}
                  disabled={loading}
                />
                {validationErrors.message && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {validationErrors.message}
                  </p>
                )}
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.message.length}/1000
                </div>
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-3 rounded-md flex items-center space-x-2 ${status.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <AlertCircle className="w-4 h-4" />
                  )}
                  <span className="text-sm">{status.message}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#9b1c31] hover:bg-[#9b1c31]/90 text-white h-[50px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="">
        <div className="max-w-full mx-auto bg-muted rounded-lg h-96 flex items-center justify-center">
          <div className="w-full">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(siteSetting.address)}&output=embed`}
              width="100%"
              height="450"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
