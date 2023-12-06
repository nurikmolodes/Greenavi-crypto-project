'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full touch-none select-none items-center',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className='dark:bg-slate-800 relative h-1 w-full grow overflow-hidden rounded-full bg-darkblue2'>
        <SliderPrimitive.Range className='dark:bg-slate-50 absolute h-full bg-blue' />
      </SliderPrimitive.Track>
      {props.children}
      <SliderPrimitive.Thumb className='dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 block h-4 w-4 cursor-pointer rounded-full border border-darkblue2 bg-blue ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-backgroundBlue focus-visible:ring-offset-2 focus-visible:ring-offset-backgroundBlue disabled:pointer-events-none disabled:opacity-50 md:h-6 md:w-6' />
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
