import { Button, Divider, Typography } from "@mui/material";
import recycle from "../images/recycle.jpg";
import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row px-[6%] py-[4%] gap-8 lg:gap-16 text-white">
      {/* LEFT CONTENT */}
      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-6 lg:gap-12 flex-1 items-center lg:items-start text-center lg:text-left">
        {/* Badge */}
        <div className="rounded-[30px] bg-[#FAFAFA33] flex items-center gap-3 lg:gap-4 px-4 lg:px-6 py-2 w-fit mx-auto lg:mx-0">
          <div className="bg-[#00C281] w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full" />
          <Typography sx={{ fontSize: { xs: 12, lg: 18 }, color: "#00C281" }}>
            Join The Green Revolution
          </Typography>
        </div>

        {/* Heading */}
        <Typography
          sx={{
            fontSize: { xs: 32, sm: 40, md: 50, lg: 64 },
            lineHeight: 1.2,
          }}
        >
          Collect, Connect, <br />
          <span className="text-[#00C281]">Convert.</span>
        </Typography>

        {/* Description */}
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

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
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
            }}
          >
            Learn More
          </Button>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 text-center sm:text-left">
          {" "}
          {[
            { value: "5,000+", label: "Active Collectors" },
            { value: "200+", label: "Collection Centers" },
            { value: "50+", label: "Recycling Centers" },
          ].map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="text-center sm:text-left px-4">
                <Typography
                  fontSize={{ xs: 24, lg: 28 }}
                  fontWeight={500}
                  color="#00C281"
                >
                  {item.value}
                </Typography>

                <Typography
                  fontSize={{ xs: 14, lg: 16 }}
                  fontWeight={300}
                  color="#FAFAFA"
                >
                  {item.label}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CIRCLE */}
      <div className="flex justify-center items-center flex-1">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-[0_0_60px_rgba(0,194,129,0.6)]">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-emerald-400 to-teal-400 p-1.5">
            <div className="w-full h-full rounded-full bg-[#141414] flex flex-col items-center justify-center gap-3 lg:gap-4 text-center px-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center">
                <img src={recycle} alt="" className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>

              <Typography fontSize={{ xs: 18, lg: 22 }}>
                Sustainability
              </Typography>
              <Typography fontSize={{ xs: 12, lg: 14 }} fontWeight={300}>
                Powered by Innovation
              </Typography>

              <div className="flex gap-4 lg:gap-6 mt-2 lg:mt-4">
                <div>
                  <Typography color="#00C281" fontSize={{ xs: 18, lg: 20 }}>
                    25%
                  </Typography>
                  <Typography fontSize={{ xs: 12, lg: 14 }}>
                    Recycled
                  </Typography>
                </div>

                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: "#FAFAFA" }}
                />

                <div>
                  <Typography color="#00C281" fontSize={{ xs: 18, lg: 20 }}>
                    100k+
                  </Typography>
                  <Typography fontSize={{ xs: 12, lg: 14 }}>
                    kg/month
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
