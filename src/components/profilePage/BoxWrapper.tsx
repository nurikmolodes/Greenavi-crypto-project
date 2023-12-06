import { FC } from 'react';

type BoxWrapperProps = {
  children: any;
  className?: string | undefined;
};

const BoxWrapper: FC<BoxWrapperProps> = ({ children, className }) => {
  return (
    <div
      className={`mx-auto my-0 rounded-lg border border-[#2666FF] p-2.5 ${className}`}
    >
      {children}
    </div>
  );
};

export default BoxWrapper;
