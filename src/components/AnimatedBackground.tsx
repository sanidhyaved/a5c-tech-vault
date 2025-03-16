
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ opacity }}
      >
        {/* Circle 1 */}
        <motion.div 
          className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-a5c-purple/5 blur-3xl"
          style={{ y: y1 }}
        />
        
        {/* Circle 2 */}
        <motion.div 
          className="absolute -bottom-96 -left-20 w-[30rem] h-[30rem] rounded-full bg-a5c-purple/10 blur-3xl"
          style={{ y: y2 }}
        />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
