import { useEffect, useState } from "react";
import api from "../utils/axiosInstance";
import { motion } from "framer-motion";

interface Partners {
  logo: { url: string; public_id: string };
  name: string;
}

const Partners = () => {
  const [ourPartners, setOurPartners] = useState<Partners[]>([]);

  const getPartners = async () => {
    const response = await api.get("/api/partner");

    setOurPartners(Array.isArray(response.data.data) ? response.data.data : []);
  };

  useEffect(() => {
    getPartners();
  }, []);

  // duplicate for seamless loop
  const duplicatedPartners = Array.isArray(ourPartners)
    ? [...ourPartners, ...ourPartners, ...ourPartners]
    : [];

  return (
    <div className="bg-[#F1F1F1] py-16 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-10">
        <div className="inline-block rounded-4xl py-2 px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281]">
          Our Partners
        </div>
      </div>

      {/* Infinite scroll */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 w-max items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-50 gap-4"
            >
              <img
                src={partner.logo.url}
                alt={partner.name}
                className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition"
              />

              <p className="text-[#00C281] text-sm text-center">
                {partner.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
