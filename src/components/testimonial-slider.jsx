import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle, ChevronDown, Star, Zap } from "lucide-react";
import bgDefault from "../../public/images/row-02.png";

const TestimonialSlider = ({ autoPlay = true, autoPlayMs = 5000 }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  const [index, setIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const len = testimonials.length;
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setError(null);
        setLoading(true);
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

        if (!API_URL || !API_TOKEN) throw new Error("API variables missing");

        const res = await fetch(`${API_URL}/royal/testimonials`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        const json = await res.json();
        console.log("API Response:", json);

        setTestimonials(json.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (!autoPlay || len === 0) return;
    intervalRef.current = setInterval(() => {
      setIndex((s) => (s + 1) % len);
    }, autoPlayMs);
    return () => clearInterval(intervalRef.current);
  }, [autoPlay, autoPlayMs, len]);

  const goPrev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIndex((s) => (s - 1 + len) % len);
  };

  const goNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIndex((s) => (s + 1) % len);
  };

  if (loading) return <p className="text-center">Loading testimonials...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (len === 0) return null;






const faqs = [
    {
      question: "What is calcium powder powder and where does it come from?",
      answer: (
        <>
          Calcium powder (CaCO₃) is a naturally occurring mineral found in
          limestone, marble, and chalk. It is mined, crushed, ground, and processed
          into fine powder for multiple industrial applications including
          construction, plastics, agriculture, pharmaceuticals, paper, and paints.
        </>
      ),
    },
    {
      question: "What is the difference between coated and uncoated calcium powder?",
      answer: (
        <>
          <strong>Uncoated CaCO₃:</strong> Pure form, used where high absorption
          and bulk properties are required (agriculture, pharma, food, construction).<br /><br />
          <strong>Coated CaCO₃:</strong> Surface-treated with stearic acid to
          enhance dispersion, water resistance, and compatibility with polymers—
          widely used in plastics, rubber, and paints.
        </>
      ),
    },
    {
      question: "Which industries commonly use calcium powder powder?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Construction & Cement</li>
          <li>Plastics & Masterbatch</li>
          <li>Rubber & Tyres</li>
          <li>Paints & Coatings</li>
          <li>Agriculture & Animal Feed</li>
          <li>Pharmaceuticals & Food</li>
          <li>Paper & Packaging</li>
          <li>Water Treatment</li>
        </ul>
      ),
    },
    {
      question: "What mesh sizes are available?",
      answer: (
        <>
          We offer a wide range of mesh sizes:<br />
          <strong>200, 300, 400, 600, 800, 1000, 1500 mesh</strong><br /><br />
          Precipitated Calcium Powder (PCC) available up to <strong>3000 mesh</strong>.<br />
          Custom sizes can also be provided on request.
        </>
      ),
    },
    {
      question: "What are the main quality parameters for calcium powder?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Purity (CaCO₃%) – typically 90% to 98%+</li>
          <li>Brightness / Whiteness</li>
          <li>Mesh Size (particle fineness)</li>
          <li>Moisture content</li>
          <li>Acid insoluble matter</li>
          <li>Oil absorption (important for plastics)</li>
        </ul>
      ),
    },
    {
      question: "Does coated calcium powder improve plastic processing?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Increases melt flow</li>
          <li>Improves dispersion in polymer matrix</li>
          <li>Enhances surface finish</li>
          <li>Reduces moisture absorption</li>
          <li>Lowers raw material cost</li>
        </ul>
      ),
    },
    {
      question: "Is calcium powder safe for food and medicinal use?",
      answer: (
        <>
          Yes. Food-grade and pharma-grade calcium powder meet strict
          regulatory standards like <strong>FSSAI, IP, BP, USP</strong>.  
          It is used for calcium supplementation and acidity control.  
          <br /><br />
          <strong>Note:</strong> Industrial grades are not safe for consumption.
        </>
      ),
    },
    {
      question: "Is calcium powder environmentally friendly?",
      answer: (
        <>
          Yes, it is a natural mineral with no harmful chemicals. It supports sustainability by:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Replacing costly synthetic fillers</li>
            <li>Reducing deforestation in the paper industry</li>
            <li>Improving soil health in agriculture</li>
          </ul>
        </>
      ),
    },
    {
      question: "Can you provide custom packing and bulk supply options?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>25 kg / 50 kg HDPE bags</li>
          <li>1 ton jumbo bags</li>
          <li>Bulk loose transport</li>
          <li>Private labeling / branded packaging</li>
        </ul>
      ),
    },
    {
      question: "Do you provide technical support for industry-specific applications?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Grade selection guidance</li>
          <li>Testing and trial batches</li>
          <li>Long-term supply & logistics support</li>
          <li>Quality documentation</li>
        </ul>
      ),
    },
  ];



  return (
    <>
    
    <section className="py-32 px-6 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-up  ">
         
            <h2 className="text-headline mb-6 text-2xl">We Would Love to Talk</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             We value meaningful conversations and look forward to connecting with you—whether you're seeking collaboration, career opportunities, or wish to explore our offerings. We’re always happy to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Values Card */}
            <div className="group bg-card border border-border rounded-3xl p-10 hover-lift fade-in-up   stagger-1">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#9b1c31]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#9b1c31]/20 transition-colors">
                  <CheckCircle className="w-8 h-8 text-[#9b1c31]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
                  <p className="text-gray-600 leading-relaxed">
                   Our facility is equipped with an in-house particle size testing laboratory featuring the Malvern 2000E Particle Size Analyzer. This advanced equipment enables us to maintain precise and consistent particle sizes, ensuring reliable and high-quality end products. We are proud to be a quality-rated supplier, holding an A-rating from our valued clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Card */}
            <div className="group bg-card border border-border rounded-3xl p-10 hover-lift fade-in-up   stagger-2">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#9b1c31]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#9b1c31]/20 transition-colors">
                  <Zap className="w-8 h-8 text-[#9b1c31]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Representation</h3>
                  <p className="text-gray-600 leading-relaxed">
                   We are recognized as one of the front-runners in the mineral industry, offering genuine, safe, and effective products. Over the years, we have become a reliable and economical source of high-quality minerals for a wide range of industries. Our commitment to exceptional service and competitive pricing has earned us a strong and satisfied customer base across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   <section className="py-32 px-6">
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

    <section
      className="py-20 px-4 bg-background bg-cover bg-center bg-no-repeat h-full hidden"
      style={{ backgroundImage: `url(${bgDefault.src})` }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium mb-4 text-balance text-[#9b1c31] font-italic bg-[#9b1c31]/5 px-3 py-1 inline-block">
            2k+ Customer Say About Our Support
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Just a quick note to say thank you and the publication team for putting so gap distinctive additional as a result we could carry out some more.
          </p>
        </div>

        {/* Slider */}
        
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-6">
                    <div className="p-8 text-center">
                      <div className="flex-shrink-0 mb-4 flex justify-center">
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_IMAGE}${t.userImage}`}
                          alt={t.name} 
                          className="rounded-full object-cover w-16 h-16"
                        />
                      </div>
                      <div className="text-center">
                        <div className="flex flex-col items-center gap-1">
                          <h4 className="font-semibold text-lg">{t.name}</h4>
                          <p className="text-sm text-muted-foreground">{t.designation}</p>
                        </div>
                        <div className="flex items-center justify-center mt-3 mb-4">
                          {Array.from({ length: t.rating }).map((_, j) => (
                            <Star key={j} className="w-4 h-4 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          “{t.description}”
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    setIndex(i);
                  }}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    i === index ? "bg-[#9b1c31]" : "bg-[#9b1c31]/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default TestimonialSlider;
