import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { BedDouble, Users, UtensilsCrossed, Wifi, ParkingCircle, Bike, MapPin, Phone, Instagram } from 'lucide-react';

// Section animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const WhereaboutsPage: React.FC = () => {

  const facilities = [
    { icon: BedDouble, name: 'Accommodation' },
    { icon: Users, name: 'Common Lounge Area' },
    { icon: UtensilsCrossed, name: 'Lakeview Rooftop Cafe' },
    { icon: Wifi, name: 'Complimentary Wifi' },
    { icon: ParkingCircle, name: 'Convenient Free Parking' },
    { icon: Bike, name: 'Bike Rentals' },
  ];

  const accommodationTypes = [
    { name: 'Cozy Rooms', img: 'https://iili.io/KpStM0J.jpg' },
    { name: 'Superior Rooms', img: 'https://iili.io/KpUqkLG.jpg' },
    { name: 'Superior Dorms', img: 'https://iili.io/KpUI2jI.jpg' },
  ];

  const landmarks = [
    { name: 'Lake Pichola', distance: '150m', image: 'https://iili.io/KpLURDB.jpg' },
    { name: 'Gangaur Ghat', distance: '550m', image: 'https://iili.io/Ktj9NPs.jpg' },
    { name: 'Ambrai Ghat', distance: '600m', image: 'https://iili.io/KtjxgoJ.jpg' },
    { name: 'Jagdish Temple', distance: '600m', image: 'https://iili.io/KthPIvs.jpg' },
    { name: 'City Palace', distance: '750m', image: 'https://iili.io/KthkTpS.jpg' },
    { name: 'Fateh Sagar Lake', distance: '1km', image: 'https://iili.io/KZPLrRp.jpg' },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden video-overlay">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          poster="https://iili.io/K3gSgJ1.jpg" // Poster image
        >
          <source src="https://videos.pexels.com/video-files/8065359/8065359-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-text-light px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
            className="font-playfair text-5xl md:text-7xl font-bold"
          >
            Whereabout, Udaipur
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <div 
        className="relative bg-cover bg-center bg-scroll md:bg-fixed py-20 md:py-28" 
        style={{ backgroundImage: "url('https://iili.io/KpsPgLB.jpg')" }}
      >
        <div className="absolute inset-0 bg-dark-bg/60 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6 space-y-20 md:space-y-28">
          
          {/* 1. About Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-playfair text-4xl font-bold text-accent-gold mb-4">A Home for the Curious</h2>
            <p className="text-lg text-text-muted">
              Welcome to Whereabout, a vibrant hub for travelers in the heart of Udaipur. More than just a place to stay, it's a space to connect, share stories, and create lasting memories. Our vibe is relaxed, our community is global, and our doors are always open to wanderers like you.
            </p>
          </motion.section>

          {/* 2. Facilities Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-playfair text-4xl font-bold text-accent-gold text-center mb-12">Our Facilities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              {facilities.map((facility, index) => (
                <motion.div 
                  key={facility.name} 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-text-muted/10 p-4 rounded-full mb-3 border border-text-muted/20">
                    <facility.icon className="h-8 w-8 text-text-muted" />
                  </div>
                  <p className="text-text-light font-semibold">{facility.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 3. Accommodation Types Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-playfair text-4xl font-bold text-accent-gold text-center mb-12">Accommodation Types</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {accommodationTypes.map((acc, index) => (
                <motion.div
                  key={acc.name}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                >
                  <img src={acc.img} alt={acc.name} className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-0 left-0 p-6 font-playfair text-2xl font-bold text-white">{acc.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 4 & 5. Lounge & Cafe Section */}
          <section className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
            >
              <img src="https://iili.io/KpUYV5u.jpg" alt="Cozy Common Lounge" className="rounded-lg shadow-xl w-full aspect-square object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-playfair text-3xl font-bold text-accent-gold mb-4">Cozy Common Lounge</h3>
              <p className="text-lg text-text-muted">A warm, shared space designed for connection. Relax with a book from our collection, challenge a new friend to a board game, or simply sink into our comfy sofas and share travel tales. It's the heart of our community.</p>
            </motion.div>

            <motion.div 
              className="md:order-last"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
            >
              <img src="https://iili.io/KpUERe9.jpg" alt="Lakeview Rooftop Cafe" className="rounded-lg shadow-xl w-full aspect-square object-cover" />
            </motion.div>
            <motion.div 
              className="md:order-first"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-playfair text-3xl font-bold text-accent-gold mb-4">Lakeview Rooftop Cafe</h3>
              <p className="text-lg text-text-muted">Sip freshly brewed coffee or a chilled beverage with a stunning, uninterrupted view of Lake Pichola. Our rooftop cafe is the perfect spot to watch the sunset paint the sky and see the city lights begin to twinkle.</p>
            </motion.div>
          </section>

          {/* 6. Nearby Attractions */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="font-playfair text-4xl font-bold text-accent-gold text-center mb-12">Nearby Attractions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {landmarks.map((landmark, index) => (
                <motion.div
                  key={landmark.name}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:-translate-y-2 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img src={landmark.image} alt={landmark.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white/20 shadow-md" />
                  <h4 className="font-semibold text-text-light text-lg">{landmark.name}</h4>
                  <p className="text-sm text-text-muted">{landmark.distance} away</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 7. Location & Map */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            <div>
              <h2 className="font-playfair text-4xl font-bold text-accent-gold mb-8">Our Location</h2>
              <div className="mb-8">
                <h3 className="font-poppins text-xl font-bold text-text-light mb-3 flex items-center"><MapPin className="mr-3 text-accent-gold" /> Address</h3>
                <p className="text-text-muted pl-9">17, Outside of Chandpole, Jethiyo Ka Akhada, Udaipur, Rajasthan, India</p>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-xl border-4 border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.211717366365!2d73.6784883759952!3d24.582488955246747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e50db557913d%3A0x1c3b31378b2a384!2sWhereabout%20Udaipur!5e0!3m2!1sen!2sin!4v1716987654321!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.section>

          {/* 8. Connect Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center"
          >
            <h2 className="font-playfair text-4xl font-bold text-accent-gold mb-8">Connect with Whereabouts</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="tel:+918619011024" className="inline-flex items-center text-xl text-text-light hover:text-accent-gold transition-colors">
                <Phone className="mr-3" /> +91 8619011024
              </a>
              <a href="https://www.instagram.com/whereabouthostel" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xl text-text-light hover:text-accent-gold transition-colors">
                <Instagram className="mr-3" /> @whereabouthostel
              </a>
            </div>
          </motion.section>

        </div>
      </div>
    </PageTransition>
  );
};

export default WhereaboutsPage;
