import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone } from 'lucide-react';
import WhatsAppIcon from './common/WhatsAppIcon';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      id="footer" 
      className="bg-theme-light-bg text-theme-text-dark"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 pt-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="cursor-pointer flex-shrink-0 md:-ml-1">
              <img src="https://iili.io/KpSYT3F.png" alt="Bharatescapes Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-theme-text-dark/80">Offbeat experiences, breathtaking landscapes, and soulful escapes in Udaipur.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/tours" className="hover:text-theme-accent-orange-end transition-colors text-theme-text-dark/80">Tours</Link></li>
              <li><Link to="/stays" className="hover:text-theme-accent-orange-end transition-colors text-theme-text-dark/80">Stays</Link></li>
              <li><Link to="/events" className="hover:text-theme-accent-orange-end transition-colors text-theme-text-dark/80">Events</Link></li>
              <li><Link to="/contact" className="hover:text-theme-accent-orange-end transition-colors text-theme-text-dark/80">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Join Our Tribe</h3>
            <div className="flex justify-center md:justify-start space-x-6 items-center">
              <a href="https://www.instagram.com/bharatescapes/" target="_blank" rel="noopener noreferrer" className="text-theme-text-dark/80 hover:text-theme-accent-orange-end transition-all duration-300 hover:scale-110" aria-label="Visit our Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://wa.me/917976789334?text=Hi%20Bharatescapes%2C%0AI'd%20like%20to%20book%20a%20tour%20with%20Bharatescapes.%0ACan%20you%20share%20the%20best%20options%3F" target="_blank" rel="noopener noreferrer" className="text-theme-text-dark/80 hover:text-theme-accent-orange-end transition-all duration-300 hover:scale-110" aria-label="Chat on WhatsApp">
                <WhatsAppIcon className="h-6 w-6" />
              </a>
              <a href="mailto:bharatescape@gmail.com" className="text-theme-text-dark/80 hover:text-theme-accent-orange-end transition-all duration-300 hover:scale-110" aria-label="Email Bharatescapes">
                <Mail className="h-6 w-6" />
              </a>
              <a href="tel:+917976789334" className="text-theme-text-dark/80 hover:text-theme-accent-orange-end transition-all duration-300 hover:scale-110" aria-label="Call Bharatescapes">
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center py-5 mt-8 border-t border-black/10">
          <p className="text-sm text-theme-text-dark/70">&copy; {new Date().getFullYear()} Bharatescapes | All Rights Reserved</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
