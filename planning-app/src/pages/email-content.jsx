import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Table } from "lucide-react";

const EmailContent = () => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const tableData = [
    {
      Email: "Mobile Application Webinar",
      status: "Sent",
      Type: "Webinar",
      Target: "All Users",
      Date: "Sun, Sep 6, 2020 02:30 PM",
      Headline: "Webinar.Start 2020 with a Brand New Mobile App",
      Cta: "Register NOW",
    },
    {
      Email: "Reminder: 25% Discount in All Services",
      status: "In Progress",
      Type: "Reminder",
      Target: "All Users",
      Date: "Sat, Sep 19, 2020 09:40 AM",
      Headline: "Last Day of 25% Discount",
      Cta: "Get Your Discount",
    },
    {
      Email: "Summer Campaign Reminder #1",
      status: "Planned",
      Type: "Reminder",
      Target: "All Users",
      Date: "Wed, Sep 23, 2020 02:30 PM",
      Headline: "Don't Miss out this Coolest Campaign",
      Cta: "Glance the Prices",
    },
    {
      Email: "January Newsletter",
      status: "Sent",
      Type: "Newsletter",
      Target: "All Users",
      Date: "Sat, Sep 5, 2020 10:00 AM",
      Headline: "January Newsletter",
      Cta: "Read More",
    },
    {
      Email: "March Newsletter",
      status: "Waiting to be Sent",
      Type: "Newsletter",
      Target: "All Users",
      Date: "Fri, Sep 11, 2020 10:00 AM",
      Headline: "March Newsletter",
      Cta: "Read More",
    },
    {
      Email: "Q1 Customer Survey",
      status: "In Progress",
      Type: "Survey",
      Target: "Users Registered Before 2020",
      Date: "Fri, Sep 18, 2020 10:30 AM",
      Headline: "We Care About All of Your Thoughts",
      Cta: "Click Here",
    },
  ];

  return (
    <>

      <div className="flex justify-center mt-12">
        <header className="w-80 md:w-[626px] lg:w-[748px] h-12 flex items-center justify-between bg-[#049E38] rounded">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]" onClick={() => navigate("/email-calendar")}>
              <Table className="w-5 h-5" /> Tracking
            </button>
            <button className="hidden md:flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]" onClick={() => navigate("/email-content")}>
              <Table className="w-5 h-5" /> Email Content
            </button>
            <button className="hidden md:flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]" onClick={() => navigate("/calendar")}>
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
        <main className="w-80 md:w-[626px] lg:w-[748px] flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 h-12 border border-[#C6C9D7] rounded p-2 text-[#A1A7B3] focus:outline-none focus:ring-2 focus:ring-[#9C4DD3]"
          />
          <button className="w-16 h-12 bg-[#FBFBFE] border border-[#E3E3E9] rounded text-[#8585A9] hover:bg-[#E3E3E9]">
            Filter
          </button>
        </main>
      </div>


      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-[#F3F3FE] text-left">
            <tr>
              <th className="px-4 py-2">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="font-serif font-bold text-sm text-[#000] p-4 md:text-lg">
                E-mail
              </th>
              <th className="font-serif font-bold text-sm text-[#000] p-4 md:text-lg">
                Status
              </th>
              <th className="font-serif font-bold text-sm text-[#000] p-4 md:text-lg">
                Type
              </th>
              <th className="font-serif font-bold text-sm text-[#000] p-4 md:text-lg">
                Target
              </th>
              <th className="font-serif font-bold text-sm text-[#000] p-4 md:text-lg">
                Date & Time
              </th>
              <th className="font-serif font-bold text-sm text-[#000] p-4 md:text-lg">
                Headline
              </th>
              <th className="font-serif font-bold text-sm text-[#000] p-4 md:text-lg">
                CTA
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="px-4 py-2">{row.Email}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded ${
                      row.status === "Sent"
                        ? "bg-green-200 text-green-700"
                        : row.status === "In Progress"
                        ? "bg-yellow-200 text-yellow-700"
                        : row.status === "Waiting to be Sent"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {row.status}
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

export default EmailContent;
