"use client";

import { useState } from "react";
import Image from "next/image";
import industrialWorker from "../../../public/images/beijing-china-june-modern.webp";
import { CircularBadge } from "@/components/landing/circular-badge";
import { X } from "lucide-react";

const GalleryPage = () => {
    const [modalIndex, setModalIndex] = useState(null);

    // ✅ Example multiple images (replace with your API data)
    const galleryImg = [
        { _id: 1, image: industrialWorker },
        { _id: 2, image: industrialWorker },
        { _id: 3, image: industrialWorker },
        { _id: 4, image: industrialWorker },
        { _id: 5, image: industrialWorker },
    ];

    const handlePrev = () => {
        setModalIndex((prev) =>
            prev > 0 ? prev - 1 : galleryImg.length - 1
        );
    };

    const handleNext = () => {
        setModalIndex((prev) =>
            prev < galleryImg.length - 1 ? prev + 1 : 0
        );
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
                <p className="text-sm font-medium tracking-widest text-[#0146a3]">
                    Home / Gallery
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

            {/* ✅ Gallery Section */}
            <section className="container mx-auto w-full max-w-7xl py-16 md:py-24 px-4 space-y-16 md:space-y-24">
                <div className="columns-1 sm:columns-2 md:columns-4 gap-4 space-y-4">
                    {galleryImg.map((item, idx) => (
                        <div
                            key={item._id}
                            className="relative mb-4 cursor-pointer break-inside"
                            onClick={() => setModalIndex(idx)}
                        >
                            <img
                                src={item.image}
                                alt={`Gallery ${idx + 1}`}
                                className="w-full rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* ✅ Modal */}
            {modalIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setModalIndex(null)}
                >
                    <div
                        className="relative max-w-5xl w-full px-4 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Prev */}
                        <button
                            className="absolute left-4 text-white text-4xl w-12 h-12 flex items-center justify-center rounded-full bg-black/50"
                            onClick={handlePrev}
                        >
                            ‹
                        </button>

                        {/* Image */}
                        <img
                            src={galleryImg[modalIndex].image}
                            alt={`Gallery ${modalIndex + 1}`}
                            className="w-full max-h-[80vh] object-cover rounded-xl"
                        />

                        {/* Next */}
                        <button
                            className="absolute right-4 text-white text-4xl w-12 h-12 flex items-center justify-center rounded-full bg-black/50"
                            onClick={handleNext}
                        >
                            ›
                        </button>

                        {/* Close */}
                        <button
                            className="absolute top-4 right-4 bg-black/50 w-12 h-12 flex items-center justify-center rounded-full text-white text-3xl"
                            onClick={() => setModalIndex(null)}
                        >
                            <X />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
