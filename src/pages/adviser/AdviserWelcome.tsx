import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, CheckSquare, BookOpen, Flag, MessageSquare } from 'lucide-react';
import MinimalistCenterLayout from '@/components/layout/MinimalistCenterLayout';

const features = [
  { icon: CheckSquare, text: 'Track section attendance' },
  { icon: BookOpen, text: 'Submit observations' },
  { icon: Flag, text: 'View assigned cases' },
  { icon: MessageSquare, text: 'Communicate with POD' },
];

const AdviserWelcome = () => {
  return (
    <MinimalistCenterLayout>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 mx-auto bg-adviser-light rounded-3xl flex items-center justify-center mb-8"
        >
          <Briefcase className="w-16 h-16 text-adviser" strokeWidth={1.5} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
        >
          Welcome to Adviser Portal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto"
        >
          Monitor your assigned section, track attendance, flag early concerns, 
          and stay connected with the Prefect of Discipline.
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
              <feature.icon className="w-5 h-5 text-adviser flex-shrink-0" />
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
            to="/adviser/login"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-adviser text-white font-medium text-lg hover:bg-adviser/90 transition-colors"
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

export default AdviserWelcome;
