import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import MinimalistCenterLayout from '../layout/MinimalistCenterLayout';
import BackButton from '../navigation/BackButton';

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconBgColor?: string;
  iconColor?: string;
  dashboardPath: string;
  backLabel?: string;
}

const PlaceholderPage = ({
  title,
  description,
  icon: Icon,
  iconBgColor = 'bg-primary/10',
  iconColor = 'text-primary',
  dashboardPath,
  backLabel = 'Back to Dashboard',
}: PlaceholderPageProps) => {
  return (
    <MinimalistCenterLayout>
      <div className="max-w-2xl mx-auto">
        <BackButton dashboardPath={dashboardPath} label={backLabel} />
        
        <div className="mt-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={`inline-flex items-center justify-center w-16 h-16 ${iconBgColor} rounded-2xl mb-6`}
          >
            <Icon className={`w-8 h-8 ${iconColor}`} />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl font-bold text-foreground mb-4"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-muted-foreground max-w-md mx-auto mb-6"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-warning/10 text-warning">
              Coming Soon
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-8 p-6 bg-gray-50 rounded-xl"
          >
            <p className="text-sm text-muted-foreground">
              This feature is currently under development. Check back soon for updates.
            </p>
          </motion.div>
        </div>
      </div>
    </MinimalistCenterLayout>
  );
};

export default PlaceholderPage;
