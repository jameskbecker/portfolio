'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';

import { AspectRatio } from '../ui/aspect-ratio';
import { Skeleton } from '../ui/skeleton';

export interface ClientImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  showBorder?: boolean;
  blurredBackground?: boolean;
}

export const ClientImage = (props: ClientImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const StyledImage = ({ className, ...rest }: any) => (
    <Image
      src={props.src}
      alt={props.alt}
      fill
      onLoadingComplete={() => {
        setIsLoading(false);
      }}
      draggable={false}
      className={cn(
        'z-10 box-border select-none object-cover',
        className,
        props.className,
        {
          'opacity-0': isLoading,
        }
      )}
      {...rest}
    />
  );

  return (
    <div
      className={cn(
        'relative h-96 w-full overflow-hidden rounded-2xl lg:h-full',
        { 'border-2': props.showBorder, 'border-purple-400': props.showBorder }
      )}
    >
      {isLoading && <Skeleton className="h-full w-full rounded-2xl bg-muted" />}
      <StyledImage />

      {props.blurredBackground && (
        <StyledImage className="z-0 box-border select-none overflow-hidden rounded-2xl opacity-75 blur-md sm:object-cover sm:object-center" />
      )}
    </div>
  );
};
