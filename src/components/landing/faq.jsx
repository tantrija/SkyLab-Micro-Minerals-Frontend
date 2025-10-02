"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  "What services does Uplorix provide?",
  "How quickly can you turn around a project?",
  "What industries do you serve?",
  "Can you help with design and prototyping?",
  "Do you provide quality certifications?",
  "What are your minimum order quantities?",
]

export default function FAQ() {
  return (
    <section aria-label="Frequently Asked Questions" className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
      <h3 className="text-center text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h3>
      <Accordion type="single" collapsible className="mt-6 grid gap-3">
        {faqs.map((q, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg">
            <AccordionTrigger className="px-4 text-xl">{q}</AccordionTrigger>
            <AccordionContent className="px-4 text-gray-600 text-base">
              We tailor our capabilities to your needs, ensuring speed, precision, and verified quality at each step.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
