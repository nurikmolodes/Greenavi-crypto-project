import { FC, memo } from 'react';

import styles from './ContainerProfile.module.scss';

type ContainerProfileProps = {
  children: any;
};

const ContainerProfile: FC<ContainerProfileProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default memo(ContainerProfile);
