import React from 'react';
import { motion } from 'framer-motion';
// Assuming useScrollAnimation is available and imported from the correct path
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Calendar, User, GitBranch, ShieldCheck, BrainCircuit } from 'lucide-react';

const webinars = [
  { 
    title: 'AVNTK: Supervised Learning', 
    date: 'March 30, 2025', 
    speaker: 'SUDIPTA SEN', 
    icon: <BrainCircuit size={40} />,
    color: 'text-fuchsia-400',
    hoverColor: 'shadow-fuchsia-700/50'
  },
  { 
    title: 'Cyber Security For Developers', 
    date: 'March 06, 2025', 
    speaker: 'UJJAL BHATTACHARYA', 
    icon: <ShieldCheck size={40} />,
    color: 'text-green-400',
    hoverColor: 'shadow-green-700/50'
  },
  { 
    title: 'AVNTK: Git', 
    date: 'November 30, 2024', 
    speaker: 'ANURAG BHATTACHARJEE', 
    icon: <GitBranch size={40} />,
    color: 'text-cyan-400',
    hoverColor: 'shadow-cyan-700/50'
  },
];

const cardVariants = {
    // Subtle, continuous background pulse animation for "live" feel
    pulse: { 
        scale: [1, 1.01, 1],
        opacity: [1, 0.98, 1],
        transition: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
        }
    }
}

const WebinarCard = ({ webinar, index }) => {
    return (
        <motion.div
            key={index}
            className="webinar-tech-card"
            // Initial animation for load-in
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            // Live animation for constant movement
            animate="pulse"
            variants={cardVariants}
        >
            <div className="webinar-inner-content">
                <div className={`webinar-icon-glow ${webinar.color}`}>
                    {webinar.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{webinar.title}</h3>
                
                {/* Removed mt-6 pt-4 and border-t to adjust spacing after button removal */}
                <div className="space-y-3 text-base">
                    {/* Date/Time */}
                    <p className="flex items-center justify-center gap-3 font-mono text-gray-300">
                      <Calendar size={18} className={`w-5 h-5 ${webinar.color}`} />
                      <span className="uppercase tracking-wider">{webinar.date}</span>
                    </p>
                    
                    {/* Speaker */}
                    <p className="flex items-center justify-center gap-3 font-mono text-gray-300">
                      <User size={18} className={`w-5 h-5 ${webinar.color}`} />
                      <span className="font-semibold">{webinar.speaker}</span>
                    </p>
                </div>
                
                {/* The Call to Action button has been removed for a simpler design. */}
            </div>
        </motion.div>
    );
}


const Webinars = () => {
  // Assuming useScrollAnimation is available (though Framer Motion's whileInView handles basic scroll effects)
  const { ref, style } = useScrollAnimation();

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        {/* UPDATED CLASSES:
          1. text-4xl: Reduced base font size for mobile compatibility.
          2. whitespace-nowrap: Forces the entire title onto one line, preventing vertical stacking.
          3. overflow-hidden: Clips the slight horizontal text shifting caused by the glitch effect.
        */}
        <h2 className="text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent title-glow max-w-full leading-tight mx-auto overflow-hidden whitespace-nowrap">
          <span data-text="B2B-WEBINAR-FEED" className="glitch-text">B2B-WEBINAR-FEED</span>
        </h2>
        
        <motion.div 
          ref={ref} 
          style={style} 
          className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
        >
          {webinars.map((webinar, index) => (
            <WebinarCard key={index} webinar={webinar} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Webinars;
