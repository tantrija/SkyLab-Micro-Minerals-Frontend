"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import axios from "axios";

import industrialCityscape from "../../../public/images/industrial-oil-gas-facility-with-modern-equipment.jpg";

const PrivacyPolicyPage = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
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

        setPrivacyPolicy(res.data?.data?.privacyPolicy || "");
      } catch (err) {
        setError(err.message || "Failed to fetch Privacy Policy");
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacyPolicy();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-destructive text-lg">{error}</p>
        </div>
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
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span>Home</span>
            <span>/</span>
            <span className="text-[#9b1c31]">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className="policy_Html prose prose-lg
              prose-headings:font-semibold
              prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
              prose-p:leading-relaxed
              prose-li:leading-relaxed prose-li:mb-2
              prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: privacyPolicy || "" }}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
