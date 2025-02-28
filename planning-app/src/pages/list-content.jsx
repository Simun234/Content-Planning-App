import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Table } from "lucide-react"; 

const ListContent = () => {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [filter, setFilter] = useState("");

const tableData = [

  {
     type:"Guest Post",
     suggested:"5 Tools to Boost Your Conversion Rates",
     progress:"In Progress",
     Assigned:"Writer",
     Editor:"No Review",
     writer:"Willie Pisano",
     month:"December",
     count:"1298",
     cost:"$7450", 
  },

  {
    type:"Resource Article",
    suggested:"Cell Metabolism",
    progress:"In Progress",
    Assigned:"Writer",
    Editor:"No Review",
    writer:"Maria Hawley",
    month:"December",
    count:"432",
    cost:"$3500", 
 },

 {
  type:"Blog Post",
  suggested:"Travel: Expectations vs. Reality",
  progress:"Added to backlog",
  Assigned:"Writer",
  Editor:"No Review",
  writer:"Joyce Sawicki",
  month:"December",
  count:"350",
  cost:"$0", 
},
 
{
  type:"Inspirational",
  suggested:"How To Avoid Burnout",
  progress:"Published",
  Assigned:"Company",
  Editor:"Reviewed",
  writer:"The Makery",
  month:"December",
  count:"538",
  cost:"$2350", 
},

{
  type:"Infographic",
  suggested:"The Potential of Social Media",
  progress:"In editorial review",
  Assigned:"Designer",
  Editor:"No Review",
  writer:" Rose Hunter",
  month:"December",
  count:"",
  cost:"$0", 
},

{
  type:"Blog Post",
  suggested:"Meditation for Personal Growth",
  progress:"Added to backlog",
  Assigned:"Writer",
  Editor:"No Review",
  writer:"Justin Spivey",
  month:"December",
  count:"1275",
  cost:"$8000", 
},

];


const handleSearchChange = (e) => {
  setFilter(e.target.value);
};

const filteredData = tableData.filter((row) =>
  row.type.toUpperCase().includes(filter.toUpperCase()) ||
  row.suggested.toUpperCase().includes(filter.toUpperCase()) ||
  row.progress.toUpperCase().includes(filter.toUpperCase()) ||
  row.Assigned.toUpperCase().includes(filter.toUpperCase()) ||
  row.Editor.toUpperCase().includes(filter.toUpperCase()) ||
  row.writer.toUpperCase().includes(filter.toUpperCase()) ||
  row.month.toUpperCase().includes(filter.toUpperCase())  ||
  row.count.toUpperCase().includes(filter.toUpperCase()) ||
  row.cost.toUpperCase().includes(filter.toUpperCase())
);





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
        <main className="w-80 md:w-[626px] lg:w-[748px] flex items-center gap-2">

        <input
            type="text"
            placeholder="Search"
            value={filter}
            onChange={handleSearchChange}
            className="flex-1 h-12 border border-[#C6C9D7] rounded p-2 text-[#A1A7B3] focus:outline-none focus:ring-2 focus:ring-[#9C4DD3]"
          />


         
        </main>
      </div>
      <table className="min-w-full justify-center bg-white rounded-lg">
        <thead className="bg-[#F3F3FE]">
          <tr>
            <th className="px-4 py-2">
              <input type="checkbox" className="w-4 h-4" />
            </th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Type</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Suggseted Topic/Artwork</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Progress</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Assigned To</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Editor Rewiev Status</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Writer/Designer/Company Name</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Month</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Word Count</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Cost($)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-2">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="px-4 py-2">{row.type}</td>
              <td className="px-4 py-2">{row.suggested}</td>
              <td className="px-4 py-2">{row.progress}</td>
              <td className="px-4 py-2">{row.Assigned}</td>
              <td className="px-4 py-2">{row.Editor}</td>
              <td className="px-4 py-2">{row.writer}</td>
              <td className="px-4 py-2">{row.month}</td>
              <td className="px-4 py-2">{row.count}</td>
              <td className="px-4 py-2">{row.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListContent;
