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
    { title: 'School Rules', description: 'View handbook', icon: BookOpen },
    { title: 'Visitor Alerts', description: 'Announcements', icon: Bell },
    { title: 'Safety Guidelines', description: 'Emergency info', icon: Shield },
    { title: 'My Records', description: 'Attendance & behavior', icon: FileText },
  ];

  return (
    <div className="h-screen w-screen overflow-hidden bg-background flex items-center justify-center">
      <div className="w-[70vw] max-w-3xl mx-auto h-full flex flex-col py-6 pb-[10vh]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <button
            onClick={() => navigate('/auth/role-select')}
            className="flex items-center gap-2 text-white/50 hover:text-white/70 transition-colors mb-4 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Sign Out
          </button>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs font-medium text-white/70 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Student Portal
            </div>
            <h1 className="text-2xl font-semibold text-white/95 mb-1">
              Welcome, Student
            </h1>
            <p className="text-sm text-white/50">
              Access your school information
            </p>
          </div>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={item.title}
                delay={index * 0.05}
                className="p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white/90 text-sm mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/50">
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1"
        >
          <h2 className="text-sm font-medium text-white/70 mb-3">Recent Alerts</h2>
          <GlassCard className="p-4" hover={false}>
            <div className="space-y-3">
              {[
                { title: 'Assembly Tomorrow', time: '2 hours ago', type: 'info' },
                { title: 'Uniform Reminder', time: '1 day ago', type: 'warning' },
              ].map((alert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                >
                  <div className={`w-2 h-2 rounded-full ${alert.type === 'info' ? 'bg-white/60' : 'bg-yellow-400'}`} />
                  <div className="flex-1">
                    <p className="font-medium text-white/80 text-sm">{alert.title}</p>
                    <p className="text-xs text-white/40">{alert.time}</p>
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
