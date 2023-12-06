import { memo } from 'react';
import Image from 'next/image';

import ModalWrapper from '@/components/ui/modalWrapper/wrapper/ModalWrapper';

import SelectCustom from '@/components/ui/select/SelectCustom';
import Input from '@/components/ui/input/Input';

import closeIcon from '@/assets/svgs/close_icon.svg';

type AddPaymentMethodProps = {
  isModalOpened: boolean;
  hideModal: any;
};

const AddPaymentMethod = ({
  isModalOpened,
  hideModal,
}: AddPaymentMethodProps) => {
  return (
    <ModalWrapper isModalOpened={isModalOpened} hideModal={hideModal}>
      <div className='h-full w-full p-2'>
        <div className='flex justify-between text-center'>
          <p className='text-2xl text-white'>Новый способ оплаты</p>
          <Image
            src={closeIcon}
            alt={'close icon'}
            onClick={hideModal}
            className='cursor-pointer'
          />
        </div>
        <div className='w-full'>
          <p className='mb-1.5 text-lg text-white'>Банк</p>
          <SelectCustom
            checked={{ text: ' ' }}
            cls='crypt'
            options={[
              { text: 'bank 1' },
              { text: 'bank 2' },
              { text: 'bank 3' },
              { text: 'bank 4' },
            ]}
          />
          <p className='mb-0.5 mt-2 text-lg text-white'>№ карты</p>
          <Input />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default memo(AddPaymentMethod);
