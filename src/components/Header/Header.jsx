import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const linkClasses = ({ isActive }) =>
    `text-lg font-medium transition duration-300 ease-in-out ${isActive
      ? 'text-cyan-700 border-b-2 border-cyan-700'
      : 'text-black hover:text-cyan-700'
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `block text-lg font-medium py-2 px-4 rounded transition duration-300 ease-in-out ${isActive ? 'bg-blue-600' : 'hover:bg-blue-600'
    }`;

  return (
    <nav className="bg-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <img src="./logo.png" alt="EPS Logo" className="h-12 w-auto" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/productandservices" className={linkClasses}>
            Product & Services
          </NavLink>
          <NavLink to="/achivements" className={linkClasses}>
            Achievements
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
          <a
            href="https://www.linkedin.com/company/eps-electricals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-600 transition-colors duration-300"
            title="Follow us on LinkedIn"
          >
            <FaLinkedinIn size={22} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 text-white py-4 px-4">
          <NavLink to="/" className={mobileLinkClasses} onClick={handleLinkClick}>
            Home
          </NavLink>
          <NavLink to="/about" className={mobileLinkClasses} onClick={handleLinkClick}>
            About
          </NavLink>
          <NavLink
            to="/productandservices"
            className={mobileLinkClasses}
            onClick={handleLinkClick}
          >
            Product & Services
          </NavLink>
          <NavLink
            to="/achivements"
            className={mobileLinkClasses}
            onClick={handleLinkClick}
          >
            Achievements
          </NavLink>
          <NavLink
            to="/contact"
            className={mobileLinkClasses}
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
          <a
            href="https://www.linkedin.com/company/eps-electricals/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg font-medium py-2 px-4 rounded hover:bg-blue-600 transition"
            onClick={handleLinkClick}
          >
            <div className="flex items-center gap-2">
              <FaLinkedinIn />

            </div>
          </a>

        </div>

      )}
    </nav>
  );
};

export default Navbar;
