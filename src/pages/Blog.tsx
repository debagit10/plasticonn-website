import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import api from "../utils/axiosInstance";

type Blog = {
  id: string;
  title: string;
  subtitle?: string;
  author: { name: string; role: string; bio: string; initials: string };
  status: "draft" | "published";
  content: ContentBlock[];
  tags: Tag[];
  image?: string;
  imageCaption?: string;
  readTime?: string;
  views?: string;
  publishedAt?: string;
  createdAt: string;
};

type ContentBlock = {
  type: "paragraph" | "heading" | "blockquote";
  text: string;
};

type Tag = {
  label: string;
  color: string;
  bg: string;
};

const Blog = () => {
  //const [liked, setLiked] = useState(false);
  //const [likeCount, setLikeCount] = useState(0);
  //   const [saved, setSaved] = useState(false);
  //   const [followed, setFollowed] = useState(false);
  const [blog, setBlog] = useState<Blog | null>(null);

  const { id } = useParams();

  //   const handleLike = () => {
  //     setLiked((prev) => !prev);
  //     setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  //   };

  const getBlog = async () => {
    const response = await api.get(`/api/blog/${id}`);

    setBlog(response.data.data);
    console.log(response.data);
  };

  useEffect(() => {
    getBlog();
  }, []);

  console.log(blog);

  return (
    <div className="min-h-screen bg-[#FAFAF8] font-['Lora',serif]">
      <div className="fixed w-full z-100 ">
        <Navbar />
      </div>
      {/* Top bar */}
      {/* <div className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-5 py-3 flex items-center justify-between">
          <span className="text-xs tracking-[0.2em] uppercase text-stone-400 font-['DM_Sans',sans-serif]">
            The Collector
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSaved((p) => !p)}
              className={`text-xs font-['DM_Sans',sans-serif] px-3 py-1.5 rounded-full border transition-all ${
                saved
                  ? "border-stone-800 bg-stone-800 text-white"
                  : "border-stone-300 text-stone-500 hover:border-stone-500"
              }`}
            >
              {saved ? "Saved" : "Save article"}
            </button>
          </div>
        </div>
      </div> */}

      {blog ? (
        <main className="max-w-3xl mx-auto px-5  py-30">
          {/* Tags */}
          <div className="flex gap-2 mb-5 flex-wrap">
            {blog.tags.map((tag) => (
              <span
                key={tag.label}
                className="text-xs px-3 py-1 rounded-full font-['DM_Sans',sans-serif] font-medium tracking-wide"
                style={{
                  color: tag.color,
                  background: tag.bg,
                  border: `1px solid ${tag.color}33`,
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-stone-900 mb-4 tracking-tight">
            {blog.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-stone-500 leading-relaxed mb-7 font-['DM_Sans',sans-serif] font-light">
            {blog.subtitle}
          </p>

          {/* Author + meta row */}
          <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-stone-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1D9E75]/10 border border-[#1D9E75]/20 flex items-center justify-center text-sm font-semibold text-[#0F6E56] font-['DM_Sans',sans-serif]">
                {blog.author.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-800 font-['DM_Sans',sans-serif]">
                  {blog.author.name}
                </p>
                <p className="text-xs text-stone-400 font-['DM_Sans',sans-serif]">
                  {blog.author.role}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-stone-400 font-['DM_Sans',sans-serif]">
              <span>{blog.publishedAt}</span>
              <span className="text-stone-200">·</span>
              <span>{blog.readTime}</span>
              <span className="text-stone-200">·</span>
              <span>{blog.views}</span>
            </div>
          </div>

          {/* Hero image */}
          <div className="my-8">
            <div className="rounded-2xl overflow-hidden bg-stone-100 aspect-[16/9]">
              <img
                src={blog.image}
                alt="Hero"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <p className="mt-3 text-xs text-stone-400 text-center italic font-['DM_Sans',sans-serif]">
              {blog.imageCaption}
            </p>
          </div>

          {/* Article content */}
          <article className="space-y-5">
            {blog.content.map((block, i) => {
              if (block.type === "paragraph")
                return (
                  <p
                    key={i}
                    className="text-stone-700 leading-[1.9] text-[17px]"
                  >
                    {block.text}
                  </p>
                );
              if (block.type === "heading")
                return (
                  <h2
                    key={i}
                    className="text-xl font-bold text-stone-900 pt-4 tracking-tight"
                  >
                    {block.text}
                  </h2>
                );
              if (block.type === "blockquote")
                return (
                  <blockquote
                    key={i}
                    className="border-l-2 border-[#1D9E75] pl-5 my-8 text-stone-500 italic text-lg leading-relaxed"
                  >
                    {block.text}
                  </blockquote>
                );
              return null;
            })}
          </article>

          {/* Engagement row */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-stone-200 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              {/* <button
                onClick={handleLike}
                className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full border transition-all font-['DM_Sans',sans-serif] ${
                  liked
                    ? "border-rose-300 bg-rose-50 text-rose-500"
                    : "border-stone-200 text-stone-500 hover:border-stone-300 hover:bg-stone-50"
                }`}
              >
                <svg
                  width="15"
                  height="15"
                  fill={liked ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                {likeCount}
              </button> */}
              {/* <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-stone-200 text-stone-500 hover:border-stone-300 hover:bg-stone-50 transition-all font-['DM_Sans',sans-serif]">
                <svg
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                18
              </button> */}
              <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-stone-200 text-stone-500 hover:border-stone-300 hover:bg-stone-50 transition-all font-['DM_Sans',sans-serif]">
                <svg
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                Share
              </button>
            </div>
            {/* <button
              onClick={() => setSaved((p) => !p)}
              className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full border transition-all font-['DM_Sans',sans-serif] ${
                saved
                  ? "border-stone-700 bg-stone-800 text-white"
                  : "border-stone-200 text-stone-500 hover:border-stone-300 hover:bg-stone-50"
              }`}
            >
              <svg
                width="14"
                height="14"
                fill={saved ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              {saved ? "Saved" : "Save"}
            </button> */}
          </div>

          {/* Author card */}
          <div className="mt-10 p-6 rounded-2xl bg-white border border-stone-100">
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-4 font-['DM_Sans',sans-serif]">
              Written by
            </p>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[#1D9E75]/10 border border-[#1D9E75]/20 flex items-center justify-center text-sm font-bold text-[#0F6E56] font-['DM_Sans',sans-serif] flex-shrink-0">
                {blog.author.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <p className="font-semibold text-stone-900 font-['DM_Sans',sans-serif]">
                      {blog.author.name}
                    </p>
                    <p className="text-xs text-stone-400 mt-0.5 font-['DM_Sans',sans-serif]">
                      {blog.author.role}
                    </p>
                  </div>
                  {/* <button
                    onClick={() => setFollowed((p) => !p)}
                    className={`text-xs px-4 py-1.5 rounded-full border transition-all font-['DM_Sans',sans-serif] flex-shrink-0 ${
                      followed
                        ? "border-[#1D9E75] bg-[#1D9E75] text-white"
                        : "border-stone-300 text-stone-600 hover:border-stone-500"
                    }`}
                  >
                    {followed ? "Following" : "Follow"}
                  </button> */}
                </div>
                <p className="text-sm text-stone-500 mt-3 leading-relaxed font-['DM_Sans',sans-serif]">
                  {blog.author.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Related articles */}
          {/* <div className="mt-12">
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-5 font-['DM_Sans',sans-serif]">
              Related articles
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {blog.related.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-2xl overflow-hidden border border-stone-100 bg-white cursor-pointer hover:border-stone-300 hover:shadow-sm transition-all"
                >
                  <div
                    className="h-24 flex items-center justify-center"
                    style={{ background: item.bg }}
                  />
                  <div className="p-4">
                    <p className="text-sm font-semibold text-stone-800 leading-snug mb-2 group-hover:text-[#1D9E75] transition-colors font-['DM_Sans',sans-serif]">
                      {item.title}
                    </p>
                    <p className="text-xs text-stone-400 font-['DM_Sans',sans-serif]">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </main>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Blog;
