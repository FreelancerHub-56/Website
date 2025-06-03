import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      details: "hello@freelancehub.com",
      description: "Send us an email anytime!"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+91 9368469905",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "Noida, Uttar Pradesh",
      description: "Come say hello at our office"
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: "Available 24/7",
      description: "Get instant support"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 bg-pattern">
        <div className="container-custom text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg font-semibold text-blue-600 mb-2">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose FreelanceHub?</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Team</h4>
                    <p className="text-gray-600 text-sm">Work with experienced professionals who deliver quality results.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Fast Response</h4>
                    <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Competitive Pricing</h4>
                    <p className="text-gray-600 text-sm">Get the best value for your investment with transparent pricing.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">100% Satisfaction</h4>
                    <p className="text-gray-600 text-sm">We guarantee your satisfaction with unlimited revisions.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-2">Ready to start your project?</h4>
                <p className="text-gray-600 text-sm mb-4">Get a free consultation and quote today!</p>
                <a
                  href="https://wa.me/918279909121"
                  className="btn-secondary w-full text-center block"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Connect With Us</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Follow us on social media for the latest updates, tips, and freelance opportunities
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.facebook.com/profile.php?id=61568158831915"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Follow us on Facebook"
            >
              <div className="w-16 h-16 bg-white/20 hover:bg-white/30 rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-2xl">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📘</span>
              </div>
              <p className="mt-3 text-sm font-medium opacity-90 group-hover:opacity-100">Facebook</p>
            </a>

            <a
              href="https://instagram.com/freelancehub"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Follow us on Instagram"
            >
              <div className="w-16 h-16 bg-white/20 hover:bg-white/30 rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-2xl">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📷</span>
              </div>
              <p className="mt-3 text-sm font-medium opacity-90 group-hover:opacity-100">Instagram</p>
            </a>

            <a
              href="https://youtube.com/@freelancehub"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Subscribe to our YouTube channel"
            >
              <div className="w-16 h-16 bg-white/20 hover:bg-white/30 rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-2xl">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📺</span>
              </div>
              <p className="mt-3 text-sm font-medium opacity-90 group-hover:opacity-100">YouTube</p>
            </a>

            <a
              href="http://linkedin.com/in/kushal-singh-bisht-20b49b22"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Connect with us on LinkedIn"
            >
              <div className="w-16 h-16 bg-white/20 hover:bg-white/30 rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-2xl">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">💼</span>
              </div>
              <p className="mt-3 text-sm font-medium opacity-90 group-hover:opacity-100">LinkedIn</p>
            </a>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Stay Updated!</h3>
            <p className="text-sm opacity-90 mb-4">
              Get the latest freelance tips, project opportunities, and industry insights delivered to your feed.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">#FreelanceLife</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">#DigitalMarketing</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">#WebDevelopment</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">#RemoteWork</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;