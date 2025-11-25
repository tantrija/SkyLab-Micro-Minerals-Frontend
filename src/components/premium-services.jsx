import { useState, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import productsImg from "../../public/images/avatar-1.png";
import bgDefaultRow1 from "../../public/images/row-01.png"; 

const PremiumServices = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Debug environment variables
  useEffect(() => {
    console.log("Environment Variables:", {
      API_URL: process.env.NEXT_PUBLIC_API_URL,
    });
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setError(null);
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

        if (!API_URL || !API_TOKEN) throw new Error("API variables missing");

        const res = await fetch(`${API_URL}/royal/services`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new Error(`Error ${res.status}`);

        const json = await res.json();
        if (json.status && Array.isArray(json.data)) {
          setServices(json.data.slice(0, 3)); // Only first 3 cards
        } else {
          setError("No services found");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section
      className="py-20 px-4 bg-muted bg-cover bg-center bg-no-repeat h-full hidden"
      style={{ backgroundImage: `url(${bgDefaultRow1.src})` }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-white mb-2 italic bg-[#9b1c31] px-3 py-1 inline-block">
            // Our Premium Services
          </p>
          <h2 className="text-4xl font-medium mb-4 text-balance">
            Building a more competitive <br /> business sectors.
          </h2>
        </div>

        {loading && <p className="text-center text-gray-600">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            // Hard-coded diamond positions
            const diamondPosition =
              index === 1
                ? "absolute top-6 left-3" // 2nd card → top position
                : "absolute bottom-6 left-3"; // 1st & 3rd → bottom

            // Card margin
            const cardMargin = index === 1 ? "mt-10" : "mb-10";

            return (
              <div key={service._id} className="group relative">
                <div className={`p-6 bg-white shadow-lg rounded-xl ${cardMargin}`}>
                  <div className="w-12 h-12 flex items-center justify-start mb-6">
                    <ShieldCheck className="w-3xl text-[#9b1c31]" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-800">
                    {service.description}
                  </p>
                  <button
                    variant="link"
                    className="text-[#9b1c31] p-0 h-auto cursor-pointer"
                  >
                    Read More →
                  </button>
                </div>

                {/* Diamond and number */}
                <div
                  className="text-xl w-12 h-12 rounded-full flex items-center justify-center bg-white group-hover:bg-[#9b1c31] transition-colors duration-300 absolute"
                  style={{
                    top: index === 1 ? "-2.25rem" : "auto",
                    bottom: index !== 1 ? "0.75rem" : "auto",
                    left: "0.75rem",
                  }}
                >
                  <h3 className="text-gray-600 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </h3>
                </div>
              </div>
            );
          })}

          {/* Static image column */}
          <div className="group relative">
            <div className="w-full h-full">
              <Image
                src={productsImg}
                alt="Products" loading="lazy"
                className="rounded-lg shadow-lg w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
