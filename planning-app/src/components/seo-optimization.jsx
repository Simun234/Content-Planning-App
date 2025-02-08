import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SeoOptimization from "../images/seo-optimization.png";


function Seo () {

  const navigate = useNavigate();
   
    return(
        <>
      <Navbar />
        <div className="w-[208px] h-[353px] bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C] flex flex-col items-center justify-center mx-auto mt-12 rounded-xl md:w-[558px] h-[720px] lg:w-[959px] h-[794px]">
          <h1 className="	font-serif font-extrabold text-sm text-[#333333] mb-12 md:text-2xl lg:text-4xl ">Seo Optimization</h1>
          <button className="w-[157px] h-[35px] bg-yellow-500 mb-8 font-serif font-semibold text-[#333333] text-xs rounded-lg md:w-[309px] h-[70px] text-xl lg:w-[609px] h-[100px] text-3xl" onClick={() => navigate("/analytics-reports")}>
          Analytics & Reporting
          </button>
          <button className="w-[157px] h-[35px] bg-yellow-500 mb-4 font-serif font-semibold text-[#333333] text-xs rounded-lg md:w-[309px] h-[70px] text-xl lg:w-[609px] h-[100px] text-3xl" onClick={() => navigate("/seo-audit")} >Seo Audit </button>
          <img src={SeoOptimization} alt="campaing-planning" className="w-[100px] h-[100px] md:w-[309px] h-[322px] " />
        </div>
        </>
    )
}


export default Seo;