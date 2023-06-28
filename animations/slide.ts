import { Transition } from 'framer-motion';

const transition: Transition = {
  delay: 2,
  duration: 0.5,
  ease: 'easeInOut',
};

export type SlideDirection =
  | 'from-left'
  | 'from-right'
  | 'from-top'
  | 'from-bottom';

export interface SlideOptions {
  dir?: SlideDirection;
  offset: string;
}

export const slideVariants = (options: SlideOptions) => {
  const variants = {
    hidden: { opacity: 0, x: '0', y: '0' },
    visible: { opacity: 1, x: '0', y: '0', transition },
  };

  switch (options.dir) {
    case 'from-right':
      variants.hidden.x = options.offset;
      break;

    case 'from-left':
      variants.hidden.x = `-${options.offset}`;
      break;

    case 'from-top':
      variants.hidden.y = options.offset;
      break;

    case 'from-bottom':
      variants.hidden.y = `-${options.offset}`;
      break;
  }

  return variants;
};
