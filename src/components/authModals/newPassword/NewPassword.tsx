import { FC, useState } from 'react';
import Image from 'next/image';
import ModalWrapper from '@/components/ui/modalWrapper/wrapper/ModalWrapper';
import Input from '@/components/ui/input/Input';
import vector2 from '../eyes.svg';
import close from '@/assets/close.svg';
import generatePassword from '../helper/generatePassword';
import vector from '@/components/authModals/Vector.svg';
import { Button } from '@/components/ui/Button/Button';
import { recoverPasswordAction } from '../../../store/actions/action';
import { useAccessToken } from '@/store/store';
import { toast } from 'react-toastify';

type NewPasswordModalProps = {
  isModalOpened: boolean;
  hideModal: any;
};

const NewPasswordModal: FC<NewPasswordModalProps> = ({
  isModalOpened,
  hideModal,
}) => {
  const { token } = useAccessToken();

  const [passwordType, setPasswordType] = useState('password');
  const [passwordType2, setPasswordType2] = useState('password');
  const [codeType, setCodeType] = useState('text');

  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const [passwordValidation] = useState<boolean | null>(null);
  const [passwordValidation2] = useState<boolean | null>(null);

  const [isEqual, setIsEqual] = useState(true);

  const [isCodeCorrect, setIsCodeCorrect] = useState(true);

  const handleClick = () => {
    const generatedPassword = generatePassword();

    setPassword(generatedPassword);
    setPassword2(generatedPassword);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!password || !password2 || password !== password2) {
      setIsEqual(false);
      return;
    }

    if (code?.length! < 6) {
      setIsCodeCorrect(false);
    }

    const response = await recoverPasswordAction({ password, code, token });

    if (response?.success) {
      toast.success('Пароль изменен');
      hideModal();
      setPassword('');
      setPassword2('');
      setCode('');
    } else {
      setIsCodeCorrect(false);
    }
  };

  return (
    <ModalWrapper
      noCloseOnClickOutside
      isModalOpened={isModalOpened}
      hideModal={hideModal}
    >
      <>
        <div className='flex items-center justify-between text-[24px] font-bold not-italic leading-normal'>
          <p className='mb-[20px]'>Придумайте новый пароль</p>

          <Image
            src={close}
            alt={'close'}
            onClick={hideModal}
            className='mt-[-15px] cursor-pointer'
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-[15px]'>
            <div>
              <Input
                placeholder={'Код подтверждения*'}
                type={codeType}
                value={code}
                passwordType={codeType}
                setPasswordType={setCodeType}
                onFocus={() => {
                  setIsCodeCorrect(true);
                }}
                onChange={(e: any) => setCode(e.target.value)}
                validation={null}
                icon={codeType === 'text' ? vector : vector2}
                marginTopLess={true}
              />
            </div>
            <div>
              <Input
                placeholder={'Новый пароль*'}
                type={passwordType}
                value={password}
                passwordType={passwordType}
                setPasswordType={setPasswordType}
                onFocus={() => {
                  setIsEqual(true);
                }}
                onChange={(e: any) => setPassword(e.target.value)}
                validation={passwordValidation}
                icon={passwordType === 'password' ? vector : vector2}
                marginTopLess={true}
              />
            </div>

            <div>
              <Input
                className='mb-[12px]'
                placeholder={'Повторите  пароль*'}
                type={passwordType2}
                value={password2}
                passwordType={passwordType2}
                onFocus={() => {
                  setIsEqual(true);
                }}
                setPasswordType={setPasswordType2}
                onChange={(e: any) => setPassword2(e.target.value)}
                validation={passwordValidation2}
                icon={passwordType2 === 'password' ? vector : vector2}
                marginTopLess={true}
              />
            </div>

            {!isEqual && (
              <p className='text-center text-errorTextRed mb-[12px] mt-[-8px]'>
                Пароли не равны
              </p>
            )}

            {!isCodeCorrect && (
              <p className='text-center text-errorTextRed mb-[12px] mt-[-8px]'>
                Неверный код
              </p>
            )}
          </div>

          <div>
            <button
              type={'button'}
              onClick={handleClick}
              className='bg-transparent text-inherit mb-[20px] cursor-pointer rounded-none p-0 font-sans text-[14px] font-normal not-italic leading-[120%] outline-none'
            >
              Сгенерировать надежный пароль
            </button>
          </div>

          <div className='px-[40px]'>
            <Button type={'submit'} title={'Подтвердить'} variant={'blue'} />
          </div>
        </form>
      </>
    </ModalWrapper>
  );
};

export default NewPasswordModal;
