import React from 'react';
import { motion } from 'framer-motion';

// Import your images as you did before
import img1 from '../../../public/pics/1.jpg';
import img2 from '../../../public/pics/4.jpg';
import img3 from '../../../public/pics/3.jpg';
import img4 from '../../../public/pics/92.jpg';
import img5 from '../../../public/pics/91.jpg';
import img6 from '../../../public/pics/6.jpg';
import img7 from '../../../public/pics/7.jpg';
import img8 from '../../../public/pics/8.jpg';
import img9 from '../../../public/pics/9.jpg';

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const duplicatedImages = [...galleryImages, ...galleryImages]; // Duplicate for a seamless loop

const Gallery = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -2036], // The value to translate. This should be calculated based on image width + gap
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40, // Adjust duration for speed
          ease: "linear",
        },
      },
    },
  };

  return (
    <section id="gallery" className="py-20 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent title-glow">
            Gallery
          </h2>
          <p className="text-center text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Bit-2-Byte was born from a dream—to help others grow, upskill, and share knowledge for the upliftment of GNIT's coding community. Through mentorship, workshops, and collaboration, it has become a hub where passion meets innovation.
          </p>
        </motion.div>
        
        <div className="marquee-container">
          <motion.div
            className="marquee-track"
            variants={marqueeVariants}
            animate="animate"
          >
            {duplicatedImages.map((img, index) => (
              <div key={index} className="marquee-image-wrapper">
                <img src={img} alt={`Community event ${index + 1}`} className="marquee-image" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;