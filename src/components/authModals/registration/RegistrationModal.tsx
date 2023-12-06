import ModalWrapper from '@/components/ui/modalWrapper/wrapper/ModalWrapper';
import { FC, useState } from 'react';
import Input from '@/components/ui/input/Input';
import vector2 from '../eyes.svg';
import close from '@/assets/close.svg';
import Image from 'next/image';
import generatePassword from '../helper/generatePassword';
import { registrationAction } from '@/store/actions/action';
import isEmpty from '@/lib/isEmpty';
import isCorrectEmail from '@/lib/isCorrentEmail';
import isCorrectPassword from '@/lib/isCorrectPassword';
import { useRegistrationStore } from '@/store/store';
import vector from '@/components/authModals/Vector.svg';
import { Button } from '@/components/ui/Button/Button';

type RegistrationModalProps = {
  isModalOpened: boolean;
  hideModal: any;
  openModalSignIn: any;
  openModalConfirmation: any;
};

const RegistrationModal: FC<RegistrationModalProps> = ({
  isModalOpened,
  hideModal,
  openModalSignIn,
  openModalConfirmation,
}) => {
  const {
    login,
    email,
    password,
    handleChangeField: handleChange,
  } = useRegistrationStore((state) => state);

  const [loginValidation, setLoginValidation] = useState<boolean | null>(null);
  const [emailValidation, setEmailValidation] = useState<boolean | null>(null);
  const [passwordValidation, setPasswordValidation] = useState<boolean | null>(
    null,
  );

  const [error, setError] = useState<string>('');

  const [passwordType, setPasswordType] = useState('password');

  const handleClick = () => {
    handleChange(generatePassword(), 'password');
  };

  const handleSubmit = async () => {
    setError('');
    setLoginValidation(isEmpty(login));
    setEmailValidation(isCorrectEmail(email) && isEmpty(email));
    setPasswordValidation(isCorrectPassword(password) && isEmpty(password));

    if (
      isEmpty(email) &&
      isCorrectPassword(password) &&
      isEmpty(password) &&
      isCorrectEmail(email) &&
      isEmpty(login)
    ) {
      const response = await registrationAction({
        login,
        email,
        password,
      });

      if (response?.success) {
        openModalConfirmation();
        hideModal();
      } else {
        if (response.message[0].includes('Логин')) {
          setError('Логин занят');
        }
        if (response.message[0].includes('почта')) {
          setError('Почта занята');
        }
      }
    }
  };

  const openSignInModal = () => {
    hideModal();
    openModalSignIn();
  };

  return (
    <ModalWrapper isModalOpened={isModalOpened} hideModal={hideModal}>
      <>
        <div>
          <div className='flex items-center justify-between text-[24px] font-bold not-italic leading-normal'>
            <p className='mb-[20px]'>Регистрация</p>

            <Image
              src={close}
              alt={'close'}
              onClick={hideModal}
              className='mt-[-15px] cursor-pointer'
            />
          </div>

          <form>
            <div className='mb-[20px]'>
              <Input
                name={'login'}
                placeholder={'Логин'}
                onFocus={() => {
                  setError('');
                }}
                value={login}
                onChange={(e: any) => handleChange(e.target.value, 'login')}
                validation={loginValidation}
                isError={error.includes('Логин')}
                maxLength={20}
              />
            </div>

            <div className='mb-[20px]'>
              <Input
                name={'email'}
                placeholder={'Электронная почта'}
                onFocus={() => {
                  setError('');
                  setEmailValidation(true);
                  setPasswordValidation(true);
                }}
                value={email}
                onChange={(e: any) => handleChange(e.target.value, 'email')}
                validation={emailValidation}
                isError={error.includes('Почта')}
                maxLength={32}
              />
            </div>

            <div className='mb-[12px]'>
              <Input
                name={'password'}
                placeholder={'Пароль'}
                type={passwordType}
                value={password}
                passwordType={passwordType}
                onChange={(e: any) => handleChange(e.target.value, 'password')}
                onFocus={() => {
                  if (!passwordValidation) setPasswordValidation(true);
                  setEmailValidation(true);
                }}
                validation={passwordValidation}
                setPasswordType={setPasswordType}
                icon={passwordType === 'password' ? vector : vector2}
                maxLength={20}
              />
            </div>

            {error && (
              <p className='text-center text-errorTextRed my-[20px]'>{error}</p>
            )}
            {!emailValidation && email && login && (
              <p className='text-center text-errorTextRed my-[20px]'>
                Введите корректную почту{' '}
                {!passwordValidation && 'и пароль не меньше 6-ти знаков'}
              </p>
            )}
            {passwordValidation === false && emailValidation && (
              <p className='text-center text-errorTextRed my-[20px]'>
                Введите пароль не меньше 6-ти знаков
              </p>
            )}

            <div>
              <button
                type={'button'}
                onClick={handleClick}
                className='bg-transparent text-inherit mb-[20px] cursor-pointer rounded-none p-0 font-sans text-[14px] font-normal not-italic leading-[120%] outline-none'
              >
                Сгенерировать надежный пароль
              </button>
            </div>

            <div className='mb-[20px] px-[40px]'>
              <Button
                title={'Зарегистрироваться'}
                variant={'blue'}
                onClick={handleSubmit}
                disabled={!login || !email || !password}
                className='disabled:bg-blue_dark disabled:text-[#79a0fb]'
              />
            </div>
          </form>

          <div className='flex justify-center'>
            <button
              onClick={openSignInModal}
              className='bg-transparent cursor-pointer rounded-none text-center text-[14px] font-normal not-italic leading-[120%] text-blue	outline-none '
            >
              Авторизация
            </button>
          </div>
        </div>
      </>
    </ModalWrapper>
  );
};

export default RegistrationModal;
