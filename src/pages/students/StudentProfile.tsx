import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Calendar, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
  MessageSquare,
  ChevronRight,
  Activity
} from 'lucide-react';
import MinimalistCenterLayout from '@/components/layout/MinimalistCenterLayout';
import BackButton from '@/components/navigation/BackButton';

const tabs = ['Overview', 'Behavior Timeline', 'Attendance History', 'Case Network'];

// Mock student data
const studentData = {
  name: 'Juan Carlos Santos',
  grade: 'Grade 9',
  section: 'Section A',
  studentId: 'STU-2024-0847',
  status: 'Active',
  avatar: null,
  attendance: 92,
  behaviorScore: 8.5,
  activeCases: 1,
  riskLevel: 25,
};

const timelineEvents = [
  { id: 1, type: 'positive', date: '2024-01-15', time: '08:30 AM', description: 'Perfect attendance for the week', icon: CheckCircle2 },
  { id: 2, type: 'neutral', date: '2024-01-12', time: '02:15 PM', description: 'Counselor meeting scheduled', icon: MessageSquare },
  { id: 3, type: 'warning', date: '2024-01-10', time: '10:45 AM', description: 'Late arrival - 15 minutes', icon: Clock },
  { id: 4, type: 'positive', date: '2024-01-08', time: '09:00 AM', description: 'Participated in peer mentoring', icon: TrendingUp },
];

const StudentProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Overview');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-emerald-100 text-emerald-700';
      case 'Flagged': return 'bg-red-100 text-red-700';
      case 'Monitoring': return 'bg-amber-100 text-amber-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getScoreColor = (score: number, type: 'attendance' | 'behavior') => {
    if (type === 'attendance') {
      if (score >= 90) return 'text-emerald-600';
      if (score >= 80) return 'text-amber-600';
      return 'text-red-600';
    }
    if (score >= 8) return 'text-emerald-600';
    if (score >= 6) return 'text-amber-600';
    return 'text-red-600';
  };

  const getRiskColor = (level: number) => {
    if (level <= 30) return { stroke: '#10b981', text: 'Low' };
    if (level <= 70) return { stroke: '#f59e0b', text: 'Medium' };
    return { stroke: '#ef4444', text: 'High' };
  };

  const riskInfo = getRiskColor(studentData.riskLevel);

  return (
    <MinimalistCenterLayout>
      <div className="max-w-4xl mx-auto">
        <BackButton dashboardPath="/pod/dashboard" />

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-6 lg:p-8 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
            {/* Avatar */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center ring-4 ring-primary/20">
                <User className="w-12 h-12 lg:w-16 lg:h-16 text-primary" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white"></div>
            </motion.div>

            {/* Info */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-2xl lg:text-4xl font-bold text-foreground mb-1">
                {studentData.name}
              </h1>
              <p className="text-muted-foreground mb-1">
                {studentData.grade} - {studentData.section}
              </p>
              <p className="text-sm font-mono text-muted-foreground mb-4">
                {studentData.studentId}
              </p>
              <span className={`inline-flex px-4 py-1.5 rounded-full text-sm font-semibold ${getStatusColor(studentData.status)}`}>
                {studentData.status}
              </span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur rounded-2xl p-5 border border-white/40 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                </div>
                <span className={`text-3xl font-bold ${getScoreColor(studentData.attendance, 'attendance')}`}>
                  {studentData.attendance}%
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Attendance</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur rounded-2xl p-5 border border-white/40 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <span className={`text-3xl font-bold ${getScoreColor(studentData.behaviorScore, 'behavior')}`}>
                  {studentData.behaviorScore}/10
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Behavior Score</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`backdrop-blur rounded-2xl p-5 border shadow-lg ${
                studentData.activeCases > 0 
                  ? 'bg-red-50/80 border-red-200' 
                  : 'bg-emerald-50/80 border-emerald-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  studentData.activeCases > 0 ? 'bg-red-100' : 'bg-emerald-100'
                }`}>
                  {studentData.activeCases > 0 ? (
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  )}
                </div>
                <span className={`text-3xl font-bold ${
                  studentData.activeCases > 0 ? 'text-red-600' : 'text-emerald-600'
                }`}>
                  {studentData.activeCases}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Active Cases</p>
            </motion.div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mt-8 border-b border-border pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-muted-foreground hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              {activeTab === 'Overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Risk Gauge */}
                  <div className="flex flex-col items-center justify-center p-8 bg-gray-50/50 rounded-2xl">
                    <div className="relative w-48 h-48">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="96"
                          cy="96"
                          r="84"
                          stroke="#e5e7eb"
                          strokeWidth="12"
                          fill="none"
                        />
                        <motion.circle
                          cx="96"
                          cy="96"
                          r="84"
                          stroke={riskInfo.stroke}
                          strokeWidth="12"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={528}
                          initial={{ strokeDashoffset: 528 }}
                          animate={{ strokeDashoffset: 528 - (528 * studentData.riskLevel) / 100 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-foreground">{studentData.riskLevel}%</span>
                        <span className="text-sm text-muted-foreground">{riskInfo.text} Risk</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Recent Activity</h3>
                    {timelineEvents.slice(0, 3).map((event) => (
                      <motion.div
                        key={event.id}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-4 p-4 bg-white/80 rounded-xl border border-white/40"
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          event.type === 'positive' ? 'bg-emerald-100' :
                          event.type === 'warning' ? 'bg-amber-100' : 'bg-gray-100'
                        }`}>
                          <event.icon className={`w-5 h-5 ${
                            event.type === 'positive' ? 'text-emerald-600' :
                            event.type === 'warning' ? 'text-amber-600' : 'text-gray-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{event.description}</p>
                          <p className="text-xs text-muted-foreground">{event.date}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Behavior Timeline' && (
                <div className="relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2"></div>
                  <div className="space-y-6">
                    {timelineEvents.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center gap-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                      >
                        <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={`inline-block p-4 rounded-2xl border shadow-lg ${
                              event.type === 'positive' ? 'bg-emerald-50/80 border-emerald-200' :
                              event.type === 'warning' ? 'bg-amber-50/80 border-amber-200' :
                              'bg-white/80 border-white/40'
                            }`}
                          >
                            <p className="text-sm font-medium text-foreground">{event.description}</p>
                            <p className="text-xs text-muted-foreground mt-1">{event.date} • {event.time}</p>
                          </motion.div>
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                          event.type === 'positive' ? 'bg-emerald-500' :
                          event.type === 'warning' ? 'bg-amber-500' : 'bg-gray-400'
                        }`}>
                          <event.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Attendance History' && (
                <div className="text-center py-12">
                  <Activity className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Attendance history visualization coming soon</p>
                </div>
              )}

              {activeTab === 'Case Network' && (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Case network visualization coming soon</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </MinimalistCenterLayout>
  );
};

export default StudentProfile;
