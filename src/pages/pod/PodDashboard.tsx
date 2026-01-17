import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  AlertTriangle, 
  Users, 
  FileWarning, 
  CheckCircle,
  Folder,
  Brain,
  BarChart3,
  FileText,
  Settings,
  Image,
  Gavel
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const stats = [
  { label: 'Priority Alerts', value: '7', icon: AlertTriangle },
  { label: 'Risk Quotient', value: '42', icon: Users },
  { label: 'Pending Reviews', value: '23', icon: FileWarning },
  { label: 'Sync Integrity', value: '99.8%', icon: CheckCircle },
];

const quickNav = [
  { to: '/pod/cases', icon: Folder, label: 'Cases' },
  { to: '/pod/incidents', icon: AlertTriangle, label: 'Incidents' },
  { to: '/pod/evidence', icon: Image, label: 'Evidence' },
  { to: '/pod/decisions', icon: Gavel, label: 'Decisions' },
  { to: '/ai/insights', icon: Brain, label: 'AI Insights' },
  { to: '/ai/trends', icon: BarChart3, label: 'Analytics' },
  { to: '/docs/incidents', icon: FileText, label: 'Documents' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

const nodeStatus = [
  { name: 'Central Intelligence', status: '100%' },
  { name: 'Evidence Vault', status: '100%' },
  { name: 'Communication Relay', status: '98%' },
];

const PodDashboard = () => {
  return (
    <DashboardLayout dockType="pod">
      <div className="h-full flex flex-col py-6 overflow-hidden">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-header flex items-center justify-between mb-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/10">
              <Shield className="w-5 h-5 text-white/80" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white/95">Command Center</h1>
              <p className="text-xs text-white/50">Monitoring 2,847 Entities</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/60">System Active</span>
          </div>
        </motion.header>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-4 gap-3 mb-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-panel rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <stat.icon className="w-4 h-4 text-white/50" />
                <span className="text-xs text-white/50">{stat.label}</span>
              </div>
              <div className="text-lg font-semibold text-white/90">{stat.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-3 gap-4 min-h-0">
          {/* Intelligence Cortex */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-2 glass-panel rounded-xl p-6 flex flex-col items-center justify-center text-center"
          >
            <div className="p-4 rounded-xl bg-white/10 mb-4">
              <Brain className="w-10 h-10 text-white/80" />
            </div>
            <h2 className="text-lg font-semibold text-white/90 mb-1">Intelligence Cortex</h2>
            <p className="text-xs text-white/50 mb-4">AI Core optimizing behavioral models</p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white/10 hover:bg-white/15 rounded-lg text-sm text-white/80 transition-colors">
                Access Nodes
              </button>
              <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-white/60 transition-colors">
                System Audit
              </button>
            </div>
          </motion.div>

          {/* Node Integrity */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-panel rounded-xl p-4"
          >
            <h3 className="text-sm font-medium text-white/80 mb-3">Node Integrity</h3>
            <div className="space-y-3">
              {nodeStatus.map((node) => (
                <div key={node.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-xs text-white/70">{node.name}</span>
                  </div>
                  <span className="text-xs font-mono text-white/50">{node.status}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 grid grid-cols-8 gap-2"
        >
          {quickNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-card flex flex-col items-center p-3 group"
            >
              <item.icon className="w-5 h-5 text-white/60 group-hover:text-white/80 mb-1" />
              <span className="text-xs text-white/50 group-hover:text-white/70">{item.label}</span>
            </Link>
          ))}
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default PodDashboard;
