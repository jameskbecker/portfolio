import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export interface SkillsAccordionProps {
  className?: string;
}

const SkillsAccordion = ({ className }: SkillsAccordionProps) => (
  <Accordion type="single" collapsible className={cn('w-full', className)}>
    {siteConfig.skills.map(({ id, name, data }) => (
      <AccordionItem key={id} value={id}>
        <AccordionTrigger>{name}</AccordionTrigger>
        <AccordionContent>
          <ul className="flex list-disc flex-col gap-1 pl-4">
            {data.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default SkillsAccordion;
