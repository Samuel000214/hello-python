import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Database, Brain, FileText, Gavel } from 'lucide-react';
import MinimalistCenterLayout from '@/components/layout/MinimalistCenterLayout';

const features = [
  { icon: Database, text: 'Access all student records' },
  { icon: Brain, text: 'Review AI insights' },
  { icon: FileText, text: 'Manage active cases' },
  { icon: Gavel, text: 'Generate legal documents' },
];

const PodWelcome = () => {
  return (
    <MinimalistCenterLayout>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 mx-auto bg-pod-light rounded-3xl flex items-center justify-center mb-8"
        >
          <Shield className="w-16 h-16 text-pod" strokeWidth={1.5} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
        >
          Welcome to the Command Center
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto"
        >
          You are the Prefect of Discipline. Manage cases, review evidence, make decisions, 
          and maintain school discipline with AI assistance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl text-left"
            >
              <feature.icon className="w-5 h-5 text-pod flex-shrink-0" />
              <span className="text-sm text-foreground">{feature.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <Link
            to="/pod/login"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-pod text-white font-medium text-lg hover:bg-pod/90 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Role Selection
          </Link>
        </motion.div>
      </div>
    </MinimalistCenterLayout>
  );
};

export default PodWelcome;
