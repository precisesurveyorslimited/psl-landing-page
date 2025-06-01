import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PhoneIcon } from "../assets/icons/Phone";
import { Link } from "react-router-dom";

const Header: React.FC<{ isHome?: boolean }> = ({ isHome = false }) => {
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHome
          ? isScrolled
            ? "bg-yellow-500 py-2"
            : "bg-transparent py-4"
          : "bg-yellow-500 py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={
                  isHome
                    ? isScrolled
                      ? "/psl_black.svg"
                      : "/psl_white.svg"
                    : "/psl_black.svg"
                }
                alt="Precise Surveyors Limited"
                className="w-40"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {location.pathname !== "/" && (
              <Link
                to="/"
                className={`hover:text-yellow-700 font-medium transition-colors duration-300 ${
                  isHome
                    ? isScrolled
                      ? "text-gray-800"
                      : "text-white"
                    : "text-gray-800"
                }`}
              >
                Home
              </Link>
            )}
            <Link
              to="/gallery"
              className={`hover:text-yellow-700 font-medium transition-colors duration-300 ${
                isHome
                  ? isScrolled
                    ? "text-gray-800"
                    : "text-white"
                  : "text-gray-800"
              }`}
            >
              Gallery
            </Link>
            <a
              href="#contact"
              className={`hover:text-yellow-700 font-medium transition-colors duration-300 ${
                isHome
                  ? isScrolled
                    ? "text-gray-800"
                    : "text-white"
                  : "text-gray-800"
              }`}
            >
              Contact Us
            </a>
            <a
              href="tel:+15551234567"
              className={`hover:bg-yellow-600 text-black px-6 py-3 font-medium rounded-full transition-all duration-300 transform hover:scale-105 flex items-center ${
                isHome
                  ? isScrolled
                    ? "bg-white"
                    : "bg-yellow-500"
                  : "bg-white"
              }`}
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
            {isMenuOpen ? (
              <X className="text-gray-800" size={24} />
            ) : (
              <Menu className="text-white" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg absolute w-full animate-fade-in">
          <nav className="flex flex-col p-6 space-y-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-yellow-700 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className="text-gray-800 hover:text-yellow-700 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link
              to="#contact"
              className="text-gray-800 hover:text-yellow-700 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <a
              href="tel:+15551234567"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 font-medium rounded-full transition-all duration-300 flex items-center justify-center"
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
