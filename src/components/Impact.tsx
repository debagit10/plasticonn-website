import { Divider, LinearProgress, Typography } from "@mui/material";
import bottle from "../assets/bottle.png";
import participants from "../assets/participants.png";
import co2 from "../assets/co2.png";
import recycle from "../assets/recycle.png";
import { PieChart } from "@mui/x-charts/PieChart";

const Impact = () => {
  const stats = [
    { month: "Jan", value: 50, stat: "100 kg" },
    { month: "Feb", value: 70, stat: "100 kg" },
    { month: "Mar", value: 50, stat: "100 kg" },
    { month: "Apr", value: 70, stat: "100 kg" },
    { month: "May", value: 50, stat: "100 kg" },
    { month: "Jun", value: 70, stat: "100 kg" },
    { month: "Jul", value: 50, stat: "100 kg" },
    { month: "Aug", value: 70, stat: "100 kg" },
    { month: "Sep", value: 50, stat: "100 kg" },
    { month: "Oct", value: 70, stat: "100 kg" },
    { month: "Nov", value: 50, stat: "100 kg" },
    { month: "Dec", value: 70, stat: "100 kg" },
  ];
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
      stat: "2.5M",
      unit: "kg",
    },
    {
      icon: recycle,
      title: "Successfully Recycled",
      stat: "2.3M",
      unit: "kg",
    },
    {
      icon: participants,
      title: "Active Participants",
      stat: "15.2K",
      unit: "users",
    },
    {
      icon: co2,
      title: "CO₂ Emissions Saved",
      stat: "850",
      unit: "tons",
    },
  ];
  return (
    <div className="bg-[#F1F1F1] px-[8%] py-[4.25%] flex flex-col gap-11.5">
      <div className="flex justify-center">
        <div className="rounded-4xl py-2.5 px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281] text-center">
          <Typography>Our Impact</Typography>
        </div>
      </div>

      <div className="flex justify-center text-center">
        <Typography fontSize={42} fontWeight={400} color="#1A1A1A">
          Making a difference <br />{" "}
          <span className="text-[#00C281]">One bottle at a time</span>
        </Typography>
      </div>

      <div className="flex justify-center text-center">
        <Typography fontSize={26} fontWeight={300} color="#1A1A1A">
          Real-time data showcasing the collective impact of our global
          community in the fight against plastic <br /> pollution.
        </Typography>
      </div>

      <div className="flex gap-14.75">
        {impact.map((item) => (
          <div className="bg-[#FAFAFA80] w-88.75 py-8 px-8.5 rounded-[18px] shadow-lg flex flex-col gap-4.5 ">
            <div className="bg-linear-to-br from-[#005C3D] to-[#00C281] rounded-[18px] w-20 h-20 flex items-center py-2 px-3">
              <img src={item.icon} alt="" className="w-11.5 h-11.5" />
            </div>
            <Typography fontSize={18} fontWeight={400} color="#1A1A1A">
              {item.title}
            </Typography>
            <Typography fontSize={46} fontWeight={400} color="#00C281">
              {item.stat}{" "}
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "300px",
                  color: "#1A1A1A",
                }}
              >
                {item.unit}
              </span>
            </Typography>
          </div>
        ))}
      </div>

      <div className="flex gap-24">
        <div className="bg-[#FAFAFA] p-6.5 flex flex-col gap-6.5 rounded-[18px]">
          <Typography fontSize={26} fontWeight={400} color="#1A1A1A">
            Monthly Collection Trends
          </Typography>
          <div className="flex flex-col gap-[12.4px]">
            {stats.map((stat) => (
              <div className="flex gap-3 items-center">
                <Typography fontSize={14} fontWeight={300} color="#1A1A1A">
                  {stat.month}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={stat.value}
                  sx={{
                    flex: 1,
                    width: "623.35px",
                    height: "10px",
                    borderRadius: "8px",
                    backgroundColor: "#E0E0E0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#00C281",
                      borderRadius: "8px",
                    },
                  }}
                />
                <Typography fontSize={14} fontWeight={300} color="#00C281">
                  {stat.stat}
                </Typography>
              </div>
            ))}
          </div>

          <Typography fontSize={18} fontWeight={400} color="#1A1A1A">
            Collection volume in thousands of kg per month.
          </Typography>
        </div>

        <div className="bg-[#FAFAFA] py-9 pr-2 px-5 flex flex-col gap-6.5 rounded-[18px] w-191.75">
          <div className="flex gap-2 items-center">
            <PieChart
              series={[{ innerRadius: 50, outerRadius: 100, data }]}
              {...settings}
            />

            <div className="flex flex-col gap-3 mr-10">
              {data.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <Typography
                    fontSize={14}
                    fontWeight={400}
                    color="#1A1A1A"
                    className="min-w-15"
                  >
                    {item.label}
                  </Typography>
                  <Typography fontSize={14} fontWeight={400} color="#6B7280">
                    {item.value}%
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-tr from-[#00C281] to-[#005C3D] text-center text-white rounded-[18px] flex flex-col gap-9 py-9 px-9">
        <Typography fontSize={42} fontWeight={400}>
          Be Part of the Solution
        </Typography>
        <Typography fontSize={26} fontWeight={400}>
          Join thousands of collectors, centers, and facilities making a real
          difference in the fight against plastic pollution.
        </Typography>

        <div className="flex justify-center gap-9">
          <Typography fontSize={32} fontWeight={500} color="#FAFAFA">
            2.5M+ <br />{" "}
            <span>
              <Typography fontSize={24} fontWeight={300} color="#FAFAFA">
                Recycled
              </Typography>
            </span>
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#FAFAFA" }}
          />
          <Typography fontSize={32} fontWeight={500} color="#FAFAFA">
            15k+ <br />{" "}
            <span>
              <Typography fontSize={24} fontWeight={300} color="#FAFAFA">
                Active Users
              </Typography>
            </span>
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#FAFAFA" }}
          />
          <Typography fontSize={32} fontWeight={500} color="#FAFAFA">
            98% <br />{" "}
            <span>
              <Typography fontSize={24} fontWeight={300} color="#FAFAFA">
                Satisfaction
              </Typography>
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Impact;
