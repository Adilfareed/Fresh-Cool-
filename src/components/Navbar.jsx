import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md  w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-2 py-1">
       <Link to='/'>
        <div className="font-bold flex flex-col items-center">
          <img src={logo} alt="Logo1" className="w-36 h-12 mr-2" />
          <p> <span className="text-[#b4d364]">Fresh</span> & <span className="text-blue-600">Cool</span> </p>
        </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About Us</Link>
          <Link to="/faqs" className="hover:text-blue-500">FAQs</Link>
          <div className="relative">
            <button
              className="hover:text-blue-500 flex items-center"
              onClick={toggleDropdown}
            >
              Services <span className="ml-1">▼</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-lg py-2">
                <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Chiller Van Rental</Link>
                <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Freezer Van Rental</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Chiller Truck Rental</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Freezer Truck Rental</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Cold Transport</Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Get A Quote</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-blue-600 font-bold text-3xl" onClick={toggleNavbar}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg w-full left-0 top-16 py-4"
        >
          <div className="flex flex-col items-center space-y-4 font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-500" onClick={closeNavbar}>Home</Link>
            <Link to="/about" className="hover:text-blue-500" onClick={closeNavbar}>About Us</Link>
            <Link to="/faqs" className="hover:text-blue-500" onClick={closeNavbar}>FAQs</Link>
            <div className="relative w-full text-center">
              <button
                className="hover:text-blue-500 flex items-center justify-center w-full"
                onClick={toggleDropdown}
              >
                Services <span className="ml-1">▼</span>
              </button>
              {isDropdownOpen && (
                <div className="mt-2 w-full bg-white shadow-lg border rounded-lg py-2 text-center">
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-100" onClick={closeNavbar}>Chiller Van Rental</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-100" onClick={closeNavbar}>Freezer Van Rental</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-100" onClick={closeNavbar}>Chiller Truck Rental</Link>
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100" onClick={closeNavbar}>Freezer Truck Rental</Link>
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100" onClick={closeNavbar}>Cold Transport</Link>
                </div>
              )}
            </div>
            <Link to="/contact" className="hover:text-blue-500" onClick={closeNavbar}>Contact Us</Link>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-3/4" onClick={closeNavbar}>Get A Quote</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
