import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const StaysPage: React.FC = () => {
  return (
    <PageTransition>
      <section id="stays" className="pt-32 pb-20 md:pb-28 text-text-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-4 text-accent-gold">Stay with Bharatescapes</h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-16">"Where stories begin — stay at the heart of Udaipur’s travel culture. Discover our handpicked accommodations."</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Whereabouts Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="relative aspect-[3/4] rounded-lg shadow-2xl overflow-hidden group"
            >
              <img 
                src="https://iili.io/KpLGRZQ.jpg" 
                alt="Whereabout Hostel" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <a 
                href="https://www.instagram.com/whereabouthostel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="absolute inset-0 p-8 flex flex-col justify-between z-10"
              >
                <div>
                  <h2 className="font-playfair text-3xl font-bold text-text-light">Whereabout</h2>
                  <p className="text-accent-gold font-semibold">Our Featured Stay</p>
                </div>
                <div className="transform transition-transform duration-500 group-hover:translate-x-2">
                  <span className="font-bold text-text-light inline-flex items-center">
                    Explore Details <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </div>
              </a>
            </motion.div>

            {/* More Stays Coming Soon Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg flex items-center justify-center bg-white/10 border-2 border-dashed border-white/50"
              >
                <p className="font-playfair text-2xl text-center">More Stays<br/>Coming Soon</p>
              </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default StaysPage;
