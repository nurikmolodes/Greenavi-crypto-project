import React from 'react';
import s from './block.module.scss';
import cn from 'classnames';

interface BlockProps {
  className?: string;
  children?: React.ReactNode;
}

export const Block: React.FC<BlockProps> = ({ children, className }) => {
  return (
    <div className={cn(s.block, className)}>
      <div>{children}</div>
    </div>
  );
};
