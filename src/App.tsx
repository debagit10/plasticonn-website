import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
