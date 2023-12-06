import { memo } from 'react';
import Image from 'next/image';

interface SidBarItemProps {
  label: string;
  icon: any;
  onClick: () => void;
}

const SideBarItem = ({ label, icon, ...props }: SidBarItemProps) => {
  return (
    <div className='flex max-w-[286px] cursor-pointer gap-1.5 p-2.5' {...props}>
      <Image src={icon} alt={'background'} />
      <p className='text-lg font-semibold text-white'>{label}</p>
    </div>
  );
};

export default memo(SideBarItem);
