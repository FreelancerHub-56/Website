import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: "🎯",
      title: "Expert Freelancers",
      description: "Access to top-tier professionals in digital marketing, development, and creative services."
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Get your projects completed quickly with our efficient workflow and dedicated professionals."
    },
    {
      icon: "🛡️",
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee with unlimited revisions until you're completely happy."
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      description: "Fair and transparent pricing with no hidden fees. Get the best value for your investment."
    }
  ];

  const services = [
    "Digital Marketing",
    "SEO Optimization",
    "Web Development",
    "Social Media Marketing",
    "Google & Meta Ads",
    "Software Development"
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "Expert Freelancers" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 bg-pattern overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Connect with
                <span className="gradient-text"> Expert Freelancers</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We bridge the gap between businesses and talented freelancers across multiple industries.
                Post your project or find your next gig today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="btn-primary">
                  Explore Services
                </Link>
                <Link to="/jobs" className="btn-secondary">
                  Find Jobs
                </Link>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-3xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start?</h3>
                  <p className="text-gray-600 mb-4">Join thousands of successful projects</p>
                  <div className="flex justify-center space-x-2">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">4.9/5 from 500+ reviews</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">FreelanceHub</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to succeed in the freelance economy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional services to grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-semibold text-gray-900">{service}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of businesses and freelancers who trust FreelanceHub for their projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Project
            </Link>
            <Link to="/jobs" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;