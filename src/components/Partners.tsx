import { Typography } from "@mui/material";
import unilag from "../images/unilag.jpg";
import unicef from "../images/unicef.png";
import mappers from "../images/mappers.jpg";
import goodwall from "../images/goodwall.png";
import carousel from "../assets/carousel.png";
import { useSwipeable } from "react-swipeable";

import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Partners = () => {
  const partners = [
    { name: "UNILAG", image: unilag },
    { name: "UNICEF", image: unicef },
    { name: "Youth Mappers", image: mappers },
    { name: "GoodWall", image: goodwall },
  ];

  const extendedPartners = [...partners, ...partners, ...partners];

  const getCardsToShow = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop (unchanged)
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());
  const [currentIndex, setCurrentIndex] = useState(partners.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(partners.length + index);
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

  // Handle infinite looping
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
  }, [currentIndex, partners.length, extendedPartners.length, cardsToShow]);

  // Auto slide (desktop & tablet only)
  useEffect(() => {
    if (cardsToShow === 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [cardsToShow]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getIndicatorIndex = () => {
    return currentIndex % partners.length;
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
          <div className="overflow-hidden" {...swipeHandlers}>
            <div
              className={`flex gap-6 ${
                isTransitioning
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
              }}
            >
              {extendedPartners.map((partner, index) => (
                <div key={index} className="shrink-0 w-full sm:w-1/2 lg:w-1/3">
                  <div className="bg-[#FAFAFA] py-8 px-6 lg:px-8.5 rounded-[18px] shadow-lg flex flex-col gap-6.5 text-center">
                    <img
                      src={partner.image}
                      alt={`${partner.name} logo`}
                      className="mx-auto h-48 sm:h-60 lg:h-70.5 w-55 sm:w-65 lg:w-[288px] object-contain"
                    />

                    <Typography fontSize={20} fontWeight={400} color="#00C281">
                      {partner.name}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows (desktop only – unchanged) */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-md hover:bg-gray-50 rounded-full p-2 hidden lg:flex items-center justify-center transition-all"
            aria-label="Previous slide"
          >
            <IoChevronBack className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md hover:bg-gray-50 rounded-full p-2 hidden lg:flex items-center justify-center transition-all"
            aria-label="Next slide"
          >
            <IoChevronForward className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6 items-center">
          {partners.map((_, index) => (
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
                  className="w-7.5 h-7.5"
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
