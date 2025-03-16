
import { motion } from 'framer-motion';
import { Users, Award, Zap, CheckCircle } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'Jane Doe',
      position: 'CEO & Founder',
      bio: 'Security expert with over 15 years of experience in vulnerability assessment and penetration testing.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop'
    },
    {
      name: 'John Smith',
      position: 'Chief Security Officer',
      bio: 'Former government security consultant with expertise in network security and advanced threat protection.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&h=250&auto=format&fit=crop'
    },
    {
      name: 'Emily Johnson',
      position: 'Lead Penetration Tester',
      bio: 'Certified ethical hacker with a passion for finding and fixing security vulnerabilities.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&h=250&auto=format&fit=crop'
    },
    {
      name: 'Michael Wong',
      position: 'Security Compliance Expert',
      bio: 'Specializes in regulatory compliance including PCI DSS, HIPAA and ISO 27001 implementations.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&h=250&auto=format&fit=crop'
    }
  ];

  const values = [
    {
      icon: <CheckCircle className="h-10 w-10 text-a5c-purple" />,
      title: 'Integrity',
      description: 'We operate with unwavering honesty and ethical standards in all our security assessments.'
    },
    {
      icon: <Zap className="h-10 w-10 text-a5c-purple" />,
      title: 'Innovation',
      description: 'We continuously evolve our methodologies to stay ahead of emerging security threats.'
    },
    {
      icon: <Award className="h-10 w-10 text-a5c-purple" />,
      title: 'Excellence',
      description: 'We deliver the highest quality security services with meticulous attention to detail.'
    },
    {
      icon: <Users className="h-10 w-10 text-a5c-purple" />,
      title: 'Partnership',
      description: 'We build long-term relationships with our clients to ensure ongoing security resilience.'
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
              About <span className="text-gradient">A5C Tech</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We are a team of security experts dedicated to protecting your digital assets from modern threats using advanced techniques and continuous innovation.
            </p>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-wider text-a5c-purple mb-3">Our Story</h2>
              <h3 className="text-3xl font-bold mb-6">Pioneering Security Excellence Since 2010</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A5C Tech was founded with a simple mission: to provide businesses with the highest level of security assessment and protection services. What began as a small team of security enthusiasts has grown into a leading cybersecurity firm trusted by organizations worldwide.
                </p>
                <p>
                  Our journey started when our founders identified a critical gap in the market – most security providers were offering generic solutions that didn't address the specific needs and threats faced by individual businesses.
                </p>
                <p>
                  Today, we take pride in our tailored approach to security assessment and our commitment to staying ahead of evolving threats. Our team combines extensive experience with cutting-edge technology to deliver security solutions that truly make a difference.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="glass rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000"
                alt="Cybersecurity team working"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
            <h2 className="text-sm uppercase tracking-wider text-a5c-purple mb-3">Our Core Values</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h3>
            <p className="text-muted-foreground">
              Our values guide everything we do, from how we conduct assessments to how we interact with our clients.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={value.title} 
                className="glass p-8 rounded-2xl"
                variants={itemVariants}
              >
                <div className="mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-a5c-purple mb-3">Meet Our Team</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Security Experts</h3>
            <p className="text-muted-foreground">
              Our team consists of experienced security professionals dedicated to protecting your digital assets.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name} 
                className="glass rounded-2xl overflow-hidden card-hover"
                variants={itemVariants}
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-a5c-purple mb-3">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our security services can help protect your business from evolving cyber threats.
              </p>
              <Link to="/contact" className="btn-primary">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
