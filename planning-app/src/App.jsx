import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Strategy from "./components/strategy";
import Campaing from "./components/campaing";
import SEO from "./components/seo-optimization";

const App = () => {
  return (
   <Router>
    <Routes>
      <Route index element={<Strategy />} />
      <Route path="campaing-planning" element={<Campaing />} />
      <Route path="seo-optimization" element={<SEO />} />
    </Routes>
   </Router>
  );
};

export default App;
