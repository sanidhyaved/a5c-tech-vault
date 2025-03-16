
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Lock, Server } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateTransform = (factor: number) => {
    if (heroRef.current) {
      const { width, height } = heroRef.current.getBoundingClientRect();
      const centerX = width / 2;
      const centerY = height / 2;
      
      const moveX = (mousePosition.x - centerX) / centerX * factor;
      const moveY = (mousePosition.y - centerY) / centerY * factor;
      
      return { moveX, moveY };
    }
    return { moveX: 0, moveY: 0 };
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7,
        ease: "easeOut" 
      } 
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        delay: 0.4,
        ease: "easeOut" 
      } 
    }
  };

  const floatingIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.6 
      } 
    }
  };

  const { moveX: bg1X, moveY: bg1Y } = calculateTransform(-5);
  const { moveX: bg2X, moveY: bg2Y } = calculateTransform(-10);
  const { moveX: iconX, moveY: iconY } = calculateTransform(-15);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      >
        {/* Large Purple Circle */}
        <motion.div 
          className="absolute top-1/4 right-[-10%] w-[40rem] h-[40rem] rounded-full bg-a5c-purple/5 blur-3xl"
          style={{ 
            transform: `translate(${bg1X}px, ${bg1Y}px)` 
          }}
        />
        
        {/* Small Purple Circle */}
        <motion.div 
          className="absolute bottom-[-10%] left-1/4 w-[25rem] h-[25rem] rounded-full bg-a5c-purple/10 blur-3xl"
          style={{ 
            transform: `translate(${bg2X}px, ${bg2Y}px)` 
          }}
        />
      </motion.div>

      {/* Floating Security Icons */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={floatingIconVariants}
        style={{ transform: `translate(${iconX}px, ${iconY}px)` }}
        className="absolute z-10"
      >
        <div className="absolute top-32 right-1/4 glass p-4 rounded-full animate-float shadow-xl shadow-a5c-purple/5">
          <Shield size={36} className="text-a5c-purple" />
        </div>
        <div className="absolute bottom-48 left-1/4 glass p-4 rounded-full animate-float shadow-xl shadow-a5c-purple/5" style={{ animationDelay: "-2s" }}>
          <Lock size={36} className="text-a5c-purple" />
        </div>
        <div className="absolute top-1/2 right-1/5 glass p-4 rounded-full animate-float shadow-xl shadow-a5c-purple/5" style={{ animationDelay: "-4s" }}>
          <Server size={36} className="text-a5c-purple" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Advanced <span className="text-gradient">Security Solutions</span> for the Digital Age
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comprehensive vulnerability assessment, penetration testing, and security auditing services to protect your digital assets.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <Link to="/services" className="btn-primary">
            Explore Services <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
          <Link to="/contact" className="btn-outline">
            Get In Touch
          </Link>
        </motion.div>
      </div>

      {/* 3D Model Container - We'll use CSS for now and can add actual 3D later */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
