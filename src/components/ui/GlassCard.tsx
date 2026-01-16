import { motion } from 'framer-motion';
import { ReactNode, DragEvent } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  glow?: 'blue' | 'green' | 'amber' | 'purple' | 'red' | 'none';
  delay?: number;
  onDragOver?: (e: DragEvent) => void;
  onDragLeave?: () => void;
  onDrop?: (e: DragEvent) => void;
}

const glowColors = {
  blue: 'hover:shadow-[0_0_40px_rgba(37,99,235,0.3)]',
  green: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]',
  amber: 'hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]',
  purple: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]',
  red: 'hover:shadow-[0_0_40px_rgba(239,68,68,0.3)]',
  none: '',
};

const GlassCard = ({
  children,
  className,
  onClick,
  hover = true,
  glow = 'blue',
  delay = 0,
  onDragOver,
  onDragLeave,
  onDrop,
}: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      onClick={onClick}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={cn(
        'relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl',
        'transition-all duration-300',
        hover && 'cursor-pointer',
        hover && glowColors[glow],
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
