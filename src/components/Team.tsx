import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import unilag from "../images/unilag.jpg";
import unicef from "../images/unicef.png";
import mappers from "../images/mappers.jpg";
import goodwall from "../images/goodwall.png";
import carousel from "../assets/carousel.png";

const Team = () => {
  const team = [
    {
      name: "Elias",
      role: "Insert role or position here!",
      image: unilag,
    },
    {
      name: "Oluwademilade Onasanya",
      role: "Insert role or position here!",
      image: unicef,
    },
    {
      name: "Imisioluwa Aliya",
      role: "Insert role or position here!",
      image: mappers,
    },
    {
      name: "Oluwatoyin Odulana",
      role: "Insert role or position here!",
      image: goodwall,
    },
    {
      name: "Sodiq",
      role: "Insert role or position here!",
      image: goodwall,
    },
  ];

  // Duplicate team for infinite loop effect
  const extendedTeam = [...team, ...team, ...team];

  const [currentIndex, setCurrentIndex] = useState(team.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const cardsToShow = 3; // Number of cards visible on lg screens

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(team.length + index);
  };

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
  }, [currentIndex, team.length, extendedTeam.length]);

  // Autoscroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Calculate the actual index for indicators
  const getIndicatorIndex = () => {
    const normalizedIndex = currentIndex % team.length;
    return normalizedIndex;
  };

  // Check if a card is in the center position
  const isCenter = (index: number) => {
    return index === currentIndex + 1;
  };

  return (
    <div className="bg-[#FAFAFA] px-[8%] py-[4.25%] flex flex-col gap-11.5">
      <div className="flex justify-center">
        <div className="rounded-4xl py-2.5 px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281] text-center">
          <Typography>Our Team</Typography>
        </div>
      </div>

      <div className="flex justify-center text-center">
        <Typography fontSize={42} fontWeight={400} color="#1A1A1A">
          Meet the Faces Behind Plasticonn <br />{" "}
          <span className="text-[#00C281]">Making Recycling Looks Easy</span>
        </Typography>
      </div>

      <div className="flex justify-center text-center">
        <Typography fontSize={26} fontWeight={300} color="#1A1A1A">
          Powerful team trying to make plastic recycling effortless,
          transparent, and rewarding for everyone in the <br /> ecosystem.
        </Typography>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Container */}
          <div className="overflow-hidden py-8">
            <div
              className={`flex gap-10 items-center ${
                isTransitioning
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${currentIndex * 33.333}%)`,
              }}
            >
              {extendedTeam.map((member, index) => (
                <div key={index} className="">
                  <div
                    className={`flex flex-col items-center text-center transition-all duration-500 rounded-[18px] w-93  pt-9.25 ${
                      isCenter(index) ? "scale-110" : "scale-100"
                    }`}
                    style={{
                      boxShadow: "0px 4px 12px 0px #0A332126",
                    }}
                  >
                    {/* Profile Image */}
                    <div
                      className={`rounded-full overflow-hidden mb-4 transition-all duration-500  ${
                        isCenter(index) ? "w-55 h-55" : "w-50 h-50"
                      }`}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Card with name and role */}
                    <div
                      className={`w-full py-6 px-6 rounded-[18px] transition-all duration-500 mt-12 flex flex-col gap-4.5 ${
                        isCenter(index)
                          ? "bg-[#00C281] text-black"
                          : "bg-[#A7CBB7] text-[black]"
                      }`}
                    >
                      <Typography
                        fontSize={26}
                        fontWeight={400}
                        className="mb-2"
                        color="#1A1A1A"
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        fontSize={24}
                        fontWeight={400}
                        color={`${isCenter(index) ? "#FAFAFA" : "#00C281"}`}
                      >
                        {member.role}
                      </Typography>
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
        <div className="flex justify-center gap-2 mt-6 items-center">
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
                  className="w-8 h-8"
                />
              ) : (
                <div className="w-3 h-3 rounded-full bg-gray-400" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
