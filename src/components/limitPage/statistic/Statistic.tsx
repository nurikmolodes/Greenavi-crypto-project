import React, { useState } from 'react';
import img from './assets/Polygon 1.svg';
import arrow from './assets/arrow-up.svg';
import Image from 'next/image';
import Tab from './TabStat';

const Statistic = () => {
  //const [checked, setChecked] = useState('Книга ордеров');
  const [active, setActive] = useState('Последние сделки');

  return (
    <>
      {/* <div
        className={classNames(
          'border-solid border-[1px] rounded-[8px] border-blue h-[640px] xl:h-[675px] lg:row-end-3 lg_m:hidden',
        )}
      >
        <Chart />
      </div> */}
      <div className='px-[32px] py-[11px] xl:px-[14px]'>
        <div className='flex justify-between xl:mt-[10px] xl:justify-evenly'>
          {/* <p className='text-[16px] cursor-pointer xl:text-[12px]'>
          Книга ордеров
        </p>
        <p className='text-[16px] cursor-pointer xl:text-[12px]'>
          Последние сделки
        </p> */}
          <Tab
            active={active}
            setActive={setActive}
            options={[' Книга ордеров', 'Последние сделки']}
          />
        </div>

        <div className='mt-[14px] flex justify-end'>
          <div className='h-[22px] w-[70px] rounded-[3px] border-[1px] border-solid border-blue bg-darkblue text-center text-[14px]'>
            1
            <Image className='ml-[4px] mt-[5px]' src={img} alt={'icon'} />
          </div>
        </div>

        <div className='relative mt-[22px]'>
          <div className='flex justify-between'>
            <p className='text-[12px] text-lightgray xl:text-[18px] xl:font-normal'>
              Цена (USDT)
            </p>
            <p className='text-[12px] text-lightgray xl:text-[18px] xl:font-normal'>
              Кол-во (BTC)
            </p>
            <p className='text-[12px] text-lightgray xl:text-[18px] xl:font-normal'>
              Всего (BTC)
            </p>
          </div>

          {Array(7)
            .fill(0)
            .map((item, i) => (
              <div key={i} className='mt-[9px] grid grid-cols-[1fr_1fr_1fr]'>
                <p className='mr-[22px] text-right text-[12px] text-pink  xl:text-[18px]'>
                  11,111.00
                </p>
                <p className='mr-[6px] text-right text-[12px]  xl:text-[18px]'>
                  0.111111
                </p>
                <p className='text-right text-[12px]  xl:text-[18px]'>
                  1.111111
                </p>
              </div>
            ))}

          <div className='absolute bottom-[-2px] right-0 h-[21px] w-[calc(100%-25px)] bg-lightRed'></div>
          <div className='absolute bottom-[26px] right-0 h-[21px] w-[162px] bg-lightRed'></div>
          <div className='absolute bottom-[53px] right-0 h-[21px] w-[50px] bg-lightRed'></div>
          <div className='absolute bottom-[80px] right-0 h-[21px] w-[38px] bg-lightRed'></div>
          <div className='absolute bottom-[107px] right-0 h-[21px] w-[20px] bg-lightRed'></div>
        </div>

        <div className='mb-[10px] mt-[28px] flex items-center gap-[4px]'>
          <Image src={arrow} alt={'arrow'} />
          <p className='text-[16px] text-green xl:text-[24px]'>30.489.15</p>
          <p className='text-[16px] xl:text-[18px]'>~</p>
          <p className='text-[12px] xl:text-[18px]'>30.489.15 USD</p>
        </div>

        <div className='relative'>
          {Array(7)
            .fill(0)
            .map((item, i) => (
              <div
                key={i}
                className='mt-[9px] grid grid-cols-[1fr_1fr_1fr] xl:mt-[5px]'
              >
                <p className='mr-[22px] text-right text-[12px] xl:text-[18px]'>
                  11,111.00
                </p>
                <p className='mr-[6px] text-right text-[12px] xl:text-[18px]'>
                  0.111111
                </p>
                <p className='text-right text-[12px]  xl:text-[18px]'>
                  1.111111
                </p>
              </div>
            ))}

          <div className='absolute bottom-[-2px] right-0 h-[21px] w-[calc(100%-25px)] bg-lightGreen'></div>
          <div className='absolute bottom-[26px] right-0 h-[21px] w-[162px] bg-lightGreen'></div>
          <div className='absolute bottom-[53px] right-0 h-[21px] w-[50px] bg-lightGreen'></div>
          <div className='absolute bottom-[80px] right-0 h-[21px] w-[38px] bg-lightGreen'></div>
          <div className='absolute bottom-[107px] right-0 h-[21px] w-[20px] bg-lightGreen'></div>
        </div>
      </div>
    </>
  );
};

export default Statistic;
