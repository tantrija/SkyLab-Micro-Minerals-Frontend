"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import axiosClientAuth from "@/Services/api";
import * as React from "react"
import Link from "next/link";


const HeroPage = () => {
  const [heroData, setHeroData] = React.useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const fetchHero = async () => {
      try {
        setError(null);
        setLoading(true);

        const res = await axiosClientAuth.get("/hero");

        setHeroData(res?.data?.data?.hero[0]);
      } catch (err) {
        console.log("Error fetching hero data:", err);
        setError("Failed to fetch hero data");
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  const bgImage = heroData?.bgImage
    ? `${process.env.NEXT_PUBLIC_API_IMAGE}/${heroData.bgImage}`
    : "/images/slider-01.jpg";

  return (
    <section aria-label="Hero" className="container mx-auto px-2 pt-0 md:pt-10">
      <div className="relative overflow-hidden rounded-[1rem]"> 
        <Image
          src={bgImage}
          alt={heroData?.title || "Hero Background"}
          width={1920}
          height={1080}
          className="h-[460px] md:h-[520px] w-full object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#111]/70" aria-hidden />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-12 max-w-2xl">
            <p className="text-white/80 text-xs md:text-sm mb-2">
              Reliable • Safe • Scalable
            </p>
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight text-balance">
              {heroData?.title || "Engineering the Future of Industry"}
            </h1>
            <p className="text-white/85 mt-3 md:mt-4 max-w-prose">
              {heroData?.description ||
                "Precision-built components and manufacturing expertise to move your business forward."}
            </p>
            <div className="mt-5 flex gap-3">
              <Button className="bg-[#0057ff] text-base text-white hover:bg-[#0057ff]/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* Floating CTA Card */}
        <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6">
          <div className="flex items-center gap-3 rounded-xl bg-background/95 shadow border p-3">
            <Image
              src={bgImage}
              alt="Engineer"
              width={44}
              height={44}
              className="size-11 rounded-lg object-cover"
            />
            <div>
              <p className="text-xs text-muted-foreground">New Customer?</p>
              <p className="text-sm font-medium">Talk with an Expert</p>
            </div>
            <Link
              size="sm"
              href="/contact"
              className="bg-[#0057ff] text-white hover:bg-[#0057ff]/90 p-3 rounded-lg text-sm ml-auto"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
