import { Button, Divider, Typography } from "@mui/material";
import recycle from "../images/recycle.jpg";
import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="flex  px-[8%] py-[4.75%]">
      <div className="flex flex-col gap-12">
        <div className="rounded-[30px] bg-[#FAFAFA33] flex justify-between items-center px-9 py-1.5 w-105.75">
          <div className="bg-[#00C281] w-4 h-4 rounded-full" />
          <Typography fontSize={26} fontWeight={500} color="#00C281">
            Join The Green Revolution
          </Typography>
        </div>

        <div>
          <Typography fontSize={64} fontWeight={400} color="#FAFAFA">
            Collect, Connect, <br />{" "}
            <span className="text-[#00C281]">Convert.</span>
          </Typography>
        </div>

        <div className="w-188">
          <Typography
            fontSize={32}
            fontWeight={300}
            color="#FAFAFA"
            lineHeight="42px"
          >
            Plasticonn bridges the gap between Plastic waste collectors,
            recyclers, and communities using geospatial technology to promote
            sustainable plastic management in Nigeria.
          </Typography>
        </div>

        <div className="flex gap-9">
          <Button
            disableElevation
            variant="contained"
            sx={{
              borderRadius: "16px",
              backgroundColor: "#00C281",
              textTransform: "capitalize",
              //padding: "16px",
              height: "60px",
              width: "300px",
            }}
          >
            <Typography fontSize={24} fontWeight={400}>
              Join The Movement
            </Typography>
          </Button>

          <Button
            endIcon={<IoMdArrowForward />}
            disableElevation
            variant="contained"
            sx={{
              borderRadius: "16px",
              borderColor: "#FAFAFA",
              borderWidth: "1px",
              backgroundColor: "#797B7AB2",
              textTransform: "capitalize",
              //padding: "16px",
              height: "60px",
              width: "300px",
              color: "#00C281",
            }}
          >
            <Typography fontSize={24} fontWeight={400}>
              Learn More
            </Typography>
          </Button>
        </div>

        <div className="flex gap-9 text-center">
          <Typography fontSize={32} fontWeight={500} color="#00C281">
            5,000 + <br />{" "}
            <span>
              <Typography fontSize={24} fontWeight={300} color="#FAFAFA">
                Active Centers
              </Typography>
            </span>
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#FAFAFA" }}
          />
          <Typography fontSize={32} fontWeight={500} color="#00C281">
            200 + <br />{" "}
            <span>
              <Typography fontSize={24} fontWeight={300} color="#FAFAFA">
                Collection Centers
              </Typography>
            </span>
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#FAFAFA" }}
          />
          <Typography fontSize={32} fontWeight={500} color="#00C281">
            50 + <br />{" "}
            <span>
              <Typography fontSize={24} fontWeight={300} color="#FAFAFA">
                Recycling Centers
              </Typography>
            </span>
          </Typography>
        </div>
      </div>

      <div className="flex  items-center justify-center w-150 h-150">
        {/* Glow wrapper */}
        <div
          className="relative w-120 h-120 rounded-full
                  shadow-[0_0_10px_10px_rgba(52,211,153,0.7)]"
        >
          <div
            className="absolute inset-0 rounded-full
                    bg-linear-to-r from-emerald-400 to-teal-400 p-1.5"
          >
            <div
              className="w-full h-full rounded-full bg-[#141414]
                      flex gap-5 flex-col items-center justify-center text-white
                      shadow-inner
                      ring-1 ring-emerald-400/10"
            >
              <div
                className="w-20 h-20 rounded-full bg-[#e6f7ff]
                        flex items-center justify-center mb-4"
              >
                <img
                  src={recycle}
                  alt="Sustainability Icon"
                  className="w-12 h-12"
                />
              </div>

              <Typography fontSize={32} fontWeight={500} color="#FAFAFA">
                Sustainability
              </Typography>

              <Typography fontSize={26} fontWeight={300} color="#FAFAFA">
                Powered by Innovation
              </Typography>

              <div className="flex items-center mt-6 text-center gap-5">
                <div>
                  <Typography fontSize={32} fontWeight={500} color="#00C281">
                    25% <br />{" "}
                    <span>
                      <Typography
                        fontSize={24}
                        fontWeight={300}
                        color="#FAFAFA"
                      >
                        Recycled
                      </Typography>
                    </span>
                  </Typography>
                </div>

                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: "#FAFAFA" }}
                />

                <div>
                  <Typography fontSize={32} fontWeight={500} color="#00C281">
                    100k+ <br />{" "}
                    <span>
                      <Typography
                        fontSize={24}
                        fontWeight={300}
                        color="#FAFAFA"
                      >
                        kg/month
                      </Typography>
                    </span>
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
