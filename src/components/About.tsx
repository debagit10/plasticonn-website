import { Typography } from "@mui/material";
import sustainabilty from "../assets/sustainability.png";
import innovation from "../assets/innovation.png";
import collaboration from "../assets/collaboration.png";
import community from "../assets/community.png";
import about from "../images/about.gif";

const About = () => {
  const values = [
    {
      icon: sustainabilty,
      title: "Sustainability First",
      text: "We prioritize environmental impact in every decision, creating a circular economy for plastic waste.",
    },
    {
      icon: innovation,
      title: "Innovation",
      text: "One recycled bottle can spark global innovation. Small action, healthier planet, safer society for us all.",
    },
    {
      icon: collaboration,
      title: "Collaboration",
      text: "Track every step of the recycling journey with full verification and impact measurement.",
    },
    {
      icon: community,
      title: "Community Impact",
      text: "Recycling one bottle is small, but doing it together turns it into global progress. Collaboration makes the impact multiply.",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] p-10 flex flex-col gap-11.5">
      <div className="flex justify-center">
        <div className="rounded-4xl py-2.5 px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281] text-center">
          <Typography>About Plasticonn</Typography>
        </div>
      </div>

      <div className="flex justify-center text-center">
        <Typography fontSize={42} fontWeight={400} color="#1A1A1A">
          Building The Future of <br />{" "}
          <span className="text-[#00C281]">Sustainable Recycling</span>
        </Typography>
      </div>

      <div className="flex justify-center text-center">
        <Typography fontSize={26} fontWeight={300} color="#1A1A1A">
          Plasticonn is a youth-led environmental initiative tackling plastic
          waste management through <br /> geospatial innovation. Founded by
          graduates of the University of Lagos, Plasticonn connects plastic{" "}
          <br />
          collection centers, recycling hubs, and plastic collectors through a
          unified digital ecosystem that <br /> promotes collaboration,
          sustainability, and data-driven action.
        </Typography>
      </div>

      <div className="flex flex-col gap-11.5">
        <div className="flex justify-center">
          <Typography fontSize={42} fontWeight={400} color="#1A1A1A">
            Our Values
          </Typography>
        </div>

        <div className="flex  gap-10">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col text-center gap-6.5 py-8 px-8.5 rounded-[18px] bg-[#FAFAFA80] shadow-[0_0_12px_0_#0A332126]"
            >
              <div className="flex justify-center">
                <div className="flex justify-center bg-[#00C2811A] rounded-full w-25 h-25 items-center">
                  <img src={value.icon} className="w-14 h-14" />
                </div>
              </div>

              <Typography fontSize={32} fontWeight={400} color="#052E1E">
                {value.title}
              </Typography>

              <Typography fontSize={24} fontWeight={300} color="#1A1A1A">
                {value.text}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-12.25 items-center">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-6.5">
            <Typography fontSize={36} fontWeight={400}>
              Our Vision
            </Typography>
            <Typography fontSize={26} fontWeight={300}>
              A cleaner, smarter, and more sustainable Nigeria where <br />{" "}
              plastic is valued, not wasted.
            </Typography>
          </div>

          <div className="flex flex-col gap-6.5">
            <Typography fontSize={36} fontWeight={400}>
              Our Mission
            </Typography>
            <Typography fontSize={26} fontWeight={300}>
              We seek to bridge the gap between plastic collection efforts
              <br /> and the accessibility of collection centers. By enhancing{" "}
              <br />
              both visibility and accessibility, the initiative fosters a <br />
              sustainable, community-driven approach to reducing <br /> improper
              plastic disposal. This project not only contributes <br /> to
              environmental protection but also offers significant <br />
              environmental, economic, and social benefits, ensuring a <br />{" "}
              positive return on investment.
            </Typography>
          </div>
        </div>

        <div className="rounded-[18px]">
          <img
            src={about}
            alt="About animation"
            className="w-193.5 h-108.75 rounded-[18px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
