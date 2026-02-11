import { Typography } from "@mui/material";
import sustainabilty from "../assets/sustainability.png";
import innovation from "../assets/innovation.png";
import collaboration from "../assets/collaboration.png";
import community from "../assets/community.png";
import about from "../images/about.gif";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

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
    <div className="bg-[#FAFAFA] px-[6%] md:px-[8%] py-[8%] md:py-[4.75%] flex flex-col gap-8 md:gap-11.5">
      {/* About Badge */}
      <div className="flex justify-center">
        <div className="rounded-4xl py-2 md:py-2.5 px-4 md:px-5 border border-[#00C281] bg-[#00C2811A] text-[#00C281] text-center">
          <Typography sx={{ fontSize: { xs: 14, md: 16 } }}>
            About Plasticonn
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
          Building The Future of <br />{" "}
          <span className="text-[#00C281]">Sustainable Recycling</span>
        </Typography>
      </div>

      {/* Description */}
      <div className="flex justify-center text-center px-4">
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 16, md: 20 },
            fontWeight: 300,
            color: "#1A1A1A",
            maxWidth: { xs: "100%", md: "none" },
          }}
        >
          Plasticonn is a youth-led environmental initiative tackling plastic
          waste management through <br className="hidden md:block" /> geospatial
          innovation. Founded by graduates of the University of Lagos,
          Plasticonn connects plastic <br className="hidden md:block" />
          collection centers, recycling hubs, and plastic collectors through a
          unified digital ecosystem that <br className="hidden md:block" />{" "}
          promotes collaboration, sustainability, and data-driven action.
        </Typography>
      </div>

      {/* Our Values Section */}
      <div className="flex flex-col gap-8 md:gap-11.5">
        <div className="flex justify-center">
          <Typography
            sx={{
              fontSize: { xs: 28, sm: 32, md: 42 },
              fontWeight: 400,
              color: "#1A1A1A",
            }}
          >
            Our Values
          </Typography>
        </div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              className="flex flex-col text-center gap-4 md:gap-6.5 
          py-6 md:py-8 px-6 md:px-8.5 
          rounded-[18px] 
          bg-[#FAFAFA80] 
          shadow-[0_0_12px_0_#0A332126]
          transition-all duration-300
          hover:shadow-[0_12px_40px_0_rgba(10,51,33,0.25)]
          hover:-translate-y-1"
            >
              <div className="flex justify-center">
                <div className="flex justify-center bg-[#00C2811A] rounded-full w-20 h-20 md:w-25 md:h-25 items-center">
                  <img
                    src={value.icon}
                    alt={value.title}
                    className="w-12 h-12 md:w-14 md:h-14"
                  />
                </div>
              </div>

              <Typography
                sx={{
                  fontSize: { xs: 22, sm: 24, md: 32 },
                  fontWeight: 400,
                  color: "#052E1E",
                }}
              >
                {value.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 18, md: 24 },
                  fontWeight: 300,
                  color: "#1A1A1A",
                }}
              >
                {value.text}
              </Typography>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Vision and Mission Section */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12.25 items-center">
        <div className="flex flex-col gap-8 md:gap-14 flex-1">
          {/* Vision */}
          <div className="flex flex-col gap-4 md:gap-6.5">
            <Typography
              sx={{
                fontSize: { xs: 24, sm: 28, md: 36 },
                fontWeight: 400,
              }}
            >
              Our Vision
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 18, md: 20 },
                fontWeight: 300,
              }}
            >
              A cleaner, smarter, and more sustainable Nigeria where plastic is
              valued, not wasted.
            </Typography>
          </div>

          {/* Mission */}
          <div className="flex flex-col gap-4 md:gap-6.5">
            <Typography
              sx={{
                fontSize: { xs: 24, sm: 28, md: 36 },
                fontWeight: 400,
              }}
            >
              Our Mission
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 18, md: 20 },
                fontWeight: 300,
              }}
            >
              We seek to bridge the gap between plastic collection efforts
              <br className="hidden md:block" /> and the accessibility of
              collection centers. By enhancing{" "}
              <br className="hidden md:block" />
              both visibility and accessibility, the initiative fosters a{" "}
              <br className="hidden md:block" />
              sustainable, community-driven approach to reducing{" "}
              <br className="hidden md:block" /> improper plastic disposal. This
              project not only contributes <br className="hidden md:block" /> to
              environmental protection but also offers significant{" "}
              <br className="hidden md:block" />
              environmental, economic, and social benefits, ensuring a{" "}
              <br className="hidden md:block" /> positive return on investment.
            </Typography>
          </div>
        </div>

        {/* Image */}
        <div className="rounded-[18px] w-full lg:w-auto flex justify-center lg:block">
          <img
            src={about}
            alt="About animation"
            className="w-full max-w-md lg:max-w-none lg:w-193.5 h-auto lg:h-108.75 rounded-[18px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
