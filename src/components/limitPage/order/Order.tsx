import classNames from 'classnames';
import { useState } from 'react';
import empty from './assets/Group 39726.svg';
import Image from 'next/image';

const Order = () => {
  const [active, setActive] = useState('Текущие ордера');

  return (
    <div className='mt-[22px]'>
      <div className='flex gap-[20px]'>
        <div
          className={classNames(
            'text-[16px] cursor-pointer border-blue border-solid border-[1px] rounded-[8px] h-[37px] w-[165px] flex items-center justify-center',
            { 'bg-blue': active === 'Текущие ордера' },
          )}
          onClick={() => setActive('Текущие ордера')}
        >
          Текущие ордера
        </div>
        <div
          className={classNames(
            'text-[16px] cursor-pointer border-blue border-solid border-[1px] rounded-[8px] h-[37px] w-[165px] flex items-center justify-center',
            { 'bg-blue': active === 'История ордеров' },
          )}
          onClick={() => setActive('История ордеров')}
        >
          История ордеров
        </div>
        <div
          className={classNames(
            'text-[16px] cursor-pointer border-blue border-solid border-[1px] rounded-[8px] h-[37px] w-[165px] flex items-center justify-center',
            { 'bg-blue': active === 'История торговли' },
          )}
          onClick={() => setActive('История торговли')}
        >
          История торговли
        </div>
      </div>

      <div className='m-[18px_0_20px_350px]'>
        <Image src={empty} alt={'empty'} />
      </div>
    </div>
  );
};

export default Order;
