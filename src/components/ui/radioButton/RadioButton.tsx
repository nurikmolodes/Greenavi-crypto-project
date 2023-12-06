import styles from './RadioButton.module.scss';
import { FC } from 'react';

type RadioButtonProps = {
  firstName: string;
  secondName: string;
  setChecked: Function;
  checked: string;
  labelcls?: string;
  scnLabelCls?: string;
  name?: string;
};

const RadioButton: FC<RadioButtonProps> = ({
  secondName,
  firstName,
  setChecked,
  checked,
  labelcls,
  scnLabelCls,
  name,
}) => {
  const handleChange = (str: string) => {
    setChecked(str);
  };

  name = name ? name : firstName;

  return (
    <div className={styles.radio}>
      <input
        id={firstName}
        checked={checked === firstName}
        onChange={() => handleChange(firstName)}
        type='radio'
        value={firstName}
        name={name}
      />

      <label htmlFor={firstName} className={`${labelcls}`}>
        {firstName}
      </label>

      <input
        id={secondName}
        checked={checked === secondName}
        onChange={() => handleChange(secondName)}
        type='radio'
        value={secondName}
        name={name}
      />

      <label
        className={`ml-[-11px] ${labelcls} ${scnLabelCls}`}
        htmlFor={secondName}
      >
        {secondName}
      </label>
    </div>
  );
};

export default RadioButton;
