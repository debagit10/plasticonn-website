import { useEffect, useState } from "react";
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
import api from "../utils/axiosInstance";
import Gallery from "../components/Gallery";

export interface DashboardStats {
  hero: HeroStats;
  impact: ImpactStats;
  solution: SolutionStats;
  timestamp: string;
}

export interface HeroStats {
  activeCollectors: number;
  totalCollectionCenters: number;
  totalRecyclingCenters: number;
  percentRecycled: number;
  avgPlasticsPerMonth: number;
}

export interface ImpactStats {
  totalPlasticsCollected: number;
  successfullyRecycled: number;
  activeParticipants: number;
  co2EmissionsSaved: number;
  monthlyCollectionTrend: MonthlyCollectionTrend[];
  plasticTypesDistribution: PlasticTypesDistribution[];
}

export interface MonthlyCollectionTrend {
  month: string;
  amount: number;
}

export interface PlasticTypesDistribution {
  label: string;
  value: number;
  color: string;
}

export interface SolutionStats {
  plasticsRecycled: number;
  totalActiveUsers: number;
}

const LandingPage = () => {
  const location = useLocation();

  const [dashboard, setDashboard] = useState<DashboardStats>();

  const getPartners = async () => {
    const response = await api.get("/api/website");

    setDashboard(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    getPartners();
  }, []);

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

      {dashboard && (
        <>
          <div className="pt-20">
            <Hero data={dashboard.hero} />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="gallery">
            <Gallery />
          </div>

          <div id="works">
            <Works />
          </div>

          <div id="impact">
            <Impact impactstats={dashboard.impact} />
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
        </>
      )}

      <Footer />
    </div>
  );
};

export default LandingPage;
