import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi"; 
import { HiMenu } from "react-icons/hi"; 
import { IoMdClose } from "react-icons/io"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-[#008080] to-[#F5F5F5] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        <button 
          className="block md:hidden text-black text-3xl" 
          onClick={toggleMenu}
        >
          {menuOpen ? <IoMdClose /> : <HiMenu />}
        </button>


        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center md:hidden">
            <Link to="/" className="text-black hover:underline mb-2" onClick={closeMenu}>
              Content Strategy
            </Link>
            <Link to="/campaign-planning" className="text-black hover:underline mb-2" onClick={closeMenu}>
              Campaign Planning
            </Link>
            <Link to="/seo-optimization" className="text-black hover:underline mb-2" onClick={closeMenu}>
              SEO Optimization
            </Link>
          </div>
        )}


        <div className="font-serif font-normal hidden md:flex text-sm space-x-6 lg:text-xl">
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

        {/* Title */}
        <h1 className="font-serif font-bold text-base md:text-2xl lg:text-4xl">
          Content Planning
        </h1>

        {/* Search Button */}
        <button className="text-black text-2xl">
          <FiSearch />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
