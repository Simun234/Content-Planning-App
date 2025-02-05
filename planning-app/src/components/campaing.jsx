import React from "react";
import Navbar from "./Navbar";
import CampaingPicture from "../images/campaing-planning.png";


function Campaing () {
   
    return(
        <>
        <Navbar />
        <div className="w-52 h-90 bg-gradient-to-r from-[#1D8A8C] to-[#2F3C75] flex flex-col items-center justify-center mx-auto mt-9 rounded-xl md:w-2/3 h-2/4 lg:w-4/5 h-3/4	">
          <h1 className="font-serif text-gray-300 text-base pb-12 md:text-2xl  lg:text-4xl	">Campaing Planning</h1>
          <button className="w-48 h-14 bg-yellow-400 mb-9 font-serif text-gray-600 text-sm rounded-lg md:w-56 md:h-20 md:text-lg lg:w-60 lg:h-24 lg:text-2xl">
           Campaing Planning
          </button>
          <button className="w-48 h-14 bg-yellow-400 mb-9 font-serif text-gray-600 text-sm rounded-lg md:w-56 md:h-20 md:text-lg lg:w-60 lg:h-24 lg:text-2xl">Content Planning </button>
          <img src={CampaingPicture} alt="campaing-planning" className="w-24 h-24 mb-3 md:w-52 h-32" />
        </div>
        </>
    )
}


export default Campaing;