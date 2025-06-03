import React from "react";
import { Link } from "react-router-dom";

const Policy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information you provide when contacting us (name, email, phone number)",
        "Project details and requirements you share with us",
        "Communication records between you and our team",
        "Website usage data through cookies and analytics"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and improve our freelance services",
        "To communicate with you about projects and updates",
        "To match you with suitable freelancers or projects",
        "To analyze website performance and user experience"
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell or rent your personal information to third parties",
        "Information may be shared with freelancers only for project purposes",
        "We may share data when required by law or to protect our rights",
        "Anonymous usage data may be used for analytics and improvements"
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures",
        "All data transmission is encrypted using SSL technology",
        "Access to personal information is restricted to authorized personnel",
        "Regular security audits and updates are performed"
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Request access to your personal information",
        "Request correction of inaccurate data",
        "Request deletion of your personal information",
        "Opt-out of marketing communications at any time"
      ]
    },
    {
      title: "Cookies Policy",
      content: [
        "We use cookies to enhance your browsing experience",
        "Essential cookies are required for website functionality",
        "Analytics cookies help us improve our services",
        "You can control cookie settings in your browser"
      ]
    }
  ];

  const termsOfService = [
    {
      title: "Service Agreement",
      content: "By using FreelanceHub services, you agree to these terms and conditions. Our platform connects businesses with freelance professionals for various digital services."
    },
    {
      title: "User Responsibilities",
      content: "Users must provide accurate information, respect intellectual property rights, and maintain professional conduct in all communications and project work."
    },
    {
      title: "Payment Terms",
      content: "Payment terms are agreed upon between clients and freelancers. FreelanceHub facilitates connections but is not responsible for payment disputes between parties."
    },
    {
      title: "Limitation of Liability",
      content: "FreelanceHub's liability is limited to the amount paid for our services. We are not responsible for the quality of work performed by independent freelancers."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 bg-pattern">
        <div className="container-custom text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Privacy Policy & <span className="gradient-text">Terms of Service</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy and trust are important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="mt-8 text-sm text-gray-500">
            Last updated: January 2025
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto content-spacing">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Privacy Policy</h2>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="card">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto content-spacing">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Terms of Service</h2>

            <div className="space-y-8">
              {termsOfService.map((term, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{term.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{term.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Our Policies?</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              If you have any questions about our Privacy Policy or Terms of Service,
              please don't hesitate to contact us. We're here to help and ensure transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a
                href="mailto:privacy@freelancehub.com"
                className="btn-secondary"
              >
                Email Privacy Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policy;
