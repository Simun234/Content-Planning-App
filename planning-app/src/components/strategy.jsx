import React from "react";
import Navbar from "./Navbar";
import ContentPlan from "../images/content-plan.png";
import Business from "../images/business.png";


function Strategy () {
   
    return(
        <>
        <Navbar />
        <div className="mt-6 flex flex-row gap-10 items-center justify-center md:mt-12 gap-40">
          <button className="w-32 h-8 bg-[#40E0D0] font-serif font-normal text-xs rounded-lg md:w-64 h-12 text-xl lg:w-96 h-20 text-2xl">Content Calendar</button>
          <button className="w-32 h-8 bg-[#40E0D0] font-serif font-normal text-xs rounded-lg md:w-64 h-12 text-xl lg:w-96 h-20 text-2xl">Content Request</button>
        </div>

        <div className="mt-7 flex flex-row gap-10 items-center justify-center md:mt-12 gap-40">
          <button className="w-32 h-8 bg-[#000] text-white font-serif font-normal text-xs rounded-lg md:w-64 h-12 text-xl lg:w-96 h-20 text-2xl">Social Media Planning</button>
          <button className="w-32 h-8 bg-[#000] text-white font-serif font-normal text-xs rounded-lg md:w-64 h-12 text-xl lg:w-96 h-20 text-2xl">Email Marketing Planner</button>
        </div>

        <div className="mt-7 flex flex-row gap-10 items-center justify-center md:mt-12 gap-40">
          <button className="w-32 h-8 bg-[#000] text-white font-serif font-normal text-xs rounded-lg md:w-64 h-12 text-xl lg:w-96 h-20 text-2xl">Content Audit</button>
          <button className="w-32 h-8 bg-[#000] text-white font-serif font-normal text-xs rounded-lg md:w-64 h-12 text-xl lg:w-96 h-20 text-2xl">SMA</button>
        </div>

        <div className="mt-7 flex flex-col gap-10 items-center justify-center md:mt-12 gap-24 lg:flex-row">
          <img src={ContentPlan} alt="business-image" className="w-32 h-32 md:w-72 h-72 lg:w-96 h-96" />
          <img src={Business} alt="business-image" className="w-32 h-32 md:w-72 h-72 lg:w-96 h-96" />
        </div>
        </>
    )
}


export default Strategy;