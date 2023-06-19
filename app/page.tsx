import { siteConfig } from '@/config/site';
import { AboutMe } from '@/components/about-me';
import { ClientImage } from '@/components/client-image/ClientImage';
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
            <ClientImage
              showBorder
              blurredBackground
              src="/Becker_James.jpg"
              alt="Photo of James"
              className="object-top grayscale sm:object-contain sm:object-center lg:object-cover lg:object-top"
            />
            <Icons.bean className="absolute bottom-[-32px] left-[-32px] z-20" />
          </div>

          <AboutMe />
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
