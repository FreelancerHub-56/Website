// src/sections/WebDevelopmentServices.js
import React from 'react';

const WebDevelopmentServices = () => {
  return (
    <section className="bg-gradient-to-br from-purple-800 to-pink-600 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Professional Web Development Services</h2>

        <p className="text-center max-w-2xl mx-auto mb-10">
          We provide a complete solution for all your online website needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Custom Web Application",
            "Web Analytics and Reporting",
            "E-Commerce Development",
            "Landing Page Site",
            "SEO Optimization",
            "Website Maintenance and Support",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white text-purple-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-sm">
                We craft robust, scalable, and performance-driven web solutions to boost your business visibility online.
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/918279909121" // Replace with your WhatsApp
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full inline-block transition duration-300"
          >
            CONTACT US
          </a>
        </div>

        <p className="mt-6 text-center text-sm text-gray-300">
          Based in <strong>Noida, Uttar Pradesh</strong> — Serving clients globally.
        </p>
      </div>
    </section>
  );
};

export default WebDevelopmentServices;
