
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Lock, Search, Database, FileCheck, Server } from 'lucide-react';

import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import AnimatedBackground from '../components/AnimatedBackground';

const Index = () => {
  const services = [
    {
      icon: Shield,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive scanning and assessment to identify security vulnerabilities in your systems and applications.'
    },
    {
      icon: Lock,
      title: 'Penetration Testing',
      description: 'Simulate real-world attacks to test your defenses and identify security weaknesses before attackers do.'
    },
    {
      icon: Search,
      title: 'Security Auditing',
      description: 'Thorough review of your security policies, procedures, and controls to ensure compliance and best practices.'
    },
    {
      icon: Database,
      title: 'Database Security',
      description: 'Protect your valuable data assets with specialized database security assessments and hardening.'
    },
    {
      icon: FileCheck,
      title: 'Compliance Assessment',
      description: 'Evaluate your systems against industry standards and regulations including ISO 27001, PCI DSS, and HIPAA.'
    },
    {
      icon: Server,
      title: 'Network Security',
      description: 'Comprehensive assessment and protection for your entire network infrastructure.'
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <AnimatedBackground className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-sm uppercase tracking-wider text-a5c-purple mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Security Services</h3>
            <p className="text-muted-foreground">
              We provide a full range of cybersecurity services to protect your business from evolving threats.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/services" className="btn-primary">
              View All Services <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </AnimatedBackground>
      
      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-a5c-purple/5 z-0"></div>
        <div className="container mx-auto relative z-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Security Audits' },
              { value: '99.9%', label: 'Success Rate' },
              { value: '50+', label: 'Enterprise Clients' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center glass p-8 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-4xl font-bold text-gradient mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="glass rounded-3xl p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-a5c-purple/10 blur-3xl z-0"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-a5c-purple/5 blur-3xl z-0"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Digital Assets?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of security experts is ready to help protect your business from modern cyber threats. Get in touch today for a customized security assessment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Started <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
                <Link to="/services" className="btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Index;
