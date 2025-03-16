
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-a5c-purple" />,
      title: 'Our Location',
      details: '123 Security Street, Cyber City, 10001'
    },
    {
      icon: <Phone className="h-6 w-6 text-a5c-purple" />,
      title: 'Phone Number',
      details: '+1 (123) 456-7890'
    },
    {
      icon: <Mail className="h-6 w-6 text-a5c-purple" />,
      title: 'Email Address',
      details: 'info@a5ctech.com'
    }
  ];

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
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about our services or want to schedule a consultation? Contact us today and our team will get back to you promptly.
            </p>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div 
                key={item.title} 
                className="glass p-8 rounded-2xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-a5c-purple/10 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.details}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Send Us A Message</h2>
              <p className="text-muted-foreground">
                Fill out the form and our team will get back to you within 24 hours. For urgent inquiries, please call our support line.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What happens next?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-a5c-purple text-white text-sm font-bold mr-3 mt-0.5">1</span>
                    <span className="text-muted-foreground">Our security expert will contact you for a free consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-a5c-purple text-white text-sm font-bold mr-3 mt-0.5">2</span>
                    <span className="text-muted-foreground">We'll prepare a customized security assessment proposal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-a5c-purple text-white text-sm font-bold mr-3 mt-0.5">3</span>
                    <span className="text-muted-foreground">We'll schedule and begin your security evaluation</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <p className="text-muted-foreground">
                  For general inquiries, please contact: <a href="mailto:info@a5ctech.com" className="text-a5c-purple hover:underline">info@a5ctech.com</a>
                </p>
              </div>
            </motion.div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 px-6 mb-10">
        <div className="container mx-auto">
          <motion.div 
            className="glass rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-video w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1651245484261!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="A5C Tech Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
