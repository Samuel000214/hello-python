import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FuturisticLoader from '@/components/ui/FuturisticLoader';
import { simulateInitialization, InitializationStep } from '@/lib/mock-services';
import { CheckCircle2, Circle } from 'lucide-react';

const SystemInit = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<InitializationStep | null>(null);
  const [stepProgress, setStepProgress] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    simulateInitialization(
      (step, stepProg, overallProg) => {
        setCurrentStep(step);
        setStepProgress(stepProg);
        setOverallProgress(overallProg);

        if (stepProg >= 100 && !completedSteps.includes(step.id)) {
          setCompletedSteps((prev) => [...prev, step.id]);
        }
      },
      () => {
        setIsComplete(true);
        setTimeout(() => navigate('/auth/role-select'), 1500);
      }
    );
  }, [navigate]);

  const steps = [
    { id: 'docker', label: 'Docker Containers' },
    { id: 'llm', label: 'Local LLM Studio' },
    { id: 'services', label: 'Background Services' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Radial glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Logo and title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-3"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          POD AI
        </motion.h1>
        <p className="text-gray-400 text-lg">Intelligent Discipline Management System</p>
      </motion.div>

      {/* Main loader */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mb-12"
      >
        <FuturisticLoader progress={overallProgress} size="lg" />

        {/* Progress percentage */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-3xl font-bold text-white/90 font-mono">
            {Math.round(overallProgress)}%
          </span>
        </motion.div>
      </motion.div>

      {/* Status steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 space-y-4 w-full max-w-md"
      >
        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(step.id);
          const isCurrent = currentStep?.id === step.id;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                isCurrent
                  ? 'bg-white/10 border border-primary/30'
                  : isCompleted
                  ? 'bg-green-500/10 border border-green-500/20'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              <div className="flex-shrink-0">
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </motion.div>
                ) : isCurrent ? (
                  <motion.div
                    className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                ) : (
                  <Circle className="w-6 h-6 text-gray-600" />
                )}
              </div>

              <div className="flex-1">
                <p
                  className={`font-medium ${
                    isCurrent ? 'text-white' : isCompleted ? 'text-green-400' : 'text-gray-500'
                  }`}
                >
                  {step.label}
                </p>
                {isCurrent && (
                  <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${stepProgress}%` }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Current status message */}
      <AnimatePresence mode="wait">
        <motion.p
          key={currentStep?.id || 'complete'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-8 text-gray-400 text-center relative z-10"
        >
          {isComplete ? (
            <span className="text-green-400">System Ready • Launching Interface...</span>
          ) : (
            currentStep?.label
          )}
        </motion.p>
      </AnimatePresence>

      {/* Version info */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 text-gray-600 text-sm font-mono"
      >
        v2.0.0-alpha • Build 2024.01.15
      </motion.p>
    </div>
  );
};

export default SystemInit;
