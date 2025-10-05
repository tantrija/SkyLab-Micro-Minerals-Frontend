"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import axiosClientAuth from "@/Services/api";
import * as React from "react"

const faqs = [
  "What services does Uplorix provide?",
  "How quickly can you turn around a project?",
  "What industries do you serve?",
  "Can you help with design and prototyping?",
  "Do you provide quality certifications?",
  "What are your minimum order quantities?",
]

export default function FAQ() {
  const [faq, setFaq] = React.useState([]);

  React.useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await axiosClientAuth.get("/faqs");
        setFaq(res?.data?.data?.data[0]);
      } catch (err) {
        console.log("Error fetching Faqs:", err);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <section aria-label="Frequently Asked Questions" className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
      <h3 className="text-center text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h3>
      <Accordion type="single" collapsible className="mt-6 grid gap-3">
        {faqs.map((q, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg">
            <AccordionTrigger className="px-4 text-xl">{faq?.question}</AccordionTrigger>
            <AccordionContent className="px-4 text-gray-600 text-base">
              {faq?.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
