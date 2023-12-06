import styles from './Company.module.scss';
import { FC } from 'react';

type CompanyProps = {
  children: any;
};

const Company: FC<CompanyProps> = ({ children }) => {
  return <div className={styles.company}>{children}</div>;
};

export default Company;
