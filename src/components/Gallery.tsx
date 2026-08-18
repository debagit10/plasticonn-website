import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useSwipeable } from "react-swipeable";
import api from "../utils/axiosInstance";
// import carousel from "../assets/carousel.png";
import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type GalleryImage = {
  id: string;
  image: { public_id: string; url: string };
  createdAt: string;
  event: string;
};

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  const fetchImages = async () => {
    const res = await api.get("/api/gallery");

    // console.log(res.data.data);
    setImages(res.data.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (images.length > 0) setCurrentIndex(images.length);
  }, [images.length]);

  const cardsToShow = isMobile ? 1 : 3;
  const extendedImages = [...images, ...images, ...images];

  const handlePrev = () => setCurrentIndex((p) => p - 1);
  const handleNext = () => setCurrentIndex((p) => p + 1);
  //const goToSlide = (i: number) => setCurrentIndex(images.length + i);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((p) => p + 1),
    onSwipedRight: () => setCurrentIndex((p) => p - 1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    if (images.length === 0) return;
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length);
      }, 500);
    } else if (currentIndex === extendedImages.length - cardsToShow) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length);
      }, 500);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, images.length, extendedImages.length, cardsToShow]);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => setCurrentIndex((p) => p + 1), 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  //const getIndicatorIndex = () => currentIndex % (images.length || 1);

  if (images.length === 0) return null;

  return (
    <div className="bg-[#FAFAFA] px-[6%] lg:px-[8%] py-[8%] lg:py-[4.25%] flex flex-col gap-8 lg:gap-11.5">
      {/* Title badge */}
      <div className="flex justify-center">
        <div className="rounded-4xl py-2 lg:py-2.5 px-4 lg:px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281] text-center">
          <Typography sx={{ fontSize: { xs: 14, lg: 16 } }}>
            Our Gallery
          </Typography>
        </div>
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center justify-center text-center px-4 lg:px-0 gap-3">
        <Typography
          fontSize={{ xs: 28, sm: 32, md: 38, lg: 42 }}
          fontWeight={400}
          color="#1A1A1A"
        >
          See Our Stories in Pictures <br />
          <span className="text-[#00C281]">With Explored Events so Far</span>
        </Typography>
        <Typography
          fontSize={{ xs: 14, sm: 15, lg: 16 }}
          fontWeight={300}
          color="#666"
          maxWidth={600}
        >
          Some of our recorded events, awards, trainings &amp; bootcamps by the
          Plasticonn team. From collection to recycling, see the real impact of
          our community in action.
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
              {extendedImages.map((item, index) => (
                <div
                  key={index}
                  className="shrink-0 px-2 lg:px-4"
                  style={{ width: isMobile ? "100%" : "33.333%" }}
                >
                  <div className="rounded-[20px] overflow-hidden duration-300 hover:scale-105 cursor-pointer">
                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden">
                      {item.image ? (
                        <img
                          src={item.image.url}
                          alt={item.event ?? "Gallery image"}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#E1F5EE] flex items-center justify-center">
                          <span className="text-4xl text-[#1D9E75] opacity-30">
                            ?
                          </span>
                        </div>
                      )}

                      {/* dark gradient overlay at bottom */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
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

        <div
          className="group relative inline-flex cursor-pointer items-center gap-2 text-[#1D9E75] duration-300"
          onClick={() => navigate("/gallery")}
        >
          <Typography>See more</Typography>
          <MdArrowRightAlt />

          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00C281] transition-all duration-300 group-hover:w-full"></span>
        </div>

        {/* Indicators */}
        {/* <div className="flex flex-wrap justify-center gap-2 mt-4 lg:mt-6 items-center px-4 max-w-full">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="shrink-0"
            >
              {getIndicatorIndex() === index ? (
                <img
                  src={carousel}
                  alt="Active indicator"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                  loading="lazy"
                />
              ) : (
                <div className="w-3 h-3 rounded-full bg-gray-400 shrink-0" />
              )}
            </button>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Gallery;
