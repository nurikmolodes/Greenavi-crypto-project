import React, { FC } from 'react';
import Image from 'next/image';
import { HeaderSection } from '@/components/HeaderSection/HeaderSection';
import backgroundImg from '@/assets/svgs/Layer_2.svg';

export const Hero: FC = () => {
  return (
    <>
      <HeaderSection />
      <div className='absolute left-0 top-0 -z-10 h-[444px] w-full lg:mt-[120px]'>
        <Image
          className='h-[100%] w-full !max-w-full lg:h-[612px] md:h-[500px]'
          src={backgroundImg}
          alt={'background'}
        />
      </div>
    </>
  );
};
