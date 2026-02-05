import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Journey from "../components/Journey";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Works from "../components/Works";

const LandingPage = () => {
  return (
    <div className="bg-[#043B24]">
      <Navbar />

      <Hero />

      <About />

      <Works />

      <Impact />

      <Journey />

      <Partners />

      <Footer />
    </div>
  );
};

export default LandingPage;
