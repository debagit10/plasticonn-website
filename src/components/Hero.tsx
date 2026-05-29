import { Button, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import recycle from "../images/recycle.jpg";
import { IoMdArrowForward } from "react-icons/io";
import { formatValue } from "../utils/formatValue";

export interface HeroStats {
  activeCollectors: number;
  totalCollectionCenters: number;
  totalRecyclingCenters: number;
  percentRecycled: number;
  avgPlasticsPerMonth: number;
}

// ── animation variants ─────────────────────────────────────────────────────

// parent container — staggers children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// each child fades up
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// right circle slides in from the right
const slideInRight = {
  hidden: { opacity: 0, x: 60, scale: 0.92 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.3,
    },
  },
};

// stat counter items stagger independently
const statContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.6 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } as const,
  },
};

// ─────────────────────────────────────────────────────────────────────────────

const Hero = ({ data }: { data: HeroStats }) => {
  return (
    <div className="flex flex-col lg:flex-row px-[6%] pt-[4%] pb-[15%] md:pb-[6%] gap-8 lg:gap-16 text-white">
      {/* ── LEFT CONTENT ── */}
      <motion.div
        className="flex flex-col gap-6 lg:gap-12 flex-1 items-center lg:items-start text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="rounded-[30px] bg-[#FAFAFA33] flex items-center gap-3 lg:gap-4 px-4 lg:px-6 py-2 w-fit mx-auto lg:mx-0"
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#00C281] opacity-75 animate-ping" />
            <span className="relative bg-[#00C281] w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full" />
          </div>
          <Typography sx={{ fontSize: { xs: 12, lg: 18 }, color: "#00C281" }}>
            Join The Green Revolution
          </Typography>
        </motion.div>

        {/* Heading */}
        <motion.div variants={fadeUp}>
          <Typography
            sx={{
              fontSize: { xs: 32, sm: 40, md: 50, lg: 64 },
              lineHeight: 1.2,
            }}
          >
            Collect, Connect, <br />
            <span className="text-[#00C281]">Convert.</span>
          </Typography>
        </motion.div>

        {/* Description */}
        <motion.div variants={fadeUp}>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16, md: 20, lg: 32 },
              lineHeight: { xs: "22px", sm: "26px", md: "32px", lg: "42px" },
              maxWidth: "720px",
            }}
          >
            Plasticonn bridges the gap between Plastic waste collectors,
            recyclers, and communities using geospatial technology to promote
            sustainable plastic management in Nigeria.
          </Typography>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <Button
            variant="contained"
            disableElevation
            sx={{
              borderRadius: "16px",
              backgroundColor: "#00C281",
              height: "56px",
              px: 4,
              textTransform: "capitalize",
              fontSize: { xs: 16, md: 20 },
              transition: "background-color 0.3s ease",
              "&:hover": { backgroundColor: "#1EDB9A" },
            }}
          >
            Join The Movement
          </Button>

          <Button
            endIcon={<IoMdArrowForward />}
            variant="contained"
            disableElevation
            sx={{
              borderRadius: "16px",
              border: "1px solid #FAFAFA",
              backgroundColor: "#797B7AB2",
              height: "56px",
              px: 4,
              color: "#00C281",
              textTransform: "capitalize",
              fontSize: { xs: 16, md: 20 },
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "#5f6160", color: "#000000" },
            }}
          >
            Learn More
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-center sm:text-left"
          variants={statContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { value: data.activeCollectors, label: "Active Collectors" },
            { value: data.totalCollectionCenters, label: "Collection Centers" },
            { value: data.totalRecyclingCenters, label: "Recycling Centers" },
          ].map((item, i, arr) => (
            <motion.div
              key={i}
              variants={statItem}
              className="flex flex-col sm:flex-row items-center sm:items-start relative"
            >
              <div className="px-4">
                <Typography
                  fontSize={{ xs: 24, lg: 28 }}
                  fontWeight={500}
                  color="#00C281"
                >
                  {formatValue(item.value)}
                </Typography>
                <Typography
                  fontSize={{ xs: 14, lg: 16 }}
                  fontWeight={300}
                  color="#FAFAFA"
                >
                  {item.label}
                </Typography>
              </div>

              {i !== arr.length - 1 && (
                <div className="hidden sm:block border-r border-gray-500 h-12 ml-4 mt-3" />
              )}
              {i !== arr.length - 1 && (
                <div className="block sm:hidden border-b border-gray-500 w-full mt-2" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── RIGHT CIRCLE ── */}
      <motion.div
        className="flex justify-center items-center flex-1"
        variants={slideInRight}
        initial="hidden"
        animate="visible"
      >
        {/* subtle continuous float */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-[0_0_60px_rgba(0,194,129,0.6)]"
        >
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-emerald-400 to-teal-400 p-1.5">
            <div className="w-full h-full rounded-full bg-[#141414] flex flex-col items-center justify-center gap-3 lg:gap-4 text-center px-4">
              {/* icon */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.9,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center"
              >
                <img
                  src={recycle}
                  alt=""
                  className="w-8 h-8 lg:w-10 lg:h-10"
                  fetchPriority="high"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <Typography fontSize={{ xs: 18, lg: 22 }}>
                  Sustainability
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <Typography fontSize={{ xs: 12, lg: 14 }} fontWeight={300}>
                  Powered by Innovation
                </Typography>
              </motion.div>

              {/* percent + kg stats */}
              <motion.div
                className="flex gap-4 lg:gap-6 mt-2 lg:mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div>
                  <Typography color="#00C281" fontSize={{ xs: 18, lg: 20 }}>
                    {data.percentRecycled}%
                  </Typography>
                  <Typography fontSize={{ xs: 12, lg: 14 }}>
                    Recycled
                  </Typography>
                </div>

                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: "rgba(250, 250, 250, 0.4)" }}
                />

                <div>
                  <Typography color="#00C281" fontSize={{ xs: 18, lg: 20 }}>
                    {data.avgPlasticsPerMonth}+
                  </Typography>
                  <Typography fontSize={{ xs: 12, lg: 14 }}>
                    kg/month
                  </Typography>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
