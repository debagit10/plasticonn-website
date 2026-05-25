import { Divider, LinearProgress, Typography } from "@mui/material";
import bottle from "../assets/bottle.png";
import participants from "../assets/participants.png";
import co2 from "../assets/co2.png";
import recycle from "../assets/recycle.png";
import { PieChart } from "@mui/x-charts/PieChart";

import { motion } from "framer-motion";

export interface ImpactStats {
  totalPlasticsCollected: number;
  successfullyRecycled: number;
  activeParticipants: number;
  co2EmissionsSaved: number;
  monthlyCollectionTrend: MonthlyCollectionTrend[];
}

export interface MonthlyCollectionTrend {
  month: string;
  amount: number;
}

// Variants for the slide-in animation
const cardVariants = {
  hidden: { opacity: 0, x: -50 }, // start slightly left and invisible
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }, // slide in
};

const Impact = ({ impactstats }: { impactstats: ImpactStats }) => {
  // const stats = [
  //   { month: "Jan", value: 50, stat: "100 kg" },
  //   { month: "Feb", value: 70, stat: "100 kg" },
  //   { month: "Mar", value: 50, stat: "100 kg" },
  //   { month: "Apr", value: 70, stat: "100 kg" },
  //   { month: "May", value: 50, stat: "100 kg" },
  //   { month: "Jun", value: 70, stat: "100 kg" },
  //   { month: "Jul", value: 50, stat: "100 kg" },
  //   { month: "Aug", value: 70, stat: "100 kg" },
  //   { month: "Sep", value: 50, stat: "100 kg" },
  //   { month: "Oct", value: 70, stat: "100 kg" },
  //   { month: "Nov", value: 50, stat: "100 kg" },
  //   { month: "Dec", value: 70, stat: "100 kg" },
  // ];

  const data = [
    { label: "Group A", value: 400, color: "#0088FE" },
    { label: "Group B", value: 300, color: "#00C49F" },
    { label: "Group C", value: 300, color: "#FFBB28" },
    { label: "Group D", value: 200, color: "#FF8042" },
  ];

  const settings = {
    margin: { right: 5 },
    width: 300,
    height: 300,
    hideLegend: true,
  };

  const impact = [
    {
      icon: bottle,
      title: "Total Plastics Collected",
      stat: impactstats.totalPlasticsCollected,
      unit: "kg",
    },
    {
      icon: recycle,
      title: "Successfully Recycled",
      stat: impactstats.successfullyRecycled,
      unit: "kg",
    },
    {
      icon: participants,
      title: "Active Participants",
      stat: impactstats.activeParticipants,
      unit: "users",
    },
    {
      icon: co2,
      title: "CO₂ Emissions Saved",
      stat: impactstats.co2EmissionsSaved,
      unit: "tons",
    },
  ];

  return (
    <div className="bg-[#F1F1F1] px-[6%] lg:px-[8%] py-[8%] lg:py-[4.25%] flex flex-col gap-8 lg:gap-11.5">
      {/* Badge */}
      <div className="flex justify-center">
        <div className="rounded-4xl py-2 lg:py-2.5 px-4 lg:px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281] text-center">
          <Typography sx={{ fontSize: { xs: 14, lg: 16 } }}>
            Our Impact
          </Typography>
        </div>
      </div>

      {/* Main Heading */}
      <div className="flex justify-center text-center">
        <Typography
          fontSize={{ xs: 28, sm: 32, md: 38, lg: 42 }}
          fontWeight={400}
          color="#1A1A1A"
        >
          Making a difference <br />{" "}
          <span className="text-[#00C281]">One bottle at a time</span>
        </Typography>
      </div>

      {/* Description */}
      <div className="flex justify-center text-center px-4 lg:px-0">
        <Typography
          fontSize={{ xs: 14, sm: 16, md: 18, lg: 20 }}
          fontWeight={300}
          color="#1A1A1A"
        >
          Real-time data showcasing the collective impact of our global
          community in the fight against plastic{" "}
          <br className="hidden lg:block" /> pollution.
        </Typography>
      </div>

      {/* Impact Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-14.75">
        {impact.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#FAFAFA80] py-6 lg:py-8 px-6 lg:px-8.5 rounded-[18px] shadow-lg flex flex-col gap-3 lg:gap-4.5"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15 }} // stagger effect
          >
            {/* Hoverable content */}
            <motion.div
              className="flex flex-col gap-3 lg:gap-4.5 transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-linear-to-br from-[#005C3D] to-[#00C281] rounded-[18px] w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-9 h-9 lg:w-11.5 lg:h-11.5"
                  loading="lazy"
                />
              </div>
              <Typography
                fontSize={{ xs: 16, lg: 18 }}
                fontWeight={400}
                color="#1A1A1A"
              >
                {item.title}
              </Typography>
              <Typography
                fontSize={{ xs: 36, lg: 46 }}
                fontWeight={400}
                color="#00C281"
              >
                {item.stat}{" "}
                <span className="text-[20px] lg:text-[28px] font-light text-[#1A1A1A]">
                  {item.unit}
                </span>
              </Typography>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-24">
        {/* Monthly Trends */}
        <div className="bg-[#FAFAFA] p-4 lg:p-6.5 flex flex-col gap-4 lg:gap-6.5 rounded-[18px] flex-1">
          <Typography
            fontSize={{ xs: 18, lg: 20 }}
            fontWeight={400}
            color="#1A1A1A"
          >
            Monthly Collection Trends
          </Typography>
          <div className="flex flex-col gap-3 lg:gap-[12.4px]">
            {impactstats.monthlyCollectionTrend.map((stat, index) => (
              <div key={index} className="flex gap-2 lg:gap-3 items-center">
                <Typography
                  fontSize={{ xs: 12, lg: 14 }}
                  fontWeight={300}
                  color="#1A1A1A"
                  sx={{ minWidth: { xs: "28px", lg: "32px" } }}
                >
                  {stat.month}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={Math.min(stat.amount, 100)}
                  sx={{
                    flex: 1,
                    maxWidth: { lg: "623.35px" },
                    height: { xs: "8px", lg: "10px" },
                    borderRadius: "8px",
                    backgroundColor: "#E0E0E0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#00C281",
                      borderRadius: "8px",
                    },
                  }}
                />
                <Typography
                  fontSize={{ xs: 12, lg: 14 }}
                  fontWeight={300}
                  color="#00C281"
                  sx={{
                    minWidth: { xs: "50px", lg: "60px" },
                    textAlign: "right",
                  }}
                >
                  {stat.amount}kg
                </Typography>
              </div>
            ))}
          </div>

          <Typography
            fontSize={{ xs: 14, lg: 18 }}
            fontWeight={400}
            color="#1A1A1A"
          >
            Collection volume in thousands of kg per month.
          </Typography>
        </div>

        {/* Pie Chart */}
        <div className="bg-[#FAFAFA] py-6 lg:py-9 px-4 lg:px-6 flex flex-col gap-4 lg:gap-6.5 rounded-[18px] w-full max-w-191.75 mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center text-center md:pt-20">
            <div className="flex justify-center items-center w-full">
              <PieChart
                series={[
                  {
                    innerRadius: 50,
                    outerRadius: 100,
                    data,
                  },
                ]}
                {...settings}
                sx={{
                  width: { xs: "250px !important", sm: "300px !important" },
                  height: { xs: "250px !important", sm: "300px !important" },
                }}
              />
            </div>

            <div className="flex justify-center w-full">
              <div className="flex flex-col gap-2 lg:gap-3">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-2 lg:gap-3"
                  >
                    <div
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <Typography
                      fontSize={{ xs: 13, lg: 14 }}
                      fontWeight={400}
                      color="#1A1A1A"
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      fontSize={{ xs: 13, lg: 14 }}
                      fontWeight={400}
                      color="#6B7280"
                    >
                      {item.value}%
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-linear-to-tr from-[#00C281] to-[#005C3D] text-center text-white rounded-[18px] flex flex-col gap-6 lg:gap-9 py-6 lg:py-9 px-6 lg:px-9">
        <Typography
          fontSize={{ xs: 28, sm: 32, md: 38, lg: 42 }}
          fontWeight={400}
        >
          Be Part of the Solution
        </Typography>
        <Typography fontSize={{ xs: 16, lg: 20 }} fontWeight={400}>
          Join thousands of collectors, centers, and facilities making a real
          difference in the fight against plastic pollution.
        </Typography>

        <div className="flex flex-col sm:flex-row justify-center gap-6 lg:gap-9 items-center">
          <div className="text-center">
            <Typography
              fontSize={{ xs: 28, lg: 32 }}
              fontWeight={500}
              color="#FAFAFA"
            >
              {impactstats.successfullyRecycled}
            </Typography>
            <Typography
              fontSize={{ xs: 18, lg: 24 }}
              fontWeight={300}
              color="#FAFAFA"
            >
              Recycled
            </Typography>
          </div>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: "rgba(250, 250, 250, 0.4)",
              display: { xs: "none", sm: "block" },
            }}
          />
          <Divider
            sx={{
              borderColor: "rgba(250, 250, 250, 0.4)",
              display: { xs: "block", sm: "none" },
              width: "100%",
              maxWidth: "200px",
            }}
          />

          <div className="text-center">
            <Typography
              fontSize={{ xs: 28, lg: 32 }}
              fontWeight={500}
              color="#FAFAFA"
            >
              {impactstats.activeParticipants}+
            </Typography>
            <Typography
              fontSize={{ xs: 18, lg: 24 }}
              fontWeight={300}
              color="#FAFAFA"
            >
              Active Users
            </Typography>
          </div>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: "rgba(250, 250, 250, 0.4)",
              display: { xs: "none", sm: "block" },
            }}
          />
          <Divider
            sx={{
              borderColor: "rgba(250, 250, 250, 0.4)",
              display: { xs: "block", sm: "none" },
              width: "100%",
              maxWidth: "200px",
            }}
          />

          <div className="text-center">
            <Typography
              fontSize={{ xs: 28, lg: 32 }}
              fontWeight={500}
              color="#FAFAFA"
            >
              98%
            </Typography>
            <Typography
              fontSize={{ xs: 18, lg: 24 }}
              fontWeight={300}
              color="#FAFAFA"
            >
              Satisfaction
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
