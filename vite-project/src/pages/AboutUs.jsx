import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring top-quality deliverables that exceed expectations."
    },
    {
      icon: "🤝",
      title: "Trust",
      description: "Building lasting relationships through transparency, reliability, and honest communication."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Embracing cutting-edge technologies and creative solutions to drive business growth."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Connecting talent worldwide to create opportunities without geographical boundaries."
    }
  ];

  const team = [
    {
      name: "Kushal Singh Bisht",
      role: "Director",
      image: "👨‍💼",
      description: "Passionate about connecting businesses with top freelance talent."
    },
    {
      name: "Akshay",
      role: "UI/UX Designer",
      image: "👨‍🎨",
      description: "Ensuring smooth operations and exceptional client experiences."
    },
    {
      name: "Ankit Bisht",
      role: "Lead Developer",
      image: "👨‍💻",
      description: "Building robust platforms that power our freelance ecosystem."
    },
    {
      name: "Prince Yadav",
      role: "Digital Marketing Head",
      image: "👨‍💼",
      description: "Crafting compelling stories and growing our community."
    }
  ];

  const faqs = [
    {
      question: "How do I get started with FreelanceHub?",
      answer: "Simply contact us through our contact form or WhatsApp. We'll discuss your project requirements and match you with the perfect freelancer."
    },
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of services including web development, digital marketing, SEO optimization, social media marketing, Google & Meta ads, and software development."
    },
    {
      question: "How do you ensure quality?",
      answer: "All our freelancers are vetted professionals with proven track records. We also offer unlimited revisions until you're 100% satisfied."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer competitive and transparent pricing based on project scope. Contact us for a free consultation and custom quote."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We provide 24/7 support and ongoing maintenance services to ensure your projects continue to perform optimally."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 bg-pattern">
        <div className="container-custom text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">FreelanceHub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to bridge the gap between businesses and talented freelancers worldwide.
            Since our founding, we've helped hundreds of companies achieve their goals through expert freelance services.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  FreelanceHub was born from a simple observation: businesses needed access to top-tier talent,
                  and skilled professionals wanted meaningful work opportunities. We saw the gap and decided to bridge it.
                </p>
                <p>
                  What started as a small team in Noida, Uttar Pradesh, has grown into a global network of
                  expert freelancers serving clients worldwide. We've completed over 500 projects and built
                  lasting relationships with more than 100 satisfied clients.
                </p>
                <p>
                  Today, we continue to evolve, embracing new technologies and expanding our services to meet
                  the ever-changing needs of the digital economy.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏢</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Based in Noida</h3>
                  <p className="text-gray-600">Serving clients globally</p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold gradient-text">500+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text">100+</div>
                      <div className="text-sm text-gray-600">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind FreelanceHub
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about working with FreelanceHub
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust FreelanceHub for their projects
          </p>
          <Link to="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;