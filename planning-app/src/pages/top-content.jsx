import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Table } from "lucide-react"; 

const TopContent = () => {

const navigate = useNavigate();

  const [posts] = useState([
    { id: 1, title: "What Is Beyond We See?", date: "Mar 18, 2020 09:00 AM" },
    { id: 2, title: "What Are We Missing?", date: "Jan 20, 2020 11:20 AM" },
    { id: 3, title: "Everything You Should Know Before Starting", date: "Apr 8, 2020 10:00 AM" },
    { id: 4, title: "Dilemmas", date: "Feb 3, 2020 09:40 AM" }
  ]);

  return (
    <>
    <div className="flex justify-center mt-12">
            <header className="w-80 md:w-[626px] lg:w-[748px] h-12 flex items-center justify-between bg-[#049E38] rounded">
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm ml-2 md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]"onClick={() => navigate("/top-content")} >
                  <Table className="w-5 h-5" /> Top Content
                </button>
    
                <button className="hidden md:flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]" onClick={() => navigate("/analytics-reports")}>
                  <Table className="w-5 h-5" /> Analytics
                </button>
              </div>
    
              <Menu className="w-6 h-6 text-white cursor-pointer mr-2 md:w-8 md:h-8" />
            </header>
          </div>

    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
    <tr>
      <th className="p-3 text-left">
        <input type="checkbox" className="accent-blue-500" />
      </th>
      <th className="p-3 text-left">
        <span className="flex items-center">
          Post Title 
        </span>
      </th>
      <th className="p-3 text-left">
        <span className="flex items-center">
          Channel 
        </span>
      </th>
      <th className="p-3 text-left bg-blue-100">
        <span className="flex items-center">
          Month
        </span>
      </th>
      <th className="p-3 text-left">
        <span className="flex items-center">
          Post Date 
        </span>
      </th>
    </tr>
  </thead>
          <tbody className="text-gray-700">
            {posts.map((post, index) => (
              <tr key={post.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <input type="checkbox" className="accent-blue-500" />
                </td>
                <td className="p-3">{post.title}</td>
                <td className="p-3 text-center">-</td>
                <td className="p-3 text-center bg-blue-50">-</td>
                <td className="p-3">{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default TopContent;
