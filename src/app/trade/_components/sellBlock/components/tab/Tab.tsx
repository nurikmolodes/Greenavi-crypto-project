import styles from './Tab.module.scss';
import classNames from 'classnames';
import { FC } from 'react';

type TabProps = {
  activeTab: string;
  setActiveTab: Function;
};

const Tab: FC<TabProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className='flex gap-[40px] text-[12px] lg:gap-[16px] lg:text-[10px] md:justify-between md:gap-[0px]'>
      <p
        className={classNames('cursor-pointer', {
          [styles.tab_active]: activeTab === 'Условия сделки',
        })}
        onClick={() => setActiveTab('Условия сделки')}
      >
        Условия сделки
      </p>

      <p
        className={classNames('cursor-pointer', {
          [styles.tab_active]: activeTab === 'Обратная связь',
        })}
        onClick={() => setActiveTab('Обратная связь')}
      >
        Обратная связь
      </p>

      <p
        className={classNames('cursor-pointer', {
          [styles.tab_active]: activeTab === 'Данные',
        })}
        onClick={() => setActiveTab('Данные')}
      >
        Данные
      </p>
    </div>
  );
};

export default Tab;
