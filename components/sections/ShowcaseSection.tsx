import { siteConfig } from '@/config/site';

import { Icons } from '../icons';
import { MotionHeading } from '../motion-heading';
import { ProjectTabs } from '../project-tabs/ProjectTabs';

const ShowcaseSection = () => (
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
);

export default ShowcaseSection;
