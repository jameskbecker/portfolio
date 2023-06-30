'use client';

import { appearVariants } from '@/animations/appear';
import { motion } from 'framer-motion';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import { Typewriter } from './typewriter/Typewriter';
import { buttonVariants } from './ui/button';

const HeroInfo = () => {
  return (
    <div className="container flex h-full select-none flex-col items-center justify-center gap-8 self-center overflow-hidden text-center">
      <motion.p
        variants={appearVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, ease: 'easeIn', delay: 2 }}
        className="max-w-[700px] text-base text-muted-foreground"
      >
        A Fullstack Engineer specialising in frontend and
      </motion.p>
      <Typewriter
        content={[
          { text: 'crafting ' },
          { text: 'exceptional', emphasis: true },
          { text: ' web experiences' },
          { text: '.', emphasis: true },
        ]}
      />
      <motion.div
        variants={appearVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, ease: 'easeIn', delay: 2.25 }}
        className="container flex flex-col items-center justify-start gap-8 overflow-hidden"
      >
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Hey, my name is James. I’ve been having an awesome experience working
          with web technologies for the past 5 years!
        </p>
        <a
          href={siteConfig.links.heroCta}
          rel="noreferrer"
          draggable={false}
          className={cn(
            'transition-transform duration-300 hover:-translate-y-1 active:translate-y-0',
            buttonVariants({ size: 'lg' })
          )}
        >
          Check out some of my Projects
        </a>
      </motion.div>
    </div>
  );
};

export default HeroInfo;
