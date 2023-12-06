import React, { FC, RefObject } from 'react';

import cn from 'classnames';

import s from './button.module.scss';

interface ButtonProps {
  onClick?: Function;
  title: string;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  forwardRef?: RefObject<HTMLButtonElement>;
  leftIcon?: React.ReactNode | string;
  rightIcon?: React.ReactNode | string;
  textSize?: 'small' | 'medium' | 'large';
  variant?: 'blue' | 'darkblue' | 'pink' | 'green' | 'darkblue_org';
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  title,
  className,
  onClick,
  type = 'button',
  forwardRef,
  leftIcon,
  rightIcon,
  textSize = 'medium',
  variant = 'blue',
  disabled = false,
}) => {
  return (
    <button
      className={cn(s[variant], s[textSize], className)}
      onClick={() => onClick && onClick()}
      type={type}
      ref={forwardRef}
      disabled={disabled}
    >
      {leftIcon && <span className={s.iconLeft}>{leftIcon}</span>}
      {title}
      {rightIcon && <span className={s.iconRight}>{rightIcon}</span>}
    </button>
  );
};
