import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: any) {
  return twMerge(classnames(inputs));
}
