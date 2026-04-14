import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useSwipeable } from "react-swipeable";

import unilag from "../images/unilag.jpg";
import unicef from "../images/unicef.png";
import mappers from "../images/mappers.jpg";
import goodwall from "../images/goodwall.png";
import carousel from "../assets/carousel.png";

const Partners = () => {
  const partners = [
    { name: "UNILAG", image: unilag },
    { name: "UNICEF", image: unicef },
    { name: "Youth Mappers", image: mappers },
    { name: "GoodWall", image: goodwall },
  ];

  const extendedPartners = [...partners, ...partners, ...partners];

  const [currentIndex, setCurrentIndex] = useState(partners.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsToShow =
    screenSize === "mobile" ? 1 : screenSize === "tablet" ? 2 : 3;

  const handlePrev = () => setCurrentIndex((prev) => prev - 1);
  const handleNext = () => setCurrentIndex((prev) => prev + 1);

  const goToSlide = (index: number) => {
    setCurrentIndex(partners.length + index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => prev + 1),
    onSwipedRight: () => setCurrentIndex((prev) => prev - 1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Infinite loop handling
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(partners.length);
      }, 500);
    } else if (currentIndex === extendedPartners.length - cardsToShow) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(partners.length);
      }, 500);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, cardsToShow, extendedPartners.length, partners.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getIndicatorIndex = () => currentIndex % partners.length;

  const isCenter = (index: number) => {
    if (screenSize === "mobile") return index === currentIndex;
    if (screenSize === "tablet") return index === currentIndex + 1;
    return index === currentIndex + 1;
  };

  return (
    <div className="bg-[#F1F1F1] px-[5%] lg:px-[8%] py-[8%] lg:py-[4.25%] flex flex-col gap-8 lg:gap-11.5">
      {/* Title */}
      <div className="flex justify-center">
        <div className="rounded-4xl py-2.5 px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281] text-center">
          <Typography>Our Partners</Typography>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="relative">
          <div className="overflow-hidden py-6" {...swipeHandlers}>
            <div
              className={`flex items-center ${
                isTransitioning
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{
                transform:
                  screenSize === "mobile"
                    ? `translateX(-${currentIndex * 100}%)`
                    : screenSize === "tablet"
                      ? `translateX(-${currentIndex * 50}%)`
                      : `translateX(-${currentIndex * 33.333}%)`,
                touchAction: "pan-y",
              }}
            >
              {extendedPartners.map((partner, index) => (
                <div
                  key={index}
                  className="shrink-0 px-3"
                  style={{
                    width:
                      screenSize === "mobile"
                        ? "100%"
                        : screenSize === "tablet"
                          ? "50%"
                          : "33.333%",
                  }}
                >
                  <div
                    className={`bg-[#FAFAFA] py-8 px-6 lg:px-8 rounded-[18px] shadow-lg flex flex-col gap-6 text-center transition-all duration-500 ${
                      isCenter(index)
                        ? "scale-105 lg:scale-110"
                        : "scale-95 opacity-80"
                    }`}
                  >
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="mx-auto h-48 sm:h-60 lg:h-64 object-contain"
                      loading="lazy"
                    />

                    <Typography fontSize={20} fontWeight={400} color="#00C281">
                      {partner.name}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows (desktop only) */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-md hover:bg-gray-50 rounded-full p-2 hidden lg:flex items-center justify-center transition-all z-10"
          >
            <IoChevronBack className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md hover:bg-gray-50 rounded-full p-2 hidden lg:flex items-center justify-center transition-all z-10"
          >
            <IoChevronForward className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6 items-center">
          {partners.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)}>
              {getIndicatorIndex() === index ? (
                <img
                  src={carousel}
                  alt="Active"
                  className="w-7 h-7"
                  loading="lazy"
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

export default Partners;
