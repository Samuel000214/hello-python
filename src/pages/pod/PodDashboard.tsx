import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  ShieldAlert, 
  Users, 
  FileWarning, 
  ShieldCheck,
  Plus,
  Brain,
  Scale,
  ClipboardList,
  Settings,
  FolderOpen,
  Image,
  AlertTriangle,
  Gavel,
  LineChart,
  FileText
} from 'lucide-react';

const statCards = [
  {
    label: 'Priority Alerts',
    value: '7',
    trend: 'Action Required',
    icon: ShieldAlert,
    bgColor: 'bg-red-50/70',
    borderColor: 'border-red-200',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    trendColor: 'text-red-600',
    delay: 0,
  },
  {
    label: 'Risk Quotient',
    value: '42',
    trend: '▲ Stable Flux',
    icon: Users,
    bgColor: 'bg-amber-50/70',
    borderColor: 'border-amber-200',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    trendColor: 'text-amber-600',
    delay: 0.1,
  },
  {
    label: 'Pending Reviews',
    value: '23',
    trend: 'Processing...',
    icon: FileWarning,
    bgColor: 'bg-zinc-50/70',
    borderColor: 'border-zinc-200',
    iconBg: 'bg-zinc-100',
    iconColor: 'text-zinc-600',
    trendColor: 'text-zinc-500',
    delay: 0.2,
  },
  {
    label: 'Sync Integrity',
    value: '99.8%',
    trend: '▲ Peak Efficiency',
    icon: ShieldCheck,
    bgColor: 'bg-emerald-50/70',
    borderColor: 'border-emerald-200',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    trendColor: 'text-emerald-600',
    delay: 0.3,
  },
];

const operationalLinks = [
  { to: '/students', icon: Users, label: 'Student Intel' },
  { to: '/pod/legal', icon: Scale, label: 'Legal Engine' },
  { to: '/pod/incidents', icon: ClipboardList, label: 'Review Queue' },
  { to: '/ai/config', icon: Settings, label: 'Node Config' },
];

const quickActions = [
  'Create Case',
  'Issue Warning',
  'Schedule Hearing',
  'Export Report',
];

const nodeIntegrity = [
  { name: 'Central Intelligence', status: '100%' },
  { name: 'Evidence Vault', status: '100%' },
  { name: 'Communication Relay', status: '98%' },
];

const navItems = [
  { to: '/pod/cases', icon: FolderOpen, label: 'Active Cases', description: 'Manage cases' },
  { to: '/students', icon: Users, label: 'Students', description: 'Directory' },
  { to: '/ai/insights', icon: Brain, label: 'AI Insights', description: 'Analysis' },
  { to: '/pod/evidence', icon: Image, label: 'Evidence', description: 'Vault' },
  { to: '/pod/incidents', icon: AlertTriangle, label: 'Incidents', description: 'Queue' },
  { to: '/pod/decisions', icon: Gavel, label: 'Decisions', description: 'Panel' },
  { to: '/ai/trends', icon: LineChart, label: 'Analytics', description: 'Trends' },
  { to: '/docs/incidents', icon: FileText, label: 'Documents', description: 'Reports' },
  { to: '/settings', icon: Settings, label: 'Settings', description: 'Config' },
];

const PodDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-emerald-600">System Active</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Command Center
            </h1>
            <p className="text-muted-foreground mt-1">
              Monitoring 2,847 Entities
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
          >
            <Plus className="w-5 h-5" />
            Log Incident
          </motion.button>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: card.delay }}
              whileHover={{ scale: 1.02, y: -2 }}
              className={`${card.bgColor} ${card.borderColor} backdrop-blur-xl border rounded-2xl p-6 shadow-lg`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${card.iconBg} p-3 rounded-xl`}>
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {card.value}
              </div>
              <div className="text-sm text-muted-foreground mb-2">{card.label}</div>
              <div className={`text-xs font-medium ${card.trendColor}`}>
                {card.trend}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Intelligence Cortex */}
          <div className="lg:col-span-2 space-y-6">
            {/* Intelligence Cortex Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 lg:p-12 shadow-xl text-center"
            >
              <motion.div 
                className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 mb-6"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Shield className="w-12 h-12 text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Intelligence Cortex</h2>
              <p className="text-muted-foreground mb-8">
                AI Core is optimizing behavioral heuristic models
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-primary text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow"
                >
                  Access Nodes
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-border rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  System Audit
                </motion.button>
              </div>
            </motion.div>

            {/* Operational Links Grid */}
            <div className="grid grid-cols-2 gap-4">
              {operationalLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className="block bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group"
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <link.icon className="w-8 h-8 text-primary mb-3" />
                    </motion.div>
                    <span className="text-sm font-semibold text-foreground">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="font-bold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-2">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left px-4 py-3 bg-primary/5 hover:bg-primary/10 rounded-xl text-sm font-medium text-foreground transition-colors"
                  >
                    {action}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Node Integrity Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="font-bold text-foreground mb-4">Node Integrity</h3>
              <div className="space-y-3">
                {nodeIntegrity.map((node, index) => (
                  <div key={node.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-sm text-foreground">{node.name}</span>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{node.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Quick Navigation</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Link
                  to={item.to}
                  className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-xl border border-white/40 rounded-xl hover:shadow-lg transition-all group"
                >
                  <item.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-foreground text-center">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-white/50 backdrop-blur-md border border-white/30 rounded-xl px-4 py-3 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">System Optimal</span>
          </div>
          <span className="text-xs text-muted-foreground">POD AI v1.0.0</span>
        </motion.footer>
      </div>
    </div>
  );
};

export default PodDashboard;
