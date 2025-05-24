import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PhoneIcon } from "../assets/icons/Phone";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 py-2 transition-all duration-300 bg-yellow-400`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/psl_logo.svg"
              alt="Precise Surveyors Limited"
              className="w-40"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="hover:text-yellow-700 font-medium transition-colors duration-300 text-gray-800"
            >
              Services
            </a>
            <a
              href="#process"
              className="hover:text-yellow-700 font-medium transition-colors duration-300 text-gray-800"
            >
              Our Process
            </a>
            <a
              href="#projects"
              className="hover:text-yellow-700 font-medium transition-colors duration-300 text-gray-800"
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className="hover:text-yellow-700 font-medium transition-colors duration-300 text-gray-800"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="hover:text-yellow-700 font-medium transition-colors duration-300 text-gray-800"
            >
              Contact
            </a>
            <a
              href="tel:+15551234567"
              className="bg-white text-black px-6 py-3 font-medium rounded-full transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg"
            >
              <span>Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg absolute w-full animate-fade-in">
          <nav className="flex flex-col p-6 space-y-4">
            <a
              href="#services"
              className="text-gray-800 hover:text-yellow-700 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#process"
              className="text-gray-800 hover:text-yellow-700 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Our Process
            </a>
            <a
              href="#projects"
              className="text-gray-800 hover:text-yellow-700 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className="text-gray-800 hover:text-yellow-700 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-yellow-700 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <a
              href="tel:+15551234567"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 font-medium rounded-full transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              <PhoneIcon className="mr-1 text-gray-800" />
              <span>Call Now</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
