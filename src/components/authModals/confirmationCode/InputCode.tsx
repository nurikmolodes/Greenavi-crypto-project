import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { confirmationCodeAction } from '@/store/actions/action';
import { useAuth, useRegistrationStore } from '@/store/store';
import ReactCodeInput from 'react-code-input';

const props = {
  inputStyle: {
    background: 'rgba(38, 102, 255, 0.15)',
    width: '39px',
    height: '52px',
    outline: 'none',
    border: 'none',
    borderBottom: '1px solid #FFF',
    color: 'white',
    paddingLeft: '10px',
    marginRight: '6px',
    fontSize: '36px',
  },

  inputStyleInvalid: {
    background: 'rgba(211, 65, 118, 0.20)',
    width: '39px',
    height: '52px',
    outline: 'none',
    border: 'none',
    borderBottom: '1px solid #D34176',
    paddingLeft: '10px',
    color: 'white',
    marginRight: '6px',
    fontSize: '36px',
  },
};

type InputCodeProps = {
  hideModal: any;
};

const InputCode: FC<InputCodeProps> = ({ hideModal }) => {
  const { setIsAuth } = useAuth();

  const router = useRouter();

  const email = useRegistrationStore((state) => state.email);
  const password = useRegistrationStore((state) => state.password);
  const pinCode = useRegistrationStore((state) => state.pinCode);

  const handleChangeField = useRegistrationStore(
    (state) => state.handleChangeField,
  );
  const clearPinCode = useRegistrationStore((state) => state.clearPinCode);

  const [isError, setIsError] = useState(false);

  const handlePinChange = async (pinCode: any) => {
    handleChangeField(pinCode, 'pinCode');
    setIsError(false);

    if (pinCode.length === 6) {
      const response = await confirmationCodeAction({
        code: pinCode,
        email,
        password,
      });

      if (response?.access_token) {
        setIsAuth(true);
        localStorage.setItem('token', response.access_token);
        clearPinCode();
        hideModal();
        router.push('confirmed');
      } else {
        setIsError(true);
      }
    }
  };

  return (
    <div>
      <ReactCodeInput
        type='text'
        fields={6}
        isValid={!isError}
        name={'code'}
        inputMode={'numeric'}
        onChange={handlePinChange}
        value={pinCode}
        className='mb-[16px]'
        {...props}
      />
      {isError && <p className='text-errorTextRed text-center'>Неверный код</p>}
    </div>
  );
};

export default InputCode;
