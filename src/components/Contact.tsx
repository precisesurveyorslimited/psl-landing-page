import React, { useState } from "react";
import { Phone, Mail, Info, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = "Email is not valid.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    console.log("Validation errors:", newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email) &&
      formData.message
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const subject = encodeURIComponent("Contact Form Submission");
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nMessage: ${formData.message}`
      );
      const mailtoLink = `mailto:admin@precisesurveyors.co.nz?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen bg-cover bg-center py-16 md:py-20 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 md:px-4">
        <span className="px-5 py-2.5 mb-T4 bg-gradient-to-r from-amber-50 to-yellow-100 text-amber-700 rounded-full text-sm font-semibold shadow-sm border border-yellow-400">
          Contact Us
        </span>
        <h2 className="text-4xl font-extrabold mb-4 mt-8">
          Get in touch today
        </h2>
        <p className="mb-8">
          We love questions and feedback – and we're always happy to help! Here
          are some ways to contact us.
        </p>

        <div className="bg-yellow-500 rounded-2xl p-4 text-white">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex items-start space-x-4">
              <div className="bg-white/90 rounded-xl p-3 w-12 h-12 flex items-center justify-center">
                <Phone className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="font-medium text-black">Phone</p>
                <a
                  href="tel:+6491234567"
                  className="text-yellow-900 hover:text-white transition-colors"
                >
                  +64 (09) 123 4567
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white/90 rounded-xl p-3 w-12 h-12 flex items-center justify-center">
                <Mail className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="font-medium text-black">Email</p>
                <a
                  href="mailto:admin@precisesurveyors.co.nz"
                  className="text-yellow-900 hover:text-white transition-colors break-all"
                >
                  admin@precisesurveyors.co.nz
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white/90 rounded-xl p-3 w-12 h-12 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="font-medium text-black">Location</p>
                <p className="text-yellow-900">
                  123 Asphalt Road,Auckland, New Zealand
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr
          className="w-full my-8 border-0"
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(255, 223, 0, 0.5), transparent)",
          }}
        />

        <div className="w-full">
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-required="true"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <Info size={16} className="mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <Info size={16} className="mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company (optional)
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Leave us a message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                aria-required="true"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <Info size={16} className="mr-1" />
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full group bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-4 px-8 rounded-full text-center flex items-center justify-center ${
                !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isFormValid()}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
