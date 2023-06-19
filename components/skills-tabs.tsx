import * as TabsPrimitive from '@radix-ui/react-tabs';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface SkillsTabsProps {
  className?: string;
}

export const SkillsTabs = ({ className }: SkillsTabsProps) => (
  <Tabs
    defaultValue="frontend"
    className={cn(
      'flex w-full flex-col items-center overflow-hidden',
      className
    )}
  >
    <TabsList>
      <TabsTrigger value="frontend">Frontend</TabsTrigger>
      <TabsTrigger value="backend">Backend</TabsTrigger>
      <TabsTrigger value="languages">Languages</TabsTrigger>
      <TabsTrigger value="tooling-platforms">Tooling & Platforms</TabsTrigger>
      <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
      <TabsTrigger value="design">Design</TabsTrigger>
    </TabsList>
    <div className="flex w-full flex-1 flex-col items-center justify-start overflow-hidden py-8">
      {siteConfig.skills.map(({ id, data }: any) => (
        <TabsContent
          key={id}
          value={id}
          className="grid w-full grid-cols-2 gap-16 lg:grid-cols-3"
        >
          {data.map((v: string, i: number) => (
            <span
              key={i}
              className="overflow-hidden text-ellipsis whitespace-nowrap text-center text-2xl text-muted-foreground xl:text-4xl"
            >
              {v}
            </span>
          ))}
        </TabsContent>
      ))}
    </div>
  </Tabs>
);
