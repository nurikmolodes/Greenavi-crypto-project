import styles from './ContainerTrade.module.scss';
import { FC } from 'react';

type ContainerProps = {
  children: any;
};

const ContainerTrade: FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContainerTrade;
