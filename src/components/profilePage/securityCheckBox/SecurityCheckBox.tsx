import { memo } from 'react';
import Image from 'next/image';

import alertCircle from '@/assets/svgs/cross_icon_r.svg';
import greenMarkIcon from '@/assets/svgs/greenmark.svg';

type SecurityCheckBoxProps = {
  className?: string;
  label: string;
  isEnabled?: boolean;
};

const SecurityCheckBox = ({
  className,
  label,
  isEnabled = false,
  ...props
}: SecurityCheckBoxProps) => {
  return (
    <div
      className={`${className} w-max rounded bg-[rgba(91,_19,_245,_0.10)] px-1.5 py-0.5`}
      {...props}
    >
      <div className='flex w-full gap-2.5'>
        <Image
          src={isEnabled ? greenMarkIcon : alertCircle}
          alt={'background'}
        />
        <p className='text-sm font-normal text-blue'>{label}</p>
      </div>
    </div>
  );
};

export default memo(SecurityCheckBox);
