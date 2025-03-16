
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 px-6">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">A5C TECH</h3>
            <p className="text-muted-foreground">
              Providing cutting-edge vulnerability assessment, penetration testing, and security auditing services to protect your business.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-muted-foreground hover:text-a5c-purple transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-a5c-purple transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-a5c-purple transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-a5c-purple transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-white transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-muted-foreground hover:text-white transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-muted-foreground hover:text-white transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-muted-foreground hover:text-white transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/services" className="text-muted-foreground hover:text-white transition-colors">
                  Vulnerability Assessment
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-muted-foreground hover:text-white transition-colors">
                  Penetration Testing
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-muted-foreground hover:text-white transition-colors">
                  Security Auditing
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-muted-foreground hover:text-white transition-colors">
                  Compliance Assessment
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-a5c-purple mt-1 mr-2" />
                <span className="text-muted-foreground">
                  123 Security Street, Cyber City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-a5c-purple mr-2" />
                <a href="tel:+11234567890" className="text-muted-foreground hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-a5c-purple mr-2" />
                <a href="mailto:info@a5ctech.com" className="text-muted-foreground hover:text-white transition-colors">
                  info@a5ctech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 py-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} A5C Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
