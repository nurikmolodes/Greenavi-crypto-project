import classNames from 'classnames';
import { FC } from 'react';

type ContainerProps = {
  children: any;
  className?: string;
};

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'max-w-[1780px] px-[15px] m-[auto] xl:max-w-[1230px] lg:max-w-[705px] lg:px-[8px] md:max-w-[532px]',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
