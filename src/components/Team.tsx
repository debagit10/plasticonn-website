import { useState, useEffect } from "react";
import { Tooltip, Typography } from "@mui/material";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import tobi from "../assets/team/Tobi.jpg";
import sodiq from "../assets/team/sodiq.jpg";
import elias from "../assets/team/Peter Elias.jpg";
import toyin from "../assets/team/oluwatoyin.jpeg";
import moyo from "../assets/team/Moyo.jpeg";
import demilade from "../assets/team/demilade.jpg";
import aliya from "../assets/team/Aliya.jpg";
import carousel from "../assets/carousel.png";
import { FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import { useSwipeable } from "react-swipeable";

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

  // Duplicate team for infinite loop effect
  const extendedTeam = [...team, ...team, ...team];

  const [currentIndex, setCurrentIndex] = useState(team.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardsToShow = isMobile ? 1 : 3; // 1 card on mobile, 3 on desktop

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(team.length + index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prev) => prev + 1);
    },
    onSwipedRight: () => {
      setCurrentIndex((prev) => prev - 1);
    },
    preventScrollOnSwipe: true,
    trackMouse: true, // allows dragging with mouse too (optional)
  });

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(team.length);
      }, 500);
    } else if (currentIndex === extendedTeam.length - cardsToShow) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(team.length);
      }, 500);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, team.length, extendedTeam.length, cardsToShow]);

  // Autoscroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Calculate the actual index for indicators
  const getIndicatorIndex = () => {
    const normalizedIndex = currentIndex % team.length;
    return normalizedIndex;
  };

  // Check if a card is in the center position
  const isCenter = (index: number) => {
    if (isMobile) {
      return index === currentIndex;
    }
    return index === currentIndex + 1;
  };

  return (
    <div className="bg-[#FAFAFA] px-[6%] lg:px-[8%] py-[8%] lg:py-[4.25%] flex flex-col gap-8 lg:gap-11.5">
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

      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Container */}
          <div className="overflow-hidden py-4 lg:py-8" {...swipeHandlers}>
            <div
              className={`flex gap-0 lg:gap-10 items-center ${
                isTransitioning
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{
                transform: isMobile
                  ? `translateX(-${currentIndex * 100}%)`
                  : `translateX(-${currentIndex * 33.333}%)`,
              }}
            >
              {extendedTeam.map((member, index) => (
                <div
                  key={index}
                  className="shrink-0"
                  style={{ width: isMobile ? "100%" : "auto" }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div
                    className={`flex flex-col items-center text-center transition-all duration-500 rounded-[18px] pt-6 lg:pt-9.25 ${
                      isMobile ? "w-full" : "w-93"
                    } ${
                      isCenter(index) ? "scale-105 lg:scale-110" : "scale-100"
                    }`}
                    style={{
                      boxShadow: "0px 4px 12px 0px #0A332126",
                    }}
                  >
                    {/* Profile Image */}
                    <div
                      className={`rounded-full overflow-hidden mb-4 transition-all duration-500 ${
                        isCenter(index)
                          ? "w-40 h-40 lg:w-55 lg:h-55"
                          : "w-32 h-32 lg:w-50 lg:h-50"
                      }`}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Card with name and role */}
                    <div
                      className={`w-full py-4 lg:py-6 px-4 lg:px-6 rounded-[18px] transition-all duration-500 mt-8 lg:mt-12 flex flex-col gap-3 lg:gap-4.5 ${
                        isCenter(index)
                          ? "bg-[#00C281] text-black"
                          : "bg-[#A7CBB7] text-[black]"
                      }`}
                    >
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
                        color={`${isCenter(index) ? "#FAFAFA" : "#00C281"}`}
                      >
                        {member.role}
                      </Typography>

                      {isCenter(index) && (
                        <div className="flex gap-4 mt-1 justify-center">
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
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-md hover:bg-gray-50 rounded-full p-2 hidden lg:flex items-center justify-center transition-all z-10"
            aria-label="Previous slide"
          >
            <IoChevronBack className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md hover:bg-gray-50 rounded-full p-2 hidden lg:flex items-center justify-center transition-all z-10"
            aria-label="Next slide"
          >
            <IoChevronForward className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4 lg:mt-6 items-center">
          {team.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all duration-300"
              aria-label={`Go to slide ${index + 1}`}
            >
              {getIndicatorIndex() === index ? (
                <img
                  src={carousel}
                  alt="Active indicator"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
              ) : (
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-gray-400" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
