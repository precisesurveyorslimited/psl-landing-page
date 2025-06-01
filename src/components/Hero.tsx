import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
        <img
          src="/machine.jpeg"
          alt="Commercial Parking Lot"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 md:px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white animate-fade-in">
            Professional Commercial{" "}
            <span className="text-yellow-500">Crack Sealing</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up">
            Extend the life of your commercial asphalt with expert crack sealing
            services. Prevent water damage and save on costly repairs.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <a
              href="#contact"
              className="group bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center shadow-lg"
            >
              Get a Free Quote
              <ArrowRight
                size={20}
                className="ml-2 transform group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-4 px-8 rounded-full transition-all duration-300 text-center border border-white/30 hover:border-white/50"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-10 h-10 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
