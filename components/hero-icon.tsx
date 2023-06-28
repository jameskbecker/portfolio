'use client';

import { SlideDirection, slideVariants } from '@/animations/slide';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import { Icons } from './icons';

export interface WrapperProps {
  icon: JSX.Element;
  direction?: SlideDirection;
  className?: string;
}

export const HeroIcon = ({ icon, direction, className }: WrapperProps) => (
  <motion.div
    className={cn('absolute opacity-0', className)}
    initial="hidden"
    animate="visible"
    variants={slideVariants({ dir: direction, offset: '100%' })}
  >
    {icon}
  </motion.div>
);
