"use client";

import Image from "next/image";
import industrialWorker from "../../../public/images/beijing-china-june-modern.webp";
import axiosClientAuth from "@/Services/api";
import * as React from "react";

export default function StatsBanner() {
  const [counter, setCounter] = React.useState(null);

  React.useEffect(() => {
    const fetchCounter = async () => {
      try {
        const res = await axiosClientAuth.get("/counter");
        // ✅ assuming res.data.data[0] has the object you shared
        setCounter(res?.data?.data?.[0]);
      } catch (err) {
        console.error("Error fetching Counters:", err);
      }
    };

    fetchCounter();
  }, []);

  // Show loader until data is fetched
  if (!counter) {
    return (
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24 text-center hidden">
        <p className="text-muted-foreground">Loading statistics...</p>
      </section>
    );
  }

  // ✅ dynamically map API values
  const chips = [
    {
      value: `${counter.yearsExperience}+`,
      label: "Years of Expertise",
      tone: "bg-background text-foreground",
    },
    {
      value: `${counter.skilledProfessional}+`,
      label: "Skilled Professionals",
      tone: "bg-accent text-accent-foreground",
    },
    {
      value: `${counter.visitedConference}+`,
      label: "Visited Conferences",
      tone: "bg-background text-foreground",
    },
    {
      value: `${counter.happyCustomers}+`,
      label: "Happy Customers",
      tone: "bg-primary text-primary-foreground",
    },
  ];

  return (
    <section
      aria-label="Scale across industries"
      className="mx-auto w-full max-w-7xl px-1 md:px-8 py-5 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[1rem]">
          <Image
            src={industrialWorker}
            alt="Factory at work"
            className="h-[380px] md:h-[440px] w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" aria-hidden />
          <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end gap-3">
            <h3 className="text-white text-2xl md:text-3xl font-semibold">
              Precision that Scales Across Industries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
              {chips.map((c, i) => (
                <div key={i} className={`rounded-xl px-4 py-3 ${c.tone}`}>
                  <div className="text-2xl font-semibold">{c.value}</div>
                  <div className="text-xs opacity-85">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
