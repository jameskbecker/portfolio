import { HeroIcon } from '../hero-icon';
import { HeroInfo } from '../hero-info';
import { Icons } from '../icons';

const HeroSection = () => (
  <section
    id="hero"
    className="relative flex h-full flex-col items-center justify-center gap-6 self-center overflow-hidden pb-8 pt-6 md:py-10"
  >
    <HeroInfo />
    <HeroIcon
      className="left-4 top-4 sm:left-8 sm:top-8"
      direction="from-left"
      icon={<Icons.scratch className="h-16 md:h-24 lg:h-28" />}
    />
    <HeroIcon
      className="bottom-4 left-4 sm:bottom-8 sm:left-8"
      direction="from-left"
      icon={<Icons.star className="h-11 lg:h-12" />}
    />
    <HeroIcon
      className="right-4 top-4 sm:right-8 sm:top-8"
      direction="from-right"
      icon={<Icons.pill className="h-16 md:h-24 lg:h-28" />}
    />
    <HeroIcon
      className="bottom-4 right-4 sm:bottom-8 sm:right-8"
      direction="from-right"
      icon={<Icons.squiggle className="h-16 md:h-24 lg:h-28" />}
    />
  </section>
);

export default HeroSection;
