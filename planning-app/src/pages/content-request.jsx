import React from "react";


function ContentRequest ()  {


    return (
        <>
         <div className="flex justify-center mt-12">
         <div className=" flex flex-col w-[232px] h-[717px] bg-[#F4F4F4] md:w-[662px] h-[2027px] lg:w-[715px] h-[2270px]">
        <header className="flex justify-center mt-8 ">
            <h1 className="font-serif font-bold text-[#000] text-sm md:text-base lg:text-xl">Content Request Form</h1>
        </header>
        <hr className="mt-4" />
        <main className="flex flex-col mt-8">
  <p className="font-serif font-normal text-sm text-[#000] ml-2 md:text-base lg:text-xl">Author</p>
  
  <div className="flex flex-row gap-4 justify-start mt-2 ml-2">
    <div className="flex flex-col">
      <input type="text" className="w-[100px] h-[28px] bg-[#fff] border border-gray-400 rounded-lg md:w-[218px] lg:w-[318px]" />
      <p className="font-serif font-medium text-sm text-gray-600 mt-1 md:text-base lg:text-lg">First Name</p>
    </div>
    
    <div className="flex flex-col">
      <input type="text" className="w-[100px] h-[28px] bg-[#fff] border border-[#96B4E6] rounded-lg md:w-[218px] lg:w-[318px]" />
      <p className="font-serif font-medium  text-sm text-gray-600 mt-1 md:text-base lg:text-lg">Last Name</p>
    </div>
  </div>
</main>
<hr className="mt-4" />
<section className="flex flex-col mt-8">
  <p className="font-serif font-normal text-sm text-[#000] ml-2 md:text-base lg:text-xl">Date</p>
  
  <div className="flex flex-row gap-4 justify-start mt-2 ml-2">
    <div className="flex flex-col">
      <input type="text" className="w-[202px] h-[25px] bg-[#fff] border border-gray-400 rounded-lg md:w-[218px] lg:w-[318px]" />
      <p className="font-serif font-medium text-sm text-gray-600 mt-1 md:text-base lg:text-lg">Date</p>
    </div>
  </div>
</section>
    <h2 className="font-serif font-bold text-lg text-gray-600 ml-2  mt-4">Content Production</h2>
    <hr className="mt-4" />
         </div>
         </div>
        </>
    )
}

export default ContentRequest;