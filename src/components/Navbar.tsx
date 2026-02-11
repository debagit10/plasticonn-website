import { Button, Typography } from "@mui/material";
import { useState } from "react";
import logo from "../logo/logo.png";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <div className="flex justify-between items-center px-6 md:px-16 py-4 bg-[#2F5F4B] text-white">
        {/* Logo */}
        <div className="flex gap-4 items-center" onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="Plasticonn logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <Typography fontSize={26} fontWeight={400}>
            Plasticonn
          </Typography>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">
          {[
            { name: "About Us", path: "about" },
            //{ name: "Gallery", path: "gallery" },
            { name: "Impact", path: "impact" },
            { name: "How it works", path: "works" },
          ].map((item) => (
            <li
              key={item.name}
              className="group relative cursor-pointer capitalize hover:text-[#00C281]"
            >
              <Typography
                fontSize={18}
                onClick={() =>
                  navigate("/", { state: { scrollTo: item.path } })
                }
              >
                {item.name}
              </Typography>

              <span className="absolute -bottom-1.25 left-1/2 w-0 h-0.5 bg-[#00C281] transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2"></span>
            </li>
          ))}

          <Button
            variant="contained"
            disableElevation
            sx={{
              borderRadius: "16px",
              backgroundColor: "#00C281",
              textTransform: "capitalize",
              height: "56px",
              width: "180px",
              "&:hover": {
                backgroundColor: "#00a96f",
              },
            }}
          >
            <Typography fontSize={20}>Get Started</Typography>
          </Button>
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(true)}>
          <IoMenu />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col h-[60%]">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <div
              className="flex items-center gap-2"
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                alt="Plasticonn logo"
                width={36}
                height={36}
                className="rounded-full"
              />
              <Typography fontSize={20} fontWeight={400} color="#2F5F4B">
                Plasticonn
              </Typography>
            </div>

            <button className="text-2xl" onClick={() => setOpen(false)}>
              <IoCloseSharp />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center gap-4 mt-7 text-[#2F5F4B]">
            {[
              { name: "About Us", path: "about" },
              //{ name: "Gallery", path: "gallery" },
              { name: "Impact", path: "impact" },
              { name: "How it works", path: "works" },
            ].map((item) => (
              <Typography
                key={item.name}
                fontSize={18}
                onClick={() =>
                  navigate("/", { state: { scrollTo: item.path } })
                }
              >
                {item.name}
              </Typography>
            ))}
          </div>

          {/* Button */}
          <div className="mt-auto px-6 pb-8">
            <Button
              fullWidth
              variant="contained"
              disableElevation
              sx={{
                borderRadius: "16px",
                backgroundColor: "#00C281",
                textTransform: "capitalize",
                height: "56px",
                "&:hover": {
                  backgroundColor: "#00a96f",
                },
              }}
            >
              <Typography fontSize={18}>Get Started</Typography>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
