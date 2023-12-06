import { FC } from 'react';

type ContainerProps = {
  children: any;
};

const ContainerTradeBuy: FC<ContainerProps> = ({ children }) => {
  return (
    <div className='mx-[auto] max-w-[1460px] px-[10px] xl:max-w-[1210px] lg:relative lg:max-w-[705px] lg:px-[25px] md:max-w-[500px] md:p-[0_35px_0_25px] sm:p-[0_15px_0_15px]'>
      {children}
    </div>
  );
};

export default ContainerTradeBuy;
