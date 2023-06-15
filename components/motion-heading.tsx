'use client';

import { useEffect, useRef } from 'react';
import { appearVariants } from '@/animations/appear';
import { motion, useAnimationControls, useInView } from 'framer-motion';

interface MotionHeadingProps {
  text: string;
}

export const MotionHeading = ({ text }: MotionHeadingProps) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={appearVariants}
      className="py-4 text-5xl font-semibold"
    >
      {text}
    </motion.h1>
  );
};
