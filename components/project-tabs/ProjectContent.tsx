import Image from 'next/image';

import { AspectRatio } from '../ui/aspect-ratio';
import { Badge } from '../ui/badge';
import { TabsContent } from '../ui/tabs';
import { Project } from './ProjectTabs';

const ProjectContent = (project: Project) => {
  const content = (
    <>
      <h3 className="text-2xl font-semibold md:hidden">{project.name}</h3>
      <AspectRatio
        ratio={16 / 9}
        className="relative flex flex-initial flex-col gap-4 overflow-hidden"
      >
        <Image
          placeholder="blur"
          src={project.image}
          alt="Photo of project"
          fill
          className="h-fill block overflow-hidden object-contain"
        />
      </AspectRatio>
      <div className="flex flex-wrap gap-2">
        {project.skills.map((v, i) => (
          <Badge key={i}>{v}</Badge>
        ))}
      </div>
      <p className="selection-text-foreground text-muted-foreground selection:bg-secondary">
        {project.description}
      </p>
    </>
  );

  return (
    <>
      <TabsContent value={project.id} className="hidden flex-col gap-4 md:flex">
        {content}
      </TabsContent>
      <div className="flex flex-col gap-4 md:hidden">{content}</div>
    </>
  );
};

export default ProjectContent;
