import React, { useState } from "react";
import { Link } from "react-router-dom";
import Features from "./Features";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white relative z-50">
        {/* Top Bar */}
        <div className="flex justify-around items-center px-4 py-4 md:px-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="rounded-full h-11 mt-1"
              src="/Main-Logo.jpg"
              alt="Logo"
            />
          </div>

          {/* Features - Hidden on md+ but shown centered in mobile */}
          <div className="block md:hidden">
            <Features />
          </div>

          {/* Hamburger icon on small screen */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 font-semibold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/collection">Collection</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* Features (only visible on desktop) */}
          <div className="hidden md:block ml-4">
            <Features />
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 animate-slide-down">
            <ul className="flex flex-col text-center gap-4 font-semibold">
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/collection" onClick={() => setMenuOpen(false)}>Collection</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Animation */}
      <style>
        {`
          @keyframes slide-down {
            from {
              transform: translateY(-10px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-slide-down {
            animation: slide-down 0.3s ease-out forwards;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
