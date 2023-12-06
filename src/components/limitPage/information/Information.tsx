import React from 'react';
import Image from 'next/image';
import bitcoin from './assets/pngwing.com - 2023-10-13T105255 1.svg';

const Information = () => {
  return (
    <>
      <div className='grid h-[62px] grid-cols-[70px_160px_30px_130px_140px_130px_130px_1fr_170px] content-center items-center justify-center xl:grid-cols-[60px_143px_12px_103px_111px_79px_68px_1fr_86px] lg:hidden lg:grid-cols-[60px_90px_12px_90px_90px_79px_68px_1fr_70px] md:grid-cols-[60px_60px_12px_50px_50px_39px_48px_1fr_40px]'>
        <div className='flex items-center pl-[14px]'>
          <div className='flex h-[34px] w-[38px] cursor-pointer flex-col items-end justify-around p-[3px]'>
            <span className='relative top-0 h-[2px] w-full bg-blue transition-none'></span>
            <span className='relative top-0 h-[2px] w-full bg-blue transition-none'></span>
            <span className='relative top-0 h-[2px] w-full bg-blue transition-none'></span>
          </div>
        </div>

        <div className='grid grid-cols-[50px_200px]'>
          <Image src={bitcoin} alt={'icon'} />

          <div>
            <p className='text-[16px] font-semibold leading-normal'>BTC/USDT</p>
            <p className='text-[12px]'>Bitcoin</p>
          </div>
        </div>

        <div className='h-[44px] w-[1px] bg-blue'></div>

        <div>
          <p className='text-[16px] font-semibold leading-normal text-green'>
            30.489.15
          </p>
          <p className='text-[12px] leading-normal'>~ 30.489.15 USD</p>
        </div>

        <div>
          <p className='text-[12px] leading-normal text-lightgray xl:mb-[5px]'>
            Изменение, 24h
          </p>
          <p className='text-[16px] leading-normal text-green xl:text-[12px]'>
            +2.15%
          </p>
        </div>

        <div>
          <p className='text-[12px] leading-normal text-lightgray xl:mb-[5px]'>
            24h Макс
          </p>
          <p className='text-[16px] leading-normal xl:text-[12px]'>30,980.00</p>
        </div>

        <div>
          <p className='text-[12px] leading-normal text-lightgray xl:mb-[5px]'>
            24h Мин
          </p>
          <p className='text-[16px] leading-normal xl:text-[12px]'>29,900.00</p>
        </div>

        <div>
          <p className='text-[12px] leading-normal text-lightgray xl:mb-[5px]'>
            Оборот ,24h
          </p>
          <p className='text-[16px] leading-normal xl:text-[12px]'>
            300,200,999.00
          </p>
        </div>

        <div className='relative xl:hidden'>sdsd</div>
      </div>

      <div className='lg_m:hidden flex items-center justify-between pr-4 pt-2.5 text-center'>
        <div className='flex h-[34px] w-[38px] cursor-pointer flex-col items-end justify-around p-[3px]'>
          <span className='relative top-0 h-[2px] w-full bg-blue transition-none'></span>
          <span className='relative top-0 h-[2px] w-full bg-blue transition-none'></span>
          <span className='relative top-0 h-[2px] w-full bg-blue transition-none'></span>
        </div>
        <div className='flex justify-center'>
          <Image src={bitcoin} alt={'icon'} />

          <div>
            <p className='text-[16px] font-semibold leading-normal'>BTC/USDT</p>
            <p className='text-[12px]'>Bitcoin</p>
          </div>
        </div>

        <div>
          <p className='text-[16px] font-semibold leading-normal text-green'>
            30.489.15
          </p>
          <p className='text-[12px] leading-normal'>~ 30.489.15 USD</p>
        </div>
        <div>
          <p className='text-[12px] leading-normal text-lightgray xl:mb-[5px]'>
            Изменение, 24h
          </p>
          <p className='text-[16px] leading-normal text-green xl:text-[12px]'>
            +2.15%
          </p>
        </div>

        <div>
          <p className='text-[12px] leading-normal text-lightgray xl:mb-[5px]'>
            24h Макс
          </p>
          <p className='text-[16px] leading-normal xl:text-[12px]'>30,980.00</p>
        </div>

        <div>
          <p className='text-[12px] leading-normal text-lightgray xl:mb-[5px]'>
            24h Мин
          </p>
          <p className='text-[16px] leading-normal xl:text-[12px]'>29,900.00</p>
        </div>

        <div>
          <p className='text-[12px] leading-normal text-lightgray xl:mb-[5px]'>
            Оборот ,24h
          </p>
          <p className='text-[16px] leading-normal xl:text-[12px]'>
            300,200,999.00
          </p>
        </div>
      </div>
    </>
  );
};

export default Information;
