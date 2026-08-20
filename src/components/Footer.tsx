import { Divider, Tooltip, Typography } from "@mui/material";
import logo from "../logo/logo.png";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const socials = [
    { icon: <FaInstagram />, link: "", name: "Instagram" },
    { icon: <FaXTwitter />, link: "", name: "X/Twitter" },
    { icon: <FaLinkedinIn />, link: "", name: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#053322] text-white px-[6%] lg:px-16 py-10 lg:py-6.75">
      <div className="max-w-7xl mx-auto">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-7 lg:max-w-md">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Plasticonn Logo"
                className="w-14 h-14 rounded-[46px]"
                fetchPriority="high"
              />
              <span className="text-2xl font-semibold">Plasticonn</span>
            </div>

            <Typography
              fontWeight={500}
              fontSize={18}
              color="#FAFAFA"
              sx={{ lineHeight: "1.625" }}
            >
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
                  >
                    {item.icon}
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* LINKS + CONTACT */}
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-10.5 justify-end">
            {/* Quick Links */}
            <div>
              <h4 className="text-emerald-400 font-semibold mb-4">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  { name: "About Us", path: "about" },
                  { name: "Our Impact", path: "impact" },
                  { name: "How it works", path: "works" },
                  { name: "Partners", path: "partners" },
                  { name: "Blogs", path: "blogs" },
                ].map((item) => (
                  <li
                    key={item.name}
                    onClick={() =>
                      navigate("/", { state: { scrollTo: item.path } })
                    }
                    className="cursor-pointer"
                  >
                    <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                      {item.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Users */}
            <div>
              <h4 className="text-emerald-400 font-semibold mb-4">For Users</h4>
              <ul className="flex flex-col gap-2">
                {[
                  {
                    name: "Become a Collector",
                    url: "https://app.plasticonn.com",
                  },
                  {
                    name: "Collection Centers",
                    url: "https://app.plasticonn.com",
                  },
                  {
                    name: "Recycling Centers",
                    url: "https://app.plasticonn.com",
                  },
                  { name: "FAQs", url: "" },
                  { name: "Support", url: "" },
                ].map((item) => (
                  <li
                    key={item.name}
                    onClick={() =>
                      window.open(item.url, "_blank", "noopener,noreferrer")
                    }
                  >
                    <Typography fontSize={18} fontWeight={500} color="#E9F3EE">
                      {item.name}
                    </Typography>
                  </li>
                ))}
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

      <Divider sx={{ borderColor: "rgba(250, 250, 250, 0.4)", mt: "2rem" }} />

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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
