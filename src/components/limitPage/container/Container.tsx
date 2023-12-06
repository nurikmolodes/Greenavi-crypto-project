import { FC } from 'react';

type ContainerProps = {
  children: any;
  className?: string | undefined;
};

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`m-[auto] max-w-[1776px] xl:max-w-[1130px] lg:max-w-[660px] md:max-w-[400px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
