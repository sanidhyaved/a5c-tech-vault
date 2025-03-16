
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div 
      className="service-card relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-a5c-purple/10 blur-xl" />
      
      <div className="relative mb-6 inline-flex p-3 rounded-xl bg-a5c-purple/10">
        <div className="absolute inset-0 bg-gradient-to-br from-a5c-purple/5 to-a5c-purple/20 rounded-xl" />
        <Icon size={28} className="text-a5c-purple relative z-10" />
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
