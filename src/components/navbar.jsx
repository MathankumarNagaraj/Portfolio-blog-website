import React, { useState } from 'react';
import logo from "../assets/logo3.jpg"


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-black z-10 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={logo} className="w-[50px] h-[50px]" alt="Logo" />
            <h1 className="text-3xl font-extrabold text-white cursor-pointer ml-2">Mathankumar.N</h1>
          </div>

          {/* Hamburger Icon for Small Screens */}
          <img
            src="https://img.icons8.com/?size=100&id=120374&format=png&color=FFFFFF"
            className="sm:flex w-6 h-6 md:hidden cursor-pointer"
            alt="Menu"
            onClick={toggleMenu}
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg font-medium text-white">
            <li><a href="#home" className="hover:text-[rgb(64,189,196)] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[rgb(64,189,196)] transition">About</a></li>
            <li><a href="#skills" className="hover:text-[rgb(64,189,196)] transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-[rgb(64,189,196)] transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-[rgb(64,189,196)] transition">Contact</a></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white"
            aria-label="Close Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="space-y-8 text-lg text-left font-medium text-white">
            <li><a href="#home" onClick={toggleMenu} className="hover:text-[rgb(64,189,196)] transition">Home</a></li>
            <li><a href="#about" onClick={toggleMenu} className="hover:text-[rgb(64,189,196)] transition">About</a></li>
            <li><a href="#skills" onClick={toggleMenu} className="hover:text-[rgb(64,189,196)] transition">Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu} className="hover:text-[rgb(64,189,196)] transition">Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="hover:text-[rgb(64,189,196)] transition">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
