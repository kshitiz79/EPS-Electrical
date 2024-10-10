import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">EPS</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/services" className="text-white hover:text-gray-300">Product & Services</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

    {/* mob */}
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block text-white py-2 px-4 hover:bg-gray-700">Home</Link>
          <Link to="/about" className="block text-white py-2 px-4 hover:bg-gray-700">About</Link>
          <Link to="/services" className="block text-white py-2 px-4 hover:bg-gray-700">Services</Link>
          <Link to="/contact" className="block text-white py-2 px-4 hover:bg-gray-700">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
