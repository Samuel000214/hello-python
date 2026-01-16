import { motion } from 'framer-motion';
import { LucideIcon, Home, Users, Key, Scale, Database, ShieldCheck, Puzzle, Settings } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

const adminNavItems: NavItem[] = [
  { icon: Home, label: 'Home', path: '/admin/dashboard' },
  { icon: Users, label: 'Users', path: '/admin/users' },
  { icon: Key, label: 'Access', path: '/admin/permissions' },
  { icon: Scale, label: 'Bias', path: '/admin/bias-review' },
  { icon: ShieldCheck, label: 'Consent', path: '/admin/consent' },
  { icon: Puzzle, label: 'Rules', path: '/admin/rule-mapping' },
  { icon: Database, label: 'Retention', path: '/admin/retention' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const AdminFloatingNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 px-3 py-3 bg-white border border-gray-200 rounded-2xl shadow-xl">
        {adminNavItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <motion.button
              key={item.path}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(item.path)}
              className={cn(
                'flex flex-col items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all duration-200',
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
              )}
            >
              <Icon className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-[11px] font-medium">
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AdminFloatingNav;
