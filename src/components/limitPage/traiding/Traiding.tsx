import RadioButton from '@/components/ui/radioButton/RadioButton';
import { useState } from 'react';
import Tab from '@/components/limitPage/traiding/component/tab/Tab';
import Input from '@/components/limitPage/traiding/component/input/Input';
import { Button } from '@/components/ui/Button/Button';
import { Progress } from '@/components/progress';

const Traiding = () => {
  const [checked, setChecked] = useState('Купить');
  const [active, setActive] = useState('Спот');
  const [active1, setActive1] = useState('Рыночный');

  return (
    <div className='px-[19px] py-[24px]'>
      <div className='flex h-[37px] items-center justify-center rounded-[8px] border-[1px] border-blue bg-darkblue text-[16px]'>
        Трейдинг
      </div>

      <div className='mb-[27px] mt-[16px] flex items-center gap-[14px] text-[16px] text-lightgray'>
        <Tab
          active={active}
          setActive={setActive}
          options={['Спот', 'Маржа 10х']}
        />
      </div>

      <RadioButton
        firstName={'Купить'}
        secondName={'Продать'}
        setChecked={setChecked}
        checked={checked}
      />

      <div className='my-[20px] flex items-center gap-[14px] text-[16px] text-lightgray'>
        <Tab
          active={active1}
          setActive={setActive1}
          options={['Рыночный', 'Лимитный', 'ОСО']}
        />
      </div>

      {active1 === 'Рыночный' && (
        <div>
          <div className='mb-[18px] flex items-center justify-between'>
            <p className='text-[12px] text-lightgray'>Доступный баланс</p>

            <p className='text-[16px]'>-- USDT</p>
          </div>

          <div>
            <Progress />
          </div>

          <div className='mt-[20px]'>
            <Input label={'Стоимость ордера'} place={'USDT'} />
          </div>

          <div className='mt-[30px] flex items-center justify-between'>
            <p className='text-[12px] text-lightgray'>
              Приблизительная комиссия
            </p>

            <p className='text-[16px]'>-- USDT</p>
          </div>

          <Button title={'Купить BTC'} variant={'blue'} />
        </div>
      )}

      {active1 === 'Лимитный' && (
        <div>
          <div className='mb-[10px] flex items-center justify-between'>
            <p className='text-[12px] text-lightgray'>Доступный баланс</p>

            <p className='text-[16px]'>-- USDT</p>
          </div>

          <div>
            <Input label={'Цена ордера'} place={'USDT'} />
          </div>

          <div className='mt-[15px]'>
            <Input label={'Кол-во'} place={'BTC'} />
          </div>

          <div className='mb-[10px] mt-[5px] flex items-center justify-between'>
            <p className='text-[12px] text-lightgray'>Доступно</p>

            <p className='text-[16px]'>-- USDT</p>
          </div>

          <div>
            <Progress />
          </div>

          <div>
            <Input label={'Стоимость ордера'} place={'USDT'} />
          </div>

          <div className='mt-[30px] flex items-center justify-between'>
            <p className='text-[12px] text-lightgray'>
              Приблизительная комиссия
            </p>

            <p className='text-[16px]'>-- USDT</p>
          </div>

          <Button title={'Купить BTC'} variant={'blue'} />
        </div>
      )}
    </div>
  );
};

export default Traiding;
