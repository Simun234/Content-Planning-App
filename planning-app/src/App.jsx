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
import EmailCalendar from "./pages/email-calendar";
import EmailPlan from "./pages/email-plan";
import ConttentAudit from "./pages/conttent-audit";
import CampaignPlanning from "./pages/campaign-planning";
import ListContent from "./pages/list-content";
import EmailContent from "./pages/email-content";
import Calendar from "./pages/calendar";
import ContentDetails from "./pages/content-details";
import EventCelebration from "./pages/event-celebrations";
import TopContent from "./pages/top-content";
import AuthorsTimesheet from "./pages/authors-timesheet";
import ContentAuditForm from "./pages/content-audit-form";

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
      <Route path="email-calendar" element={<EmailCalendar />} />
      <Route path="email-plan" element={<EmailPlan />} />
      <Route path="conttent-audit" element={<ConttentAudit />} />
      <Route path="campaign-planning" element={<CampaignPlanning/>} />
      <Route path="list-content" element={<ListContent/>} />
      <Route path="email-content" element={<EmailContent/>} />
      <Route path="calendar" element={<Calendar/>} />
      <Route path="content-details" element={<ContentDetails/>} />
      <Route path="event-celebrations" element={<EventCelebration/>} />
      <Route path="top-content" element={<TopContent/>} />
      <Route path="authors-timesheet" element={<AuthorsTimesheet/>} />
      <Route path="audit-form" element={<ContentAuditForm/>} />
    </Routes>
   </Router>
  );
};

export default App;
