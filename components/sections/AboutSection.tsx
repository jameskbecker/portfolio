import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import aboutMe from '../../content/about-me';
import { MotionHeading } from '../MotionHeading';
import { ClientImage } from '../client-image/ClientImage';
import { Icons } from '../icons';

const AboutSection = () => (
  <section
    id="about"
    className="relative flex min-h-full flex-col items-center gap-8 self-center pb-8 pt-6 lg:py-10"
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

      <ReactMarkdown className='className="flex gap-4> flex-1 flex-col whitespace-pre-wrap'>
        {aboutMe}
      </ReactMarkdown>
    </div>
    <Icons.shine className="absolute right-8 top-12" />
  </section>
);

export default AboutSection;
