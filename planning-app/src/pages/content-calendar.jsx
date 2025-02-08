import React from "react";
import {Menu } from "lucide-react";




function ContentCalendar ()  {


    return (
        <>
        <div className="flex justify-center justify-between mt-12 ">
        <header className="w-80 h-9 flex flex-row items-center justify-between gap-3 bg-[#049E38] md:w-[626px] h-[28px] lg:w-[748px] h-[49px]">
         <div className="flex flex-row gap-6">  
         <button className="w-[205px] h-[26px] bg-[#9C4DD3] ml-2 rounded font-serif font-bold text-sm text-[#fff] md:w-[255px] h-[27px] ml-4 text-base lg:w-[265px] text-lg active:bg-white active:text-[#9C4DD3]">
  Content Record
</button>

<button className="w-[205px] h-[26px] bg-[#9C4DD3] rounded font-serif font-bold text-sm text-[#fff] md:w-[255px] h-[27px] text-base lg:w-[265px] text-lg hidden md:block active:bg-white active:text-[#9C4DD3]">
  Authors' Timesheet
</button>

        </div>
        <Menu className="w-[25px] h-[25px] text-[#fff] text-sm p-1 md: w-[40px] h-[40px]" />
        </header>
        </div>
        <div className="flex justify-center items-center justify-between mt-3" >
        <main className="w-80 h-9 flex flex-row items-center md:w-[626px] h-[41px] lg:w-[748px] h-[49px]">
            <input type="text" placeholder="Search" className="w-[314px] h-[54px] border border-[#C6C9D7] rounded p-2 text-[#A1A7B3]" />
            <button className="w-[57px] h-[53px] bg-[#FBFBFE] border border-[#E3E3E9] rounded text-[#8585A9] md:w-[51px] h-[27px] lg:w-[70px]">Filter</button>
        </main>
        </div>
        </>
    )
}

export default ContentCalendar;