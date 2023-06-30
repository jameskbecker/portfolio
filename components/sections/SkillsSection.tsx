import { MotionHeading } from '../motion-heading';
import { MotionSwirlIcon } from '../motion-swirl-icon';
import SkillsAccordion from '../skills-accordion/SkillsAccordion';
import { SkillsTabs } from '../skills-tabs';

const SkillsSection = () => (
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
);

export default SkillsSection;
