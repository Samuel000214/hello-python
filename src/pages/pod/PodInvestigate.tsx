import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Brain, 
  FileText, 
  Clock, 
  Upload,
  Image,
  Video,
  File,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertTriangle,
  X,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import BackButton from '@/components/navigation/BackButton';

const evidenceItems = [
  { id: 1, type: 'image', name: 'classroom_incident.jpg', priority: true, timestamp: '2024-01-15 10:30 AM' },
  { id: 2, type: 'video', name: 'hallway_recording.mp4', priority: false, timestamp: '2024-01-15 10:28 AM' },
  { id: 3, type: 'document', name: 'witness_statement.pdf', priority: false, timestamp: '2024-01-15 11:00 AM' },
  { id: 4, type: 'image', name: 'damage_photo.jpg', priority: true, timestamp: '2024-01-15 10:35 AM' },
  { id: 5, type: 'document', name: 'incident_form.pdf', priority: false, timestamp: '2024-01-15 09:45 AM' },
  { id: 6, type: 'image', name: 'evidence_03.jpg', priority: false, timestamp: '2024-01-15 10:40 AM' },
];

const aiKeyFacts = [
  'Physical altercation occurred in Room 204 during break period',
  'Two students involved, one witness present',
  'Prior warning issued to primary subject on 2024-01-03',
  'No injuries reported, property damage documented',
];

const timelineActions = [
  { time: '11:00 AM', user: 'System', action: 'Case created', type: 'system' },
  { time: '11:05 AM', user: 'POD Officer', action: 'Evidence uploaded', type: 'evidence' },
  { time: '11:15 AM', user: 'AI Analysis', action: 'Risk assessment complete', type: 'ai' },
  { time: '11:30 AM', user: 'Adviser', action: 'Statement submitted', type: 'statement' },
];

const relatedIncidents = [
  { id: 'INC-2024-0823', relation: 'Same student', date: '2024-01-03' },
  { id: 'INC-2024-0801', relation: 'Same location', date: '2023-12-15' },
];

const suggestedQuestions = [
  'What is the risk level?',
  'List all involved parties',
  'Generate summary report',
];

const PodInvestigate = () => {
  const { caseId } = useParams();
  const [notes, setNotes] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'I\'m ready to assist with this investigation. What would you like to know?' }
  ]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'image': return Image;
      case 'video': return Video;
      default: return File;
    }
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    setMessages([...messages, { role: 'user', text: chatInput }]);
    setChatInput('');
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: 'Based on the evidence, this appears to be a moderate-severity incident. I recommend reviewing the witness statement for additional context.' 
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <BackButton dashboardPath="/pod/dashboard" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Investigation Workspace</h1>
                <p className="text-sm text-muted-foreground font-mono">Case #{caseId || 'INC-2024-0847'}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
              In Progress
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Panel - Evidence Board */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-4"
          >
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <select className="px-4 py-2 bg-white/70 backdrop-blur border border-white/40 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>All Types</option>
                <option>Images</option>
                <option>Videos</option>
                <option>Documents</option>
              </select>
              <select className="px-4 py-2 bg-white/70 backdrop-blur border border-white/40 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>All Dates</option>
                <option>Today</option>
                <option>This Week</option>
              </select>
            </div>

            {/* Evidence Grid */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-foreground mb-4">Evidence Board</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {evidenceItems.map((item, index) => {
                  const TypeIcon = getTypeIcon(item.type);
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="relative bg-gray-100 rounded-xl aspect-square flex flex-col items-center justify-center cursor-pointer group overflow-hidden"
                    >
                      {item.priority && (
                        <span className="absolute top-2 right-2 px-2 py-0.5 bg-red-500 text-white text-xs font-medium rounded-full z-10">
                          Priority
                        </span>
                      )}
                      <TypeIcon className="w-10 h-10 text-muted-foreground mb-2" />
                      <span className="text-xs text-muted-foreground text-center px-2 truncate max-w-full">
                        {item.name}
                      </span>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-3">
                        <span className="text-sm font-medium text-center mb-1">{item.name}</span>
                        <span className="text-xs opacity-75">{item.timestamp}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Upload Zone */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="mt-6 border-2 border-dashed border-primary/30 rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <Upload className="w-10 h-10 text-primary/50 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Drop files here or click to upload</p>
                <p className="text-xs text-muted-foreground mt-1">Images, videos, and documents supported</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Panel - Case Intel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* AI Summary */}
            <div className="bg-primary/5 backdrop-blur-xl border border-primary/20 rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Key Facts</h3>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span className="text-xs text-primary font-medium">AI Generated</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {aiKeyFacts.map((fact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {fact}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-primary/10">
                <span className="text-xs text-muted-foreground">Confidence: </span>
                <span className="text-xs font-medium text-primary">87%</span>
              </div>
            </div>

            {/* Case Notes */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-lg">
              <h3 className="font-semibold text-foreground mb-3">Investigation Notes</h3>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add investigation notes..."
                className="w-full h-24 p-3 bg-white/80 border border-border rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-muted-foreground">{notes.length}/1000</span>
                <span className="text-xs text-emerald-600">Auto-saved</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-lg">
              <h3 className="font-semibold text-foreground mb-4">Timeline</h3>
              <div className="space-y-3">
                {timelineActions.map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="text-xs text-muted-foreground font-mono w-16">{action.time}</span>
                    <div className={`w-2 h-2 rounded-full ${
                      action.type === 'ai' ? 'bg-primary' :
                      action.type === 'evidence' ? 'bg-amber-500' :
                      action.type === 'statement' ? 'bg-emerald-500' : 'bg-gray-400'
                    }`}></div>
                    <div className="flex-1">
                      <span className="font-medium text-foreground">{action.user}</span>
                      <span className="text-muted-foreground"> • {action.action}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Related Incidents */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-lg">
              <h3 className="font-semibold text-foreground mb-3">Related Incidents</h3>
              <div className="space-y-2">
                {relatedIncidents.map((incident, index) => (
                  <motion.div
                    key={incident.id}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <span className="text-sm font-mono text-primary">{incident.id}</span>
                      <p className="text-xs text-muted-foreground">{incident.relation} • {incident.date}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Chat */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-4 border-b border-border">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  AI Assistant
                </h3>
              </div>
              <div className="h-48 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-foreground'
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="p-3 border-t border-border">
                <div className="flex flex-wrap gap-2 mb-3">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setChatInput(q)}
                      className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full text-muted-foreground transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask AI about this case..."
                    className="flex-1 px-4 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    className="p-2 bg-primary text-white rounded-xl"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-lg"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-colors"
            >
              <CheckCircle2 className="w-5 h-5" />
              Close Case
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors"
            >
              <AlertTriangle className="w-5 h-5" />
              Escalate
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-colors"
            >
              <Upload className="w-5 h-5" />
              Add Evidence
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 border border-border hover:bg-gray-50 rounded-xl font-medium transition-colors"
            >
              <FileText className="w-5 h-5" />
              Generate Report
            </motion.button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
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

export default PodInvestigate;
