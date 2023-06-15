import Image, { StaticImageData } from 'next/image';

import { siteConfig } from '@/config/site';

import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

type Project = {
  id: string;
  name: string;
  image: StaticImageData;
  description: string;
  skills: string[];
};

interface ProjectTabsProps {
  data: Project[];
}

export const ProjectTabs = ({ data }: ProjectTabsProps) => (
  <Tabs
    defaultValue="nft"
    className="flex w-full flex-1 grow flex-col items-start gap-16 overflow-hidden md:flex-row"
    orientation="vertical"
  >
    <TabsList className="w-full flex-1 flex-col gap-4 border-transparent bg-transparent">
      {data.map((project) => (
        <TabsTrigger
          key={`trigger=${project.id}`}
          value={project.id}
          className="w-full rounded-2xl border border-muted-border bg-muted p-6 text-2xl"
        >
          {project.name}
        </TabsTrigger>
      ))}
      <a
        target="_blank"
        rel="noreferrer"
        draggable={false}
        href={siteConfig.links.github}
        className="py-4 text-lg text-secondary-foreground underline opacity-80 transition-opacity duration-300 hover:opacity-100 md:py-8 md:text-xl"
      >
        See other open-source projects
      </a>
    </TabsList>
    <div className="relative flex-1 flex-col justify-start">
      {data.map((project) => (
        <TabsContent value={project.id} className="flex flex-col gap-4">
          <div className="relative flex h-96 grow flex-col gap-4 overflow-hidden">
            <Image
              placeholder="blur"
              src={project.image}
              alt="Photo of project"
              fill
              className="h-fill overflow-hidden border-0 object-contain"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((v, i) => (
              <span
                key={i}
                className="select-none rounded-lg border border-primary-foreground bg-primary p-2 text-sm text-primary-foreground"
              >
                {v}
              </span>
            ))}
          </div>
          <p className="selection-text-foreground text-muted-foreground selection:bg-secondary">
            {project.description}
          </p>
        </TabsContent>
      ))}
    </div>
  </Tabs>
);
