import classNames from 'classnames';
import React, { FC } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { useModal } from '@/custom-hooks/useModal';
import SignInModal from '@/components/authModals/signIn/SignInModal';
import RegistrationModal from '@/components/authModals/registration/RegistrationModal';
import Link from 'next/link';
import ConfirmationCode from '@/components/authModals/confirmationCode/ConfirmationCode';
import ForgotModal from '@/components/authModals/forgotPassword/ForgotPassword';
import NewPasswordModal from '@/components/authModals/newPassword/NewPassword';

type MenuProps = {
  isOpen?: boolean;
  setBurgerMenuIsOpen?: Function;
  cls?: string;
};

const Menu: FC<MenuProps> = ({ isOpen }) => {
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

  return (
    <div
      className={classNames(
        'hidden p-[20px] lg:block lg:overflow-hidden lg:absolute lg:bg-backgroundBlue lg:w-[260px] lg:opacity-0 lg:pointer-events-none lg:top-[40px] lg:right-[14px] lg:duration-500 lg:rounded-[10px] lg:z-20',
        {
          'lg:mt-[6px] lg:opacity-100 lg:pointer-events-auto': isOpen,
        },
      )}
    >
      <nav>
        <ul>
          <li className='mb-[12px]'>Купить криптовалюту</li>
          <li className='mb-[12px]'>
            <Link href={'/trade'}>P2P-торговля</Link>
          </li>
          <li className='mb-[12px]'>B2B</li>
          <li className='mb-[12px]'>Процессинг</li>
          <li className='mb-[12px]'>Статьи</li>
          <li className='mb-[12px]'>Поддержка</li>
        </ul>
      </nav>

      <div className='mt-[30px] flex justify-between gap-[15px]'>
        <Button
          onClick={openModalSignIn}
          title={'Войти'}
          textSize={'small'}
          variant={'blue'}
        />

        <Button
          onClick={openModalRegistration}
          title={'Регистрация'}
          textSize={'small'}
          variant={'blue'}
        />
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
    </div>
  );
};

export default Menu;
