import { useState, useEffect } from "react";
import Image from "next/image";

const AboutUs = () => {
  const [about, setAbout] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Debug environment variables
  useEffect(() => {
    console.log("Environment Variables:", {
      API_URL: process.env.NEXT_PUBLIC_API_URL,
    });
  }, []);

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        setError(null);
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

        if (!API_URL || !API_TOKEN) throw new Error("API variables missing");

        const res = await fetch(`${API_URL}/royal/about-setting`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        const json = await res.json();
        console.log("API Response:", json);

        setAbout(json.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchAboutUs();
  }, []);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (error) return <p className="text-center py-20 text-red-500">{error}</p>;
  if (!about) return null;

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {about?.images && about.images.length > 0 && (
            <div className="grid grid-cols-1 gap-4">
              {about.images.map((img, index) => (
                <img
                  key={index}
                  src={`${process.env.NEXT_PUBLIC_API_IMAGE}${img}`}
                  alt={`${about.title} ${index + 1}`}
                  className="w-full h-full rounded-lg shadow-lg"
                  loading="lazy"
                />
              ))}
            </div>
          )}

          <div>
            <p className="text-[#9b1c31] mb-2 font-italic bg-[#9b1c31]/5 px-3 py-1 inline-block">
              // {about.since}
            </p>
            <h2 className="text-4xl font-bold mb-6 text-balance">
              {about.title}
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {about.content}
            </p>
            <div className="mb-8 inline-block">
                <div className="text-5xl font-bold mb-2">
                  25+
                </div>
                <div className="text-sm">Years of expertise</div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
