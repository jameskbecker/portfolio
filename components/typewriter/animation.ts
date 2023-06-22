import { Variants } from 'framer-motion';

export const revealVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: 'auto',
  },
};

export const typingVariants: Variants = {
  active: {
    className: ['border-transparent', 'border-secondary-foreground'],
    transition: {
      duration: 0.75,
      repeat: Infinity,
    },
  },
};
