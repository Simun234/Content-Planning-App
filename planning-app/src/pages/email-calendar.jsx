import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Table } from "lucide-react";

const EmailCalendar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const tableData = [
    {
      Email: "Reminder: 25% Discount in All Services",
      Status: "Sent",
      Type: "Reminder",
      Target: "All Users",
      Date: "Wed, Sep 16, 2020 09:40 AM",
      Headline: "Big Sale Alert!",
      Cta: "Shop Now",
    },
    {
      Email: "March Newsletter",
      Status: "In Progress",
      Type: "Newsletter",
      Target: "All Users",
      Date: "Fri, Sep 11, 2020 10:00 AM",
      Headline: "March Updates",
      Cta: "Read More",
    },
    {
      Email: "Mobile Application Webinar",
      Status: "Waiting to be Sent",
      Type: "Webinar",
      Target: "All Users",
      Date: "Sun, Sep 6, 2020 02:30 PM",
      Headline: "Join Our Webinar",
      Cta: "Register",
    },
    {
      Email: "January Newsletter",
      Status: "Sent",
      Type: "Newsletter",
      Target: "All Users",
      Date: "Sat, Sep 5, 2020 10:00 AM",
      Headline: "January Edition",
      Cta: "Read More",
    },
    {
      Email: "25% Discount in All Products",
      Status: "Waiting to be Sent",
      Type: "Newsletter",
      Target: "All Users",
      Date: "Fri, Sep 11, 2020 10:00 AM",
      Headline: "Limited Time Offer",
      Cta: "Shop Now",
    },
  ];



  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = tableData.filter((row) =>
    row.Email.toUpperCase().includes(filter.toUpperCase()) ||
    row.Status.toUpperCase().includes(filter.toUpperCase()) ||
    row.Type.toUpperCase().includes(filter.toUpperCase()) ||
    row.Target.toUpperCase().includes(filter.toUpperCase()) ||
    row.Date.toUpperCase().includes(filter.toUpperCase()) ||
    row.Headline.toUpperCase().includes(filter.toUpperCase()) ||
    row.Cta.toUpperCase().includes(filter.toUpperCase())
  );


  return (
    <>

      <div className="flex justify-center mt-12">
        <header className="w-80 md:w-[626px] lg:w-[748px] h-12 flex items-center justify-between bg-[#049E38] rounded">
          <div className="flex gap-4">
            <button
              className="flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]"
              onClick={() => navigate("/email-calendar")}
            >
              <Table className="w-5 h-5" /> Tracking
            </button>
            <button
              className="hidden md:flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]"
              onClick={() => navigate("/email-content")}
            >
              <Table className="w-5 h-5" /> Email Content
            </button>
            <button
              className="hidden md:flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]"
              onClick={() => navigate("/calendar")}
            >
              <Table className="w-5 h-5" /> Calendar
            </button>
          </div>
          
          <Menu 
                         className="w-6 h-6 text-white cursor-pointer mr-2 md:w-8 md:h-8" 
                         onClick={() => setMenuOpen(!menuOpen)} 
                       />

            {menuOpen && (
            <div className="absolute top-12 right-2 bg-white shadow-lg rounded-lg w-48">
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black"
                onClick={() => { navigate("/email-calendar"); setMenuOpen(false); }}
              >
                Tracking
              </button>
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black"
                onClick={() => { navigate("/email-content"); setMenuOpen(false); }}
              >
                Email Content
              </button>
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black"
                onClick={() => { navigate("/calendar"); setMenuOpen(false); }}
              >
                Calendar
              </button>
            </div>
          )}
               
        </header>
      </div>


      <div className="flex justify-center items-center mt-3">
        <main className="w-4/5 lg:w-[748px] flex items-center gap-2">
        <input
            type="text"
            placeholder="Search"
            value={filter}
            onChange={handleSearchChange}
            className="flex-1 h-12 border border-[#C6C9D7] rounded p-2 text-[#A1A7B3] focus:outline-none focus:ring-2 focus:ring-[#9C4DD3]"
          />
         
        </main>
      </div>


      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border-collapse rounded-lg">
          <thead className="bg-[#F3F3FE] text-left">
            <tr>
              <th className="px-4 py-2">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="p-4 font-serif font-bold">Email</th>
              <th className="p-4 font-serif font-bold">Status</th>
              <th className="p-4 font-serif font-bold">Type</th>
              <th className="p-4 font-serif font-bold">Target</th>
              <th className="p-4 font-serif font-bold">Date & Time</th>
              <th className="p-4 font-serif font-bold">Headline</th>
              <th className="p-4 font-serif font-bold">CTA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.map((row, index) => (
              <tr key={index} className="even:bg-gray-50">
                <td className="px-4 py-2">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="px-4 py-2">{row.Email}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded ${
                      row.Status === "Sent"
                        ? "bg-green-200 text-green-700"
                        : row.Status === "In Progress"
                        ? "bg-yellow-200 text-yellow-700"
                        : row.Status === "Waiting to be Sent"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {row.Status}
                  </span>
                </td>
                <td className="px-4 py-2">{row.Type}</td>
                <td className="px-4 py-2">{row.Target}</td>
                <td className="px-4 py-2">{row.Date}</td>
                <td className="px-4 py-2">{row.Headline}</td>
                <td className="px-4 py-2">{row.Cta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmailCalendar;
