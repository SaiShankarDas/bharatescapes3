import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { toursData } from '../data/toursData';
import ImageLightbox from '../components/common/ImageLightbox';
import TourRoadmap from '../components/tour/TourRoadmap';

const ToursPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (img: string) => {
    setSelectedImage(img);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-warm-white text-theme-text-dark">
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold">Our Signature Tours</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-4">Follow the path to unforgettable memories. Each tour is a chapter in your Udaipur story, designed to reveal the city's heart and soul.</p>
        </motion.div>
        
        <div className="container mx-auto px-6 space-y-16">
            {/* Morning Tour */}
            <section>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 text-soft-terracotta">🌅 Morning Adventure Tour</h2>
                <TourRoadmap tours={toursData.morning} onImageClick={handleImageClick} />
            </section>

            {/* Evening Tour */}
            <section>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 text-primary-start">🌇 Evening Heritage & Sunset Tour</h2>
                <TourRoadmap tours={toursData.evening} onImageClick={handleImageClick} />
            </section>

            {/* Day Itinerary */}
            <section>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 text-theme-accent-orange-end">🕌 Day Itinerary — Explore Udaipur Like a Local</h2>
                <TourRoadmap tours={toursData.day} onImageClick={handleImageClick} />
            </section>
        </div>
      </div>
      <ImageLightbox src={selectedImage} onClose={handleCloseLightbox} />
    </PageTransition>
  );
};

export default ToursPage;
