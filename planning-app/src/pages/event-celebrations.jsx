import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Table } from "lucide-react"; 

const EventCelebrations = () => {

  const navigate = useNavigate();
 

  const data = [
    { event: "Easter Sunday", date: "April 12, 2020" },
    { event: "Earth Day", date: "April 22, 2020" },
    { event: "Memorial Day", date: "May 17, 2022" },
    { event: "Father's Day", date: "June 16, 2022" },
    { event: "Labor Day", date: "September 28, 2022" },
    { event: "Columbus Day", date: "October 23, 2022" },
    { event: "Halloween", date: "October 26, 2022" },
    { event: "Thanksgiving Day", date: "November 11, 2022" },
    { event: "Christmas Day", date: "December 28, 2022" },
    { event: "New Year's Day", date: "January 1, 2023" },
    { event: "Martin Luther King Jr. Day", date: "January 20, 2023" },
    { event: "National Freedom Day", date: "February 1, 2023" },
    { event: "Groundhog Day", date: "February 9, 2023" },
  ];

  return (
    <>
     <div className="flex justify-center mt-12">
              <header className="w-80 md:w-[626px] lg:w-[748px] h-12 flex items-center justify-between bg-[#049E38] rounded">
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm ml-2 md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]" onClick={() => navigate("/campaign-planning")}>
                    <Table className="w-5 h-5" /> Calendar
                  </button>
      
      
                  <button className="hidden md:flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]" onClick={() => navigate("/content-details")}>
                    <Table className="w-5 h-5" /> Content Details
                  </button>
      
                  
                  <button className="hidden md:flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]" onClick={() => navigate("/event-celebrations")}>
                    <Table className="w-5 h-5" /> Events and Celebrations
                  </button>
                </div>
      
      
                <Menu className="w-6 h-6 text-white cursor-pointer mr-2 md:w-8 md:h-8" />
              </header>
            </div>
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b text-left">Event/Celebration Name</th>
            <th className="py-2 px-4 border-b text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">{item.event}</td>
              <td className="py-2 px-4">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default EventCelebrations;
