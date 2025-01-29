import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi"; 
import { HiMenu } from "react-icons/hi"; 

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#008080] to-[#F5F5F5] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        
        <button className="block md:hidden text-black text-3xl">
          <HiMenu />
        </button>

               <div className="font-serif font-normal  hidden md:flex text-sm  space-x-6 lg:text-xl	">
          <Link to="/" className="text-black hover:underline">
            Content Strategy
          </Link>
          <Link to="/campaign-planning" className="text-black hover:underline">
            Campaign Planning
          </Link>
          <Link to="/seo-optimization" className="text-black hover:underline">
            SEO Optimization
          </Link>
        </div>

        
        <h1 className="font-serif font-bold text-base md:text-2xl lg:text-4xl">
          Content Planning
        </h1>

                <button className="text-black text-2xl">
          <FiSearch />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
