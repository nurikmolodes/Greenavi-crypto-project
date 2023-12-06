'use client';

import Image from 'next/image';
import logoSrc from '../../../public/assets/icon/logo.svg';
import { NavBar } from '@/components/NavBar/NavBar';
import { Button } from '@/components/ui/Button/Button';
import React, { FC, useEffect, useState } from 'react';
import Menu from '@/components/menu/Menu';
import classNames from 'classnames';
import { CryptoBlock } from '@/components/Crypto/CryptoBlock';
import Link from 'next/link';
import { exitAction } from '@/store/actions/action';
import { useRouter } from 'next/navigation';
import logoName from '../../../public/assets/icon/logo_name.svg';
import { useAuth, useRegistrationStore } from '../../store/store';
import { useModal } from '@/custom-hooks/useModal';
import SignInModal from '@/components/authModals/signIn/SignInModal';
import RegistrationModal from '@/components/authModals/registration/RegistrationModal';
import ConfirmationCode from '@/components/authModals/confirmationCode/ConfirmationCode';
import ForgotModal from '@/components/authModals/forgotPassword/ForgotPassword';
import NewPasswordModal from '@/components/authModals/newPassword/NewPassword';
import Toast from '@/components/ui/toast/Toast';

type HeaderProps = {
  openModalSignI?: Function;
  openModalRegistration?: Function;
  isBig?: boolean;
};

const Header: FC<HeaderProps> = ({ isBig }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isAuth, setIsAuth } = useAuth();

  const router = useRouter();

  const handleExit = async () => {
    const response = await exitAction(localStorage.getItem('token')!);

    if (response?.success) {
      router.replace('/');
      localStorage.removeItem('token');
      setIsAuth(false);
    }
  };

  useEffect(() => {
    setIsAuth(!!localStorage?.getItem('token'));
  }, []);

  const {
    hideModal: hideModalSignIn,
    isModalOpened: isModalOpenedSignIn,
    openModal: openModalSignIn,
  } = useModal();
  const {
    hideModal: hideModalRegistration,
    isModalOpened: isModalOpenedRegistration,
    openModal: openModalRegistration,
  } = useModal();
  const {
    hideModal: hideModalConfirmation,
    isModalOpened: isModalOpenedConfirmation,
    openModal: openModalConfirmation,
  } = useModal();
  const {
    hideModal: hideModalForgot,
    isModalOpened: isModalOpenedForgot,
    openModal: openModalForgot,
  } = useModal();
  const {
    hideModal: hideModalNewPassword,
    isModalOpened: isModalOpenedNewPassword,
    openModal: openModalNewPassword,
  } = useModal();

  const errorText = useRegistrationStore((state) => state.errorText);

  //const handleChangeField = useRegistrationStore(
  //  (store) => store.handleChangeField,
  //);

  return (
    <div className='m-[0_auto_41px_auto] w-full max-w-[1460px] px-[10px] text-[16px] text-white xl:max-w-[1210px] lg:relative lg:m-[0_auto] lg:max-w-[705px] md:max-w-[500px]'>
      <div
        className={classNames(
          'flex items-center justify-between mb-[5px] max-w-[1325px] text-[16px] lg:max-w-[705px] lg:m-[0_auto] md:max-w-[500px] font-flex',
          { 'max-w-[1440px]': isBig },
        )}
      >
        <div className='flex'>
          <Link href={'/'} className='flex items-center'>
            <Image
              src={logoSrc}
              alt='Logo'
              className='h-[auto] max-w-[100px]'
            />
            <Image
              src={logoName}
              alt='Logo name'
              className='h-[auto] max-w-[100px]'
            />
          </Link>
        </div>

        <div
          className={classNames('flex items-center gap-[60px] lg:hidden', {
            'gap-[145px] xl:gap-[70px]': isBig,
          })}
        >
          <NavBar />

          {isAuth && (
            <div className='flex justify-between gap-[20px]'>
              <Button
                // onClick={openModalSignIn}
                onClick={() => router.push('/profile')}
                title={'Профиль'}
                className='w-[112px]'
                textSize={'small'}
                variant={'darkblue_org'}
              />

              <Button
                title={'Выйти'}
                textSize={'small'}
                className='!w-[79px]'
                variant={'darkblue'}
                onClick={handleExit}
              />
            </div>
          )}

          {!isAuth && (
            <div className='flex justify-between gap-[20px]'>
              <Button
                onClick={openModalSignIn}
                title={'Войти'}
                className='!w-[100px]'
                textSize={'small'}
                variant={'darkblue_org'}
              />

              <Button
                title={'Регистрация'}
                textSize={'small'}
                variant={'darkblue_org'}
                className='!w-[100px]'
                onClick={openModalRegistration}
              />
            </div>
          )}
        </div>

        <div className='hidden lg:block'>
          <div
            className={classNames(
              'flex justify-around flex-col items-end w-[38px] h-[34px] p-[3px]',
              {
                'mb-[6px]': isOpen,
              },
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={classNames(
                'h-[2px] w-full bg-blue relative top-0 duration-1000',
                { 'relative top-[15px] rotate-45': isOpen },
              )}
            ></span>
            <span
              className={classNames(
                'h-[2px] w-full bg-blue relative top-0 duration-1000',
                { 'opacity-0': isOpen },
              )}
            ></span>
            <span
              className={classNames(
                'h-[2px] w-full bg-blue relative top-0 duration-1000',
                { 'relative top-[-4px] -rotate-45': isOpen },
              )}
            ></span>
          </div>

          <Menu setBurgerMenuIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </div>

      <div className='w-full overflow-hidden'>
        <div className='marque'>
          <CryptoBlock />
        </div>
      </div>

      <SignInModal
        isModalOpened={isModalOpenedSignIn}
        hideModal={hideModalSignIn}
        openModalRegistration={openModalRegistration}
        openModalConfirmation={openModalConfirmation}
        openModalForgot={openModalForgot}
      />

      <RegistrationModal
        isModalOpened={isModalOpenedRegistration}
        hideModal={hideModalRegistration}
        openModalSignIn={openModalSignIn}
        openModalConfirmation={openModalConfirmation}
      />

      <ConfirmationCode
        isModalOpened={isModalOpenedConfirmation}
        hideModal={hideModalConfirmation}
      />

      <ForgotModal
        isModalOpened={isModalOpenedForgot}
        hideModal={hideModalForgot}
        openModalNewPassword={openModalNewPassword}
      />

      <NewPasswordModal
        isModalOpened={isModalOpenedNewPassword}
        hideModal={hideModalNewPassword}
      />

      {errorText && <Toast>{errorText}</Toast>}
    </div>
  );
};

export default Header;
