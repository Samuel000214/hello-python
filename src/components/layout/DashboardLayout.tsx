import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import EliteDock from '@/components/ui/EliteDock';

interface DashboardLayoutProps {
  children: ReactNode;
  showDock?: boolean;
  dockType?: 'admin' | 'pod' | 'adviser' | 'beadle' | 'parent';
}

const DashboardLayout = ({ children, showDock = true, dockType = 'admin' }: DashboardLayoutProps) => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      {/* 70% Focus Column Container */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="h-full w-[70vw] max-w-6xl mx-auto flex flex-col pb-[10vh]"
      >
        {children}
      </motion.main>

      {/* Levitating Dock */}
      {showDock && <EliteDock type={dockType} />}
    </div>
  );
};

export default DashboardLayout;
