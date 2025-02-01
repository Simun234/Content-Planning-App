import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Strategy from "./components/strategy";
import Campaign from "./components/campaign";
import SEO from "./components/seo-optimization";

const App = () => {
  return (
   <Router>
    <Routes>
      <Route index element={<Strategy />} />
      <Route path="campaing-planning" element={<Campaign />} />
      <Route path="seo-optimization" element={<SEO />} />
    </Routes>
   </Router>
  );
};

export default App;
