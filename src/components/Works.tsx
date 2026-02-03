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
    <div className="bg-[#FAFAFA] px-[8%] flex flex-col gap-11.5">
      <div className="flex justify-center">
        <div className="rounded-4xl py-2.5 px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281] text-center">
          <Typography>How It Works</Typography>
        </div>
      </div>

      <div className="flex justify-center text-center">
        <Typography fontSize={42} fontWeight={400} color="#1A1A1A">
          Simple Steps to <br />{" "}
          <span className="text-[#00C281]">Make an Impact</span>
        </Typography>
      </div>

      <div className="flex justify-center text-center">
        <Typography fontSize={26} fontWeight={300} color="#1A1A1A">
          Four simple steps to turn plastic waste into environmental impact.
          Whether you're an individual collector, a <br /> collection center, or
          a recycling facility, Plasticonn makes the recycling process seamless
          and transparent.
        </Typography>
      </div>

      <div className="relative py-16">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-100">
          <img src={circle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-white rounded-xl p-6 shadow-[0_0_12px_0_#0A332126]  flex items-center"
            >
              <div className="flex gap-10">
                <div className="bg-linear-to-br from-[#005C3D] to-[#00C281] rounded-[18px] w-20 h-20 flex items-center py-2 px-3">
                  <img src={step.icon} alt="" className="w-11.5 h-11.5" />
                </div>

                <div className="flex flex-col gap-4.5">
                  <Typography fontSize={42} fontWeight={400}>
                    {step.title}
                  </Typography>
                  <Typography fontSize={24} fontWeight={300}>
                    {step.text}
                  </Typography>
                </div>
              </div>

              {/* STEP NUMBER */}
              <span className="absolute top-1 right-6 ">
                <Typography fontSize={120} fontWeight={500} color="#00C2811A">
                  {String(index + 1).padStart(2, "0")}
                </Typography>
              </span>
            </div>
          ))}
        </div>

        <div className="flex gap-12 pt-20 ">
          <div className="rounded-[20px] p-9 flex flex-col gap-4.5 shadow-lg shadow-[#00000026] bg-[#FAFAFA] border-l border-b border-r border-[#00000026] w-125 text-center">
            <Typography fontSize={42} fontWeight={400} color="#00C281">
              24/7
            </Typography>
            <Typography fontSize={24} fontWeight={300} color="#1A1A1A">
              Platform Access
            </Typography>
          </div>
          <div className="rounded-[20px] p-9 flex flex-col gap-4.5 shadow-lg shadow-[#00000026] bg-[#FAFAFA] border-l border-b border-r border-[#00000026] w-125 text-center">
            <Typography fontSize={42} fontWeight={400} color="#00C281">
              Real-Time
            </Typography>
            <Typography fontSize={24} fontWeight={300} color="#1A1A1A">
              Tracking & Updates
            </Typography>
          </div>
          <div className="rounded-[20px] p-9 flex flex-col gap-4.5 shadow-lg shadow-[#00000026] bg-[#FAFAFA] border-l border-b border-r border-[#00000026] w-125 text-center">
            <Typography fontSize={42} fontWeight={400} color="#00C281">
              Instant
            </Typography>
            <Typography fontSize={24} fontWeight={300} color="#1A1A1A">
              Credit Rewards
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
