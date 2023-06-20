import { siteConfig } from '@/config/site';

const GithubLink = () => (
  <a
    target="_blank"
    rel="noreferrer"
    draggable={false}
    href={siteConfig.socials[0].href}
    className="w-full rounded-2xl py-4 text-center text-lg text-secondary-foreground underline opacity-70 ring-offset-background transition-all  duration-300 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:py-8 md:text-xl"
  >
    See other open-source projects
  </a>
);

export default GithubLink;
