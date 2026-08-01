import { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { Typography, Tooltip } from "@mui/material";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import aliya from "../assets/team/Aliya.jpg";
import toyin from "../assets/team/oluwatoyin.jpeg";
import moyo from "../assets/team/Moyo.jpeg";
import demilade from "../assets/team/demilade.jpg";
import tobi from "../assets/team/Tobi.jpg";
import sodiq from "../assets/team/sodiq.jpg";
import elias from "../assets/team/Peter Elias.jpg";

const Team = () => {
  const team = [
    {
      name: "Onafeso Imisioluwa Aliya",
      role: "Team Lead & Project Manager",
      image: aliya,
      socials: [
        {
          name: "Instagram",
          link: "https://www.instagram.com/imisioluwaaliya?igsh=MWpmaHZhbTZod2xyaA==",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/imisioluwa-onafeso/",
          icon: <FaLinkedinIn />,
        },
      ],
    },
    {
      name: "Odunlana Oluwatoyin",
      role: "Project Mentor",
      image: toyin,
      socials: [
        {
          name: "Instagram",
          link: "https://www.instagram.com/ab_ose_de?igsh=MW9yNW9sYnNsd3ZxNg==",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/oluwatoyinodulana",
          icon: <FaLinkedinIn />,
        },
      ],
    },
    {
      name: "Azeez Moyosoreoluwa",
      role: "Sustainability Research & Communications Lead",
      image: moyo,
      socials: [
        {
          name: "Instagram",
          link: "https://www.instagram.com/mo_yoosore?igsh=djJkc2l3eDZ3Y2tn",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/moyosoreoluwa-azeez-003bb3282/",
          icon: <FaLinkedinIn />,
        },
      ],
    },
    {
      name: "Onasanya Oluwademilade",
      role: "GIS and Technical Lead",
      image: demilade,
      socials: [
        {
          name: "Instagram",
          link: "https://www.instagram.com/_oluwademilade_e?igsh=em02bmgwdWN2MXQ3",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/oluwademilade-onasanya-b67527206/",
          icon: <FaLinkedinIn />,
        },
      ],
    },
    {
      name: "Fatimilehin Oluwatobiloba",
      role: "Social media Manager",
      image: tobi,
      socials: [
        {
          name: "Instagram",
          link: "https://www.instagram.com/i_am__tobi?igsh=MTY5MWY5b3o4b2FkbA==",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/oluwatobiloba-fatimilehin-176035275?utm_source=share_via&utm_content=profile&utm_medium=member_android",
          icon: <FaLinkedinIn />,
        },
      ],
    },
    {
      name: "Shobogun Sodiq",
      role: "Data Analyst",
      image: sodiq,
      socials: [
        {
          name: "Instagram",
          link: "https://www.instagram.com/shobzy_vibes?igsh=MTB5Y3R4YzNwZmIxNw==",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/shobogun-sodiq-124316216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          icon: <FaLinkedinIn />,
        },
      ],
    },
    {
      name: "Prof. Peter Elias",
      role: "Project Advisor",
      image: elias,
      socials: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/peter-elias-73831743/",
          icon: <FaLinkedinIn />,
        },
      ],
    },
  ];

  // duplicate for seamless loop
  const duplicatedTeam = [...team, ...team];

  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const SPEED = 60; // px per second

  useAnimationFrame((_, delta) => {
    if (isPaused) return;

    const container = containerRef.current;
    if (!container) return;

    const halfWidth = container.scrollWidth / 2;

    let next = x.get() - (SPEED * delta) / 1000;

    if (Math.abs(next) >= halfWidth) {
      next += halfWidth;
    }

    x.set(next);
  });

  return (
    <div className="bg-[#FAFAFA] px-[6%] lg:px-[8%] py-[8%] lg:py-[4.25%] flex flex-col gap-8 lg:gap-11.5 overflow-hidden">
      {/* Title */}
      <div className="flex justify-center">
        <div className="rounded-4xl py-2 lg:py-2.5 px-4 lg:px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281] text-center">
          <Typography sx={{ fontSize: { xs: 14, lg: 16 } }}>
            Our Team
          </Typography>
        </div>
      </div>

      <div className="flex justify-center text-center px-4 lg:px-0">
        <Typography
          fontSize={{ xs: 28, sm: 32, md: 38, lg: 42 }}
          fontWeight={400}
          color="#1A1A1A"
        >
          Meet the Faces Behind Plasticonn <br />{" "}
          <span className="text-[#00C281]">Making Recycling Looks Easy</span>
        </Typography>
      </div>

      <div className="flex justify-center text-center px-4 lg:px-0">
        <Typography
          fontSize={{ xs: 14, sm: 16, md: 18, lg: 20 }}
          fontWeight={300}
          color="#1A1A1A"
        >
          Powerful team trying to make plastic recycling effortless,
          transparent, and rewarding for everyone in the{" "}
          <br className="hidden lg:block" /> ecosystem.
        </Typography>
      </div>

      {/* Infinite scroll */}
      <div className="relative w-full overflow-hidden py-4 lg:py-8">
        <motion.div
          ref={containerRef}
          className="flex gap-10 w-max items-start"
          style={{ x }}
        >
          {duplicatedTeam.map((member, index) => (
            <div
              key={index}
              className="shrink-0 w-72 lg:w-93 group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() =>
                setClickedIndex((prev) => (prev === index ? null : index))
              }
            >
              <div
                className="flex flex-col items-center text-center rounded-[18px] pt-6 lg:pt-9.25"
                style={{ boxShadow: "0px 4px 12px 0px #0A332126" }}
              >
                {/* Profile Image */}
                <div className="rounded-full overflow-hidden mb-4 w-32 h-32 lg:w-50 lg:h-50 transition-all duration-500 group-hover:w-40 group-hover:h-40 lg:group-hover:w-55 lg:group-hover:h-55">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Card with name and role */}
                <div className="w-full py-4 lg:py-6 px-4 lg:px-6 rounded-[18px] mt-8 lg:mt-12 flex flex-col gap-3 lg:gap-4.5 bg-[#A7CBB7] text-black transition-all duration-500 group-hover:bg-[#00C281]">
                  <Typography
                    fontSize={{ xs: 18, lg: 20 }}
                    fontWeight={400}
                    className="mb-2"
                    color="#1A1A1A"
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    fontSize={{ xs: 20, lg: 24 }}
                    fontWeight={400}
                    className="text-[#00C281] group-hover:text-[#FAFAFA] transition-colors duration-500"
                  >
                    {member.role}
                  </Typography>

                  <div
                    className={`${
                      clickedIndex === index ? "flex" : "hidden"
                    } group-hover:flex gap-4 mt-1 justify-center`}
                  >
                    {member.socials.map((item) => (
                      <Tooltip key={item.name} title={item.name}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 border border-white/30 rounded-lg
                     flex items-center justify-center
                     hover:bg-white hover:text-[#053322]
                     transition"
                        >
                          {item.icon}
                        </a>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
