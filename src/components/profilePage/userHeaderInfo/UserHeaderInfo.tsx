import { memo } from 'react';
import Image from 'next/image';

import avatarImg from '@/assets/images/Ellipse 384.png';

const UserHeaderInfo = ({
  username,
  email,
  avatar,
}: {
  username: string;
  email: string;
  avatar: string;
}) => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <p className='text-4xl leading-10'>Профиль</p>
        <p className='mt-4 text-2xl leading-7'>{username}</p>
        <p className='mt-1 text-lg font-normal leading-5'>{email}</p>
      </div>
      <div>
        <Image
          src={avatar || avatarImg}
          alt={'background'}
          width={96}
          height={96}
          className='mr-2'
        />
      </div>
    </div>
  );
};

export default memo(UserHeaderInfo);
