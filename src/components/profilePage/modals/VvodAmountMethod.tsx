import { memo } from 'react';
import Image from 'next/image';

import ModalWrapper from '@/components/ui/modalWrapper/wrapper/ModalWrapper';

import SelectCustom from '@/components/ui/select/SelectCustom';
import Input from '@/components/ui/input/Input';
import { Button } from '@/components/ui/Button/Button';

import qrCodeIcon from '@/assets/svgs/qr_code_icon.svg';
import closeIcon from '@/assets/svgs/close_icon.svg';

type VvodAmountMethodProps = {
  isModalOpened: boolean;
  hideModal: any;
};

const VvodAmountMethod = ({
  isModalOpened,
  hideModal,
}: VvodAmountMethodProps) => {
  return (
    <ModalWrapper
      isModalOpened={isModalOpened}
      hideModal={hideModal}
      className='!w-[588px]'
    >
      <div className='h-full w-full p-2'>
        <div className='flex justify-between text-center'>
          <p className='text-2xl text-white'>Ввод</p>
          <Image
            src={closeIcon}
            alt={'close icon'}
            onClick={hideModal}
            className='cursor-pointer'
          />
        </div>
        <div className='my-4 w-full rounded border border-warning bg-warningBackground text-center'>
          <p className='text-lg font-semibold text-warning'>
            Минимальная сумма ввода криптовалюты:
          </p>
          <p className='text-lg font-semibold text-warning'>10 USDT</p>
        </div>
        <div className='my-4 w-full rounded border border-solid border-blue p-1.5 text-center'>
          <p className='text-xs'>
            Вывод криптовалюты USDTTRC осуществляется только в сети TRON (TRC20)
          </p>
        </div>
        <div className='w-full'>
          <p className='mb-1.5 text-lg text-white'>Выберите валюту</p>
          <SelectCustom
            checked={{ text: ' ' }}
            cls='crypt'
            options={[
              { text: 'bank 9' },
              { text: 'bank 10' },
              { text: 'bank 11' },
              { text: 'bank 12' },
            ]}
          />
          <div className='my-3 flex items-center justify-center'>
            <Image src={qrCodeIcon} alt={'qr code'} />
          </div>
          <Input />
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
      </div>
    </ModalWrapper>
  );
};

export default memo(VvodAmountMethod);
