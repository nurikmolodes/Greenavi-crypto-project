import Image from 'next/image';
import arrow from '@/assets/arrow-down.svg';

const Chart = () => {
  return (
    <div className='relative'>
      <div className='h-[65px] rounded-[8px] border-b-[1px] border-solid border-blue py-[5px] pl-[14px] pr-[24px]'>
        <div className='flex items-center '>
          <p className='text-[16px]'>График</p>
          <p className='ml-[auto] text-[16px]'>Стандартный</p>
          <p className='ml-[20px] text-[16px]'>Глубина</p>
        </div>

        <div className='flex items-center gap-[55px]'>
          <div className='mt-[3px] grid grid-cols-[17px_17px_17px_17px_17px_17px_17px_17px_17px] gap-[20px] text-[12px]'>
            <p>1m</p>
            <p>5m</p>
            <p>15m</p>
            <p>30m</p>
            <p>1h</p>
            <p>4h</p>
            <p>24h</p>
            <p>1w</p>
            <p>1M</p>
          </div>

          <div className='mt-[3px] cursor-pointer text-[16px] leading-normal'>
            Отображение <Image src={arrow} alt={'arrow'} />
          </div>
        </div>
      </div>

      <div className='flex h-[560px] items-center justify-center text-[40px]'>
        График валюты
      </div>

      <div className='absolute bottom-[55px] right-[100px] h-[425px] w-[1px] bg-white xl:bottom-[55px] xl:right-[50px] xl:h-[385px] xl:w-[1px]'></div>
      <div className='absolute bottom-[55px] right-[100px] h-[1px] w-[925px] bg-white xl:bottom-[55px] xl:right-[50px] xl:h-[1px] xl:w-[605px]'></div>
    </div>
  );
};

export default Chart;
