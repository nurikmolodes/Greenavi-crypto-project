import styles from './Input.module.scss';
import { FC } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

type InputProps = {
  placeholder?: string;
  type?: string;
  name?: string;
  ref?: any;
  value?: string;
  onChange?: any;
  onFocus?: any;
  validation?: null | boolean;
  setPasswordType?: any;
  passwordType?: any;
  icon?: any;
  className?: string;
  maxLength?: number;
  isError?: boolean;
  marginTopLess?: boolean;
};

const Input: FC<InputProps> = ({
  placeholder,
  type = 'text',
  name,
  value,
  onChange,
  onFocus,
  validation,
  setPasswordType,
  passwordType,
  icon,
  className,
  maxLength,
  isError,
  marginTopLess,
}) => {
  return (
    <div className={styles.input__wrapper}>
      <input
        className={classNames(
          styles.input,
          {
            [styles.input__validation]: validation === false,
          },
          className,
        )}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        onFocus={onFocus}
        maxLength={maxLength ? maxLength : undefined}
        style={isError ? { borderColor: 'red' } : {}}
      />

      {icon && (
        <Image
          className={`cursor-pointer ${
            passwordType === 'text' ? 'mt-[-6px]' : 'mt-[-2px]'
          }`}
          onClick={() =>
            setPasswordType(passwordType === 'text' ? 'password' : 'text')
          }
          src={icon}
          alt={'icon'}
          style={{
            marginTop: marginTopLess
              ? ''
              : passwordType === 'text'
                ? '-3px'
                : '-1px',
          }}
        />
      )}
    </div>
  );
};
export default Input;
