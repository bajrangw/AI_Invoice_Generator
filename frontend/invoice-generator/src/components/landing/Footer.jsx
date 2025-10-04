import { Link } from "react-router-dom";
import {
  Twitter,
  Github,
  Linkedin,
  FileText,
  ArrowUp,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FooterLink = ({ href, to, children }) => {
  const className =
    "block text-gray-400 hover:text-white transition-colors duration-200";
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

const SocialLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="w-10 h-10 bg-blue-950 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-950 rounded-md flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">AI Invoice App</span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              The simplest way to create and send professional invoices.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-base font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="#features">Features</FooterLink>
              </li>
              <li>
                <FooterLink href="#testimonials">Testimonials</FooterLink>
              </li>
              <li>
                <FooterLink href="#faq">FAQ</FooterLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink to="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink to="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink to="/privacy">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink to="/terms">Terms of Service</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              &copy; 2025 AI Invoice App. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#">
                <Twitter className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="#">
                <Github className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="#">
                <Linkedin className="w-5 h-5" />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Back to Top Button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="back-to-top"
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-900 text-white shadow-lg hover:bg-blue-950 cursor-pointer"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
