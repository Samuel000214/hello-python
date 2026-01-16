import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VolumeX, Mic } from 'lucide-react';
import FloatingDock from '@/components/ui/FloatingDock';

const transcriptHistory = [
  { id: 1, type: 'user', text: 'Show me Grade 9 alerts', timestamp: '10:42:15' },
  { id: 2, type: 'system', text: 'Found 7 active alerts for Grade 9. Displaying now...', timestamp: '10:42:17' },
  { id: 3, type: 'user', text: 'Filter by severity high', timestamp: '10:42:32' },
  { id: 4, type: 'system', text: 'Filtered to 3 high-severity alerts.', timestamp: '10:42:34' },
  { id: 5, type: 'user', text: 'Open first student profile', timestamp: '10:43:01' },
  { id: 6, type: 'system', text: 'Opening profile for Marcus Chen...', timestamp: '10:43:03' },
];

const commandHints = [
  "Show Grade 9 alerts",
  "Find students with 3+ tardies",
  "Open attendance report",
  "Navigate to interventions",
];

const VoiceCommand = () => {
  const [isListening, setIsListening] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);

  // Rotate hints
  useState(() => {
    const interval = setInterval(() => {
      setCurrentHint(prev => (prev + 1) % commandHints.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8 pb-32 flex flex-col">
      <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Voice Command Console</h1>
          <p className="text-[15px] text-gray-600 mt-1">Use voice commands to navigate and execute actions</p>
        </motion.div>

        {/* Central Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 flex flex-col items-center justify-center"
        >
          <div className="relative">
            {/* Outer rings */}
            <motion.div
              animate={isListening ? { 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3]
              } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 w-48 h-48 rounded-full border-2 border-blue-300/30"
              style={{ transform: 'scale(1.5)' }}
            />
            <motion.div
              animate={isListening ? { 
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.2, 0.4]
              } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute inset-0 w-48 h-48 rounded-full border-2 border-blue-400/40"
              style={{ transform: 'scale(1.25)' }}
            />
            <motion.div
              animate={isListening ? { 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.3, 0.5]
              } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute inset-0 w-48 h-48 rounded-full border-2 border-blue-500/50"
            />

            {/* Main Orb Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsListening(!isListening)}
              className={`relative w-48 h-48 rounded-full bg-white/80 backdrop-blur-xl border border-white/40 flex items-center justify-center transition-all duration-500 ${
                isListening 
                  ? 'shadow-[0_0_40px_rgba(37,99,235,0.3),0_0_80px_rgba(37,99,235,0.2)]' 
                  : 'shadow-xl hover:shadow-2xl'
              }`}
            >
              <motion.div
                animate={isListening ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Mic 
                  className={`w-16 h-16 transition-colors duration-300 ${
                    isListening ? 'text-blue-600' : 'text-gray-400'
                  }`} 
                  strokeWidth={1} 
                />
              </motion.div>
            </motion.button>
          </div>

          {/* Status Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`mt-8 text-lg font-medium ${isListening ? 'text-blue-600' : 'text-gray-500'}`}
          >
            {isListening ? 'Listening...' : 'Tap to speak'}
          </motion.p>

          {/* Command Hint */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currentHint}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-[15px] text-gray-400"
            >
              Try: "{commandHints[currentHint]}"
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Transcript Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900 rounded-2xl p-4 overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-3 px-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs text-gray-500 ml-2 font-mono">voice_console</span>
          </div>
          <div className="h-48 overflow-y-auto font-mono text-sm space-y-2 px-2">
            {transcriptHistory.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex gap-2"
              >
                <span className="text-gray-600 shrink-0">[{entry.timestamp}]</span>
                <span className={entry.type === 'user' ? 'text-blue-400' : 'text-gray-400'}>
                  {entry.type === 'user' ? '>' : '←'} {entry.text}
                </span>
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-gray-600"
            >
              _
            </motion.div>
          </div>
        </motion.div>
      </div>

      <FloatingDock 
        backPath="/pod/dashboard" 
        title="Voice Interface"
        actionIcon={VolumeX}
        onAction={() => setIsListening(false)}
      />
    </div>
  );
};

export default VoiceCommand;
