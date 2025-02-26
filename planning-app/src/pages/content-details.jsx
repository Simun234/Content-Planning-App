import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Table } from "lucide-react"; 

const ContentDetails = () => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

const tableData = [

  {
     title:"Feature Update Reminder Post",
     assignee:"",
     content:"Technology",
     socialMedia:"Instagram Twitter Facebook",
     publishDate:"May 16, 2022",
     publishTime:"9:00 AM",
     TwitterText:"",
     InstagramPostLink:"",
     status:"Waiting",   
  },

  {
    title:"The History and Importance of Software",
    assignee:"",
    content:"Technology",
    socialMedia:"Facebook",
    publishDate:"Nov 29, 2020",
    publishTime:"10:00 AM",
    TwitterText:"Software is the interface between computer systems and the people who use them.",
    InstagramPostLink:"",
    status:"Published",   
 },

 {
  title:"Fashion Brands Making Face Masks",
  assignee:"",
  content:"Fashion",
  socialMedia:"Instagram",
  publishDate:"Dec 8, 2020",
  publishTime:"2:00 AM",
  TwitterText:"",
  InstagramPostLink:"www.example.com/instagram",
  status:"Published",   
},

   {
     title:" How Should I Organize My Wardrobe?",
     assignee:"",
     content:"Fashion",
     socialMedia:"Instagram Twitter Facebook LinkedIn",
     publishDate:"Dec 1, 2020",
     publishTime:"9:30 AM",
     TwitterText:"Here are some tips to organize your cloths. First things first, categorize your cloths as shirts, long sleeves, hoodies, jackets, etc. Then order them based on their colors and hang them with this order.",
     InstagramPostLink:"www.example.com/instagram",
     status:"In Progress",   
  },
 
  {
    title:"Sushi Workshop",
    assignee:"",
    content:"Company Event",
    socialMedia:"Instagram Twitter Facebook LinkedIn",
    publishDate:"Nov 30, 2020",
    publishTime:"10:10 AM",
    TwitterText:"Now, we all have learned how to make California Roll and Sake Maki! ",
    InstagramPostLink:"www.example.com/instagram",
    status:"Published",   
 },

 {
  title:"Top 8 Groundbreaking Future Technologies",
  assignee:"",
  content:"Technology",
  socialMedia:"Instagram LinedIn Facebook",
  publishDate:"Dec 2, 2020",
  publishTime:"7:20 AM",
  TwitterText:"It will be a flood -- Tweet 1: Groundbreaking future",
  InstagramPostLink:"www.example.com/instagram",
  status:"In Progress",   
},

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
      
      
                <Menu 
                         className="w-6 h-6 text-white cursor-pointer mr-2 md:w-8 md:h-8" 
                         onClick={() => setMenuOpen(!menuOpen)} 
                       />

            {menuOpen && (
            <div className="absolute top-12 right-2 bg-white shadow-lg rounded-lg w-48">
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black"
                onClick={() => { navigate("/campaign-planning"); setMenuOpen(false); }}
              >
                Calendar
              </button>
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black"
                onClick={() => { navigate("/content-details"); setMenuOpen(false); }}
              >
                Content Details
              </button>
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black"
                onClick={() => { navigate("/event-celebrations"); setMenuOpen(false); }}
              >
                Events and Celebrations
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
      <table className="min-w-full bg-white rounded-lg">
        <thead className="bg-[#F3F3FE]">
          <tr>
            <th className="px-4 py-2">
              <input type="checkbox" className="w-4 h-4" />
            </th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Title</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Assignee</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Content Type</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Social Media Channel</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Publish Date</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Publish Time</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Twitter Text</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Instagram Post Link</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-2">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="px-4 py-2">{row.title}</td>
              
              <td className="px-4 py-2">{row.assignee}</td>
              <td className="px-4 py-2">{row.content}</td>
              <td className="px-4 py-2">{row.socialMedia}</td>
              <td className="px-4 py-2">{row.publishDate}</td>
              <td className="px-4 py-2">{row.publishTime}</td>
              <td className="px-4 py-2">{row.TwitterText}</td>
              <td className="px-4 py-2">{row.InstagramPostLink}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded ${
                    row.status === "Published"
                      ? "bg-green-200 text-green-700"
                      : row.status === "Awaiting Review"
                      ? "bg-yellow-200 text-yellow-700"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ContentDetails;
