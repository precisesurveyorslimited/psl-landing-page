import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden rounded-2xl h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 to-yellow-100/40 backdrop-blur-sm z-0" />

      <div className="h-full flex flex-col p-8 backdrop-blur-sm relative z-10 border border-amber-100/40 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div
          className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl 
            bg-gradient-to-br from-amber-400/10 to-yellow-500/10 
            text-amber-600 transform group-hover:scale-110 transition-all duration-300"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {icon}
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-amber-700">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed text-base flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
