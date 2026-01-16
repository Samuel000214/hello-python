import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, FileText, AlertTriangle, Calendar, CheckCircle2, PenTool } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/ui/GlassCard';
import FloatingPad from '@/components/ui/FloatingPad';
import { mockNotifications } from '@/lib/mock-services';
import { toast } from 'sonner';
import { Home, BellRing, FileCheck, User } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', path: '/portal/parent/dashboard' },
  { icon: BellRing, label: 'Notifications', path: '/portal/parent/notifications' },
  { icon: FileCheck, label: 'Records', path: '/portal/parent/records' },
  { icon: User, label: 'Profile', path: '/profile' },
];

const ParentNotifications = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(mockNotifications);
  const [signingId, setSigningId] = useState<string | null>(null);

  const handleAcknowledge = (id: string) => {
    setSigningId(id);
    
    // Simulate digital signature
    setTimeout(() => {
      setNotifications(prev =>
        prev.map(n => (n.id === id ? { ...n, acknowledged: true } : n))
      );
      setSigningId(null);
      toast.success('Digital signature recorded successfully');
    }, 2000);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'incident':
        return AlertTriangle;
      case 'absence':
        return Calendar;
      default:
        return FileText;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'incident':
        return 'text-red-600 bg-red-100';
      case 'absence':
        return 'text-amber-600 bg-amber-100';
      default:
        return 'text-blue-600 bg-blue-100';
    }
  };

  const pendingNotifications = notifications.filter(n => !n.acknowledged);
  const acknowledgedNotifications = notifications.filter(n => n.acknowledged);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pb-24">
      {/* Header */}
      <div className="p-6 md:p-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/portal/parent/dashboard')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Notifications</h1>
          <p className="text-muted-foreground">Review and acknowledge important notices</p>
        </motion.div>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        {/* Pending Section */}
        {pendingNotifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Pending Acknowledgment ({pendingNotifications.length})
            </h2>

            <div className="space-y-4">
              {pendingNotifications.map((notification, i) => {
                const Icon = getIcon(notification.type);
                const colorClasses = getColor(notification.type);
                const isSigning = signingId === notification.id;

                return (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <GlassCard className="p-6" hover={false}>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">
                            {notification.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {notification.description}
                          </p>
                          <p className="text-xs text-muted-foreground mb-4">
                            Received: {notification.date}
                          </p>

                          {/* Acknowledge button */}
                          <AnimatePresence mode="wait">
                            {isSigning ? (
                              <motion.div
                                key="signing"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20"
                              >
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                  className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent"
                                />
                                <div>
                                  <p className="font-medium text-primary">Recording Digital Signature...</p>
                                  <p className="text-xs text-muted-foreground">Verifying identity</p>
                                </div>
                              </motion.div>
                            ) : (
                              <motion.button
                                key="button"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => handleAcknowledge(notification.id)}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <PenTool className="w-4 h-4" />
                                Acknowledge with Digital Signature
                              </motion.button>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Acknowledged Section */}
        {acknowledgedNotifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Acknowledged ({acknowledgedNotifications.length})
            </h2>

            <div className="space-y-4">
              {acknowledgedNotifications.map((notification, i) => {
                const Icon = getIcon(notification.type);

                return (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <GlassCard className="p-5 opacity-75" hover={false}>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground">
                            {notification.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Acknowledged • {notification.date}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Empty state */}
        {notifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <BellRing className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">No notifications</h3>
            <p className="text-muted-foreground">You're all caught up!</p>
          </motion.div>
        )}
      </div>

      <FloatingPad items={navItems} />
    </div>
  );
};

export default ParentNotifications;
