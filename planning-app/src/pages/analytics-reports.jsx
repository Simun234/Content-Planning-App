import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Table } from "lucide-react"; 

const AnalyticsReports = () => {

   const navigate = useNavigate();

const tableData = [

  {
     Month:"January",
     FollowersBefore:"20000",
     FollowersAfter:"20137",
     FollowerGainLost:"137 gained",
     Likes:"11933",
     Comments:"8657",
     CTR:"%0.090.62",
     Shares:"793",
     Conversion:"14861",   
  },

  {
    Month:"February",
    FollowersBefore:"21870",
    FollowersAfter:"22831",
    FollowerGainLost:"961 gained",
    Likes:"6543",
     Comments:"332",
     CTR:"%0.570.72",
     Shares:"324",
     Conversion:"13047",
  },

  {
     Month:"March",
     FollowersBefore:"8950",
     FollowersAfter:"10574",
     FollowerGainLost:"1624 gained",
     Likes:"7583",
     Comments:"654",
     CTR:"%0.991",
     Shares:"1956",
     Conversion:"8495",
  },

  {
     Month:"April",
     FollowersBefore:"20789",
     FollowersAfter:"20783",
     FollowerGainLost:"6 lost",
     Likes:"9300",
     Comments:"765",
     CTR:"%0.10.77",
     Shares:"499",
     Conversion:"21982",
  },

  {
     Month:"May",
     FollowersBefore:"8594",
     FollowersAfter:"8640",
     FollowerGainLost:"46 gained",
     Likes:"4483",
     Comments:"552",
     CTR:"%10.96",
     Shares:"647",
     Conversion:"7958",
  },

  {
     Month:"June",
     FollowersBefore:"6689",
     FollowersAfter:"6643",
     FollowerGainLost:"46 lost",
     Likes:"1244",
     Comments:"342",
     CTR:"%0.980.85",
     Shares:"123",
     Conversion:"5698",
  },

];



  return (
    <>
      <div className="flex justify-center mt-12">
        <header className="w-80 md:w-[626px] lg:w-[748px] h-12 flex items-center justify-between bg-[#049E38] rounded">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm ml-2 md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]"onClick={() => navigate("/analytics-reports")} >
              <Table className="w-5 h-5" /> Top Content
            </button>

            <button className="hidden md:flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]" onClick={() => navigate("/analytics-reports")}>
              <Table className="w-5 h-5" /> Analytics
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
      <table className="min-w-full bg-white rounded-lg text-center">
        <thead className="bg-[#F3F3FE]">
          <tr>
            <th className="px-4 py-2">
              <input type="checkbox" className="w-4 h-4" />
            </th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Month</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Follower | Before</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Follower | After</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Follower | Gain/Lost</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Likes</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Comments</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">CTR</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Shares</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Conversion</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tableData.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="px-4 py-2">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="px-4 py-2 bg-[#E3F2FD] font-bold">{row.Month}</td>
              <td className="px-4 py-2">{row.FollowersBefore}</td>
              <td className="px-4 py-2">{row.FollowersAfter}</td>
              <td className="px-4 py-2">{row.FollowerGainLost}</td>
              <td className="px-4 py-2">{row.Likes}</td>
              <td className="px-4 py-2">{row.Comments}</td>
              <td className="px-4 py-2">{row.CTR}</td>
              <td className="px-4 py-2">{row.Shares}</td>
              <td className="px-4 py-2">{row.Conversion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AnalyticsReports;
