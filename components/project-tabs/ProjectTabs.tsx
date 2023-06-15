import Image, { StaticImageData } from 'next/image';

import { siteConfig } from '@/config/site';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import ProjectContent from './ProjectContent';

export type Project = {
  id: string;
  name: string;
  image: StaticImageData;
  description: string;
  skills: string[];
};

interface ProjectTabsProps {
  data: Project[];
}

const GithubLink = () => (
  <a
    target="_blank"
    rel="noreferrer"
    draggable={false}
    href={siteConfig.links.github}
    className="w-full py-4 text-center text-lg text-secondary-foreground underline opacity-80 transition-opacity duration-300 hover:opacity-100 md:py-8 md:text-xl"
  >
    See other open-source projects
  </a>
);

export const ProjectTabs = ({ data }: ProjectTabsProps) => (
  <Tabs
    defaultValue="nft"
    className="flex w-full flex-1 grow flex-col items-start gap-16 overflow-hidden md:flex-row"
    orientation="vertical"
  >
    <TabsList className="hidden w-full flex-1 flex-col gap-4 border-transparent bg-transparent md:flex">
      {data.map((project) => (
        <TabsTrigger
          key={`trigger=${project.id}`}
          value={project.id}
          className="w-full rounded-2xl border border-muted-border bg-muted p-6 text-2xl"
        >
          {project.name}
        </TabsTrigger>
      ))}
      <GithubLink />
    </TabsList>
    <div className="relative flex flex-1 flex-col justify-start gap-8 md:gap-0">
      {data.map((project) => (
        <ProjectContent key={project.id} {...project} />
      ))}
    </div>

    <div className="flex w-full justify-center md:hidden">
      <GithubLink />
    </div>
  </Tabs>
);
