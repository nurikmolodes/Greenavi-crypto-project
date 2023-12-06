import RadioButton from '@/components/ui/radioButton/RadioButton';
import SelectCustom from '@/components/ui/select/SelectCustom';
import InputPrice from '@/components/common/filter/components/InputPrice';
import { FC } from 'react';

import icon1 from './assets/crypt/Group.svg';
import icon2 from './assets/crypt/Group-1.svg';
import icon3 from './assets/crypt/ETH-02 1.svg';
import icon4 from './assets/crypt/pngwing.com - 2023-10-17T153543 1.svg';

type FilterProps = {
  setChecked: Function;
  checked: string;
};

const Filter: FC<FilterProps> = ({ setChecked, checked }) => {
  return (
    <>
      <div className='mb-[20px] flex items-center gap-[41px] xl:mb-[28px] xl:mt-[-15px] xl:gap-[20px] lg:mb-[13px] lg:mt-[15px] lg:justify-between'>
        <div>
          <RadioButton
            firstName={'Покупка'}
            secondName={'Продажа'}
            setChecked={setChecked}
            checked={checked}
          />
        </div>

        <div className='crypt min-w-[131px] lg:hidden'>
          <SelectCustom
            checked={{ icon: icon1, text: 'USDT' }}
            cls='crypt'
            options={[
              { icon: icon1, text: 'USDT' },
              { icon: icon2, text: 'BTC' },
              { icon: icon3, text: 'ETH' },
              { icon: icon4, text: 'USDC' },
            ]}
          />
        </div>

        <div className='lg:hidden'>
          <InputPrice />
        </div>

        <div className='payment w-[271px] lg:hidden'>
          <SelectCustom
            checked={{ text: 'Все способы оплаты' }}
            cls='payment'
            options={[
              { text: 'Все способы оплаты' },
              { text: 'Raifeisenbank' },
              { text: 'Advcash' },
              { text: 'Applepay' },
              { text: 'Bank Transfer' },
            ]}
          />
        </div>

        <div className='update w-[141px]'>
          <SelectCustom
            checked={{ text: 'Обновления' }}
            cls='update'
            arrowIcon={false}
            options={[
              { text: 'Не обновлять' },
              { text: 'Каждые 10 сек' },
              { text: 'Каждые 15 сек' },
              { text: 'Каждые 20 сек' },
            ]}
          />
        </div>
      </div>

      <div className='mb-[12px] hidden items-center justify-between gap-[10px] lg:flex'>
        <div className='crypt w-[131px] md:w-[95px]'>
          <SelectCustom
            checked={{ icon: icon1, text: 'USDT' }}
            cls='crypt'
            options={[
              { icon: icon1, text: 'USDT' },
              { icon: icon2, text: 'BTC' },
              { icon: icon3, text: 'ETH' },
              { icon: icon4, text: 'USDC' },
            ]}
          />
        </div>

        <div className='sm:hidden'>
          <InputPrice />
        </div>

        <div className='payment w-[231px] md:w-[160px]'>
          <SelectCustom
            checked={{ text: 'Все способы оплаты' }}
            cls='payment'
            options={[
              { text: 'Все способы оплаты' },
              { text: 'Raifeisenbank' },
              { text: 'Advcash' },
              { text: 'Applepay' },
              { text: 'Bank Transfer' },
            ]}
          />
        </div>
      </div>

      <div className='mb-[30px]'>
        <div className='hidden sm:block'>
          <InputPrice />
        </div>
      </div>
    </>
  );
};

export default Filter;
