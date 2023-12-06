import { FC } from 'react';

type WarningProps = {
  children: any;
};

const Warning: FC<WarningProps> = ({ children }) => {
  return (
    <div className='rounded-[4px] border-[1px] border-solid border-warning bg-warningBackground p-[6px] text-center leading-[120%] text-warning'>
      {children}
    </div>
  );
};

export default Warning;
