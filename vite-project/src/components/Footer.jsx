import { Link } from "react-router-dom";

const Footer = () => {
  // Function to handle link clicks and ensure scroll to top
  const handleLinkClick = () => {
    // Multiple methods to ensure scroll to top works
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 50);
  };
  const footerLinks = {
    Services: [
      { name: "Web Development", href: "/services" },
      { name: "Digital Marketing", href: "/services" },
      { name: "SEO Optimization", href: "/services" },
      { name: "Social Media Marketing", href: "/services" }
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/policy" },
      { name: "Jobs", href: "/jobs" }
    ],
    Support: [
      { name: "Help Center", href: "/contact" },
      { name: "FAQ", href: "/about" },
      { name: "Contact Support", href: "/contact" },
      { name: "Live Chat", href: "/contact" }
    ]
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: "📘",
      href: "https://www.facebook.com/profile.php?id=61568158831915",
      color: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      name: "Instagram",
      icon: "📷",
      href: "https://instagram.com/freelancehub",
      color: "hover:from-pink-500 hover:to-purple-600"
    },
    {
      name: "YouTube",
      icon: "📺",
      href: "https://youtube.com/@freelancehub",
      color: "hover:from-red-500 hover:to-red-600"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      href: "http://linkedin.com/in/kushal-singh-bisht-20b49b22",
      color: "hover:from-blue-500 hover:to-blue-600"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold gradient-text">FreelanceHub</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted platform for expert freelancers in digital, tech, and creative services.
              Connecting businesses with top talent worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gray-800 hover:bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group`}
                  aria-label={`Follow us on ${social.name}`}
                  title={`Follow us on ${social.name}`}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                </a>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-400">
              Follow us for updates, tips, and freelance opportunities!
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4 text-white">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={handleLinkClick}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 FreelanceHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/policy"
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/policy"
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;