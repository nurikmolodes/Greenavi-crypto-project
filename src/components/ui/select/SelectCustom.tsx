import styles from './Select.module.scss';
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import arrow from '@/assets/arrow-down.svg';
import classNames from 'classnames';

type SelectCustomProps = {
  checked: any;
  options: any;
  arrowIcon?: boolean;
  cls: string;
};

const SelectCustom: FC<SelectCustomProps> = ({
  checked,
  options,
  arrowIcon = true,
  cls,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClose = () => setOpen && setOpen(false);

    const handleClick = (e: any) => {
      if (!e.target.closest('.' + cls)) {
        setOpen && setOpen(false);
      }
    };

    window.addEventListener('resize', handleClose);
    window.addEventListener('scroll', handleClose);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleClose);
      window.removeEventListener('resize', handleClose);
      window.addEventListener('click', handleClick);
    };
  }, [cls, setOpen]);

  return (
    <div className={styles.select__wrapper}>
      <div
        className={classNames(styles.select, {
          [styles.select__center]: !arrowIcon,
        })}
        onClick={() => setOpen(!open)}
      >
        {checked.icon && (
          <Image
            className='lg:h-[20px] lg:w-[20px] md:h-[14px] md:w-[14px] '
            src={checked.icon}
            alt={'icon'}
          />
        )}

        {checked.text}

        {arrowIcon && (
          <Image
            className={classNames(styles.select__img, {
              [styles.select__img_open]: open,
            })}
            alt={'arrow'}
            src={arrow}
          />
        )}
      </div>

      <div
        className={classNames(styles.select__options, {
          [styles.select__options_isOpen]: open,
        })}
      >
        <ul>
          {options.map((item: any) => (
            <li
              key={item.text}
              className={classNames(styles.select__options_center, {
                [styles.select__checked]: item.text === checked,
              })}
            >
              {item.icon && <Image src={item.icon} alt={'icon'} />} {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectCustom;
