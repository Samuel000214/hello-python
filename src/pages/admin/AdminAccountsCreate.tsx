import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileSpreadsheet, Sparkles, Download, Users, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/ui/GlassCard';
import AdminFloatingNav from '@/components/ui/AdminFloatingNav';
import { simulateAccountGeneration, GeneratedAccount } from '@/lib/mock-services';
import { LayoutDashboard, UserCog, ScrollText, Settings } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
  { icon: UserCog, label: 'Accounts', path: '/admin/accounts/create' },
  { icon: ScrollText, label: 'Logs', path: '/pod/audit-logs' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

type Phase = 'upload' | 'processing' | 'complete';

const AdminAccountsCreate = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>('upload');
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [accounts, setAccounts] = useState<GeneratedAccount[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = useCallback(() => {
    setPhase('processing');
    const accountCount = 12;
    setProgress({ current: 0, total: accountCount });

    simulateAccountGeneration(
      accountCount,
      (current, total) => {
        setProgress({ current, total });
      },
      (generatedAccounts) => {
        setAccounts(generatedAccounts);
        setPhase('complete');
      }
    );
  }, []);

  const groupedAccounts = accounts.reduce((acc, account) => {
    if (!acc[account.section]) {
      acc[account.section] = [];
    }
    acc[account.section].push(account);
    return acc;
  }, {} as Record<string, GeneratedAccount[]>);

  const handleDownload = () => {
    const csv = [
      ['Name', 'Role', 'Section', 'Username', 'Temporary Password'],
      ...accounts.map(a => [a.name, a.role, a.section, a.username, a.tempPassword])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pod-ai-credentials.csv';
    a.click();
  };

  const roleColors: Record<string, string> = {
    student: 'bg-cyan-100 text-cyan-700',
    beadle: 'bg-purple-100 text-purple-700',
    adviser: 'bg-emerald-100 text-emerald-700',
    coordinator: 'bg-blue-100 text-blue-700',
    parent: 'bg-rose-100 text-rose-700',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pb-24">
      {/* Header */}
      <div className="p-6 md:p-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/admin/dashboard')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Account Generation</h1>
          <p className="text-muted-foreground">Mass-create user accounts with AI-powered credential generation</p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {/* Upload Phase */}
          {phase === 'upload' && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassCard
                className="p-12"
                hover={false}
                onDragOver={(e: React.DragEvent) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e: React.DragEvent) => {
                  e.preventDefault();
                  setIsDragging(false);
                  handleFileUpload();
                }}
              >
                <div
                  className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
                    isDragging
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <motion.div
                    className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                    animate={{ y: isDragging ? -10 : 0 }}
                  >
                    <FileSpreadsheet className="w-10 h-10 text-primary" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Upload Adviser Data
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Drag and drop your CSV file here, or click to browse
                  </p>

                  <button
                    onClick={handleFileUpload}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Upload className="w-5 h-5" />
                    Select File
                  </button>

                  <p className="text-xs text-muted-foreground mt-4">
                    Supported: CSV, XLSX • Max 1000 records
                  </p>
                </div>
              </GlassCard>

              {/* Supported roles info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4"
              >
                {['Student', 'Beadle', 'Adviser', 'Coordinator', 'Parent'].map((role, i) => (
                  <div
                    key={role}
                    className="p-4 rounded-xl bg-white/50 backdrop-blur border border-white/40 text-center"
                  >
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${roleColors[role.toLowerCase()]}`}>
                      {role}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Processing Phase */}
          {phase === 'processing' && (
            <motion.div
              key="processing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassCard className="p-12 text-center" hover={false}>
                <motion.div
                  className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-8"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="w-12 h-12 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  AI Generating Accounts
                </h3>
                <p className="text-muted-foreground mb-8">
                  Creating secure credentials for each user...
                </p>

                {/* Progress */}
                <div className="max-w-md mx-auto">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-mono text-primary">
                      {progress.current} / {progress.total}
                    </span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${(progress.current / progress.total) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Live generation */}
                <motion.div
                  className="mt-8 grid grid-cols-3 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="p-4 rounded-xl bg-gray-50"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                    >
                      <div className="h-3 w-3/4 bg-gray-200 rounded mb-2" />
                      <div className="h-2 w-1/2 bg-gray-200 rounded" />
                    </motion.div>
                  ))}
                </motion.div>
              </GlassCard>
            </motion.div>
          )}

          {/* Complete Phase */}
          {phase === 'complete' && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Success header */}
              <GlassCard className="p-8" hover={false}>
                <div className="flex items-center gap-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                    className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">
                      {accounts.length} Accounts Generated
                    </h3>
                    <p className="text-muted-foreground">
                      All credentials have been securely created
                    </p>
                  </div>
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Download CSV
                  </button>
                </div>
              </GlassCard>

              {/* Grouped accounts */}
              {Object.entries(groupedAccounts).map(([section, sectionAccounts], sectionIndex) => (
                <motion.div
                  key={section}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sectionIndex * 0.1 }}
                >
                  <GlassCard className="p-6" hover={false}>
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">{section}</h4>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-muted-foreground">
                        {sectionAccounts.length} accounts
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {sectionAccounts.map((account, i) => (
                        <motion.div
                          key={account.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-gray-50"
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                            {account.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-foreground truncate">{account.name}</p>
                            <p className="text-xs text-muted-foreground font-mono">
                              {account.username}
                            </p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${roleColors[account.role]}`}>
                            {account.role}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AdminFloatingNav />
    </div>
  );
};

export default AdminAccountsCreate;
