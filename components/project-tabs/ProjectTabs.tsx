import { StaticImageData } from 'next/image';

import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import GithubLink from './GithubLink';
import ProjectContent from './ProjectContent';

export type Project = {
  id: string;
  name: string;
  image: StaticImageData;
  description: string;
  skills: string[];
};

export interface ProjectTabsProps {
  data: Project[];
}

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
