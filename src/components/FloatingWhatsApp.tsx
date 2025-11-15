import React from 'react';
import { motion } from 'framer-motion';

const FloatingWhatsApp: React.FC = () => {
  // Use the correctly encoded URL for emojis and line breaks.
  const whatsappUrl = "https://wa.me/917976789334?text=Hi%20Bharatescapes%2C%0AI'd%20like%20to%20book%20a%20tour%20with%20Bharatescapes.%0ACan%20you%20share%20the%20best%20options%3F";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50" // Removed background styles
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" // New icon
        alt="WhatsApp Icon" 
        className="w-14 h-14 drop-shadow-lg" // Adjusted size and added drop shadow for visibility
      />
    </motion.a>
  );
};

export default FloatingWhatsApp;
