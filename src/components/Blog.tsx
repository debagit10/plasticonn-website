import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
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

  const cardsToShow = 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(blogs.length + index);
  };

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
  }, [currentIndex, blogs.length, extendedBlogs.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getIndicatorIndex = () => {
    const normalizedIndex = currentIndex % blogs.length;
    return normalizedIndex;
  };

  return (
    <div className="bg-white px-[6%] lg:px-[8%] py-[8%] lg:py-[4.25%] flex flex-col gap-8 lg:gap-11.5">
      <div className="flex justify-center">
        <div className="rounded-4xl py-2 lg:py-2.5 px-4 lg:px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281] text-center">
          <Typography sx={{ fontSize: { xs: 14, lg: 16 } }}>
            Our Blog
          </Typography>
        </div>
      </div>

      <div className="flex justify-center text-center px-4 lg:px-0">
        <Typography
          fontSize={{ xs: 28, sm: 32, md: 38, lg: 42 }}
          fontWeight={400}
          color="#1A1A1A"
        >
          Latest Blog Post & <br />{" "}
          <span className="text-[#00C281]">Articles Highlighted</span>
        </Typography>
      </div>

      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className={`flex gap-4 lg:gap-6 ${
                isTransitioning
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow + 2)}%)`,
              }}
            >
              {extendedBlogs.map((blog, index) => (
                <div key={index} className="shrink-0 w-full sm:w-1/2 lg:w-1/3">
                  <div className="bg-[#F8F8F8] rounded-[20px] overflow-hidden duration-300 hover:scale-105">
                    {/* Blog Image */}
                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-70 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover rounded-b-[20px]"
                      />
                      {/* Date Badge - Vertical */}
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
                          {shortenDate(blog.date)}
                        </Typography>
                      </div>
                    </div>

                    {/* Blog Content */}
                    <div className="p-4 lg:p-6 flex flex-col gap-2 lg:gap-3 bg-[#EFEFEF]">
                      <Typography
                        fontSize={{ xs: 16, sm: 18, lg: 20 }}
                        fontWeight={400}
                        color="#1A1A1A"
                        className="line-clamp-2"
                      >
                        {blog.title}
                      </Typography>

                      <Typography
                        fontSize={{ xs: 14, sm: 16, lg: 18 }}
                        fontWeight={300}
                        color="#666"
                        className="line-clamp-3"
                      >
                        {blog.description}
                      </Typography>

                      {/* Arrow Button */}
                      <div className="flex justify-end mt-1 lg:mt-2">
                        <a
                          href={blog.link}
                          className="bg-[#00C281] hover:bg-[#00A86B] text-white rounded-xl p-2.5 lg:p-3 transition-colors duration-300"
                          aria-label="Read more"
                        >
                          <FiArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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

        <div className="flex justify-center gap-2 mt-4 lg:mt-6 items-center">
          {blogs.map((_, index) => (
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
                  className="w-6 h-6 lg:w-7.5 lg:h-7.5"
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

export default Blogs;
