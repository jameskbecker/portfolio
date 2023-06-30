import { Icons } from '../icons';
import { MotionHeading } from '../motion-heading';
import SocialIcons from '../social-icons/SocialIcons';

export const ContactSection = () => (
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
);
