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
  index = 0 
}: NavigationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
    >
      <Link to={to} className="block nav-card group">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/15 transition-colors">
            <Icon className="w-5 h-5 text-white/80" strokeWidth={1.5} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-white/90 text-sm truncate">{label}</h3>
            <p className="text-xs text-white/50 truncate">{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default NavigationCard;
