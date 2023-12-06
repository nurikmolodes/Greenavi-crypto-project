import styles from './SellBlock.module.scss';
import RadioButton from '@/components/ui/radioButton/RadioButton';
import { FC, useState } from 'react';
import { Button } from '@/components/ui/Button/Button';
import Image from 'next/image';
import arrow from './assets/replay-five.svg';
import Tab from '@/app/trade/_components/sellBlock/components/tab/Tab';
import TabBlockFeedback from '@/app/trade/_components/sellBlock/components/tabBlocks/TabBlockFeedback';
import TabBlockCondition from '@/app/trade/_components/sellBlock/components/tabBlocks/TabBlockCondition';
import TabBlockData from '@/app/trade/_components/sellBlock/components/tabBlocks/TabBlockData';
import classNames from 'classnames';

type SellBlockProps = {
  checkedFilter: string;
};

const SellBlock: FC<SellBlockProps> = ({ checkedFilter }) => {
  const [checked, setChecked] = useState('За фиат');
  const [activeTab, setActiveTab] = useState('Условия сделки');

  return (
    <div className='mb-[5px] grid h-[440px]  grid-cols-[1fr_3px_1fr] rounded-[8px] border-[1px] border-solid border-blue py-[22px] text-[12px] font-normal leading-normal lg:grid-cols-[1fr_1fr] md:h-full md:grid-cols-[1fr] '>
      <div className='ml-[130px] w-[412px] xl:ml-[60px] lg:ml-[10px] lg:w-[360px] md:w-[calc(100%-20px)]'>
        <div className='mb-[12px] mt-[10px] flex gap-[70px] text-[16px] font-normal leading-normal text-lightgray lg:mt-[-8px] lg:gap-[10px] lg:text-[15px]'>
          <p>Цена</p>

          <p className='flex items-end gap-[2px] text-white lg:items-center lg:text-[18px]'>
            <span className='text-[12px] font-normal leading-normal lg:text-[18px]'>
              ₽
            </span>
            100
            <Image
              className='ml-[4px] cursor-pointer self-center'
              src={arrow}
              alt={'arrow'}
            />
          </p>
        </div>

        <RadioButton
          firstName={'За фиат'}
          secondName={'За крипто'}
          setChecked={setChecked}
          checked={checked}
        />

        <div className='relative mt-[15px] w-full'>
          <p className='absolute left-[10px] top-[50%] translate-y-[-50%]'>₽</p>
          <input
            className='h-[39px] w-full appearance-none rounded-[8px] border-[1px] border-solid border-blue bg-backgroundBlue pl-[22px] text-white outline-0 placeholder:font-sans placeholder:text-[12px] placeholder:text-lightgray lg:h-[30px]'
            type='number'
            placeholder={'Введите сумму'}
          />
          <p className='absolute right-[20px] top-[50%] translate-y-[-50%] cursor-pointer text-blue'>
            Все
          </p>
        </div>

        <div className='mb-[22px] mt-[9px] flex items-center gap-[12px]'>
          <p className='text-lightgray'>Лимит</p>

          <p>10,500,00 RUB - 20,000,00 RUB</p>
        </div>

        <div className='mb-[24px] flex flex-col gap-[12px]'>
          <div className='flex justify-between'>
            <p className='text-lightgray'>Количество к получению</p>
            <p>-USDT</p>
          </div>

          <div className='flex justify-between'>
            <p className='text-lightgray'>Сумма в фиатной валюте</p>
            <p>-RUB</p>
          </div>

          <div className='hidden justify-between lg:flex'>
            <p className='text-lightgray'>Способ оплаты</p>
            <p>ADVcash</p>
          </div>

          <div className='hidden justify-between lg:flex'>
            <p className='text-lightgray'>Срок оплаты</p>
            <p>15 мин</p>
          </div>
        </div>

        <Button
          className='lg:h-[23px] lg:!pt-[4px] lg:!text-[10px]'
          title={checkedFilter === 'Продажа' ? 'Продать' : 'Купить USDT'}
          variant={checkedFilter === 'Продажа' ? 'pink' : 'blue'}
        />

        <div className='mt-[10px] flex w-[165px] flex-col gap-[4px] lg:hidden'>
          <div className='flex justify-between'>
            <p className='text-lightgray'>Способ оплаты</p>
            <p>ADVcash</p>
          </div>

          <div className='flex justify-between'>
            <p className='text-lightgray'>Срок оплаты</p>
            <p>15 мин</p>
          </div>
        </div>
      </div>

      <div className='w-[1px] bg-blue lg:hidden'></div>

      <div className='ml-[130px] w-[440px] xl:ml-[60px] lg:ml-[25px] lg:w-[240px] md:ml-[10px] md:mt-[30px] md:w-[calc(100%-20px)]'>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />

        <div
          className={classNames(styles.sell__tab_block, {
            [styles.sell__tab_block_active]: activeTab === 'Условия сделки',
          })}
        >
          <TabBlockCondition />
        </div>

        <div
          className={classNames(styles.sell__tab_block, {
            [styles.sell__tab_block_active]: activeTab === 'Обратная связь',
          })}
        >
          <TabBlockFeedback />
        </div>

        <div
          className={classNames(styles.sell__tab_block, {
            [styles.sell__tab_block_active]: activeTab === 'Данные',
          })}
        >
          <TabBlockData />
        </div>
      </div>
    </div>
  );
};

export default SellBlock;
