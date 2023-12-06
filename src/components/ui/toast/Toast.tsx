import { FC, useEffect, useRef } from 'react';
import styles from './Toast.module.scss';
import { useRegistrationStore } from '@/store/store';

type ToastProps = {
  children: any;
};

const Toast: FC<ToastProps> = ({ children }) => {
  const ref = useRef<any>();

  const setErrorText = useRegistrationStore((state) => state.setErrorText);

  useEffect(() => {
    setTimeout(() => {
      setErrorText(false);
    }, 3000);
  }, []);

  return (
    <div ref={ref} className={styles.toast}>
      {children}
    </div>
  );
};

export default Toast;
