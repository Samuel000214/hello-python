import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface BackButtonProps {
  dashboardPath: string;
  label?: string;
}

const BackButton = ({ dashboardPath, label = 'Back to Dashboard' }: BackButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={dashboardPath}
        className="inline-flex items-center gap-2 px-4 py-2 glass-footer text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        {label}
      </Link>
    </motion.div>
  );
};

export default BackButton;
