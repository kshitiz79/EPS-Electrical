import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-white to-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">
          <Link to="/">
            <img src="./logo.png" alt="EPS Logo" className="h-12 w-auto" />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-black text-lg font-medium hover:text-cyan-700 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black text-lg font-medium hover:text-cyan-700 transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/productandservices"
            className="text-black text-lg font-medium hover:text-cyan-700 transition duration-300 ease-in-out"
          >
            Product & Services
          </Link>
          <Link
            to="/achivements"
            className="text-black text-lg font-medium hover:text-cyan-700 transition duration-300 ease-in-out"
          >
            Achievements
          </Link>
          <Link
            to="/contact"
            className="text-black text-lg font-medium hover:text-cyan-700 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 text-white py-4 px-4 shadow-md transition duration-500 ease-in-out">
          <Link
            to="/"
            className="block text-lg font-medium py-2 px-4 hover:bg-blue-600 rounded transition duration-300 ease-in-out"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-lg font-medium py-2 px-4 hover:bg-blue-600 rounded transition duration-300 ease-in-out"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/productandservices"
            className="block text-lg font-medium py-2 px-4 hover:bg-blue-600 rounded transition duration-300 ease-in-out"
            onClick={handleLinkClick}
          >
            Product & Services
          </Link>
          <Link
            to="/achivements"
            className="block text-lg font-medium py-2 px-4 hover:bg-blue-600 rounded transition duration-300 ease-in-out"
            onClick={handleLinkClick}
          >
            Achievements
          </Link>
          <Link
            to="/contact"
            className="block text-lg font-medium py-2 px-4 hover:bg-blue-600 rounded transition duration-300 ease-in-out"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
