import { ComponentPropsWithoutRef, ElementType } from 'react';

import classNames from 'classnames';

export type TypographyVariantType =
  | 'p1'
  | 'p2'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'large'
  | 'link1'
  | 'link2'
  | 'subtitle1'
  | 'subtitle2';

const style = {
  p1: 'text-[16px] font-normal md:text-[15px] sm:text-[10px]',
  p2: 'text-[14px] font-medium',
  h1: '',
  h2: '',
  h3: '',
  large: '',
  link1: '',
  link2: '',
  subtitle1: 'text-[10px]',
  subtitle2: '',
};

export type TypographyProps<T extends ElementType> = {
  as?: T;
  variant?: TypographyVariantType;
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = 'div'>(
  props: TypographyProps<T>,
) => {
  const {
    as: Component = 'div',
    children,
    className,
    variant = 'p1',
    ...rest
  } = props;

  return (
    <Component className={classNames(className, style[variant])} {...rest}>
      {children}
    </Component>
  );
};
