import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { BsImages } from "react-icons/bs";
import api from "../utils/axiosInstance";
import Navbar from "../components/Navbar";

type GalleryImage = {
  id: string;
  image: { public_id: string; url: string };
  createdAt: string;
  event: string;
};

type GroupedEvent = {
  event: string;
  images: GalleryImage[];
};

// ── group images by event name ─────────────────────────────────────────────
const groupByEvent = (images: GalleryImage[]): GroupedEvent[] => {
  const map = new Map<string, GalleryImage[]>();
  images.forEach((img) => {
    const key = img.event ?? "Uncategorised";
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(img);
  });
  return Array.from(map.entries()).map(([event, imgs]) => ({
    event,
    images: imgs,
  }));
};

// ── lightbox ───────────────────────────────────────────────────────────────
type LightboxProps = {
  images: GalleryImage[];
  startIndex: number;
  event: string;
  onClose: () => void;
};

const Lightbox = ({ images, startIndex, event, onClose }: LightboxProps) => {
  const [idx, setIdx] = useState(startIndex);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  // keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const current = images[idx];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      {/* inner — stop propagation so clicking image doesn't close */}
      <div
        className="relative flex flex-col items-center w-full max-w-4xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* top bar */}
        <div className="flex items-center justify-between w-full mb-3">
          <div>
            <p className="text-white font-medium text-sm">{event}</p>
            <p className="text-white/50 text-xs">
              {idx + 1} / {images.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <IoClose size={26} />
          </button>
        </div>

        {/* image */}
        <div
          className="relative w-full flex items-center justify-center"
          style={{ maxHeight: "75vh" }}
        >
          <img
            src={current.image.url}
            alt={event}
            className="max-w-full max-h-[75vh] object-contain rounded-xl"
          />

          {/* prev */}
          <button
            onClick={prev}
            className="absolute left-0 -translate-x-1 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-all"
            aria-label="Previous"
          >
            <IoChevronBack size={22} />
          </button>

          {/* next */}
          <button
            onClick={next}
            className="absolute right-0 translate-x-1 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-all"
            aria-label="Next"
          >
            <IoChevronForward size={22} />
          </button>
        </div>

        {/* thumbnail strip */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-1 max-w-full">
          {images.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setIdx(i)}
              className="shrink-0 rounded-lg overflow-hidden transition-all"
              style={{
                width: 56,
                height: 56,
                outline:
                  i === idx ? "2px solid #00C281" : "2px solid transparent",
                outlineOffset: 2,
                opacity: i === idx ? 1 : 0.5,
              }}
            >
              <img
                src={img.image.url}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── main page ──────────────────────────────────────────────────────────────
const GalleryPage = () => {
  const [groups, setGroups] = useState<GroupedEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeEvent, setActiveEvent] = useState<string>("All");
  const [lightbox, setLightbox] = useState<{
    images: GalleryImage[];
    index: number;
    event: string;
  } | null>(null);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/gallery");
      const data: GalleryImage[] = Array.isArray(res.data.data)
        ? res.data.data
        : [];
      setGroups(groupByEvent(data));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const allImages = groups.flatMap((g) => g.images);
  const eventNames = ["All", ...groups.map((g) => g.event)];

  const activeGroups =
    activeEvent === "All"
      ? groups
      : groups.filter((g) => g.event === activeEvent);

  const openLightbox = (
    images: GalleryImage[],
    index: number,
    event: string,
  ) => {
    setLightbox({ images, index, event });
  };

  // ── skeleton ──
  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] px-[6%] lg:px-[8%] py-12 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse" />
          <div className="w-72 h-10 rounded-xl bg-gray-200 animate-pulse" />
          <div className="w-48 h-6 rounded-xl bg-gray-200 animate-pulse" />
        </div>
        <div className="flex gap-2 justify-center flex-wrap">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-24 h-8 rounded-full bg-gray-200 animate-pulse"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  // ── empty ──
  if (!loading && allImages.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center gap-4 px-6 text-center">
        <BsImages size={48} className="text-gray-300" />
        <Typography fontSize={20} fontWeight={400} color="#1A1A1A">
          No gallery images yet
        </Typography>
        <Typography fontSize={14} color="#9CA3AF">
          Images will appear here once they are uploaded.
        </Typography>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] px-[6%] lg:px-[8%] py-12 flex flex-col gap-10">
      {/* ── header ── */}
      <div className="fixed w-full z-100 ">
        <Navbar />
      </div>
      <div className="flex flex-col items-center text-center gap-4 pt-20">
        <div className="rounded-full py-2 px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281]">
          <Typography sx={{ fontSize: { xs: 14, lg: 16 } }}>
            Our Gallery
          </Typography>
        </div>

        <Typography
          fontSize={{ xs: 28, sm: 34, lg: 42 }}
          fontWeight={400}
          color="#1A1A1A"
        >
          See Our Stories in Pictures <br />
          <span className="text-[#00C281]">With Explored Events so Far</span>
        </Typography>

        <Typography
          fontSize={{ xs: 14, lg: 16 }}
          fontWeight={300}
          color="#666"
          maxWidth={580}
        >
          Some of our recorded events, awards, trainings &amp; bootcamps by the
          Plasticonn team. From collection to recycling, see the real impact of
          our community in action.
        </Typography>
      </div>

      {/* ── event filter tabs ── */}
      <div className="flex gap-2 flex-wrap justify-center">
        {eventNames.map((name) => (
          <button
            key={name}
            onClick={() => setActiveEvent(name)}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all"
            style={{
              background: activeEvent === name ? "#00C281" : "white",
              color: activeEvent === name ? "white" : "#555",
              border:
                activeEvent === name
                  ? "1px solid #00C281"
                  : "1px solid #E5E7EB",
            }}
          >
            {name}
            <span className="ml-1.5 text-xs" style={{ opacity: 0.75 }}>
              (
              {name === "All"
                ? allImages.length
                : (groups.find((g) => g.event === name)?.images.length ?? 0)}
              )
            </span>
          </button>
        ))}
      </div>

      {/* ── grouped sections ── */}
      <div className="flex flex-col gap-12">
        {activeGroups.map((group) => (
          <div key={group.event} className="flex flex-col gap-4">
            {/* event heading */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <Typography
                  fontSize={{ xs: 18, lg: 22 }}
                  fontWeight={500}
                  color="#1A1A1A"
                >
                  {group.event}
                </Typography>
                <Typography fontSize={13} color="#9CA3AF">
                  {group.images.length} photo
                  {group.images.length !== 1 ? "s" : ""}
                </Typography>
              </div>
              <div className="flex-1 h-px bg-gray-200 ml-2" />
            </div>

            {/* masonry-style grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
              {group.images.map((img, i) => (
                <div
                  key={img.id}
                  onClick={() => openLightbox(group.images, i, group.event)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-100"
                  style={{
                    // every 5th image in the grid spans 2 columns for visual variety
                    gridColumn: i % 7 === 0 && i !== 0 ? "span 2" : undefined,
                    aspectRatio: i % 7 === 0 && i !== 0 ? "2 / 1" : "1 / 1",
                  }}
                >
                  <img
                    src={img.image.url}
                    alt={group.event}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <BsImages size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── lightbox ── */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          event={lightbox.event}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
};

export default GalleryPage;
