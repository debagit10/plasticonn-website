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
    <div className="bg-[#F1F1F1] px-[8%] py-[4.25%] flex flex-col gap-11.5">
      <div className="flex justify-center">
        <div className="rounded-4xl py-2.5 px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281] text-center">
          <Typography>Our Journey</Typography>
        </div>
      </div>

      <div className="flex justify-center text-center">
        <Typography fontSize={42} fontWeight={400} color="#1A1A1A">
          Making a <br /> <span className="text-[#00C281]">Difference</span>
        </Typography>
      </div>

      <div className="flex justify-center text-center">
        <Typography fontSize={26} fontWeight={300} color="#1A1A1A">
          From a simple idea to a massive movement. Here's how Plasticonn has
          grown to become a leader in <br /> sustainable plastic recycling.
        </Typography>
      </div>

      <div className="relative py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="absolute left-1/2 top-20 bottom-0 w-1 bg-[#00C281] transform -translate-x-1/2" />

          <div className="relative mb-24 flex flex-col gap-15">
            {journey.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 gap-50 items-center relative ${
                  index % 2 === 0 ? "" : "direction-reverse"
                }`}
              >
                {/* Image - First for even indices (0, 2, 4...) */}
                <div
                  className={`flex rounded-[20px] ${
                    index % 2 === 0 ? "justify-end" : "justify-start order-2"
                  }`}
                >
                  <img
                    src={item.image}
                    alt="Plastic waste"
                    className="rounded-[20px] h-88 w-173.5"
                  />
                </div>

                {/* Circle in center */}
                <div className="absolute inset-0 flex items-center justify-center top-15 left-2 pointer-events-none z-100">
                  <img src={circle} alt="" />
                </div>

                {/* Content Card */}
                <div
                  className={`flex p-9 rounded-[20px] gap-6.5 bg-[#FAFAFA] shadow-[0px_1px_3px_1px_#00000026] ${
                    index % 2 === 0
                      ? "justify-between"
                      : "justify-between flex-row-reverse order-1"
                  }`}
                >
                  <div
                    className={`flex flex-col gap-4.5 ${
                      index % 2 === 0 ? "items-end" : "items-start"
                    }`}
                  >
                    <Typography fontSize={24} fontWeight={400} color="#00C281">
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
                      sx={{ textAlign: index % 2 === 0 ? "right" : "left" }}
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

                  <div className="w-40 h-20 bg-linear-to-br from-[#005C3D] to-[#00C281] rounded-xl flex items-center justify-center shadow-lg">
                    <img src={item.icon} alt="" className="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
