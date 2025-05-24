import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  stars: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Their commercial crack sealing service extended the life of our office complex parking lot by years. The team was professional, efficient, and caused minimal disruption to our tenants.",
      author: "Michael Johnson",
      company: "Johnson Property Management",
      stars: 5,
    },
    {
      quote:
        "We manage multiple retail locations and CrackSeal Pro has been our go-to contractor for pavement maintenance. Their work is consistently excellent and their scheduling is flexible to accommodate our business hours.",
      author: "Sarah Williams",
      company: "Metro Shopping Centers",
      stars: 5,
    },
    {
      quote:
        "As a logistics company, our pavement takes a beating from heavy trucks. Their industrial-grade crack sealing has stood up to the punishment and saved us from costly repaving projects.",
      author: "Robert Chen",
      company: "National Distribution Services",
      stars: 4,
    },
    {
      quote:
        "Impressive attention to detail and thorough preparation. They didn't just fill cracks - they ensured proper cleaning and used high-quality materials that have lasted through multiple seasons.",
      author: "Jennifer Martinez",
      company: "Westside Medical Plaza",
      stars: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by commercial property managers and business owners across
            the region.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex mb-6">
              {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-yellow-500 fill-current"
                />
              ))}
              {[...Array(5 - testimonials[activeIndex].stars)].map((_, i) => (
                <Star
                  key={i + testimonials[activeIndex].stars}
                  size={24}
                  className="text-gray-300 fill-current"
                />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            <div>
              <p className="font-bold text-gray-900">
                {testimonials[activeIndex].author}
              </p>
              <p className="text-gray-600">
                {testimonials[activeIndex].company}
              </p>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
