import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button className="bg-teal-500 text-white py-3 px-5 rounded-md shadow-md">
              Content Calendar
            </button>
            <button className="bg-teal-500 text-white py-3 px-5 rounded-md shadow-md">
              Content Request
            </button>
            <button className="bg-black text-white py-3 px-5 rounded-md shadow-md">
              Social Media Planning
            </button>
            <button className="bg-black text-white py-3 px-5 rounded-md shadow-md">
              Email Marketing Planner
            </button>
            <button className="bg-black text-white py-3 px-5 rounded-md shadow-md">
              Content Audit
            </button>
            <button className="bg-black text-white py-3 px-5 rounded-md shadow-md">
              SMA
            </button>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
