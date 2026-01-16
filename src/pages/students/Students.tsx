import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SortAsc, User, AlertTriangle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FloatingDock from '@/components/ui/FloatingDock';

const mockStudents = [
  { id: '1', name: 'Alex Chen', grade: '10-A', avatar: 'AC', incidentScore: 2, status: 'good' },
  { id: '2', name: 'Maya Patel', grade: '9-B', avatar: 'MP', incidentScore: 5, status: 'warning' },
  { id: '3', name: 'James Wilson', grade: '11-C', avatar: 'JW', incidentScore: 0, status: 'good' },
  { id: '4', name: 'Sofia Lee', grade: '10-A', avatar: 'SL', incidentScore: 1, status: 'good' },
  { id: '5', name: 'Tyler Rodriguez', grade: '9-A', avatar: 'TR', incidentScore: 8, status: 'critical' },
  { id: '6', name: 'Emma Thompson', grade: '7-C', avatar: 'ET', incidentScore: 3, status: 'warning' },
  { id: '7', name: 'Michael Park', grade: '9-B', avatar: 'MP', incidentScore: 0, status: 'good' },
  { id: '8', name: 'Sophia Wang', grade: '10-A', avatar: 'SW', incidentScore: 1, status: 'good' },
  { id: '9', name: 'Chris Johnson', grade: '8-B', avatar: 'CJ', incidentScore: 4, status: 'warning' },
  { id: '10', name: 'Diana Ross', grade: '10-B', avatar: 'DR', incidentScore: 0, status: 'good' },
  { id: '11', name: 'Kevin Park', grade: '9-A', avatar: 'KP', incidentScore: 2, status: 'good' },
  { id: '12', name: 'Ashley Brown', grade: '11-A', avatar: 'AB', incidentScore: 6, status: 'warning' },
];

const statusColors = {
  good: { bg: 'from-emerald-100 to-emerald-200', ring: 'ring-emerald-300', text: 'text-emerald-600' },
  warning: { bg: 'from-amber-100 to-amber-200', ring: 'ring-amber-300', text: 'text-amber-600' },
  critical: { bg: 'from-red-100 to-red-200', ring: 'ring-red-300', text: 'text-red-600' },
};

const Students = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredStudent, setHoveredStudent] = useState<string | null>(null);

  const filteredStudents = mockStudents.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.grade.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-medium tracking-wider text-gray-400 uppercase">
            Student Intelligence
          </span>
          <h1 className="text-2xl font-semibold text-gray-900 mt-1">Directory</h1>
        </div>

        {/* Command Palette Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search students..."
              className="w-full bg-white/90 backdrop-blur-2xl border border-white/40 rounded-2xl px-14 py-4 text-lg text-center text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-xl"
            />
            <kbd className="absolute right-5 top-1/2 -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
              ⌘K
            </kbd>
          </div>
        </motion.div>

        {/* Student Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {filteredStudents.map((student, idx) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + idx * 0.03 }}
              onMouseEnter={() => setHoveredStudent(student.id)}
              onMouseLeave={() => setHoveredStudent(null)}
              onClick={() => navigate(`/students/${student.id}`)}
              className="relative cursor-pointer group"
            >
              <div className={`
                aspect-square rounded-2xl overflow-hidden transition-all duration-300
                bg-gradient-to-br ${statusColors[student.status as keyof typeof statusColors].bg}
                ${hoveredStudent === student.id ? 'scale-105 shadow-xl ring-2 ' + statusColors[student.status as keyof typeof statusColors].ring : 'shadow-md'}
              `}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-3xl font-bold ${statusColors[student.status as keyof typeof statusColors].text}`}>
                    {student.avatar}
                  </span>
                </div>

                {/* Incident Badge */}
                {student.incidentScore > 0 && (
                  <div className={`
                    absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white
                    ${student.incidentScore >= 5 ? 'bg-red-500' : 'bg-amber-500'}
                  `}>
                    {student.incidentScore}
                  </div>
                )}

                {/* Hover Overlay */}
                <AnimatePresence>
                  {hoveredStudent === student.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex flex-col items-center justify-center p-3"
                    >
                      <p className="text-white font-semibold text-sm text-center">{student.name}</p>
                      <p className="text-gray-300 text-xs mt-1">{student.grade}</p>
                      <div className="flex items-center gap-1 mt-2 text-xs">
                        <AlertTriangle className="w-3 h-3 text-amber-400" strokeWidth={1.5} />
                        <span className="text-amber-400">{student.incidentScore} incidents</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white mt-2" strokeWidth={1.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredStudents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <User className="w-12 h-12 text-gray-300 mx-auto mb-3" strokeWidth={1.5} />
            <p className="text-gray-500">No students found</p>
          </motion.div>
        )}
      </motion.div>

      <FloatingDock 
        backPath="/pod/dashboard" 
        title="Directory" 
        actionIcon={SortAsc}
        onAction={() => {}}
      />
    </div>
  );
};

export default Students;
