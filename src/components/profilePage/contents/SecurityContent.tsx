import Image from 'next/image';
import BoxWrapper from '../BoxWrapper';
import SecurityCheckBox from '../securityCheckBox/SecurityCheckBox';
import { Button } from '@/components/ui/Button/Button';

import crossIcon from '@/assets/svgs/cross_icon_r.svg';
import greenMarkIcon from '@/assets/svgs/greenmark.svg';
import {
  GoogleAuthenticatorModal,
  ResetPasswordModal,
  TelegramAccountModal,
} from '../modals';
import { useModal } from '@/custom-hooks/useModal';
import { useUser } from '@/store/store';

const securityInfo = [
  {
    id: '2fa',
    name: 'Google Authenticator (2FA)',
    comment: 'Не привязан',
    store: 'two_factor',
    action: (callBack: () => void) => callBack(),
  },
  {
    id: 'email_verify',
    name: 'Подтверждение по e-mail',
    comment: 'p**********@gmail.com',
    store: 'verify_email',
    action: (callBack: () => void) => callBack(),
  },
  {
    id: 'telegram_account',
    name: 'Telegram-аккаунт',
    comment: 'Не привязан',
    store: 'telegram',
    action: (callBack: () => void) => callBack(),
  },
  {
    id: 'reset_pin',
    name: 'Пароль для входа',
    comment: '',
    store: '',
    action: (callBack: () => void) => callBack(),
  },
];

const SecurityContent = () => {
  const { user } = useUser();

  const {
    hideModal: hideModal2FAModal,
    isModalOpened: isModal2FAModal,
    openModal: open2FAModal,
  } = useModal();

  const {
    hideModal: hideModalTelegramAcc,
    isModalOpened: isModalTelegramAcc,
    openModal: openTelegramAcc,
  } = useModal();

  const {
    hideModal: hideModalResetPassword,
    isModalOpened: isModalResetPassword,
    openModal: openResetPassword,
  } = useModal();

  const openModals = (id: string) => {
    switch (id) {
      case '2fa':
        return open2FAModal();
      case 'email_verify':
        return;
      case 'telegram_account':
        return openTelegramAcc();
      case 'reset_pin':
        return openResetPassword();
      default:
        break;
    }
  };

  return (
    <>
      {user && (
        <>
          <div className='flex w-full flex-col gap-y-2.5 pl-2.5'>
            <BoxWrapper className='w-[1095px]'>
              <p className='text-4xl'>Безопасность</p>
              <SecurityCheckBox
                label={'Профиль защищен ненадежно'}
                className='mt-3'
              />
            </BoxWrapper>
            <BoxWrapper className='flex w-[1095px] flex-col gap-y-2.5'>
              <p className='text-3xl'>Настройки расширенной безопасности</p>
              {securityInfo.map((item, index, arr) => (
                <BoxWrapper
                  key={item?.id}
                  className='flex w-full items-center justify-between bg-darkblue'
                >
                  <p className='w-2/3 text-xl text-lightgray'>{item?.name}</p>
                  <div className='flex w-full items-center justify-between'>
                    <div className='flex w-full gap-2'>
                      {index != arr.length - 1 && (
                        <Image
                          src={
                            user[item.store as keyof typeof user]
                              ? greenMarkIcon
                              : crossIcon
                          }
                          alt={'cross icon'}
                          height={15}
                          width={15}
                        />
                      )}
                      <p className='w-full text-xl text-lightgray'>
                        {(item.id === '2fa' ||
                          item.id === 'telegram_account') &&
                        user[item.store as keyof typeof user]
                          ? `Привязан ${
                              item.id === 'telegram_account'
                                ? `(${user.telegram})`
                                : ''
                            }`
                          : item?.comment}
                      </p>
                    </div>
                    {user[item.store as keyof typeof user] ? (
                      <Button
                        onClick={() => openModals(item?.id)}
                        title={
                          item.id === 'reset_pin' ||
                          item.id === 'telegram_account'
                            ? 'Изменить'
                            : item.id === 'email_verify'
                              ? 'Подтверждено'
                              : 'Добавлен'
                        }
                        className='!w-[140px] disabled:bg-blue_dark disabled:text-[#79a0fb]'
                        textSize={'medium'}
                        disabled={
                          item.id === '2fa' || item.id === 'verify_email'
                        }
                        variant={'blue'}
                      />
                    ) : (
                      <Button
                        onClick={() => openModals(item?.id)}
                        title={
                          item.id === 'reset_pin'
                            ? 'Изменить'
                            : item.id === 'email_verify'
                              ? 'Подтвердить'
                              : 'Добавить'
                        }
                        className={`!w-[140px]`}
                        textSize={'medium'}
                        variant={'blue'}
                      />
                    )}
                  </div>
                </BoxWrapper>
              ))}
            </BoxWrapper>
          </div>

          <GoogleAuthenticatorModal
            isModalOpened={isModal2FAModal}
            hideModal={hideModal2FAModal}
          />

          <TelegramAccountModal
            isModalOpened={isModalTelegramAcc}
            hideModal={hideModalTelegramAcc}
          />

          <ResetPasswordModal
            isModalOpened={isModalResetPassword}
            hideModal={hideModalResetPassword}
          />
        </>
      )}
    </>
  );
};

export default SecurityContent;
