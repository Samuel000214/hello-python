import { motion } from 'framer-motion';
import { BookOpen, Bell, Shield, FileText, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/ui/GlassCard';
import FloatingPad from '@/components/ui/FloatingPad';
import { Home, Book, BellRing, User } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', path: '/portal/student/dashboard' },
  { icon: Book, label: 'Rules', path: '/portal/student/rules' },
  { icon: BellRing, label: 'Alerts', path: '/portal/student/alerts' },
  { icon: User, label: 'Profile', path: '/profile' },
];

const StudentDashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: 'School Rules',
      description: 'View student handbook and guidelines',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Visitor Alerts',
      description: 'Important announcements and notices',
      icon: Bell,
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Safety Guidelines',
      description: 'Emergency procedures and contacts',
      icon: Shield,
      color: 'from-red-500 to-rose-600',
    },
    {
      title: 'My Records',
      description: 'View your attendance and behavior',
      icon: FileText,
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pb-24">
      {/* Header */}
      <div className="p-6 md:p-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/auth/role-select')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Sign Out
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-600 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Student Portal
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Welcome, Student
          </h1>
          <p className="text-muted-foreground">
            Access your school information and resources
          </p>
        </motion.div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={item.title}
                delay={index * 0.1}
                glow="blue"
                className="p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Recent Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">Recent Alerts</h2>
          <GlassCard className="p-6" hover={false}>
            <div className="space-y-4">
              {[
                { title: 'Assembly Tomorrow', time: '2 hours ago', type: 'info' },
                { title: 'Uniform Reminder', time: '1 day ago', type: 'warning' },
              ].map((alert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50"
                >
                  <div className={`w-3 h-3 rounded-full ${alert.type === 'info' ? 'bg-blue-500' : 'bg-amber-500'}`} />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{alert.title}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <FloatingPad items={navItems} />
    </div>
  );
};

export default StudentDashboard;
