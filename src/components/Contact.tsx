import React from "react";
import { Phone, Mail, MapPin, Clock, Building2, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to protect your commercial property with professional crack
            sealing? Get in touch for a free assessment and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <form className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    placeholder="Your Company, Inc."
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="property"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Property Type
                </label>
                <div className="relative">
                  <select
                    id="property"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 appearance-none bg-white"
                    required
                  >
                    <option value="">Select Property Type</option>
                    <option value="office">Office Complex</option>
                    <option value="retail">Retail Center</option>
                    <option value="industrial">Industrial Facility</option>
                    <option value="medical">Medical Facility</option>
                    <option value="education">Educational Institution</option>
                    <option value="hospitality">Hotel/Hospitality</option>
                    <option value="other">Other Commercial</option>
                  </select>
                  <Building2
                    size={20}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your property and crack sealing needs"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center group shadow-lg"
              >
                <span>Request Free Quote</span>
                <Send
                  size={20}
                  className="ml-2 transform group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

              <div className="space-y-6">
                <a href="tel:+15551234567" className="flex items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    <Phone size={24} className="text-yellow-200" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-yellow-200 group-hover:text-white transition-colors">
                      (555) 123-4567
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@cracksealpro.com"
                  className="flex items-start group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    <Mail size={24} className="text-yellow-200" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-yellow-200 group-hover:text-white transition-colors">
                      info@cracksealpro.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                    <MapPin size={24} className="text-yellow-200" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-yellow-200">
                      123 Industrial Avenue, Suite 200
                      <br />
                      Anytown, ST 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                    <Clock size={24} className="text-yellow-200" />
                  </div>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-yellow-200">
                      Monday - Friday: 7:00 AM - 5:00 PM
                      <br />
                      Weekend: By appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Service Area
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide commercial crack sealing services throughout the
                metro area and surrounding counties. Contact us to confirm we
                service your location.
              </p>
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:text-gray-600 transition-colors">
                  <MapPin size={48} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
