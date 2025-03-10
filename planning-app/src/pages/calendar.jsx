import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Table, ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
  const navigate = useNavigate();
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState(""); 

  const goToPreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const getDaysInMonth = (date) => {
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const days = [];
    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      days.push(i);
    }
    return days;
  };

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = getDaysInMonth(currentDate);


  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };


  const filteredDays = days.filter((day) => {
    return day.toString().includes(filter);
  });

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
                onClick={() => {
                  navigate("/email-calendar");
                  setMenuOpen(false);
                }}
              >
                Tracking
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black"
                onClick={() => {
                  navigate("/email-content");
                  setMenuOpen(false);
                }}
              >
                Email Content
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black"
                onClick={() => {
                  navigate("/calendar");
                  setMenuOpen(false);
                }}
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
            className="flex-1 h-12 border border-[#C6C9D7] rounded p-2 text-[#A1A7B3] focus:outline-none focus:ring-2 focus:ring-[#9C4DD3]"
            value={filter} 
            onChange={handleSearchChange} 
          />
          
        </main>
      </div>

      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <button className="p-2" onClick={goToPreviousMonth}>
            <ChevronLeft />
          </button>
          <div className="text-center">
            <h2 className="text-xl font-semibold">{month}</h2>
            <span className="text-gray-500">{year}</span>
          </div>
          <button className="p-2" onClick={goToNextMonth}>
            <ChevronRight />
          </button>
        </div>

        <div className="grid grid-cols-7 text-center text-gray-700 font-semibold">
          {weekdays.map((day, idx) => (
            <div key={idx} className="p-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 text-center">
          {filteredDays.map((day) => ( 
            <div
              key={day}
              className={`p-3 m-1 rounded-full ${
                day === 10 ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
