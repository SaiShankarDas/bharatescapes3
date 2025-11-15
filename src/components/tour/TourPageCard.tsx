import React from 'react';
import { motion } from 'framer-motion';
import { Tour } from '../../data/toursData';
import { Plus } from 'lucide-react';

interface TourPageCardProps {
  tour: Tour;
  onImageClick: (img: string) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const TourPageCard: React.FC<TourPageCardProps> = ({ tour, onImageClick }) => {
  return (
    <motion.div variants={cardVariants} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="relative group cursor-pointer" onClick={() => onImageClick(tour.img)}>
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={tour.img}
            alt={tour.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="p-3 bg-white/80 rounded-full shadow-md transform group-hover:scale-110 transition-transform">
            <Plus className="h-6 w-6 text-theme-text-dark" />
          </div>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-playfair text-xl font-bold text-theme-text-dark mb-2">{tour.title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{tour.caption}</p>
      </div>
    </motion.div>
  );
};

export default TourPageCard;
