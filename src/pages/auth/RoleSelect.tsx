import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  Briefcase, 
  UserCheck, 
  GraduationCap, 
  Heart 
} from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const roles = [
  {
    id: 'admin',
    title: 'Administrator',
    description: 'Full system access and configuration',
    icon: Shield,
    path: '/auth/admin-production',
    gradient: 'from-amber-500 to-orange-600',
    glow: 'amber' as const,
  },
  {
    id: 'coordinator',
    title: 'Coordinator (PoD)',
    description: 'Discipline management and oversight',
    icon: Users,
    path: '/portal/coordinator',
    gradient: 'from-blue-500 to-indigo-600',
    glow: 'blue' as const,
  },
  {
    id: 'adviser',
    title: 'Adviser',
    description: 'Class management and student monitoring',
    icon: Briefcase,
    path: '/portal/adviser',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'green' as const,
  },
  {
    id: 'beadle',
    title: 'Beadle',
    description: 'Attendance and incident reporting',
    icon: UserCheck,
    path: '/portal/beadle',
    gradient: 'from-purple-500 to-violet-600',
    glow: 'purple' as const,
  },
  {
    id: 'student',
    title: 'Student',
    description: 'View rules and visitor alerts',
    icon: GraduationCap,
    path: '/portal/student',
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'blue' as const,
  },
  {
    id: 'parent',
    title: 'Parent',
    description: "Monitor child's records and acknowledgments",
    icon: Heart,
    path: '/portal/parent',
    gradient: 'from-rose-500 to-pink-600',
    glow: 'red' as const,
  },
];

const RoleSelect = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          System Online
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
          Select Your Role
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          Choose your access level to continue to the POD AI system
        </p>
      </motion.div>

      {/* Role cards grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {roles.map((role, index) => {
          const Icon = role.icon;

          return (
            <GlassCard
              key={role.id}
              onClick={() => navigate(role.path)}
              glow={role.glow}
              delay={0.1 + index * 0.08}
              className="p-6 group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center shadow-lg mb-5`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {role.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {role.description}
                </p>

                {/* Arrow indicator */}
                <motion.div
                  className="mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="text-sm font-medium">Continue →</span>
                </motion.div>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center text-muted-foreground text-sm relative z-10"
      >
        <p>Secure multi-factor authentication enabled</p>
      </motion.div>
    </div>
  );
};

export default RoleSelect;
