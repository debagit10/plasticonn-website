import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import Blog from "./pages/Blog";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
