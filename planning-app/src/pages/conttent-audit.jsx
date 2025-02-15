import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Table } from "lucide-react"; 

const ConttentAudit = () => {

  const navigate = useNavigate();

const tableData = [

  {
     writer:"Willie Pisano",
     sugested:"5 Tools to Boost Your Conversion Rates",
     cost:"$7450",
  },

  {
    writer:"Maria Hawley",
    sugested:"Cell Metabolism",
    cost:"$3500",
 },


 {
  writer:"Joyce Sawicki",
  suggested:"Travel: Expectations vs. Reality",
  cost:"$0",
},

{
  writer:"Joyce Sawicki",
  suggested:"The Worst Advice We Ever Heard About Design",
  cost:"$3250",
},


{
  writer:"The Makery",
  suggested:"How To Avoid Burnout",
  cost:"$2350",
},


{
  writer:"Rose Hunter",
  suggested:"The Potential of Social Media",
  cost:"$0",
},


];



  return (
    <>
      <div className="flex justify-center mt-12">
        <header className="w-80 md:w-[626px] lg:w-[748px] h-12 flex items-center justify-between bg-[#049E38] rounded">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm ml-2 md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]" onClick={() => navigate("/conttent-audit")}>
              <Table className="w-5 h-5" /> Writers/Designers
            </button>


            <button className="hidden md:flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]" onClick={() => navigate("/list-content")}>
              <Table className="w-5 h-5" /> List of Content
            </button>
          </div>


          <Menu className="w-6 h-6 text-white cursor-pointer mr-2 md:w-8 md:h-8" />
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
      <table className="min-w-full bg-white rounded-lg border-collapse">
  <thead className="bg-[#F3F3FE]">
    <tr>
      <th className="px-6 py-4 text-left">
        <input type="checkbox" className="w-5 h-5" />
      </th>
      <th className="font-serif font-bold text-sm text-[#000] p-4 md:text-lg">Writer/Designer/Company Name</th>
      <th className="font-serif font-bold text-sm text-[#000] p-4 md:text-lg">Suggested Topic/Artwork</th>
      <th className="font-serif font-bold text-sm text-[#000] p-4 md:text-lg">Cost ($)</th>
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


    </>
  );
}

export default ConttentAudit;
