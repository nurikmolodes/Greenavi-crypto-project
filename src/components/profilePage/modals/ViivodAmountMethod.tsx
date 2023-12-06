import { memo } from 'react';
import Image from 'next/image';

import ModalWrapper from '@/components/ui/modalWrapper/wrapper/ModalWrapper';

import SelectCustom from '@/components/ui/select/SelectCustom';
import { Button } from '@/components/ui/Button/Button';
import Input from '@/components/ui/input/Input';

import closeIcon from '@/assets/svgs/close_icon.svg';

type ViivodAmountMethodProps = {
  isModalOpened: boolean;
  hideModal: any;
};

const ViivodAmountMethod = ({
  isModalOpened,
  hideModal,
}: ViivodAmountMethodProps) => {
  return (
    <ModalWrapper
      isModalOpened={isModalOpened}
      hideModal={hideModal}
      className='!w-[588px]'
    >
      <div className='h-full w-full p-2'>
        <div className='flex justify-between text-center'>
          <p className='text-2xl text-white'>Вывод</p>
          <Image
            src={closeIcon}
            alt={'close icon'}
            onClick={hideModal}
            className='cursor-pointer'
          />
        </div>
        <div className='my-4 w-full rounded border border-solid border-blue p-1.5 text-center'>
          <p className='text-xs'>
            Вывод криптовалюты USDTTRC осуществляется только в сети TRON (TRC20)
          </p>
        </div>
        <div className='w-full'>
          <p className='mb-1.5 text-lg text-white'>Валюта</p>
          <SelectCustom
            checked={{ text: ' ' }}
            cls='crypt'
            options={[
              { text: 'bank 5' },
              { text: 'bank 6' },
              { text: 'bank 7' },
              { text: 'bank 8' },
            ]}
          />
          <p className='mb-0.5 mt-2 text-lg text-white'>Адрес кошелька</p>
          <Input />
          <p className='mb-0.5 mt-2 text-lg text-white'>Сумма</p>
          <Input />
          <p className='text-sm'>
            Текущий баланс:<span className='text-blue'>≈50.00 USDT</span>
          </p>
          <div className='flex items-center justify-center'>
            <Button
              onClick={() => console.log('Ввести криптовалюту в кошелек')}
              title={'Ввести криптовалюту в кошелек'}
              className='mt-4 !max-w-[354px]'
              textSize={'medium'}
              variant={'blue'}
            />
          </div>
        </div>
        <div className='mt-4 flex justify-between'>
          <div>
            <p className='text-lg'>Сумма к получению</p>
            <p className='text-3xl  text-blue'>00.00 USDT</p>
          </div>
          <div>
            <p className='text-lg'>Сумма с учетом комисиии </p>
            <p className='text-lg  text-blue'>00.00 USDT</p>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default memo(ViivodAmountMethod);
