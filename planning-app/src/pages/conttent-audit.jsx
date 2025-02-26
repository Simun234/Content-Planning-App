import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Table } from "lucide-react";

const ConttentAudit = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const tableData = [
    { writer: "Willie Pisano", suggested: "5 Tools to Boost Your Conversion Rates", cost: "$7450" },
    { writer: "Maria Hawley", suggested: "Cell Metabolism", cost: "$3500" },
    { writer: "Joyce Sawicki", suggested: "Travel: Expectations vs. Reality", cost: "$0" },
    { writer: "Joyce Sawicki", suggested: "The Worst Advice We Ever Heard About Design", cost: "$3250" },
    { writer: "The Makery", suggested: "How To Avoid Burnout", cost: "$2350" },
    { writer: "Rose Hunter", suggested: "The Potential of Social Media", cost: "$0" },
  ];

  return (
    <>

      <div className="flex justify-center mt-12">
        <header className="w-[748px] h-12 flex items-center justify-between bg-[#049E38] rounded px-4">
          <div className="flex gap-4">
            <button
              className="flex items-center gap-2 bg-[#9C4DD3] text-white font-bold text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]"
              onClick={() => navigate("/conttent-audit")}
            >
              <Table className="w-5 h-5" /> Writers/Designers
            </button>

            <button
              className="hidden md:flex items-center gap-2 bg-[#9C4DD3] text-white font-bold text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]"
              onClick={() => navigate("/list-content")}
            >
              <Table className="w-5 h-5" /> List of Content
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
                onClick={() => { navigate("/conttent-audit"); setMenuOpen(false); }}
              >
                 Writers/Designers
              </button>
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black"
                onClick={() => { navigate("/list-content"); setMenuOpen(false); }}
              >
               List of Content
              </button>
            </div>
          )}

        </header>
      </div>


      <div className="flex justify-center items-center mt-3">
        <main className="w-[748px] flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 h-12 border border-gray-300 rounded p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#9C4DD3]"
          />
          <button className="w-16 h-12 bg-white border border-gray-300 rounded text-gray-600 hover:bg-gray-200">
            Filter
          </button>
        </main>
      </div>


      <div className="flex justify-center mt-6">
        <table className="w-[748px] bg-white rounded-lg border-collapse shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">
                <input type="checkbox" className="w-5 h-5" />
              </th>
              <th className="font-bold text-lg text-black p-4">Writer/Designer/Company Name</th>
              <th className="font-bold text-lg text-black p-4">Suggested Topic/Artwork</th>
              <th className="font-bold text-lg text-black p-4">Cost ($)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-left">
                  <input type="checkbox" className="w-5 h-5" />
                </td>
                <td className="px-4 py-3 text-left">{row.writer}</td>
                <td className="px-4 py-3 text-left">{row.suggested}</td>
                <td className="px-4 py-3 text-left">{row.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ConttentAudit;
