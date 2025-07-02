import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-red-800 text-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {" "}
        {/* Increased padding (py-6) */}
        {/* Logo */}
        <div className="flex items-center">
        <Link to="/">
  <img
    src="/images/logo.png"
    alt="Logo"
    className="w-auto cursor-pointer"
  />
</Link>
          {" "}
          {/* Increased logo height */}
        </div>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          <li className="hover:text-gray-200 cursor-pointer transition-transform duration-200 transform hover:scale-105">
            About Us
          </li>
          <li className="hover:text-gray-200 cursor-pointer transition-transform duration-200 transform hover:scale-105">
            Services
          </li>
          <li className="hover:text-gray-200 cursor-pointer transition-transform duration-200 transform hover:scale-105">
            Reviews
          </li>
          <li className="hover:text-gray-200 cursor-pointer transition-transform duration-200 transform hover:scale-105">
            Contact
          </li>
        </ul>
        {/* Hamburger Menu Icon */}
        <button
          onClick={handleOpen}
          className="md:hidden focus:outline-none text-2xl"
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-red-900/95 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-40`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <IoCloseOutline
            size={40}
            className="absolute top-6 right-6 text-white cursor-pointer"
            onClick={handleOpen}
          />
          <img src="/images/logo.png" alt="Logo" className="h-16 mb-4" />{" "}
          {/* Increased mobile logo size */}
          <ul className="text-center space-y-6 text-xl font-semibold">
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={handleOpen}
            >
              About Us
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={handleOpen}
            >
              Services
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={handleOpen}
            >
              Review
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={handleOpen}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
