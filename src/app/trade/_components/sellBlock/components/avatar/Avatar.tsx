import avatar from '../../../iconU.svg';
import Image from 'next/image';
import { FC } from 'react';

type AvatarProps = {
  title: string;
  text: string;
};

const Avatar: FC<AvatarProps> = ({ title, text }) => {
  return (
    <div className='grid grid-cols-[60px_1fr] content-center lg:grid-cols-[48px_1fr]'>
      <Image className='lg:h-[38px] lg:w-[38px]' src={avatar} alt={'avatar'} />

      <div>
        <p className='my-[2px] text-[16px] font-medium leading-normal lg:mt-[0]'>
          {title}
        </p>
        <p className='mb-[2px] text-[12px] font-normal leading-normal text-darkBlueText'>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Avatar;
