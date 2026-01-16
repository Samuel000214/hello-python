import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MinimalistCenterLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const MinimalistCenterLayout = ({ children, showFooter = true }: MinimalistCenterLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full max-w-6xl"
        >
          <div className="glass-card p-6 sm:p-8 lg:p-10">
            {children}
          </div>
        </motion.div>
      </main>
      
      {showFooter && (
        <footer className="p-4 sm:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="glass-footer px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm text-muted-foreground">System Optimal</span>
              </div>
              <span className="text-xs text-muted-foreground">POD AI v1.0.0</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default MinimalistCenterLayout;
