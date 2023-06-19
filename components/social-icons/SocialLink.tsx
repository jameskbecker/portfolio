'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimationControls, useInView } from 'framer-motion';

import { waveVariants } from './animations';

export interface SocialLinkProps {
  label: string;
  href: string;
  icon: any;
  delay: number;
}

const SocialLink = (props: SocialLinkProps) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <motion.a
      ref={ref}
      href={props.href}
      className="flex flex-col items-center gap-2 fill-secondary-foreground text-secondary-foreground duration-300"
      initial="hidden"
      animate={controls}
      whileHover="hover"
      exit="exit"
      variants={waveVariants(props.delay)}
    >
      {props.icon}
      <label className="text-sm">{props.label}</label>
    </motion.a>
  );
};

export default SocialLink;
