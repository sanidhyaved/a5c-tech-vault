
import { motion } from 'framer-motion';
import { Shield, Lock, Search, Database, FileCheck, Server, Code, Globe, Cloud, Zap, AlertTriangle, Network } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive scanning and assessment to identify security vulnerabilities in your systems and applications before they can be exploited.',
      features: [
        'Automated vulnerability scanning',
        'Manual verification of findings',
        'Detailed remediation recommendations',
        'Risk-based prioritization'
      ]
    },
    {
      icon: Lock,
      title: 'Penetration Testing',
      description: 'Simulate real-world attacks to test your defenses and identify security weaknesses before attackers do.',
      features: [
        'Black, white, and gray box testing',
        'Web application penetration testing',
        'Network penetration testing',
        'Social engineering simulations'
      ]
    },
    {
      icon: Search,
      title: 'Security Auditing',
      description: 'Thorough review of your security policies, procedures, and controls to ensure compliance and best practices.',
      features: [
        'Gap analysis against security frameworks',
        'Security policy review',
        'Control effectiveness assessment',
        'Detailed audit reports'
      ]
    },
    {
      icon: Database,
      title: 'Database Security',
      description: 'Protect your valuable data assets with specialized database security assessments and hardening.',
      features: [
        'Database configuration review',
        'Access control assessment',
        'Encryption implementation',
        'Query injection testing'
      ]
    },
    {
      icon: FileCheck,
      title: 'Compliance Assessment',
      description: 'Evaluate your systems against industry standards and regulations including ISO 27001, PCI DSS, and HIPAA.',
      features: [
        'Regulatory requirement mapping',
        'Compliance gap analysis',
        'Remediation planning',
        'Documentation preparation'
      ]
    },
    {
      icon: Server,
      title: 'Network Security',
      description: 'Comprehensive assessment and protection for your entire network infrastructure.',
      features: [
        'Network architecture review',
        'Firewall rule assessment',
        'Secure configuration analysis',
        'Traffic monitoring setup'
      ]
    },
    {
      icon: Code,
      title: 'Secure Code Review',
      description: 'Identify security flaws in your application code before they make it to production.',
      features: [
        'Static code analysis',
        'Dynamic code analysis',
        'Software composition analysis',
        'Secure coding recommendations'
      ]
    },
    {
      icon: Globe,
      title: 'Web Application Security',
      description: 'Protect your web applications from common and sophisticated attacks.',
      features: [
        'OWASP Top 10 assessment',
        'Business logic vulnerability testing',
        'API security testing',
        'WAF configuration assistance'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Ensure your cloud environments are configured securely and protected from threats.',
      features: [
        'Cloud configuration assessment',
        'Identity and access management review',
        'Data protection evaluation',
        'Serverless security testing'
      ]
    },
    {
      icon: Zap,
      title: 'Incident Response',
      description: 'Rapid response to security incidents to minimize damage and restore operations.',
      features: [
        'Incident investigation',
        'Threat containment',
        'Recovery assistance',
        'Post-incident analysis'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Red Team Operations',
      description: 'Advanced adversarial simulations to test your security defenses under realistic conditions.',
      features: [
        'Multi-vector attack simulations',
        'Targeted objective assessment',
        'Stealth operation techniques',
        'Comprehensive attack narrative'
      ]
    },
    {
      icon: Network,
      title: 'Security Architecture',
      description: 'Design and implement robust security architectures aligned with your business needs.',
      features: [
        'Architecture review and design',
        'Security technology selection',
        'Defense-in-depth strategy',
        'Zero trust implementation'
      ]
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 overflow-hidden"
    >
      {/* Hero Section */}
      <AnimatedBackground className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Security Services</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive security assessment and protection services to secure your business against modern cyber threats.
            </p>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.title} 
                className="service-card"
                variants={serviceVariants}
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-a5c-purple/10 blur-xl" />
                
                <div className="mb-6 inline-flex p-3 rounded-xl bg-a5c-purple/10">
                  <service.icon size={28} className="text-a5c-purple" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                
                <p className="text-muted-foreground mb-5">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-a5c-purple" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-background/80 relative">
        <div className="absolute inset-0 bg-a5c-purple/5 z-0"></div>
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-a5c-purple mb-3">Our Approach</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h3>
            <p className="text-muted-foreground">
              Our systematic approach ensures thorough security assessment and effective remediation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery', description: 'We begin by understanding your business, systems, and security requirements.' },
              { number: '02', title: 'Assessment', description: 'Our experts conduct comprehensive security testing and evaluation.' },
              { number: '03', title: 'Analysis', description: 'We analyze findings to identify critical vulnerabilities and their impact.' },
              { number: '04', title: 'Remediation', description: 'We provide actionable recommendations and assist with implementation.' }
            ].map((step, index) => (
              <motion.div 
                key={step.number} 
                className="glass rounded-2xl p-8 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="block text-4xl font-bold text-gradient mb-4">{step.number}</span>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-a5c-purple">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 mb-10">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Customized Security Solution?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today to discuss your specific security requirements and how our services can be tailored to your needs.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
