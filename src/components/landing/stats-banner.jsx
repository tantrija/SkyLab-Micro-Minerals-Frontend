import Image from "next/image"
import industrialWorker from '../../../public/images/beijing-china-june-modern.webp'

export default function StatsBanner() {
  const chips = [
    { value: "99%", label: "Project Accuracy Rate", tone: "bg-primary text-primary-foreground" },
    { value: "200+", label: "Projects Completed", tone: "bg-background text-foreground" },
    { value: "30+", label: "Years of Expertise", tone: "bg-background text-foreground" },
    { value: "150+", label: "Global Shipments Delivered", tone: "bg-accent text-accent-foreground" },
  ]
  return (
    <section aria-label="Scale across industries" className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[1rem]">
          <Image
            src={industrialWorker}
            alt="Factory at work"
            className="h-[280px] md:h-[440px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" aria-hidden />
          <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end gap-3">
            <h3 className="text-white text-2xl md:text-3xl font-semibold">Precision that Scales Across Industries</h3>
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
  )
}
