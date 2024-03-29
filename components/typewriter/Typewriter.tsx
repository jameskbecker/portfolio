import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import { revealVariants } from './animation';

type Content = { text: string; emphasis?: boolean };

export interface TypewriterProps {
  content: Content[];
  speed?: number;
  delay?: number;
}

const Typewriter = ({ content }: TypewriterProps) => {
  let characterDelay = 0;

  return (
    <h1 className="flex flex-initial flex-wrap items-center justify-center overflow-hidden whitespace-pre-wrap border-solid px-0.5 text-4xl font-extrabold tracking-tight md:text-5xl">
      {content.map((value: Content, i: number) => {
        const characters = value.text.split('');

        return (
          <div
            key={`content-${i}`}
            className={cn('flex-initial overflow-hidden text-foreground', {
              'text-secondary-foreground': value.emphasis,
            })}
          >
            {characters.map((char: string, j: number) => {
              characterDelay += 0.05;

              return (
                <motion.div
                  className="inline-block overflow-hidden py-1"
                  variants={revealVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.05,
                    delay: characterDelay,
                  }}
                  key={`${i}-${j}`}
                >
                  {char}
                </motion.div>
              );
            })}
          </div>
        );
      })}
      <span
        className="box-border h-10 animate-typing border-2 text-secondary-foreground md:h-12"
        // variants={typingVariants}
        // initial="active"
        // animate="active"
      ></span>
    </h1>
  );
};

export default Typewriter;
