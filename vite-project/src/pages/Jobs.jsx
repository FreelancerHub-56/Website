import React, { useState } from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Web Development", "Digital Marketing", "Design", "SEO", "Content Writing"];

  // Currently no jobs available - this will be populated from a backend API
  const jobs = [];

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 bg-pattern">
        <div className="container-custom text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Find Your Next <span className="gradient-text">Opportunity</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover exciting freelance projects from top companies. Start earning with your skills today!
          </p>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Search jobs by title or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Available Jobs ({filteredJobs.length})
            </h2>
            <div className="text-gray-600">
              Showing {filteredJobs.length} of {jobs.length} jobs
            </div>
          </div>

          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                            {job.category}
                          </span>
                          <span>{job.posted}</span>
                          <span>{job.proposals} proposals</span>
                          {job.urgent && (
                            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
                              Urgent
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Budget:</span> {job.budget}
                      </div>
                      <div>
                        <span className="font-medium">Duration:</span> {job.duration}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <Link
                      to="/contact"
                      className="btn-primary w-full lg:w-auto"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="text-8xl mb-6 animate-bounce-gentle">💼</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">No Jobs Available Right Now</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  We're currently updating our job listings. New opportunities will be posted soon!
                  In the meantime, feel free to contact us about your project needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-primary">
                    Post Your Project
                  </Link>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchTerm("");
                    }}
                    className="btn-secondary"
                  >
                    Clear Filters
                  </button>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Want to be notified?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Contact us to get notified when new jobs matching your skills are posted.
                  </p>
                  <Link to="/contact" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Get Job Alerts →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Working?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join FreelanceHub today and connect with clients who value your expertise
          </p>
          <Link to="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Jobs;