'use client';

import { memo, useState } from 'react';
import Image from 'next/image';

import ModalWrapper from '@/components/ui/modalWrapper/wrapper/ModalWrapper';

import Input from '@/components/ui/input/Input';
import { Button } from '@/components/ui/Button/Button';

import closeIcon from '@/assets/svgs/close_icon.svg';
import { addTelegramAction } from '@/store/actions/action';
import { useUser } from '@/store/store';
import { toast } from 'react-toastify';

type Props = {
  isModalOpened: boolean;
  hideModal: any;
};

const TelegramAccountModal = ({ isModalOpened, hideModal }: Props) => {
  const [username, setUsername] = useState<string>('');

  const { user, setUser } = useUser();

  const handleClick = async () => {
    const response = await addTelegramAction(
      { telegram: username },
      localStorage.getItem('token')!,
    );

    if (response?.telegram) {
      setUser({ ...user, telegram: username });
      toast.success('Telegram добавлен');
      hideModal();
      setUsername('');
    }
  };

  return (
    <ModalWrapper isModalOpened={isModalOpened} hideModal={hideModal}>
      <div className='h-full w-full p-0.5'>
        <div className='flex justify-between'>
          <p className='text-2xl text-white'>Telegram-аккаунт</p>
          <Image
            src={closeIcon}
            alt={'close icon'}
            onClick={hideModal}
            className='-mt-1 cursor-pointer'
          />
        </div>

        <div className='w-full'>
          <p className='mb-1 mt-2 text-lg text-white'>Telegram</p>
          <Input
            placeholder='Введите имя вашего telegram-аккаунта'
            className='mb-[12px]'
            value={username}
            onChange={(e: any) => {
              setUsername(e.target.value);
            }}
            maxLength={20}
          />
          <p className='text-xs text-lightgray'>
            Введите никнейм в нижнем регистре и без знака «@»
          </p>

          <div className='mt-5 flex items-center justify-center'>
            <Button
              onClick={handleClick}
              title={user?.telegram ? 'Изменить Telegram' : 'Добавить Telegram'}
              className='mt-4 !max-w-[240px]'
              textSize={'medium'}
              variant={'blue'}
            />
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default memo(TelegramAccountModal);
