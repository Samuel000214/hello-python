import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, KeyRound, ArrowLeft, Users, Briefcase, UserCheck, GraduationCap, Heart, ChevronRight } from 'lucide-react';
import BiometricScanner from '@/components/ui/BiometricScanner';
import { toast } from 'sonner';
import { LucideIcon } from 'lucide-react';

type AuthMethod = 'facial' | 'manual';

const roleConfig: Record<string, { title: string; icon: LucideIcon; gradient: string; dashboard: string }> = {
  coordinator: {
    title: 'Coordinator',
    icon: Users,
    gradient: 'from-blue-500 to-indigo-600',
    dashboard: '/pod/dashboard',
  },
  adviser: {
    title: 'Adviser',
    icon: Briefcase,
    gradient: 'from-emerald-500 to-teal-600',
    dashboard: '/adviser/dashboard',
  },
  beadle: {
    title: 'Beadle',
    icon: UserCheck,
    gradient: 'from-purple-500 to-violet-600',
    dashboard: '/beadle/dashboard',
  },
  student: {
    title: 'Student',
    icon: GraduationCap,
    gradient: 'from-cyan-500 to-blue-600',
    dashboard: '/portal/student/dashboard',
  },
  parent: {
    title: 'Parent',
    icon: Heart,
    gradient: 'from-rose-500 to-pink-600',
    dashboard: '/portal/parent/dashboard',
  },
};

const PortalLogin = () => {
  const { role = 'student' } = useParams<{ role: string }>();
  const navigate = useNavigate();
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const config = roleConfig[role] || roleConfig.student;
  const Icon = config.icon;

  const handleBiometricComplete = () => {
    toast.success(`Welcome! Logged in as ${config.title}.`);
    setTimeout(() => navigate(config.dashboard), 1000);
  };

  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Welcome! Logged in as ${config.title}.`);
    navigate(config.dashboard);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-6">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/auth/role-select')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to roles
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${config.gradient} shadow-2xl mb-4`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{config.title} Login</h1>
          <p className="text-muted-foreground">Authenticate to access your portal</p>
        </motion.div>

        {/* Login card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl"
        >
          <AnimatePresence mode="wait">
            {/* Method selection */}
            {!authMethod && !isScanning && (
              <motion.div
                key="select"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <p className="text-center text-muted-foreground text-sm mb-6">
                  Choose authentication method
                </p>

                {/* Facial Recognition */}
                <motion.button
                  onClick={() => {
                    setAuthMethod('facial');
                    setIsScanning(true);
                  }}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Scan className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-medium text-foreground">Face Scan</h3>
                    <p className="text-muted-foreground text-sm">Quick biometric access</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.button>

                {/* Manual Login */}
                <motion.button
                  onClick={() => setAuthMethod('manual')}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <KeyRound className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-medium text-foreground">Password</h3>
                    <p className="text-muted-foreground text-sm">Enter credentials manually</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-amber-600 transition-colors" />
                </motion.button>
              </motion.div>
            )}

            {/* Face scanning */}
            {isScanning && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center"
              >
                <div className="bg-gray-900 rounded-3xl p-6">
                  <BiometricScanner type="facial" onComplete={handleBiometricComplete} />
                </div>
                <button
                  onClick={() => {
                    setIsScanning(false);
                    setAuthMethod(null);
                  }}
                  className="mt-4 text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Cancel
                </button>
              </motion.div>
            )}

            {/* Manual login form */}
            {authMethod === 'manual' && !isScanning && (
              <motion.form
                key="manual"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleManualLogin}
                className="space-y-4"
              >
                <div>
                  <label className="block text-foreground text-sm font-medium mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Enter username"
                  />
                </div>
                <div>
                  <label className="block text-foreground text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Enter password"
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 rounded-xl bg-gradient-to-r ${config.gradient} text-white font-medium hover:opacity-90 transition-opacity`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => setAuthMethod(null)}
                  className="w-full text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Back to options
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PortalLogin;
