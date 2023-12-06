import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { Typography } from '@/components/ui/typography';
import * as React from 'react';
import { useState } from 'react';

export const Progress = () => {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <div>
      <Slider
        defaultValue={[sliderValue]}
        max={100}
        step={25}
        onValueChange={(value: [number]) => setSliderValue(value[0])}
      >
        <div className='absolute  flex w-full  justify-between'>
          {[0, 25, 50, 75, 100].map((el) => (
            <div
              key={el}
              className={cn(
                'md:h-6 md:w-6 h-4 w-4   rounded-[50%] border-[1px] border-solid  border-blue',
                el >= sliderValue ? 'bg-backgroundBlue' : 'bg-blue',
              )}
            />
          ))}
        </div>
      </Slider>

      <div className={'mt-2 flex justify-between md:mt-4'}>
        <Typography variant={'p2'} className={'text-blue'}>
          0
        </Typography>
        <Typography variant={'p2'} className={'text-blue'}>
          100%
        </Typography>
      </div>
    </div>
  );
};
