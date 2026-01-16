import { motion } from 'framer-motion';
import { 
  Users, 
  Key, 
  Settings, 
  FileSearch, 
  Lock, 
  Cpu, 
  Database, 
  Plug 
} from 'lucide-react';
import NavigationCard from '@/components/navigation/NavigationCard';
import AdminFloatingNav from '@/components/ui/AdminFloatingNav';

const navItems = [
  { to: '/admin/users', icon: Users, label: 'User Management', description: 'Manage accounts', iconColor: 'text-pod' },
  { to: '/admin/permissions', icon: Key, label: 'Permissions', description: 'Configure access', iconColor: 'text-admin' },
  { to: '/settings', icon: Settings, label: 'System Settings', description: 'Configure system', iconColor: 'text-muted-foreground' },
  { to: '/pod/audit-logs', icon: FileSearch, label: 'Audit Logs', description: 'Review activity', iconColor: 'text-beadle' },
  { to: '/security/privacy', icon: Lock, label: 'Security', description: 'Privacy controls', iconColor: 'text-destructive' },
  { to: '/ai/config', icon: Cpu, label: 'AI Configuration', description: 'Configure AI models', iconColor: 'text-pod' },
  { to: '/admin/retention', icon: Database, label: 'Data Retention', description: 'Manage data lifecycle', iconColor: 'text-admin' },
  { to: '/admin/integrations', icon: Plug, label: 'Integrations', description: 'External connections', iconColor: 'text-muted-foreground' },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 pb-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Admin Panel
          </h1>
          <p className="text-muted-foreground">
            System Administrator Dashboard
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
      
      <AdminFloatingNav />
    </div>
  );
};

export default AdminDashboard;
