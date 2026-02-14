import { Typography } from "@mui/material";
import circle from "../assets/circle.png";
import journey_1 from "../assets/journey_1.png";
import journey_2 from "../assets/journey_2.png";
import journey_3 from "../assets/journey_3.png";
import journey_4 from "../assets/journey_4.png";
import launch from "../assets/rocket.png";
import expansion from "../assets/expansion.png";
import award from "../assets/award.png";
import global from "../assets/global.png";
import { motion } from "framer-motion";

const Journey = () => {
  const journey = [
    {
      image: journey_1,
      icon: launch,
      title: "Platform Launch",
      text: "Plasticonn officially launched, connecting our first collectors and centers across 5 cities.",
      stats: "500+ users onboarded",
      timeline: "2025 Q1",
    },
    {
      image: journey_2,
      icon: expansion,
      title: "Rapid Expansion",
      text: "Scaled to 50 cities with smart routing, real-time tracking, and automated credit systems.",
      stats: "5,000+ active collectors",
      timeline: "2025 Q2",
    },
    {
      image: journey_3,
      icon: award,
      title: "1 Million kg Milestone",
      text: "Celebrated our first million kilograms of plastic recycled through the platform.",
      stats: "1M+ kg recycled",
      timeline: "2025 Q3",
    },
    {
      image: journey_4,
      icon: global,
      title: "Global Impact",
      text: "Now operating in 100+ cities nationwide, creating sustainable livelihoods and cleaner communities.",
      stats: "15K+ community members",
      timeline: "2026",
    },
  ];

  return (
    <div className="bg-[#F1F1F1] px-[6%] lg:px-[8%] py-[8%] lg:py-[4.25%] flex flex-col gap-8 lg:gap-11.5">
      {/* Badge */}
      <div className="flex justify-center">
        <div className="rounded-4xl py-2 lg:py-2.5 px-4 lg:px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281] text-center">
          <Typography sx={{ fontSize: { xs: 14, lg: 16 } }}>
            Our Journey
          </Typography>
        </div>
      </div>

      {/* Main Heading */}
      <div className="flex justify-center text-center">
        <Typography
          fontSize={{ xs: 28, sm: 32, md: 38, lg: 42 }}
          fontWeight={400}
          color="#1A1A1A"
        >
          Making a <br /> <span className="text-[#00C281]">Difference</span>
        </Typography>
      </div>

      {/* Description */}
      <div className="flex justify-center text-center px-4 lg:px-0">
        <Typography
          fontSize={{ xs: 14, sm: 16, md: 18, lg: 20 }}
          fontWeight={300}
          color="#1A1A1A"
        >
          From a simple idea to a massive movement. Here's how Plasticonn has
          grown to become a leader in <br className="hidden lg:block" />{" "}
          sustainable plastic recycling.
        </Typography>
      </div>

      {/* Timeline Section */}
      <div className="relative py-8 lg:py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Vertical Line - Desktop only */}
          <div className="absolute left-1/2 top-20 bottom-0 w-1 bg-[#00C281] transform -translate-x-1/2 hidden lg:block" />

          {/* Mobile Layout */}
          <div className="flex flex-col gap-6 lg:hidden overflow-hidden">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-4 w-full"
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }} // smaller offset
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Card */}
                <motion.div
                  className="bg-white rounded-2xl p-5 flex flex-col gap-4 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Icon and Timeline */}
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-[#005C3D] to-[#00C281] rounded-xl flex items-center justify-center shrink-0">
                      <img src={item.icon} alt="" className="w-6 h-6" />
                    </div>
                    <Typography fontSize={14} fontWeight={400} color="#00C281">
                      {item.timeline}
                    </Typography>
                  </div>

                  {/* Title */}
                  <Typography
                    fontSize={20}
                    fontWeight={500}
                    color="#1A1A1A"
                    sx={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.title}
                  </Typography>

                  {/* Text */}
                  <Typography
                    fontSize={14}
                    fontWeight={300}
                    color="#1A1A1A"
                    sx={{ lineHeight: 1.5 }}
                  >
                    {item.text}
                  </Typography>

                  {/* Stats */}
                  <div className="bg-[#00C2811A] py-2 px-4 rounded-full text-center w-fit">
                    <Typography fontSize={14} fontWeight={400} color="#00C281">
                      {item.stats}
                    </Typography>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  className="overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-70 w-220"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="relative mb-24 hidden lg:flex flex-col gap-15">
            {journey.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid grid-cols-2 gap-50 items-center relative ${
                    isEven ? "" : "flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    className={`flex rounded-[20px] overflow-hidden ${
                      isEven ? "justify-end" : "justify-start order-2"
                    }`}
                    initial={{ x: isEven ? 100 : -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <img
                      src={item.image}
                      alt="Plastic waste"
                      className="rounded-[20px] h-130 w-200"
                    />
                  </motion.div>

                  {/* Circle */}
                  <div className="absolute inset-0 flex items-center justify-center top-15 left-2 pointer-events-none z-50">
                    <img src={circle} alt="" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`flex p-9 rounded-[20px] gap-6.5 bg-[#FAFAFA] shadow-[0px_1px_3px_1px_#00000026] ${
                      isEven
                        ? "justify-between"
                        : "justify-between flex-row-reverse"
                    }`}
                    initial={{ x: isEven ? -100 : 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className={`flex flex-col gap-4.5 ${
                        isEven ? "items-end" : "items-start"
                      }`}
                    >
                      <Typography
                        fontSize={24}
                        fontWeight={400}
                        color="#00C281"
                      >
                        {item.timeline}
                      </Typography>

                      <Typography
                        fontSize={42}
                        fontWeight={400}
                        color="#1A1A1A"
                        className="mb-3"
                        sx={{ fontFamily: "Georgia, serif" }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        fontSize={24}
                        fontWeight={300}
                        color="#1A1A1A"
                        sx={{ textAlign: isEven ? "right" : "left" }}
                      >
                        {item.text}
                      </Typography>

                      <div className="bg-[#00C2811A] py-4.5 px-6.5 rounded-[26px] text-center">
                        <Typography
                          fontSize={24}
                          fontWeight={400}
                          color="#00C281"
                        >
                          {item.stats}
                        </Typography>
                      </div>
                    </div>

                    <div className="w-15 h-15 bg-linear-to-br from-[#005C3D] to-[#00C281] rounded-xl flex items-center justify-center shrink-0">
                      <img src={item.icon} alt="" className="w-7 h-7" />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
