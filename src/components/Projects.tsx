import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Factory,
  ShoppingBag,
  Building,
  School,
  Hotel,
  Home,
  Warehouse,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  location: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Corporate Office Complex",
      description:
        "Complete parking lot crack sealing for a 200,000 sq ft office complex, extending pavement life and improving property appearance.",
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      location: "Downtown Business District",
    },
    {
      title: "Industrial Distribution Center",
      description:
        "Heavy-duty crack sealing for high-traffic loading areas and truck routes at a major distribution facility.",
      image:
        "https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      location: "Industrial Park",
    },
    {
      title: "Regional Shopping Center",
      description:
        "Preventative maintenance program including crack sealing across 15 acres of parking areas with minimal customer disruption.",
      image:
        "https://images.pexels.com/photos/137038/pexels-photo-137038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      location: "Metro Shopping District",
    },
    {
      title: "Medical Office Complex",
      description:
        "Comprehensive crack sealing treatment for a medical campus with specialized scheduling to accommodate patient access.",
      image:
        "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      location: "Suburban Medical Center",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const applications = [
    { icon: Building2, text: "Office Complexes & Corporate Campuses" },
    { icon: ShoppingBag, text: "Retail Centers & Shopping Malls" },
    { icon: Factory, text: "Industrial Facilities & Warehouses" },
    { icon: Warehouse, text: "Distribution Centers & Logistics Hubs" },
    { icon: Building, text: "Medical Facilities & Hospitals" },
    { icon: School, text: "Educational Institutions & Campuses" },
    { icon: Home, text: "Multi-Family Housing Complexes" },
    { icon: Hotel, text: "Hotels & Hospitality Venues" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our commercial crack sealing services have helped businesses
            maintain their pavement investments.
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-64 md:h-auto relative group">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-sm text-yellow-700 mb-4 font-medium">
                  {projects[currentIndex].location}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {projects[currentIndex].description}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 font-medium">
                  Project {currentIndex + 1} of {projects.length}
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={prevProject}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 hover:text-gray-900"
                    aria-label="Previous project"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    onClick={nextProject}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 hover:text-gray-900"
                    aria-label="Next project"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Commercial Applications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors group"
                >
                  <app.icon
                    size={24}
                    className="text-yellow-700 mr-3 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                    {app.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-8 rounded-2xl shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-6">
              Request a Free Site Assessment
            </h3>
            <p className="mb-8 text-yellow-100 leading-relaxed">
              Our expert team will evaluate your pavement condition and provide
              a detailed proposal tailored to your property's specific needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-yellow-900 hover:bg-yellow-50 font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
            >
              Schedule Now
              <ArrowRight
                size={20}
                className="ml-2 transform group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
