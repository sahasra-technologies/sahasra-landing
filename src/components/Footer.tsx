import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const services = [
    "AI & Machine Learning",
    "Generative AI Solutions",
    "Data Science & Analytics",
    "Computer Vision",
    "Natural Language Processing",
    "Predictive Analytics",
  ];

  const company = [
    "About Us",
    "Our Team",
    "Careers",
    "Case Studies",
    "Blog",
    "Contact",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-dark text-neutral-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              Sahasra
              <span className="text-accent-orange">.</span>
            </div>
            <p className="text-neutral-text-gray mb-6 leading-relaxed">
              Building innovative technology solutions from the ground up. We
              create the future, one project at a time.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary-dark rounded-lg flex items-center justify-center hover:bg-accent-orange transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-dark rounded-lg flex items-center justify-center hover:bg-accent-orange transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-dark rounded-lg flex items-center justify-center hover:bg-accent-orange transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-accent-orange-light font-semibold text-lg mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-neutral-text-gray hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-accent-orange-light font-semibold text-lg mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-neutral-text-gray hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-accent-orange-light font-semibold text-lg mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent-orange mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-neutral-text-gray">hello@Sahasra.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent-orange mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-neutral-text-gray">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-orange mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-neutral-text-gray">
                    123 Tech Street
                    <br />
                    Silicon Valley, CA 94025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-text-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-text-gray text-sm">
              © 2024 Sahasra. All rights reserved.
            </p>

            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-neutral-text-gray hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-neutral-text-gray hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 bg-accent-orange rounded-lg flex items-center justify-center hover:bg-accent-orange-light transition-colors duration-200"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
