import React, { FC } from 'react';
import styles from './navbar.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

export const NavBar: FC = () => {
  return (
    <ul className='flex flex-row gap-10 xl:gap-5'>
      <li className={classNames('cursor-pointer', styles.arrow)}>
        <span className='font-medium text-lightgray'>Купить криптовалюту</span>
        <div>
          <ul>
            <li>Пункт 1</li>
            <li>Пункт 2</li>
            <li>Пункт 3</li>
            <li>Пункт 4</li>
          </ul>
        </div>
      </li>

      <li className={'cursor-pointer'}>
        <Link href={'/trade'}>
          <span className='font-medium text-lightgray'>P2P-торговля</span>
        </Link>
      </li>

      <li
        className={
          'relative cursor-pointer after:absolute after:right-[-18px] after:top-[-8px] after:rounded-[8px] after:border-[1px] after:border-solid after:border-newGreen after:p-[4px] after:text-[8px] after:font-normal after:leading-normal after:text-newGreen after:content-["NEW"]'
        }
      >
        <span className='font-medium text-lightgray'>B2B</span>
      </li>

      <li className={'cursor-pointer'}>
        <span className='font-medium text-lightgray'>Процессинг</span>
      </li>

      <li className={classNames('cursor-pointer', styles.arrow)}>
        <span className='font-medium text-lightgray'>Статьи</span>
        <div>
          <ul>
            <li>Пункт 1</li>
            <li>Пункт 2</li>
            <li>Пункт 3</li>
          </ul>
        </div>
      </li>

      <li className={classNames('cursor-pointer', styles.arrow)}>
        <span className='font-medium text-lightgray'>Поддержка</span>

        <div>
          <ul>
            <li>Пункт 1</li>
            <li>Пункт 2</li>
            <li>Пункт 3</li>
            <li>Пункт 4</li>
            <li>Пункт 5</li>
          </ul>
        </div>
      </li>
    </ul>
  );
};
