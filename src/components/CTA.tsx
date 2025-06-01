import React from "react";
import { Phone, Calendar } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section className="py-8 md:py-16 bg-yellow-500">
      <div className="container mx-auto px-6 md:px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-bold text-yellow-900 mb-4">
              Ready to Protect Your Pavement?
            </h2>
            <p className="text-md text-yellow-900">
              Schedule your free commercial property assessment today and extend
              the life of your asphalt.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+15551234567"
              className="bg-white hover:bg-gray-100 text-yellow-900 font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
            >
              <Phone size={20} className="mr-2" />
              Call Now
            </a>
            <a
              href="#contact"
              className="bg-yellow-700 hover:bg-yellow-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
            >
              <Calendar size={20} className="mr-2" />
              Schedule Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
