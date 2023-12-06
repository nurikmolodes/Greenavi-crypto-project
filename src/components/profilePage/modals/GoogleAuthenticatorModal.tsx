'use client';

import { memo, useEffect, useState } from 'react';
import Image from 'next/image';

import ModalWrapper from '@/components/ui/modalWrapper/wrapper/ModalWrapper';

import Input from '@/components/ui/input/Input';
import { Button } from '@/components/ui/Button/Button';

import closeIcon from '@/assets/svgs/close_icon.svg';
import { enable2faAction, getQrCodeAction } from '@/store/actions/action';
import { useQrCode, useUser } from '@/store/store';

type Props = {
  isModalOpened: boolean;
  hideModal: any;
};

const GoogleAuthenticatorModal = ({ isModalOpened, hideModal }: Props) => {
  const { qrCodeUrl, secret, setQrCodeUrl, setSecret } = useQrCode();

  const { user, setUser } = useUser();

  const [code, setCode] = useState<string>('');

  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    const getCode = async () => {
      const response = await getQrCodeAction(localStorage.getItem('token')!);

      setQrCodeUrl(response?.qrcode);
      setSecret(response?.secret);
    };

    if (!qrCodeUrl && !secret) getCode();
  }, []);

  const handleClick = async () => {
    const response = await enable2faAction(
      {
        secret: secret,
        code: code,
      },
      localStorage.getItem('token')!,
    );

    console.log(response);

    if (response?.success) {
      setUser({ ...user, two_factor: true });
      hideModal();
    } else {
      setError(true);
    }
  };

  return (
    <ModalWrapper
      isModalOpened={isModalOpened}
      hideModal={hideModal}
      // className='!w-[400px]'
    >
      <div className='h-full w-full p-0.5'>
        <div className='flex justify-between'>
          <p className='text-2xl text-white'>Google Authenticator (2FA)</p>
          <Image
            src={closeIcon}
            alt={'close icon'}
            onClick={hideModal}
            className='-mt-1 cursor-pointer'
          />
        </div>

        <p className='my-4 text-lg text-lightgray mb-[16px]'>
          Отсканируйте QR в приложении Google Authenticator и введите код
          авторизации
        </p>

        <div className='my-3 flex items-center justify-center mb-[16px]'>
          {qrCodeUrl && (
            <Image src={qrCodeUrl} alt={'qr code'} width={100} height={100} />
          )}
        </div>

        <div className='w-full'>
          <p className='mb-1.5 mt-2 text-lg text-white'>Код подтверждения</p>
          <Input
            value={code}
            onChange={(e: any) => {
              setCode(e.target.value);
            }}
            placeholder='Введите шестизначный код подтверждения'
            className='mb-[12px]'
            onFocus={() => {
              setError(false);
            }}
          />
          {isError && (
            <p className='mb-[16px] text-errorTextRed text-center text-[16px] mt-[8px]'>
              Неверный код
            </p>
          )}

          <div className='flex items-center justify-center'>
            <Button
              onClick={handleClick}
              title={user?.two_factor ? 'Удалить' : 'Добавить'}
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

export default memo(GoogleAuthenticatorModal);
