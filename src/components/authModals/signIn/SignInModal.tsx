import ModalWrapper from '@/components/ui/modalWrapper/wrapper/ModalWrapper';
import { FC, useId, useState } from 'react';
import Input from '@/components/ui/input/Input';
import Image from 'next/image';
import close from '@/assets/close.svg';
import Warning from '@/components/common/warning/Warning';
import isEmpty from '@/lib/isEmpty';
import isCorrectEmail from '@/lib/isCorrentEmail';
import isCorrectPassword from '@/lib/isCorrectPassword';
import { useRegistrationStore } from '@/store/store';
import vector from '../Vector.svg';
import vector2 from '../eyes.svg';
import { Button } from '@/components/ui/Button/Button';
import { signInAction } from '../../../store/actions/action';

type SignInModalProps = {
  isModalOpened: boolean;
  hideModal: any;
  openModalRegistration: any;
  openModalConfirmation: any;
  openModalForgot: any;
};

const SignInModal: FC<SignInModalProps> = ({
  isModalOpened,
  hideModal,
  openModalRegistration,
  openModalConfirmation,
  openModalForgot,
}) => {
  const handleOpenRegistration = () => {
    hideModal();
    openModalRegistration();
  };
  const {
    email,
    password,
    handleChangeField: handleChange,
  } = useRegistrationStore((store) => store);
  // const email = useRegistrationStore((state) => state.email);
  // const password = useRegistrationStore((state) => state.password);
  // const handleChange = useRegistrationStore((state) => state.handleChangeField);

  const [emailValidation, setEmailValidation] = useState<boolean | null>(null);
  const [passwordValidation, setPasswordValidation] = useState<boolean | null>(
    null,
  );
  const id = useId();

  const [passwordType, setPasswordType] = useState<string>('password');

  const [blockMessage, setBlockMessage] = useState<string>('');

  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsError(false);
    setBlockMessage('');
    setEmailValidation(isCorrectEmail(email) && isEmpty(email));
    setPasswordValidation(isCorrectPassword(password) && isEmpty(password));

    if (
      isCorrectEmail(email) &&
      isEmpty(email) &&
      isCorrectPassword(password) &&
      isEmpty(password)
    ) {
      try {
        const response = await signInAction({ email, password });

        if (response.success) {
          openModalConfirmation();
          hideModal();
        } else {
          if (response.message[0].includes('заблокирован')) {
            setBlockMessage(response.message);
            return;
          }
          setPasswordValidation(false);
          setEmailValidation(false);
          setIsError(true);
        }
      } catch (e: any) {
        console.error(e.message);
      }
    }
  };

  const handleFocus = () => {
    setPasswordValidation(true);
    setEmailValidation(true);
    setIsError(false);
  };

  const handleForgot = () => {
    openModalForgot();
    hideModal();
  };

  return (
    <ModalWrapper isModalOpened={isModalOpened} hideModal={hideModal}>
      <>
        <div>
          <div className='flex items-center justify-between	text-[24px] font-bold not-italic leading-normal'>
            <p className='mb-[20px]'>Авторизация</p>

            <Image
              src={close}
              alt={'close'}
              onClick={hideModal}
              className='mt-[-15px] cursor-pointer'
            />
          </div>

          <div className='mb-[20px] text-[14px]'>
            <Warning>
              Для пользования площадкой необходимо зарегистрировать отдельный
              аккаунт на GREEnavi.ru
            </Warning>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='mb-[20px]'>
              <Input
                placeholder={'Электронная почта'}
                value={email}
                onChange={(e: any) => handleChange(e.target.value, 'email')}
                validation={emailValidation}
                onFocus={handleFocus}
              />
            </div>

            <div className='mb-[20px]'>
              <Input
                placeholder={'Пароль'}
                type={passwordType}
                value={password}
                passwordType={passwordType}
                setPasswordType={setPasswordType}
                onChange={(e: any) => handleChange(e.target.value, 'password')}
                validation={passwordValidation}
                icon={passwordType === 'password' ? vector : vector2}
                onFocus={handleFocus}
              />
            </div>

            {isError && (
              <p className='mb-[16px] text-errorTextRed text-center'>
                Неверный логин или пароль
              </p>
            )}
            {blockMessage && (
              <p className='mb-[16px] text-errorTextRed text-center'>
                {blockMessage}
              </p>
            )}

            {emailValidation === false && email && !isError && (
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

            <div className='mb-[20px] flex items-center justify-between'>
              <div className='flex items-center gap-[8px] text-[14px] font-normal not-italic leading-[22px] text-lightgray'>
                <input
                  id={id}
                  name={'remember'}
                  type='checkbox'
                  className='before:content-[""] appearance-none rounded-none outline-none before:box-border before:flex before:h-[20px] before:w-[20px] before:items-center before:justify-center before:rounded-[4px] before:border-[1px] before:border-solid before:border-blue before:bg-darkblue checked:before:bg-blue cursor-pointer'
                />
                <label htmlFor='remember'>Запомнить меня</label>
              </div>

              <div className='flex justify-center'>
                <button
                  type={'button'}
                  className='bg-transparent cursor-pointer rounded-none text-center text-[14px] font-normal not-italic leading-[120%] text-blue outline-none'
                  onClick={handleForgot}
                >
                  Забыли пароль?
                </button>
              </div>
            </div>

            <div className='mb-[20px] px-[40px]'>
              <Button
                title={'Авторизоваться'}
                variant={'blue'}
                type={'submit'}
                disabled={!email || !password}
                className='disabled:bg-blue_dark disabled:text-[#79a0fb]'
              />
            </div>
          </form>

          <div className='flex justify-center'>
            <button
              onClick={handleOpenRegistration}
              className='bg-transparent cursor-pointer rounded-none text-center text-[14px] font-normal not-italic leading-[120%] text-blue outline-none'
            >
              Регистрация
            </button>
          </div>
        </div>
      </>
    </ModalWrapper>
  );
};

export default SignInModal;
