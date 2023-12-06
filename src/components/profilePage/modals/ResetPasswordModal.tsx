import { memo, useState } from 'react';
import Image from 'next/image';

import ModalWrapper from '@/components/ui/modalWrapper/wrapper/ModalWrapper';

import Input from '@/components/ui/input/Input';
import { Button } from '@/components/ui/Button/Button';

import closeIcon from '@/assets/svgs/close_icon.svg';
import vector2 from '@/components/authModals/eyes.svg';
import vector from '@/components/authModals/Vector.svg';
import { changePasswordAction } from '@/store/actions/action';
import { toast } from 'react-toastify';

type Props = {
  isModalOpened: boolean;
  hideModal: any;
};

const ResetPasswordModal = ({ isModalOpened, hideModal }: Props) => {
  const [passwordType, setPasswordType] = useState<string>('password');

  const [password, setPassword] = useState<string>('');
  const [secondPassword, setSecondPassword] = useState<string>('');
  const [oldPassword, setOldPassword] = useState<string>('');

  const [isEqual, setIsEqual] = useState<boolean>(true);

  const [isError, setIsError] = useState<boolean>(false);

  const handleClick = async () => {
    if (!password || !secondPassword || password !== secondPassword) {
      setIsEqual(false);
      return;
    }

    const response = await changePasswordAction(
      {
        old_password: oldPassword,
        password,
      },
      localStorage.getItem('token')!,
    );

    if (response?.success) {
      toast.success('Пароль изменен');
      hideModal();
      setPassword('');
      setSecondPassword('');
      setOldPassword('');
    } else {
      setIsError(true);
    }
  };

  return (
    <ModalWrapper isModalOpened={isModalOpened} hideModal={hideModal}>
      <div className='h-full w-full p-0.5'>
        <div className='flex justify-between'>
          <p className='text-2xl text-white'>Изменение пароля</p>
          <Image
            src={closeIcon}
            alt={'close icon'}
            onClick={hideModal}
            className='-mt-1 cursor-pointer'
          />
        </div>

        <div className='w-full'>
          <p className='mb-1 mt-3 text-lg text-white'>Текущий пароль</p>
          <Input
            placeholder={'Текущий пароль'}
            type={passwordType}
            value={oldPassword}
            onChange={(e: any) => {
              setOldPassword(e.target.value);
            }}
            onFocus={() => {
              setIsError(false);
            }}
            passwordType={passwordType}
            setPasswordType={setPasswordType}
            icon={passwordType === 'password' ? vector : vector2}
            maxLength={20}
          />
          <p className='mb-1 mt-3 text-lg text-white'>Новый пароль</p>
          <Input
            placeholder={'Придумайте новый пароль'}
            type={passwordType}
            passwordType={passwordType}
            value={password}
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
            onFocus={() => {
              setIsEqual(true);
            }}
            setPasswordType={setPasswordType}
            icon={passwordType === 'password' ? vector : vector2}
            maxLength={20}
          />
          <p className='mb-1 mt-3 text-lg text-white'>Подтвердить пароль</p>
          <Input
            placeholder={'Введите новый пароль повторно'}
            type={passwordType}
            passwordType={passwordType}
            value={secondPassword}
            onChange={(e: any) => {
              setSecondPassword(e.target.value);
            }}
            onFocus={() => {
              setIsEqual(true);
            }}
            setPasswordType={setPasswordType}
            icon={passwordType === 'password' ? vector : vector2}
            maxLength={20}
          />
          {!isEqual && (
            <p className='text-errorTextRed text-center text-[16px] mt-[24px]'>
              Новые пароли не равны
            </p>
          )}
          {isError && (
            <p className='text-errorTextRed text-center text-[16px] mt-[24px]'>
              Неверный текущий пароль
            </p>
          )}
          <div className='flex items-center justify-center my-[8px]'>
            <Button
              onClick={handleClick}
              title={'Изменить пароль'}
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

export default memo(ResetPasswordModal);
