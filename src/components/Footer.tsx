import { Divider, Tooltip, Typography } from "@mui/material";
import logo from "../logo/logo.png";
<<<<<<< HEAD
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
=======
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
>>>>>>> origin/last-commit-recovery
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const socials = [
    { icon: <FaInstagram />, link: "", name: "Instagram" },
    { icon: <FaXTwitter />, link: "", name: "X/Twitter" },
    { icon: <FaLinkedinIn />, link: "", name: "LinkedIn" },
  ];

  return (
<<<<<<< HEAD
    <footer className="bg-[#053322] text-white px-16 py-6.75">
      <div className="max-w-7xl">
        <div className="flex justify-between ">
          {/* Brand */}
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-4 mb-4">
=======
    <footer className="bg-[#053322] text-white px-[6%] lg:px-16 py-10 lg:py-6.75">
      <div className="max-w-7xl mx-auto">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-7 lg:max-w-md">
            <div className="flex items-center gap-4">
>>>>>>> origin/last-commit-recovery
              <img
                src={logo}
                alt="Plasticonn Logo"
                className="w-14 h-14 rounded-[46px]"
              />
<<<<<<< HEAD

              <span className="text-2xl font-semibold">Plasticonn</span>
            </div>
=======
              <span className="text-2xl font-semibold">Plasticonn</span>
            </div>

>>>>>>> origin/last-commit-recovery
            <Typography
              fontWeight={500}
              fontSize={18}
              color="#FAFAFA"
              sx={{ lineHeight: "1.625" }}
            >
<<<<<<< HEAD
              Connecting everyone through sustainable plastic <br /> recycling.
              Every action creates impact, every <br /> contribution counts.
            </Typography>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {socials.map((item) => (
                <Tooltip title={item.name}>
                  <div
                    key={item.name}
                    className="w-10 h-10 border border-white/30 rounded-lg
                         flex items-center justify-center
                         hover:bg-white hover:text-[#053322]
                         transition"
=======
              Connecting everyone through sustainable plastic{" "}
              <br className="hidden lg:block" />
              recycling. Every action creates impact, every{" "}
              <br className="hidden lg:block" />
              contribution counts.
            </Typography>

            {/* Social icons */}
            <div className="flex gap-4 mt-4">
              {socials.map((item) => (
                <Tooltip key={item.name} title={item.name}>
                  <div
                    className="w-10 h-10 border border-white/30 rounded-lg
                               flex items-center justify-center
                               hover:bg-white hover:text-[#053322]
                               transition"
>>>>>>> origin/last-commit-recovery
                  >
                    {item.icon}
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          <div className="flex gap-10.5 justify-end">
=======
          {/* LINKS + CONTACT */}
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-10.5 justify-end">
>>>>>>> origin/last-commit-recovery
            {/* Quick Links */}
            <div>
              <h4 className="text-emerald-400 font-semibold mb-4">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2">
<<<<<<< HEAD
                <li>
                  <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                    About Us
                  </Typography>
                </li>
                <li>
                  <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                    Our Impact
                  </Typography>
                </li>
                <li>
                  <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                    How It Works
                  </Typography>
                </li>
                <li>
                  <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                    Partners
                  </Typography>
                </li>
                <li>
                  <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                    Blogs
                  </Typography>
                </li>
=======
                {[
                  "About Us",
                  "Our Impact",
                  "How It Works",
                  "Partners",
                  "Blogs",
                ].map((item) => (
                  <li key={item}>
                    <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                      {item}
                    </Typography>
                  </li>
                ))}
>>>>>>> origin/last-commit-recovery
              </ul>
            </div>

            {/* For Users */}
            <div>
              <h4 className="text-emerald-400 font-semibold mb-4">For Users</h4>
<<<<<<< HEAD

              <ul className="flex flex-col gap-2">
                <li>
                  <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                    Become a Collector
                  </Typography>
                </li>
                <li>
                  <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                    Collection Centers
                  </Typography>
                </li>
                <li>
                  <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                    Recycling Centers
                  </Typography>
                </li>
                <li>
                  <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                    FAQs
                  </Typography>
                </li>
                <li>
                  <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                    Support
                  </Typography>
                </li>
=======
              <ul className="flex flex-col gap-2">
                {[
                  "Become a Collector",
                  "Collection Centers",
                  "Recycling Centers",
                  "FAQs",
                  "Support",
                ].map((item) => (
                  <li key={item}>
                    <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                      {item}
                    </Typography>
                  </li>
                ))}
>>>>>>> origin/last-commit-recovery
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-emerald-400 font-semibold mb-4">
                Contact Us
              </h4>

              <p className="font-medium mb-3">We’d Love to Hear From You!</p>

              <ul className="flex flex-col gap-2">
                <li className="flex gap-2 items-center">
                  <IoLocationOutline />
                  <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                    Lagos, Nigeria
                  </Typography>
                </li>
                <li className="flex gap-2 items-center">
                  <IoMailOutline />
                  <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                    plasticonn@gmail.com
                  </Typography>
                </li>
              </ul>

              <div className="mt-5">
                <p className="text-emerald-400 font-semibold mb-2">
                  Business Hours
                </p>
<<<<<<< HEAD

=======
>>>>>>> origin/last-commit-recovery
                <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                  Mon–Fri: 9:00 AM – 6:00 PM (WAT)
                </Typography>
                <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                  Sat: 10:00 AM – 4:00 PM (WAT)
                </Typography>
                <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                  Sun: Closed
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <Divider flexItem sx={{ borderColor: "#FAFAFA", marginTop: "1rem" }} />

      {/* Bottom bar */}
      <div className="">
        <div
          className="max-w-7xl  py-6
                    flex flex-col md:flex-row
                    items-center justify-between gap-4 text-sm"
        >
          <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
            © {new Date().getFullYear()} Plasticonn. All rights reserved.
          </Typography>

          <div className="flex items-center gap-4">
            <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
              Privacy Policy
            </Typography>
            <span>•</span>
            <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
              Terms Of Service
            </Typography>
          </div>
=======
      <Divider sx={{ borderColor: "#FAFAFA", marginTop: "2rem" }} />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Typography
          fontSize={16}
          //md={{ fontSize: 18 }}
          fontWeight={500}
          color="#E9F3EE"
        >
          © {new Date().getFullYear()} Plasticonn. All rights reserved.
        </Typography>

        <div className="flex items-center gap-3">
          <Typography fontSize={16} fontWeight={500} color="#E9F3EE">
            Privacy Policy
          </Typography>
          <span>•</span>
          <Typography fontSize={16} fontWeight={500} color="#E9F3EE">
            Terms Of Service
          </Typography>
>>>>>>> origin/last-commit-recovery
        </div>
      </div>
    </footer>
  );
};

export default Footer;
