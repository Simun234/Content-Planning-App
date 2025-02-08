import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import CampaingPicture from "../images/campaing-planning.png";


function Campaing () {

  const navigate = useNavigate();
   
    return(
        <>
        <Navbar />
        <div className="w-[208px] h-[353px] bg-gradient-to-r from-[#1D8A8C] to-[#2F3C75] flex flex-col items-center justify-center mx-auto mt-12 rounded-xl md:w-[558px] h-[720px] lg:w-[959px] h-[794px]">
          <h1 className="	font-serif font-extrabold text-sm text-[#E0E0E0] mb-12 md:text-2xl lg:text-4xl ">Campaing Planning</h1>
          <button className="w-[157px] h-[35px] bg-yellow-400 mb-8 font-serif font-semibold text-gray-600 text-xs rounded-lg md:w-[309px] h-[70px] text-xl lg:w-[609px] h-[100px] text-3xl">
           Campaing Planning
          </button>
          <button className="w-[157px] h-[35px] bg-yellow-400 mb-4 font-serif font-semibold text-gray-600 text-xs rounded-lg md:w-[309px] h-[70px] text-xl lg:w-[609px] h-[100px] text-3xl"onClick={() => navigate("/content-form")}>Content Campaing Form </button>
          <img src={CampaingPicture} alt="campaing-planning" className="w-[100px] h-[100px] md:w-[309px] h-[322px] " />
        </div>
        </>
    )
}


export default Campaing;