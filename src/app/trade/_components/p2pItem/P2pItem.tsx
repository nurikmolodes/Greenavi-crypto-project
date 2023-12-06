import img from '../iconU.svg';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';

type P2pItemProps = {
  checked: string;
};

const P2pItem: FC<P2pItemProps> = ({ checked }) => {
  return (
    <>
      <div className='block md:hidden'>
        <div className='mb-[5px] grid h-[127px] grid-cols-[84px_295px_170px_140px_315px_180px_1fr] content-center rounded-[8px] border-[1px] border-solid border-blue bg-darkblue py-[19px] pl-[0] pr-[14px] text-[20px] leading-normal xl:grid-cols-[84px_246px_121px_117px_268px_102px_1fr] lg:h-[86px] lg:grid-cols-[53px_129px_94px_60px_137px_74px_1fr]'>
          <div className='flex items-center justify-center'>
            <Image
              className='lg:h-[38px] lg:w-[38px]'
              src={img}
              alt={'avatar'}
            />
          </div>

          <div>
            <p className='text-[24px] font-medium lg:text-[14px]'>User</p>
            <p className='text-darkBlueText lg:text-[8px]'>
              1,508 исполнено | 100%
            </p>
            <p className='text-darkBlueText lg:text-[8px]'>В сети</p>
          </div>

          <div className='flex flex-col justify-center gap-[15px] text-[24px] font-medium'>
            <p className='lg:text-[12px]'>
              98.92{' '}
              <span className='text-[15px] font-light lg:text-[8px]'>RUB</span>
            </p>
          </div>

          <div className='flex flex-col justify-center gap-[15px] lg:gap-[10px]'>
            <p className='text-darkBlueText lg:text-[8px]'>Доступно</p>
            <p className='text-darkBlueText lg:text-[8px]'>Лимиты</p>
          </div>

          <div className='flex flex-col justify-center gap-[15px] lg:gap-[10px]'>
            <p className='lg:text-[8px]'>1,485,7564 USDT</p>
            <p className='lg:text-[8px]'>5.000.00 - 20.000.00 RUB</p>
          </div>

          <div className='flex flex-col justify-center gap-[15px] text-[16px] font-normal leading-normal lg:text-[8px]'>
            AdvCash
          </div>

          <div className='flex flex-col justify-center gap-[15px]'>
            <Link
              className='flex h-[47px] w-full items-center justify-center rounded-[8px] border-0 bg-blue lg:h-[23px] lg:text-[8px]'
              href={'/trade/buy'}
            >
              {checked === 'Продажа' ? 'Продать' : 'Купить USDT'}

              {/*  variant={checked === 'Продажа' ? 'pink' : 'blue'}*/}
            </Link>
          </div>
        </div>
      </div>

      <div className='hidden md:block'>
        <div className='mb-[4px] grid h-[86px] grid-cols-[70px_1fr_100px] rounded-[6px] border-[1px] border-solid border-blue bg-darkblue px-[6px] py-[5px] sm:grid-cols-[45px_1fr_100px]'>
          <div className='flex flex-col'>
            <p className='text-[14px] font-medium'>User1</p>

            <Image className='h-[38px] w-[38px]' src={img} alt='avatar' />

            <p className='text-[10px] text-darkBlueText'>В сети</p>
          </div>

          <div className='flex flex-col justify-center'>
            <div className='mb-[5px]'>
              <p className='text-[8px] text-darkBlueText'>
                1,508 исполнено | 100%
              </p>
            </div>

            <div className='flex items-center gap-[14px]'>
              <div className='flex flex-col justify-center gap-[4px]'>
                <p className='text-[8px] text-darkBlueText'>Доступно</p>
                <p className='text-[8px] text-darkBlueText'>Лимиты</p>
              </div>

              <div className='flex flex-col justify-center gap-[4px]'>
                <p className='text-[8px]'>1,485,7564 USDT</p>
                <p className='text-[8px]'>5.000.00 - 20.000.00 RUB</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center gap-[5px]'>
            <div className='flex flex-col justify-center gap-[15px] font-medium'>
              <p className='text-[12px]'>
                98.92{' '}
                <span className='text-[15px] font-light lg:text-[8px]'>
                  RUB
                </span>
              </p>
            </div>

            <Link
              className='flex h-[23px] w-full items-center justify-center rounded-[8px] border-0 bg-blue text-[8px]'
              href={'/trade/buy'}
            >
              {checked === 'Продажа' ? 'Продать' : 'Купить USDT'}

              {/*  variant={checked === 'Продажа' ? 'pink' : 'blue'}*/}
            </Link>

            <div className='text-[8px] font-normal leading-normal'>AdvCash</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default P2pItem;
