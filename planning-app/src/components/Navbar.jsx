import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  
  const searchRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);
  const closeMenu = () => setMenuOpen(false);


  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            <Link to="/campaing-planning" className="text-black hover:underline mb-2" onClick={closeMenu}>
              Campaing Planning
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
          <Link to="/campaing-planning" className="text-black hover:underline">
            Campaing Planning
          </Link>
          <Link to="/seo-optimization" className="text-black hover:underline">
            SEO Optimization
          </Link>
        </div>


        <h1 className="font-serif font-bold text-base md:text-2xl lg:text-4xl">
          Content Planning
        </h1>


        <div className="relative" ref={searchRef}>

          <button className="text-black text-2xl" onClick={toggleSearch}>
            <FiSearch />
          </button>


          {searchOpen && (
            <div className="absolute top-0 right-10">
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-48 p-2 border border-gray-400 rounded-md shadow-md focus:outline-none"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
