import ModalWrapper from '@/components/ui/modalWrapper/wrapper/ModalWrapper';
import { FC } from 'react';
import close from '@/assets/close.svg';
import img from './Frame 419.svg';
import Image from 'next/image';
import InputCode from '@/components/authModals/confirmationCode/InputCode';
import { useRegistrationStore } from '@/store/store';
import { signInAction } from '../../../store/actions/action';
import { toast } from 'react-toastify';

type ConfirmationCodeProps = {
  isModalOpened: boolean;
  hideModal: any;
};

const ConfirmationCode: FC<ConfirmationCodeProps> = ({
  isModalOpened,
  hideModal,
}) => {
  const clearPinCode = useRegistrationStore((state) => state.clearPinCode);
  const email = useRegistrationStore((state) => state.email);
  const password = useRegistrationStore((state) => state.password);

  const handleClick = async () => {
    const response = await signInAction({ email, password });

    if (response.success) {
      toast.success('Код отправлен на почту');
    } else {
      toast.error('Что-то пошло не так. Код не отправлен');
    }
  };

  return (
    <ModalWrapper
      isModalOpened={isModalOpened}
      hideModal={() => {
        hideModal();
      }}
      noCloseOnClickOutside
    >
      <div>
        <div className='flex items-center justify-between text-[24px] font-bold not-italic leading-normal'>
          <p className='mb-[20px]'>Подтверждение e-mail</p>

          <Image
            src={close}
            alt={'close'}
            onClick={() => {
              clearPinCode();
              hideModal();
            }}
            className='mt-[-15px] cursor-pointer'
          />
        </div>

        <div className='flex justify-center	'>
          <Image src={img} alt={'img'} />
        </div>

        <p className='text-center text-[18px] font-normal not-italic leading-[145%] text-lightgray mb-[20px]'>
          На указанный адрес электронной почты отправлено письмо. Введите
          6-тизначный код из письма для подтверждения вашей почты
        </p>

        <div className='flex justify-center mb-[20px]'>
          <InputCode hideModal={hideModal} />
        </div>

        <div className='text-center'>
          <button
            className='bg-transparent cursor-pointer rounded-none font-sans text-[14px] font-normal not-italic leading-[120%] text-blue	 outline-none	'
            onClick={handleClick}
          >
            Письмо не пришло. Повторить отправку
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ConfirmationCode;
