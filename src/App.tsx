import React from "react";
import { Route, Routes } from "react-router-dom";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
