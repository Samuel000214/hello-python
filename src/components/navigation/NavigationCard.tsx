import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationCardProps {
  to: string;
  icon: LucideIcon;
  label: string;
  description: string;
  iconColor?: string;
  index?: number;
}

const NavigationCard = ({ 
  to, 
  icon: Icon, 
  label, 
  description, 
  iconColor = 'text-primary',
  index = 0 
}: NavigationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={to} className="block nav-card group">
        <div className="flex flex-col items-center text-center gap-4">
          <div className={`p-3 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors`}>
            <Icon className={`w-12 h-12 ${iconColor}`} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">{label}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default NavigationCard;
