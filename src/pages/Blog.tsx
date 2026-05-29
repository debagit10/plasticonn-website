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

// ── skeleton primitives ────────────────────────────────────────────────────

const Sk = ({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={`animate-pulse bg-stone-200 rounded-lg ${className}`}
    style={style}
  />
);

const BlogSkeleton = () => (
  <main className="max-w-3xl mx-auto px-5 py-30">
    {/* tags */}
    <div className="flex gap-2 mb-5">
      <Sk className="w-20 h-6 rounded-full" />
      <Sk className="w-24 h-6 rounded-full" />
    </div>

    {/* title */}
    <div className="flex flex-col gap-3 mb-4">
      <Sk className="w-full h-10" />
      <Sk className="w-4/5 h-10" />
    </div>

    {/* subtitle */}
    <div className="flex flex-col gap-2 mb-7">
      <Sk className="w-full h-5" />
      <Sk className="w-3/4 h-5" />
    </div>

    {/* author + meta row */}
    <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-stone-200">
      <div className="flex items-center gap-3">
        <Sk className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-1.5">
          <Sk className="w-28 h-4" />
          <Sk className="w-20 h-3" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Sk className="w-24 h-3" />
        <Sk className="w-16 h-3" />
        <Sk className="w-16 h-3" />
      </div>
    </div>

    {/* hero image */}
    <div className="my-8">
      <Sk className="w-full aspect-video rounded-2xl" />
      <Sk className="w-48 h-3 mx-auto mt-3" />
    </div>

    {/* article body — mix of paragraph, heading, blockquote skeletons */}
    <div className="space-y-5">
      {/* paragraph */}
      <div className="flex flex-col gap-2">
        <Sk className="w-full h-4" />
        <Sk className="w-full h-4" />
        <Sk className="w-5/6 h-4" />
      </div>

      {/* heading */}
      <Sk className="w-2/5 h-6 mt-4" />

      {/* paragraph */}
      <div className="flex flex-col gap-2">
        <Sk className="w-full h-4" />
        <Sk className="w-full h-4" />
        <Sk className="w-4/5 h-4" />
        <Sk className="w-full h-4" />
      </div>

      {/* blockquote */}
      <div className="flex gap-4 my-8">
        <div className="w-0.5 bg-stone-200 rounded-full shrink-0" />
        <div className="flex flex-col gap-2 flex-1">
          <Sk className="w-full h-5" />
          <Sk className="w-4/5 h-5" />
        </div>
      </div>

      {/* paragraph */}
      <div className="flex flex-col gap-2">
        <Sk className="w-full h-4" />
        <Sk className="w-full h-4" />
        <Sk className="w-3/5 h-4" />
      </div>

      {/* heading */}
      <Sk className="w-1/3 h-6 mt-4" />

      {/* paragraph */}
      <div className="flex flex-col gap-2">
        <Sk className="w-full h-4" />
        <Sk className="w-full h-4" />
        <Sk className="w-full h-4" />
        <Sk className="w-2/3 h-4" />
      </div>
    </div>

    {/* engagement row */}
    <div className="flex items-center justify-between mt-10 pt-6 border-t border-stone-200">
      <div className="flex gap-2">
        <Sk className="w-24 h-9 rounded-full" />
      </div>
    </div>

    {/* author card */}
    <div className="mt-10 p-6 rounded-2xl bg-white border border-stone-100">
      <Sk className="w-20 h-3 mb-4" />
      <div className="flex gap-4 items-start">
        <Sk className="w-12 h-12 rounded-full shrink-0" />
        <div className="flex-1 flex flex-col gap-2">
          <Sk className="w-32 h-4" />
          <Sk className="w-24 h-3" />
          <Sk className="w-full h-3 mt-2" />
          <Sk className="w-full h-3" />
          <Sk className="w-4/5 h-3" />
        </div>
      </div>
    </div>
  </main>
);

// ── page ───────────────────────────────────────────────────────────────────

const Blog = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  const getBlog = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await api.get(`/api/blog/${id}`);
      setBlog(response.data.data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlog();
  }, [id]);

  return (
    <div className="min-h-screen bg-[#FAFAF8] font-['Lora',serif]">
      <div className="fixed w-full z-100">
        <Navbar />
      </div>

      {loading ? (
        <BlogSkeleton />
      ) : error ? (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-6">
          <p className="text-xl font-semibold text-stone-800">
            Could not load article
          </p>
          <p className="text-stone-400 text-sm font-['DM_Sans',sans-serif]">
            Something went wrong. Please try again.
          </p>
          <button
            onClick={getBlog}
            className="mt-2 px-6 py-2.5 rounded-full bg-[#1D9E75] text-white text-sm font-medium font-['DM_Sans',sans-serif] hover:bg-[#0F6E56] transition-colors"
          >
            Retry
          </button>
        </div>
      ) : blog ? (
        <main className="max-w-3xl mx-auto px-5 py-30">
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
            <div className="rounded-2xl overflow-hidden bg-stone-100 aspect-video">
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
          </div>

          {/* Author card */}
          <div className="mt-10 p-6 rounded-2xl bg-white border border-stone-100">
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-4 font-['DM_Sans',sans-serif]">
              Written by
            </p>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[#1D9E75]/10 border border-[#1D9E75]/20 flex items-center justify-center text-sm font-bold text-[#0F6E56] font-['DM_Sans',sans-serif] shrink-0">
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
                </div>
                <p className="text-sm text-stone-500 mt-3 leading-relaxed font-['DM_Sans',sans-serif]">
                  {blog.author.bio}
                </p>
              </div>
            </div>
          </div>
        </main>
      ) : null}
    </div>
  );
};

export default Blog;
