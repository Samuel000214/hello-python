import { motion } from 'framer-motion';
import { 
  FileText, 
  Mic, 
  Upload, 
  EyeOff, 
  TrendingUp, 
  MessageCircle, 
  Shield 
} from 'lucide-react';
import MinimalistCenterLayout from '@/components/layout/MinimalistCenterLayout';
import NavigationCard from '@/components/navigation/NavigationCard';

const navItems = [
  { to: '/beadle/report', icon: FileText, label: 'New Report', description: 'Submit an incident', iconColor: 'text-pod' },
  { to: '/beadle/voice-report', icon: Mic, label: 'Voice Report', description: 'Record audio report', iconColor: 'text-beadle' },
  { to: '/beadle/evidence', icon: Upload, label: 'Upload Evidence', description: 'Add photos or videos', iconColor: 'text-admin' },
  { to: '/beadle/confidential', icon: EyeOff, label: 'Confidential Report', description: 'Anonymous submission', iconColor: 'text-destructive' },
  { to: '/beadle/status', icon: TrendingUp, label: 'Track Status', description: 'View report progress', iconColor: 'text-adviser' },
  { to: '/beadle/feedback', icon: MessageCircle, label: 'Feedback', description: 'Receive updates', iconColor: 'text-pod' },
  { to: '/beadle/safety', icon: Shield, label: 'Safety Info', description: 'Safety guidelines', iconColor: 'text-muted-foreground' },
];

const BeadleDashboard = () => {
  return (
    <MinimalistCenterLayout>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Report Station
          </h1>
          <p className="text-muted-foreground">
            Student Beadle Dashboard
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {navItems.map((item, index) => (
            <NavigationCard
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              description={item.description}
              iconColor={item.iconColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </MinimalistCenterLayout>
  );
};

export default BeadleDashboard;
