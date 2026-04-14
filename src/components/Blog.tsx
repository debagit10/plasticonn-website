import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { useSwipeable } from "react-swipeable";

import carousel from "../assets/carousel.png";
import blog from "../images/blog.jpg";

const shortenDate = (dateString: string) => {
  const monthMap: { [key: string]: string } = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "Jun",
    July: "Jul",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec",
  };

  return dateString.replace(
    /January|February|March|April|May|June|July|August|September|October|November|December/g,
    (match) => monthMap[match],
  );
};

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      date: "January 16, 2026",
      title: "Plasticonn Youths Mobilization Team",
      description:
        "Pleased to see how committed our mobilized youths trying to make the community and environment a safe place.",
      image: blog,
      link: "/blog/1",
    },
    {
      id: 2,
      date: "February 10, 2026",
      title: "Community Clean-up Initiative",
      description:
        "Join us as we take action to create cleaner, greener neighborhoods for everyone.",
      image: blog,
      link: "/blog/2",
    },
    {
      id: 3,
      date: "March 5, 2026",
      title: "Environmental Awareness Campaign",
      description:
        "Educating the next generation about sustainable practices and environmental protection.",
      image: blog,
      link: "/blog/3",
    },
    {
      id: 4,
      date: "April 12, 2026",
      title: "Youth Leadership Training",
      description:
        "Empowering young leaders to drive change in their communities and beyond.",
      image: blog,
      link: "/blog/4",
    },
  ];

  const extendedBlogs = [...blogs, ...blogs, ...blogs];

  const [currentIndex, setCurrentIndex] = useState(blogs.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile (same pattern as Team)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardsToShow = isMobile ? 1 : 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(blogs.length + index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => prev + 1),
    onSwipedRight: () => setCurrentIndex((prev) => prev - 1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Infinite loop logic
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(blogs.length);
      }, 500);
    } else if (currentIndex === extendedBlogs.length - cardsToShow) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(blogs.length);
      }, 500);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, blogs.length, extendedBlogs.length, cardsToShow]);

  // Autoplay (works on mobile too)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getIndicatorIndex = () => {
    return currentIndex % blogs.length;
  };

  return (
    <div className="bg-white px-[6%] lg:px-[8%] py-[8%] lg:py-[4.25%] flex flex-col gap-8 lg:gap-11.5">
      {/* Title */}
      <div className="flex justify-center">
        <div className="rounded-4xl py-2 lg:py-2.5 px-4 lg:px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281] text-center">
          <Typography sx={{ fontSize: { xs: 14, lg: 16 } }}>
            Our Blog
          </Typography>
        </div>
      </div>

      {/* Heading */}
      <div className="flex justify-center text-center px-4 lg:px-0">
        <Typography
          fontSize={{ xs: 28, sm: 32, md: 38, lg: 42 }}
          fontWeight={400}
          color="#1A1A1A"
        >
          Latest Blog Post & <br />
          <span className="text-[#00C281]">Articles Highlighted</span>
        </Typography>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="relative">
          <div className="overflow-hidden py-4 lg:py-8" {...swipeHandlers}>
            <div
              className={`flex items-stretch ${
                isTransitioning
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{
                transform: isMobile
                  ? `translateX(-${currentIndex * 100}%)`
                  : `translateX(-${currentIndex * 33.333}%)`,
                touchAction: "pan-y",
              }}
            >
              {extendedBlogs.map((blogItem, index) => (
                <div
                  key={index}
                  className="shrink-0 px-2 lg:px-4"
                  style={{ width: isMobile ? "100%" : "33.333%" }}
                >
                  <div className="bg-[#F8F8F8] rounded-[20px] overflow-hidden duration-300 hover:scale-105">
                    {/* Image */}
                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-70 overflow-hidden">
                      <img
                        src={blogItem.image}
                        alt={blogItem.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />

                      {/* Date Badge */}
                      <div className="absolute top-3 lg:top-4 -left-1 bg-white rounded-lg p-2 lg:p-2.5 border-2 border-[#FAFAFA]">
                        <Typography
                          fontSize={{ xs: 14, lg: 18 }}
                          fontWeight={300}
                          color="#1A1A1A"
                          style={{
                            writingMode: "vertical-lr",
                            textOrientation: "mixed",
                          }}
                        >
                          {shortenDate(blogItem.date)}
                        </Typography>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 lg:p-6 flex flex-col gap-2 lg:gap-3 bg-[#EFEFEF]">
                      <Typography
                        fontSize={{ xs: 16, sm: 18, lg: 20 }}
                        fontWeight={400}
                        color="#1A1A1A"
                        className="line-clamp-2"
                      >
                        {blogItem.title}
                      </Typography>

                      <Typography
                        fontSize={{ xs: 14, sm: 16, lg: 18 }}
                        fontWeight={300}
                        color="#666"
                        className="line-clamp-3"
                      >
                        {blogItem.description}
                      </Typography>

                      <div className="flex justify-end mt-2">
                        <a
                          href={blogItem.link}
                          className="bg-[#00C281] hover:bg-[#00A86B] text-white rounded-xl p-3 transition-colors duration-300"
                        >
                          <FiArrowUpRight className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
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
        <div className="flex justify-center gap-2 mt-4 lg:mt-6 items-center">
          {blogs.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)}>
              {getIndicatorIndex() === index ? (
                <img
                  src={carousel}
                  alt="Active indicator"
                  className="w-6 h-6 lg:w-8 lg:h-8"
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

export default Blogs;
