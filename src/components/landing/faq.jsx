"use client"
import { useState, useEffect, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import axiosClientAuth from "@/Services/api";
import { ChevronDown } from "lucide-react";
import * as React from "react"

// const faqs = [
//   "What services does Uplorix provide?",
//   "How quickly can you turn around a project?",
//   "What industries do you serve?",
//   "Can you help with design and prototyping?",
//   "Do you provide quality certifications?",
//   "What are your minimum order quantities?",
// ]



export default function FAQ() {
  const [faq, setFaq] = React.useState([]);
 const [openIndex, setOpenIndex] = React.useState(null);
  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  // React.useEffect(() => {
  //   const fetchFaqs = async () => {
  //     try {
  //       const res = await axiosClientAuth.get("/faqs");
  //       setFaq(res?.data?.data?.data[0]);
  //     } catch (err) {
  //       console.log("Error fetching Faqs:", err);
  //     }
  //   };

  //   fetchFaqs();
  // }, []);

const faqs = [
    {
      question: "What makes coated calcium carbonate different from uncoated calcium carbonate?",
      answer: (
        <>
          Coated calcium carbonate undergoes a stearic acid surface treatment that improves its compatibility with polymers. This coating enhances dispersion, strengthens mechanical bonding in plastics, reduces moisture absorption, and improves smoothness. Uncoated CaCO₃ is mainly used in construction, agriculture, pharma, and food, while coated grades are designed for high-performance plastics, rubber, and coatings.
        </>
      ),
    },
    {
      question: "Why is coated CaCO₃ preferred in plastic & masterbatch industries?",
      answer: (
        <>
         <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Improves melt flow and extrusion speed</li>
          <li>Reduces wear on screws and dies</li>
          <li>Enhances product strength and surface shine</li>
          <li>Lowers polymer usage and total manufacturing cost</li>
          <li>Prevents lump formation by ensuring better dispersion</li>
        </ul>
        <p>This leads to higher productivity and better aesthetic performance in final products.</p>
        </>
      ),
    },
    {
      question: "Which polymers are compatible with coated calcium carbonate?",
      answer: (
        <>
        <p className="mb-3">Coated CaCO₃ is highly recommended for:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>PP, PE, PVC</li>
          <li>ABS, EVA, TPR</li>
          <li>Masterbatch compounds</li>
          <li>WPC (Wood Plastic Composite)</li>
        </ul>
        <p>It blends well with both extrusion and injection molding systems.</p>
        </>
        
      ),
    },
    {
      question: "Does the coating affect product life or safety?",
      answer: (
        <>
        No. The coating is typically food-safe grade stearic acid, widely used in industrial and consumer products. It does not interfere with chemical stability or cause degradation. Instead, it improves weather resistance, dimensional stability, and product durability.
          
        </>
      ),
    },
    {
      question: "What mesh or particle size options are available?",
      answer: (
        <>
        <p className="mb-3">Our coated range includes:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>C600 — Coarse-medium grade</li>
          <li>C1100 — Medium-fine performance filler</li>
          <li>C2100 — Fine grade for superior finish</li>
          <li>C3100 — Ultra-fine for advanced engineering plastics</li>
        </ul>
        <p>Customized micron sizes can be produced for specific requirements.</p>
        </>
      ),
    },
    {
      question: "Is coated CaCO₃ cost-effective compared to pure polymers or other fillers?",
      answer: (
        <>
        <p className="mb-3">
          Yes — manufacturers typically replace 20% to 40% of expensive polymer resin with coated CaCO₃ without losing strength. This reduces:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cost per kg of final product</li>
          <li>Power consumption during processing</li>
          <li>Raw material dependency</li>
        </ul>
        <p>Hence, it is widely adopted to maximize profit margins.</p>
        </>
      ),
    },
    {
      question: "How is it packed and delivered?",
      answer: (
        <>
          <p className="mb-3">
         We provide:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>25kg / 50kg laminated HDPE bags</li>
          <li>1 MT jumbo bags</li>
          <li>Export packing and private labeling options</li>
        </ul>
        </>
      ),
    },
    {
      question: "Do you provide technical support for product integration?",
      answer: (
        <>
         <p className="mb-3">Yes. We assist customers with:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 mb-3">
            <li>Grade selection for their specific polymer type</li>
            <li>Trial sample supply and performance testing</li>
            <li>Machine parameter optimization for maximum efficiency</li>
          </ul>
          <p>We believe in long-term partnerships with consistent and reliable support.</p>
        </>
      ),
    },
   
  ];

  return (
    <section className="py-32 px-6 bg-gray-5">
        <div className="text-center mb-12 fade-in-up ">
         
            <h2 className="text-headline text-4xl">Frequently Asked Questions</h2>
          </div>
      <div className="w-full max-w-7xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded-lg">
            <button
              onClick={() => toggle(i)}
              className="flex justify-between w-full px-6 py-4 text-left font-medium hover:bg-gray-50 cursor-pointer"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === i && (
              <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
</section>
  )
}
