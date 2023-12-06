import ModalWrapper from '@/components/ui/modalWrapper/wrapper/ModalWrapper';
import { FC, useState } from 'react';
import Input from '@/components/ui/input/Input';
import close from '@/assets/close.svg';
import Image from 'next/image';
import isEmpty from '@/lib/isEmpty';
import isCorrectEmail from '@/lib/isCorrentEmail';
import { Button } from '@/components/ui/Button/Button';
import { getRecoverPasswordTokenAction } from '../../../store/actions/action';
import { useAccessToken } from '@/store/store';

type ForgotModalProps = {
  isModalOpened: boolean;
  hideModal: any;
  openModalNewPassword: any;
};

const ForgotModal: FC<ForgotModalProps> = ({
  isModalOpened,
  hideModal,
  openModalNewPassword,
}) => {
  const [email, handleChange] = useState<string>();

  const { setToken } = useAccessToken();

  const [emailValidation, setEmailValidation] = useState<boolean | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setEmailValidation(isCorrectEmail(email!) && isEmpty(email!));

    if (isCorrectEmail(email!) && isEmpty(email!)) {
      const response = await getRecoverPasswordTokenAction({ email });

      setToken(response.token);

      openModalNewPassword();
      hideModal();
    }
  };

  return (
    <ModalWrapper isModalOpened={isModalOpened} hideModal={hideModal}>
      <>
        <div className='flex items-center justify-between text-[24px] font-bold not-italic leading-normal'>
          <p className='mb-[20px]'>Сброс пароля</p>

          <Image
            src={close}
            alt={'close'}
            onClick={hideModal}
            className='mt-[-15px] cursor-pointer'
          />
        </div>

        <div className='text-[14px] leading-[120%]'>
          Введите Ваш email либо номер телефона, используемые для входа. <br />
          Мы вышлем письмо для сброса пароля.
        </div>

        <form onSubmit={handleSubmit}>
          <div className='mt-[15px]'>
            <Input
              placeholder={'Электронная почта или телефон'}
              value={email}
              onChange={(e: any) => handleChange(e.target.value)}
              validation={emailValidation}
            />
          </div>

          <div className='mt-[25px] px-[40px]'>
            <Button
              type={'submit'}
              title={'Сбросить пароль'}
              variant={'blue'}
            />
          </div>
        </form>
      </>
    </ModalWrapper>
  );
};

export default ForgotModal;
