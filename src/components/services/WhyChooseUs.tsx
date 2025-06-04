import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs: React.FC = () => {
  const benefits = [
    "Licensed and certified crack sealing specialists",
    "Advanced hot-applied sealant technology with polymer modified bitumen",
    "Strict quality control procedures",
    "Comprehensive pavement assessment",
    "Premium grade materials and equipment",
    "Proven track record of success",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="mt-16 md:mt-32 relative">
      {/* Main content container */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="w-full">
          {/* Section label */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="px-5 py-2.5 mb-4 bg-gradient-to-r from-amber-50 to-yellow-100 text-amber-700 rounded-full text-sm font-semibold shadow-sm border border-yellow-400">
              Why Choose Us
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h3
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-[1.2]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Professional
            <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent leading-[1.2]">
              Crack Sealing Services
            </span>
          </motion.h3>

          {/* Description */}
          <motion.p
            className="mb-12 text-lg leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            With years of experience in commercial and residential crack
            sealing, we've built our reputation on delivering exceptional
            quality and reliability. Our team combines advanced hot-applied
            sealant technology with polymer modified bitumen, proven application
            techniques to protect your pavement investment and prevent water
            damage.
          </motion.p>

          {/* Benefits list */}
          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-4 bg-amber-50/50 backdrop-blur-sm p-4 rounded-xl border border-amber-100"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 p-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg">
                  <CheckCircle2 size={20} className="text-white" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
