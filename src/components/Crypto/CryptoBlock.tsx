import { FC } from 'react';
import Image from 'next/image';
import { currencies } from '@/lib/currencies';
import styles from './crypto.module.scss';
import classNames from 'classnames';

const CryptoCurrencyBlock: FC<{ currency: (typeof currencies)[0] }> = ({
  currency,
}) => {
  return (
    <div className='flex w-full items-center rounded-[10px] p-[10px]'>
      <div className='mr-[8px]'>
        <Image
          src={currency.image}
          alt={currency.name}
          width={30}
          height={30}
        />
      </div>

      <div className='flex flex-row items-center justify-start text-[14px] font-semibold leading-[120%]'>
        <p className='mr-[5px] whitespace-nowrap'>
          {currency.name} ({currency.symbol})
        </p>

        <p className='mr-[5px] whitespace-nowrap'>{currency.price}</p>

        <span
          className={classNames({
            [styles.currencyChange]: !!currency.progress,
            [styles.currencyChange_progress]: currency.progress === 'true',
          })}
        >
          {currency.change}
        </span>
      </div>
    </div>
  );
};

export const CryptoBlock: FC = () => {
  return (
    <div className='flex max-w-[1450px] justify-between gap-0 overflow-hidden font-flex'>
      {currencies.map((currency: any) => (
        <CryptoCurrencyBlock key={currency.symbol} currency={currency} />
      ))}
    </div>
  );
};
