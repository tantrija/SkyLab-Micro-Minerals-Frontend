"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

export function CircularBadge({
  text = "25+ Years of Experience",
  size = 180,
  className,
  circleClassName,
  centerClassName,
}) {
  const id = React.useId()
  const radius = (size - 10) / 2 // padding for the text path
  const repeated = `${text} • `.repeat(4).trim()

  return (
    <div
      className={cn("relative isolate inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={cn("block", circleClassName)}>
        <defs>
          <path
            id={id}
            d={`M ${size / 2},${size / 2} m -${radius},0 a ${radius},${radius} 0 1,1 ${
              radius * 2
            },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text className="fill-[#0057ff]" style={{ letterSpacing: "0.08em", fontSize: 14, fontWeight: 600 }}>
          <textPath href={`#${id}`} startOffset="0%">
            {repeated}
          </textPath>
        </text>
      </svg>

      <div
        className={cn(
          "absolute inset-0 m-auto size-[64%] rounded-full bg-[#fff] flex items-center justify-center",
          centerClassName
        )}
      >
        <ArrowUpRight className="size-6 text-[#0057ff]" aria-hidden="true" />
        <span className="sr-only">Learn more</span>
      </div>
    </div>
  )
}
