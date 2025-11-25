"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import industrialCityscape from "../../../public/images/industrial-oil-gas-facility-with-modern-equipment.jpg";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const GalleryPage = () => {
  const [modalIndex, setModalIndex] = useState(null);
  const [galleryImg, setGalleryImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setError(null);
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

        if (!API_URL || !API_TOKEN) throw new Error("API variables missing");

        const res = await fetch(`${API_URL}/royal/gallery`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        const json = await res.json();
        setGalleryImg(json.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // Navigation inside modal
  const handleNext = () => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex + 1) % galleryImg.length);
    }
  };

  const handlePrev = () => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex - 1 + galleryImg.length) % galleryImg.length);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-black to-[#9b1c31] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${industrialCityscape.src})`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span>Home</span>
            <span>/</span>
            <span className="text-[#9b1c31]">Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {loading && <p className="text-center text-gray-500">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          <div className="columns-1 sm:columns-2 md:columns-4 gap-4 space-y-4">
            {galleryImg.map((item, idx) => (
              <div
                key={item._id}
                className="relative mb-4 cursor-pointer break-inside"
                onClick={() => setModalIndex(idx)}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_API_IMAGE}${item.image}`}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setModalIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full px-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              className="absolute left-6 text-white text-4xl w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-[#9b1c31]"
              onClick={handlePrev}
            >
              <ArrowLeft/>
            </button>

            {/* Image */}
            <img
              src={`${process.env.NEXT_PUBLIC_API_IMAGE}${galleryImg[modalIndex].image}`}
              alt={`Gallery ${modalIndex + 1}`}
              className="w-full max-h-[80vh] object-cover rounded-xl"
            />

            {/* Next Button */}
            <button
              className="absolute right-6 text-white text-4xl w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-[#9b1c31]"
              onClick={handleNext}
            >
              <ArrowRight/>
            </button>

            {/* Close Button */}
            <button
              className="absolute top-4 right-6 bg-black/50 hover:bg-[#9b1c31] w-10 h-10 flex items-center justify-center rounded-full text-white text-2xl"
              onClick={() => setModalIndex(null)}
            >
              <X/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;