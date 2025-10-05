"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { CircularBadge } from "./circular-badge";
import { cn } from "@/lib/utils";
import axiosClientAuth from "@/Services/api";
import * as React from "react"

const Committed = ({ className }) => {
  const [aboutUs, setAboutUs] = React.useState({});

  React.useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const res = await axiosClientAuth.get("/about-setting");
        console.log(res.data.data);
        setAboutUs(res?.data?.data);
      } catch (err) {
        console.log("Error fetching about us:", err);
      }
    };

    fetchAboutUs();
  }, []);


  const API_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE;
  const imageUrl =
    aboutUs?.images?.length && API_IMAGE
      ? `${API_IMAGE}${aboutUs.images[0]}`
      : "/images/fallback.jpg";

  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
      <p className="text-sm font-medium tracking-widest text-[#0146a3]">
        01 / ABOUT
      </p>

      <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-start">
        {/* Left Section */}
        <div className="order-1 md:order-none">
          <h2 className="text-balance font-sans text-4xl font-bold leading-tight md:text-6xl">
            {aboutUs?.title || "Committed to Precision. Driven by Innovation"}
          </h2>

          <div className="mt-6 space-y-5 text-base text-gray-600 leading-relaxed">
            <p
              className="text-lg text-gray-600 leading-relaxed mb-8"
              dangerouslySetInnerHTML={{
                __html:
                  aboutUs?.content ||
                  "We transform raw materials into premium industrial solutions through decades of expertise, cutting-edge technology, and an unwavering commitment to quality.",
              }}
            />
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Button
              className={cn(
                "inline-flex items-center gap-3 rounded-12 px-6 py-6 text-base",
                "bg-[#0146a3] text-background hover:bg-[#0146a3]/90"
              )}
            >
              <span>Read More</span>
              <span className="grid size-8 place-items-center rounded-md bg-white text-[#0146a3]">
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </span>
            </Button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[28px]">
            <Image
              src={imageUrl}
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
  );
};

export default Committed;
