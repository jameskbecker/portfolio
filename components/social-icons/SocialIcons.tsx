import { siteConfig } from '@/config/site';

import SocialLink from './SocialLink';

const SocialIcons = () => (
  <div className="grid grid-cols-2 items-center gap-16 md:flex md:flex-row">
    {siteConfig.socials.map((link, i) => (
      <SocialLink
        key={i}
        label={link.label}
        icon={<link.icon />}
        href={link.href}
        delay={i * 0.25}
      />
    ))}
  </div>
);

export default SocialIcons;
