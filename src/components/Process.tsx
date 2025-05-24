import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xl font-bold mr-4">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Thorough Inspection",
      description:
        "We start with a comprehensive assessment of your pavement to identify all cracks requiring treatment and determine the best approach.",
    },
    {
      number: 2,
      title: "Professional Preparation",
      description:
        "Cracks are cleaned using high-powered air compressors to remove debris, vegetation, and moisture, ensuring proper adhesion.",
    },
    {
      number: 3,
      title: "Hot Application",
      description:
        "We apply commercial-grade hot rubberized crack sealant that penetrates deep into cracks and creates a flexible, waterproof bond.",
    },
    {
      number: 4,
      title: "Finishing & Inspection",
      description:
        "The sealed cracks are finished for a smooth appearance, and a final inspection ensures all work meets our high standards.",
    },
  ];

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures long-lasting results and minimal
            disruption to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Why Choose Our Process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Commercial-grade materials that outlast DIY solutions",
              "Proper preparation techniques for maximum adhesion",
              "Hot-applied sealant that penetrates deeper into cracks",
              "Flexible material that accommodates pavement movement",
              "Trained technicians with specialized equipment",
              "Scheduled maintenance plans to prevent future damage",
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2
                  size={24}
                  className="text-green-600 mr-2 flex-shrink-0 mt-1"
                />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
