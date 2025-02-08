import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Strategy from "./components/strategy";
import Campaing from "./components/campaing";
import SEO from "./components/seo-optimization";
import ContentCalendar from "./pages/content-calendar";
import ContentRequest from "./pages/content-request";
import EmailMarketing from "./pages/email-marketing";
import ContentAudit from "./pages/content-audit";
import AnalyticsReports from "./pages/analytics-reports";
import SeoAudit from "./pages/seo-audit";
import ContentForm from "./pages/conte-campaing-form";

const App = () => {
  return (
   <Router>
    <Routes>
      <Route index element={<Strategy />} />
      <Route path="campaing-planning" element={<Campaing />} />
      <Route path="seo-optimization" element={<SEO />} />
      <Route path="content-calendar" element={<ContentCalendar />} />
      <Route path="content-request" element={<ContentRequest />} />
      <Route path="email-marketing" element={<EmailMarketing />} />
      <Route path="content-audit" element={<ContentAudit />} />
      <Route path="analytics-reports" element={<AnalyticsReports />} />
      <Route path="seo-audit" element={<SeoAudit />} />
      <Route path="content-form" element={<ContentForm />} />
    </Routes>
   </Router>
  );
};

export default App;
