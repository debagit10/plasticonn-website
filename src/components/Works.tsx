import { Typography } from "@mui/material";
import bottle from "../assets/bottle.png";
import location from "../assets/location.png";
import recycle from "../assets/recycle.png";
import impact from "../assets/impact.png";
import circle from "../assets/circle.png";

const Works = () => {
  const steps = [
    {
      icon: bottle,
      title: "Collect Plastics",
      text: "Collectors gather plastic waste from their communities and sort by type. Every bottle, bag, and container counts.",
    },
    {
      icon: location,
      title: "Drop at Centers",
      text: "Use our smart map to find nearby collection centers. Drop off your sorted plastic and get instant credits.",
    },
    {
      icon: recycle,
      title: "Process & Recycle",
      text: "Recycling facilities transform collected plastic into new products, closing the loop on waste.",
    },
    {
      icon: impact,
      title: "Earn & Impact",
      text: "Track your environmental impact and earn rewards. Watch your contribution grow in real-time.",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] px-[6%] md:px-[8%] py-[8%] md:py-0 flex flex-col gap-8 md:gap-11.5">
      {/* Badge */}
      <div className="flex justify-center">
        <div className="rounded-4xl py-2 md:py-2.5 px-4 md:px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281] text-center">
          <Typography sx={{ fontSize: { xs: 14, md: 16 } }}>
            How It Works
          </Typography>
        </div>
      </div>

      {/* Main Heading */}
      <div className="flex justify-center text-center">
        <Typography
          sx={{
            fontSize: { xs: 28, sm: 32, md: 42 },
            fontWeight: 400,
            color: "#1A1A1A",
          }}
        >
          Simple Steps to <br />{" "}
          <span className="text-[#00C281]">Make an Impact</span>
        </Typography>
      </div>

      {/* Description */}
      <div className="flex justify-center text-center px-4">
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 16, md: 20 },
            fontWeight: 300,
            color: "#1A1A1A",
          }}
        >
          Four simple steps to turn plastic waste into environmental impact.
          Whether you're an individual collector, a{" "}
          <br className="hidden md:block" /> collection center, or a recycling
          facility, Plasticonn makes the recycling process seamless and
          transparent.
        </Typography>
      </div>

      {/* Steps Section */}
      <div className="relative pt-8 md:pt-16">
        {/* Background Circle - Hidden on mobile */}
        <div className="absolute inset-0 hidden md:flex items-center justify-center top-15 pointer-events-none z-0">
          <img src={circle} alt="" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-white rounded-xl p-4 md:p-6 shadow-[0_0_12px_0_#0A332126] flex items-start md:items-center"
            >
              <div className="flex flex-col sm:flex-row gap-4 md:gap-10 w-full">
                {/* Icon */}
                <div className="bg-linear-to-br from-[#005C3D] to-[#00C281] rounded-[18px] w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shrink-0">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-9 h-9 md:w-11.5 md:h-11.5"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 md:gap-4.5 flex-1">
                  <Typography
                    sx={{
                      fontSize: { xs: 24, sm: 28, md: 42 },
                      fontWeight: 400,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, sm: 18, md: 24 },
                      fontWeight: 300,
                    }}
                  >
                    {step.text}
                  </Typography>
                </div>
              </div>

              {/* Step Number */}
              <span className="absolute top-1 right-4 md:right-6">
                <Typography
                  sx={{
                    fontSize: { xs: 60, sm: 80, md: 120 },
                    fontWeight: 500,
                    color: "#00C2811A",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Typography>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-col sm:flex-row gap-4 md:gap-12 py-4 md:py-8">
        <div className="rounded-[20px] p-6 md:p-9 flex flex-col gap-1 shadow-lg shadow-[#00000026] bg-[#FAFAFA] border-l border-b border-r border-[#00000026] flex-1 md:w-125 text-center">
          <Typography
            sx={{
              fontSize: { xs: 32, md: 42 },
              fontWeight: 400,
              color: "#00C281",
            }}
          >
            24/7
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 18, md: 24 },
              fontWeight: 300,
              color: "#1A1A1A",
            }}
          >
            Platform Access
          </Typography>
        </div>

        <div className="rounded-[20px] p-6 md:p-9 flex flex-col gap-1 shadow-lg shadow-[#00000026] bg-[#FAFAFA] border-l border-b border-r border-[#00000026] flex-1 md:w-125 text-center">
          <Typography
            sx={{
              fontSize: { xs: 32, md: 42 },
              fontWeight: 400,
              color: "#00C281",
            }}
          >
            Real-Time
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 18, md: 24 },
              fontWeight: 300,
              color: "#1A1A1A",
            }}
          >
            Tracking & Updates
          </Typography>
        </div>

        <div className="rounded-[20px] p-6 md:p-9 flex flex-col gap-1 shadow-lg shadow-[#00000026] bg-[#FAFAFA] border-l border-b border-r border-[#00000026] flex-1 md:w-125 text-center">
          <Typography
            sx={{
              fontSize: { xs: 32, md: 42 },
              fontWeight: 400,
              color: "#00C281",
            }}
          >
            Instant
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 18, md: 24 },
              fontWeight: 300,
              color: "#1A1A1A",
            }}
          >
            Credit
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Works;
