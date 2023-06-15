import { siteConfig } from '@/config/site';

const GithubLink = () => (
  <a
    target="_blank"
    rel="noreferrer"
    draggable={false}
    href={siteConfig.links.github}
    className="w-full py-4 text-center text-lg text-secondary-foreground underline opacity-70 transition-opacity duration-300 hover:opacity-100 md:py-8 md:text-xl"
  >
    See other open-source projects
  </a>
);

export default GithubLink;
