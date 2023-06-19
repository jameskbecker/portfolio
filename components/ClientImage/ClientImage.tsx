'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';

import { Skeleton } from '../ui/skeleton';

interface ClientImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  showBorder?: boolean;
}

export const ClientImage = (props: ClientImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn(
        'relative h-96 w-full overflow-hidden rounded-2xl lg:h-full',
        { 'border-2': props.showBorder, 'border-purple-400': props.showBorder }
      )}
    >
      {isLoading && <Skeleton className="h-full w-full rounded-2xl" />}
      <Image
        // placeholder="blur"
        src={props.src}
        alt={props.alt}
        fill
        onLoadingComplete={() => {
          setIsLoading(false);
          console.log('hello');
        }}
        draggable={false}
        className={cn('select-none border-0 object-cover', props.className, {
          'opacity-0': isLoading,
        })}
      />
    </div>
  );
};
