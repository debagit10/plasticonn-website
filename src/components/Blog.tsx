import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { FaRegEye, FaClock } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";

import carousel from "../assets/carousel.png";
import api from "../utils/axiosInstance";

const shortenDate = (dateString: string) => {
  if (!dateString) return "";
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

type BlogItem = {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  publishedAt?: string;
  readTime?: string;
  views?: string;
  tags?: { label: string; color: string; bg: string }[];
  author?: { name: string; role: string; initials: string };
  content?: { type: string; text: string }[];
};

const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setData] = useState<BlogItem[]>([]);

  const getBlogs = async () => {
    const response = await api.get("/api/blog");
    const all: BlogItem[] = Array.isArray(response.data.data)
      ? response.data.data
      : [];
    // only show published blogs on the public page
    setData(all.filter((b: any) => b.status === "published"));
  };

  useEffect(() => {
    getBlogs();
  }, []);

  // derive a short description from the first paragraph block
  const getExcerpt = (blog: BlogItem) => {
    if (!blog.content?.length) return blog.subtitle ?? "";
    const first = blog.content.find((b) => b.type === "paragraph");
    if (!first) return blog.subtitle ?? "";
    return first.text.length > 100
      ? first.text.slice(0, 100) + "…"
      : first.text;
  };

  const extendedBlogs = [...blogs, ...blogs, ...blogs];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // reset index when blogs load
  useEffect(() => {
    if (blogs.length > 0) setCurrentIndex(blogs.length);
  }, [blogs.length]);

  const cardsToShow = isMobile ? 1 : 3;

  const handlePrev = () => setCurrentIndex((prev) => prev - 1);
  const handleNext = () => setCurrentIndex((prev) => prev + 1);
  const goToSlide = (index: number) => setCurrentIndex(blogs.length + index);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => prev + 1),
    onSwipedRight: () => setCurrentIndex((prev) => prev - 1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    if (blogs.length === 0) return;
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

  useEffect(() => {
    if (blogs.length === 0) return;
    const interval = setInterval(
      () => setCurrentIndex((prev) => prev + 1),
      4000,
    );
    return () => clearInterval(interval);
  }, [blogs.length]);

  const getIndicatorIndex = () => currentIndex % (blogs.length || 1);

  if (blogs.length === 0) return null;

  return (
    <div className="bg-white px-[6%] lg:px-[8%] py-[8%] lg:py-[4.25%] flex flex-col gap-8 lg:gap-11.5">
      {/* Title badge */}
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
              className={`flex items-stretch ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
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
                  <div
                    className="bg-[#F8F8F8] rounded-[20px] overflow-hidden duration-300 hover:scale-105 cursor-pointer flex flex-col h-full"
                    onClick={() => navigate(`/blog/${blogItem.id}`)}
                  >
                    {/* Image */}
                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-60 overflow-hidden shrink-0">
                      {blogItem.image ? (
                        <img
                          src={blogItem.image}
                          alt={blogItem.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#E1F5EE] flex items-center justify-center">
                          <span className="text-3xl font-bold text-[#1D9E75] opacity-30">
                            {blogItem.author?.initials ?? "?"}
                          </span>
                        </div>
                      )}

                      {/* Date badge */}
                      {blogItem.publishedAt && (
                        <div className="absolute top-3 lg:top-4 -left-1 bg-white rounded-lg p-2 lg:p-2.5 border-2 border-[#FAFAFA]">
                          <Typography
                            fontSize={{ xs: 12, lg: 14 }}
                            fontWeight={300}
                            color="#1A1A1A"
                            style={{
                              writingMode: "vertical-lr",
                              textOrientation: "mixed",
                            }}
                          >
                            {shortenDate(blogItem.publishedAt)}
                          </Typography>
                        </div>
                      )}

                      {/* Tags */}
                      {blogItem.tags && blogItem.tags.length > 0 && (
                        <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
                          {blogItem.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag.label}
                              className="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
                              style={{
                                color: tag.color,
                                background: tag.bg,
                                border: `1px solid ${tag.color}44`,
                              }}
                            >
                              {tag.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 lg:p-5 flex flex-col gap-2.5 bg-[#EFEFEF] flex-1">
                      {/* Title */}
                      <Typography
                        fontSize={{ xs: 16, sm: 17, lg: 18 }}
                        fontWeight={500}
                        color="#1A1A1A"
                        className="line-clamp-2 leading-snug"
                      >
                        {blogItem.title}
                      </Typography>

                      {/* Excerpt */}
                      <Typography
                        fontSize={{ xs: 13, sm: 14 }}
                        fontWeight={300}
                        color="#666"
                        className="line-clamp-2"
                      >
                        {getExcerpt(blogItem)}
                      </Typography>

                      {/* Divider */}
                      <div className="h-px bg-[#D9D9D9] my-0.5" />

                      {/* Author + stats row */}
                      <div className="flex items-center justify-between gap-2">
                        {/* Author */}
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-7 h-7 rounded-full bg-[#1D9E75]/15 border border-[#1D9E75]/25 flex items-center justify-center shrink-0">
                            <span className="text-[10px] font-semibold text-[#0F6E56]">
                              {blogItem.author?.initials ?? "?"}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className="text-[12px] font-medium text-[#1A1A1A] truncate leading-tight">
                              {blogItem.author?.name ?? "Unknown"}
                            </p>
                            <p className="text-[11px] text-[#9CA3AF] truncate leading-tight">
                              {blogItem.author?.role ?? ""}
                            </p>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-2.5 shrink-0">
                          {blogItem.readTime && (
                            <span className="flex items-center gap-1 text-[11px] text-[#9CA3AF]">
                              <FaClock size={10} />
                              {blogItem.readTime}
                            </span>
                          )}
                          {blogItem.views && (
                            <span className="flex items-center gap-1 text-[11px] text-[#9CA3AF]">
                              <FaRegEye size={11} />
                              {blogItem.views}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Read more */}
                      <div className="flex justify-end mt-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/blog/${blogItem.id}`);
                          }}
                          className="bg-[#00C281] hover:bg-[#00A86B] text-white rounded-xl p-2.5 transition-colors duration-300"
                        >
                          <FiArrowUpRight className="w-4 h-4" />
                        </button>
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
