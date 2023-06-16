import Image from 'next/image';
import portrait from '@/public/Becker_James.jpg';

import { siteConfig } from '@/config/site';
import { HeroIcons } from '@/components/hero-icons';
import { HeroInfo } from '@/components/hero-info';
import { Icons } from '@/components/icons';
import { MotionHeading } from '@/components/motion-heading';
import { MotionSwirlIcon } from '@/components/motion-swirl-icon';
import { ProjectTabs } from '@/components/project-tabs/ProjectTabs';
import SkillsAccordion from '@/components/skills-accordion/SkillsAccordion';
import { SkillsTabs } from '@/components/skills-tabs';
import SocialIcons from '@/components/social-icons/SocialIcons';

export default function IndexPage() {
  return (
    <>
      <section
        id="hero"
        className="relative flex h-full flex-col items-center justify-center gap-6 self-center overflow-hidden pb-8 pt-6 md:py-10"
      >
        <HeroInfo />
        <HeroIcons />
      </section>

      <section
        id="about"
        className="min-h-fill relative flex flex-col items-center gap-8 self-center pb-8 pt-6 lg:py-10"
      >
        <MotionHeading text="About me" />
        <div className="container flex grow flex-col gap-16 lg:flex-row">
          <div className="relative flex-1">
            <div className="relative h-96 w-full overflow-hidden rounded-2xl border-2 border-purple-400 bg-[#444444] lg:h-full">
              <Image
                placeholder="blur"
                src={portrait}
                alt="Photo of James"
                fill
                draggable={false}
                className="select-none border-0 object-cover object-top grayscale md:object-contain md:object-center lg:object-cover lg:object-top"
              />
            </div>
            <Icons.bean className="absolute bottom-[-32px] left-[-32px]" />
          </div>

          <article className="prose flex flex-1 flex-col gap-4 text-xl leading-7 text-neutral-500 selection:bg-primary-foreground selection:text-muted dark:text-neutral-400">
            <p>
              {`I started my web development journey five years ago when I taught myself to code with the aim of writing automation scripts. From this point onwards I fell in love with programming and the endless possiblities of digital solutions you can build with it. This experience also led me to pursuing a degree in Computer Science.`}
            </p>
            <p>
              {`By the end of my first year, I found myself working on my first paid project which resulted in a job offer. However, I decided to continue freelancing, as it allowed me to balance work with my university studies where I could become highly skilled at my craft.`}
            </p>
            <p>
              {`In my final year of university, I specialised in front-end engineering. Most recently I served as a front-end engineer for an early-stage e-commerce start-up where I worked in a small cross-functional team on an enterprise-level codebase.`}
            </p>
            <p>
              {`My strengths lie in TypeScript, React and related frameworks like NextJS. I
              also have solid foundations in the more traditional HTML, CSS and JavaScript which I used before transition to TypeScript and React.`}
            </p>
          </article>
        </div>
        <Icons.shine className="absolute right-8 top-12" />
      </section>

      <section
        id="showcase"
        className="relative flex min-h-full flex-col self-center pb-8 pt-6 md:py-10"
      >
        <div className="container flex flex-col items-center justify-center gap-8 ">
          <MotionHeading text="Showcase" />
          <ProjectTabs data={siteConfig.showcase} />
        </div>

        <Icons.rainbow className="absolute bottom-0 left-8 hidden md:block" />
      </section>

      <section
        id="skills"
        className="relative flex h-full flex-col items-center justify-center gap-8 self-center pb-8 pt-6 md:py-10"
      >
        <div className="container flex grow flex-col items-center gap-16">
          <MotionHeading text="Technical Skills" />
          <SkillsTabs className="hidden lg:flex" />
          <SkillsAccordion className="block lg:hidden" />
        </div>
        <MotionSwirlIcon className="absolute bottom-[-64px] right-0 hidden md:block" />
      </section>

      <section
        id="contact"
        className="relative flex h-full flex-col items-center justify-center gap-8 self-center overflow-hidden pb-8 pt-6 md:py-10"
      >
        <MotionHeading text="Contact" />

        <div className="container flex grow flex-col items-center gap-16 sm:justify-evenly">
          <h2 className="text-center text-2xl dark:text-neutral-400">
            <span>
              Working on a <strong>project</strong>? <span>I&apos;d </span>
              <strong>love</strong> to find out how I can help bring your{' '}
              <strong>vision</strong> to <strong>life</strong>!
            </span>
          </h2>
          <SocialIcons />
        </div>
        <Icons.blob className="absolute bottom-0 left-0 hidden lg:inline" />
      </section>
    </>
  );
}
