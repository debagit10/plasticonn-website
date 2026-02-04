import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Navbar from "../components/Navbar";
import Works from "../components/Works";

const LandingPage = () => {
  return (
    <div className="bg-[#043B24]">
      <Navbar />

      <Hero />

      <About />

      <Works />

      <Impact />

      <Footer />
    </div>
  );
};

export default LandingPage;
