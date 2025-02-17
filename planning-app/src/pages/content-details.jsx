import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Table } from "lucide-react"; 

const ContentDetails = () => {

  const navigate = useNavigate();

const tableData = [

  {
     headline:"Exploring the Depths of the Ocean",
     status:"Awaiting Review",
     category:"Science & Nature",
     subHead:"A journey into the world beneath the waves",
     link:"https://learning-center.homesciencetools.com/article/ocean-depths-science-lesson/",
     publishDate:"2025-01-25",
     socialPlatforms:"Facebook, Instagram",
     fbCaption:"Dive into the mysterious world of the ocean with us!",
     linkedinCaption:"Discover the wonders and challenges of ocean exploration.",   
  },

  {
     headline:"The Rise of Electric Vehicle",
     status:"Published",
     category:"Technology",
     subHead:"How electric vehicles are changing the automotive industry",
     link:"https://www.resources.org/common-resources/electric-vehicles-hot-new-technology-or-bust/?gad_source=1&gclid=CjwKCAiAwaG9BhAREiwAdhv6Y4hFk5eU9D5nWRJHn3AFaLSVxLmtcPwFpN_GPDwLeneEvmrzQrDu4xoC_hIQAvD_BwE",
     publishDate:"2025-02-10",
     socialPlatforms:"Twitter, LinkedIn",
     fbCaption:"Are electric vehicles the future? Learn more about their impact!",
     linkedinCaption:"Electric vehicles are transforming the future of transportation.",
  },

  {
     headline:"Mindfulness in the Modern World",
     status:"Draft",
     category:"Health & Wellness",
     subHead:"How to find peace in a busy world",
     link:"https://yso.soas.ac.uk/product/mindfulness-in-the-modern-world/",
     publishDate:"2025-02-12",
     socialPlatforms:"Instagram, Facebook",
     fbCaption:"Mindfulness can improve your life in so many ways. Start today!",
     linkedinCaption:"Take control of your mental well-being through mindfulness practices.",
  },

  {
     headline:"The Secrets Behind Ancient Architecture",
     status:"Published",
     category:"History & Culture",
     subHead:"Exploring the techniques and stories behind iconic structures",
     link:"https://www.discovermagazine.com/the-sciences/the-3-secrets-behind-ancient-mayas-super-strong-architecture",
     publishDate:"2025-03-05",
     socialPlatforms:"Twitter, Facebook",
     fbCaption:"Uncover the ancient secrets of architectural marvels that stand the test of time.",
     linkedinCaption:"Learn how ancient civilizations built structures that still inspire today.",
  },

  {
     headline:"The Psychology of Happiness",
     status:"Awaiting Review",
     category:"Psychology",
     subHead:"Understanding what makes us happy and how to achieve it",
     link:"https://compassionandwisdom.org/what-is-happiness/?gad_source=1&gclid=CjwKCAiAwaG9BhAREiwAdhv6Y8Nt7xCwDj3axeR_qzew7dd9-nJxzq02ztbQTVCEhoh_VNIlud9slxoCu0cQAvD_BwE",
     publishDate:"2025-02-01",
     socialPlatforms:"Facebook, Instagram",
     fbCaption:"What truly makes us happy? Explore the science of joy and well-being.",
     linkedinCaption:"The path to happiness may be simpler than you think. Discover how!",
  },

  {
     headline:"The Future of Space Travel",
     status:"Published",
     category:"Space & Astronomy",
     subHead:"What’s next in the race to explore the cosmos?",
     link:"https://spaceport.academy/?gad_source=1&gclid=CjwKCAiAwaG9BhAREiwAdhv6Yz8BLcxiicnNPOQtqTXLJYPszBcrYntQQ8nqePD4lvttPtpYzF7KERoCX2gQAvD_BwE",
     publishDate:"2025-02-22",
     socialPlatforms:"Twitter, LinkedIn",
     fbCaption:"Space exploration is no longer just a dream—it's becoming reality!",
     linkedinCaption:"Stay updated on the latest breakthroughs in space technology.",
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
      
                  
                  <button className="hidden md:flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]" onClick={() => navigate("")}>
                    <Table className="w-5 h-5" /> Events and Celebrations
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
      <table className="min-w-full bg-white rounded-lg">
        <thead className="bg-[#F3F3FE]">
          <tr>
            <th className="px-4 py-2">
              <input type="checkbox" className="w-4 h-4" />
            </th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Headline</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Status</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Category</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Sub-head</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Link</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Publish Date</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Social Platforms</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Facebook Caption</th>
            <th className="font-serif bold text-sm text-[#000] p-4 md:text-lg">Linkedin Caption</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-2">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="px-4 py-2">{row.headline}</td>
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
              <td className="px-4 py-2">{row.category}</td>
              <td className="px-4 py-2">{row.subHead}</td>
              <td className="px-4 py-2">
                <a href={row.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  View Link
                </a>
              </td>
              <td className="px-4 py-2">{row.publishDate}</td>
              <td className="px-4 py-2">{row.socialPlatforms}</td>
              <td className="px-4 py-2">{row.fbCaption}</td>
              <td className="px-4 py-2">{row.linkedinCaption}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ContentDetails;
