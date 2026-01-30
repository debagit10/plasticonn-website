import { Button, Typography } from "@mui/material";
import logo from "../logo/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#FAFAFA33] px-16 py-6.75 items-center text-white">
      <div className="flex gap-4 items-center">
        <img
          src={logo}
          alt="Plasticonn logo"
          width={56}
          height={56}
          className="rounded-[46px]"
        />
        <Typography fontSize={36} fontWeight={400}>
          Plasticonn
        </Typography>
      </div>

      <ul className="flex gap-10.5 items-center">
        <li>
          <Typography fontSize={26} fontWeight={400}>
            About Us
          </Typography>
        </li>
        <li>
          <Typography fontSize={26} fontWeight={400}>
            Gallery
          </Typography>
        </li>
        <li>
          <Typography fontSize={26} fontWeight={400}>
            Our Impact
          </Typography>
        </li>
        <li>
          <Typography fontSize={26} fontWeight={400}>
            How It Works
          </Typography>
        </li>

        <li>
          <Button
            disableElevation
            variant="contained"
            sx={{
              borderRadius: "16px",
              backgroundColor: "#00C281",
              textTransform: "capitalize",
              //padding: "16px",
              height: "60px",
              width: "200px",
            }}
          >
            <Typography fontSize={24} fontWeight={400}>
              Get Started
            </Typography>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
