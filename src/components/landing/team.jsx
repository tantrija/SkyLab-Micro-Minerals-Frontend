"use client";

import Image from "next/image";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import axiosClientAuth from "@/Services/api"
import * as React from "react"

const Team = () => {
  const [members, setMembers] = React.useState([]);
  const [hovered, setHovered] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const activeIndex = hovered;

  React.useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axiosClientAuth.get("/our-team");
        console.log(res.data.data.data);
        setMembers(res?.data?.data?.data);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching services:", err);
      }
    };

    fetchTeam();
  }, []);


  if (loading)
    return (
      <section className="py-20 text-center text-gray-500">Loading team members...</section>
    );

  if (error)
    return (
      <section className="py-20 text-center text-red-500">Error: {error}</section>
    );

  return (
    <section className="mx-auto w-full max-w-7xl px-1 md:px-8 pb-16 pt-6 md:pb-24 md:pt-12">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between md:mb-10">
        <div>
          <p className="text-sm font-semibold tracking-widest/relaxed text-foreground/60">
           OUR TEAM
          </p>
          <h2 className="text-pretty font-sans text-4xl font-semibold leading-tight md:text-6xl">
            Your Manufacturing <br className="hidden md:block" />
            Partners
          </h2>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members?.map((m, i) => {
          const isActive = i === activeIndex;

          return (
            <div
              key={i}
              className={cn(
                "relative h-[420px] overflow-hidden rounded-[28px]",
                "ring-1 ring-black/10 transition-all duration-300",
                isActive ? "bg-[#0057ff] text-white" : "bg-card"
              )}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
            >
              {isActive ? (
                // Expanded card (on hover)
                <div className="flex h-full flex-col p-8">
                  <div>
                    <h3 className="text-3xl font-semibold leading-tight">{m.heading}</h3>
                    <p className="mt-2 text-lg/7 opacity-90">{m.title}</p>
                  </div>

                  <p className="mt-6 max-w-sm text-base/7 opacity-95">{m.description}</p>

                  <div className="mt-auto flex items-center gap-3 pt-8">
                    {m.socialLinks?.facebook && (
                      <a
                        href={m.socialLinks.facebook}
                        aria-label="Facebook profile"
                        target="_blank"
                        className="grid size-9 place-items-center rounded-lg bg-brand-foreground/10 text-white ring-1 ring-white/25 transition-colors hover:bg-brand-foreground/15"
                      >
                        <Facebook className="size-4" />
                      </a>
                    )}
                    {m.socialLinks?.linkedin && (
                      <a
                        href={m.socialLinks.linkedin}
                        aria-label="LinkedIn profile"
                        target="_blank"
                        className="grid size-9 place-items-center rounded-lg bg-brand-foreground/10 text-white ring-1 ring-white/25 transition-colors hover:bg-brand-foreground/15"
                      >
                        <Linkedin className="size-4" />
                      </a>
                    )}
                    {m.socialLinks?.twitter && (
                      <a
                        href={m.socialLinks.twitter}
                        aria-label="Twitter profile"
                        target="_blank"
                        className="grid size-9 place-items-center rounded-lg bg-brand-foreground/10 text-white ring-1 ring-white/25 transition-colors hover:bg-brand-foreground/15"
                      >
                        <Twitter className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                // Default card (normal)
                <div className="relative h-full">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_IMAGE}/${m.images[0]}`}
                    alt={m.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    priority={i === 0}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                    <p className="text-xl font-semibold drop-shadow-sm">{m.name}</p>
                    <p className="text-sm opacity-90 drop-shadow-sm">{m.role}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
