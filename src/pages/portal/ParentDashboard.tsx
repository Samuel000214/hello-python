import { motion } from 'framer-motion';
import { FileText, Bell, CheckCircle, Clock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/ui/GlassCard';
import FloatingPad from '@/components/ui/FloatingPad';
import { Home, BellRing, FileCheck, User } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', path: '/portal/parent/dashboard' },
  { icon: BellRing, label: 'Notifications', path: '/portal/parent/notifications' },
  { icon: FileCheck, label: 'Records', path: '/portal/parent/records' },
  { icon: User, label: 'Profile', path: '/profile' },
];

const ParentDashboard = () => {
  const navigate = useNavigate();

  const childInfo = {
    name: 'Juan Dela Cruz Jr.',
    grade: 'Grade 9',
    section: 'Section A',
    attendance: '95%',
    behaviorScore: '8.5/10',
  };

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            Parent Portal
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Welcome, Parent
          </h1>
          <p className="text-muted-foreground">
            Monitor your child's school records
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Child Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard className="p-6 mb-6" hover={false}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white text-xl font-bold">
                J
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">{childInfo.name}</h2>
                <p className="text-muted-foreground">{childInfo.grade} • {childInfo.section}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50">
                <p className="text-sm text-emerald-600 mb-1">Attendance</p>
                <p className="text-2xl font-bold text-emerald-700">{childInfo.attendance}</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-50">
                <p className="text-sm text-blue-600 mb-1">Behavior Score</p>
                <p className="text-2xl font-bold text-blue-700">{childInfo.behaviorScore}</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Pending Acknowledgments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5 text-amber-500" />
            Pending Acknowledgments
          </h2>

          <div className="space-y-4">
            {[
              {
                id: '1',
                title: 'Incident Report #123',
                description: 'Minor incident during recess - Please review and acknowledge',
                date: 'Jan 15, 2024',
                urgent: true,
              },
              {
                id: '2',
                title: 'Absence Warning',
                description: 'Your child has missed 3 days this month',
                date: 'Jan 14, 2024',
                urgent: false,
              },
            ].map((item, i) => (
              <GlassCard
                key={item.id}
                delay={0.3 + i * 0.1}
                glow={item.urgent ? 'red' : 'amber'}
                className="p-5"
                onClick={() => navigate('/portal/parent/notifications')}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.urgent ? 'bg-red-100' : 'bg-amber-100'}`}>
                    <FileText className={`w-5 h-5 ${item.urgent ? 'text-red-600' : 'text-amber-600'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      {item.urgent && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600">Urgent</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.date}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Acknowledged Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            Recently Acknowledged
          </h2>

          <GlassCard className="p-5" hover={false}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">Parent-Teacher Conference</h3>
                <p className="text-sm text-muted-foreground">Acknowledged on Jan 10, 2024</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <FloatingPad items={navItems} />
    </div>
  );
};

export default ParentDashboard;
