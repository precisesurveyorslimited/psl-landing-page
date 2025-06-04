import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Precise Surveyors Limited
            </h3>
            <p className="text-gray-400 mb-4">
              Professional commercial and residential crack sealing services to
              protect and extend the life of your asphalt investments.
            </p>
            <p className="text-gray-400">
              Licensed, bonded, and insured for commercial and residential
              projects.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Commercial and Residential Crack Sealing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Preventative Maintenance
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Pavement Assessment
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Maintenance Planning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-400">
              193 Henderson Valley Road, Henderson, Auckland 0612
              <br />
              <a
                href="tel:+15551234567"
                className="hover:text-white transition-colors"
              >
                +64 273747693
              </a>
              <br />
              <a
                href="mailto:info@cracksealpro.com"
                className="hover:text-white transition-colors"
              >
                admin@precisesurveyors.co.nz
              </a>
            </address>
          </div>
        </div>

        <hr className="border-gray-800 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Precise Surveyors Limited. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
