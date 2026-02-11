import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../components/About";
import Blogs from "../components/Blog";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Journey from "../components/Journey";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Team from "../components/Team";
import Works from "../components/Works";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="bg-[#043B24]">
      <div className="fixed w-full z-100 ">
        <Navbar />
      </div>

      <div className="pt-20">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="works">
        <Works />
      </div>

      <div id="impact">
        <Impact />
      </div>

      <div id="team">
        <Team />
      </div>

      <div id="journey">
        <Journey />
      </div>

      <div id="blogs">
        <Blogs />
      </div>

      <div id="partners">
        <Partners />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
