import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ServiceCard from "./services/ServiceCard";
import WhyChooseUs from "./services/WhyChooseUs";
import { services } from "../data/services";

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.4, 1, 1, 0.4]
  );
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.98, 1, 1, 0.98]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 md:py-32 relative overflow-hidden"
      style={{ opacity, y }}
      id="services"
    >
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-amber-50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-amber-50 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-300 rounded-full opacity-5 blur-3xl" />
      <div className="absolute top-1/3 -left-24 w-72 h-72 bg-amber-500 rounded-full opacity-5 blur-3xl" />

      {/* Content container */}
      <div className="container mx-auto px-6 md:px-4 relative">
        {/* Services header */}
        <motion.div
          className="text-left md:text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="px-5 py-2.5 mb-4 bg-gradient-to-r from-amber-50 to-yellow-100 text-amber-700 rounded-full text-sm font-semibold shadow-sm border border-yellow-400">
            Our Services
          </span>

          <h2 className="text-3xl md:text-5xl font-bold my-8 leading-tight">
            <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent leading-[1.2]">
              Crack Sealing
            </span>
            <span className="block mb-2 text-gray-900">
              that stands the test of time
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Protect your commercial property investment with professional crack
            sealing that prevents water infiltration and extends pavement life.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          style={{ scale }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-4"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={<service.icon size={40} strokeWidth={1.5} />}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </motion.div>

        {/* Why Choose Us section */}
        <WhyChooseUs />
      </div>
    </motion.section>
  );
};

export default Services;
