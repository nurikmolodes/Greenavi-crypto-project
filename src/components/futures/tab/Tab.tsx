import classNames from 'classnames';
import { FC } from 'react';

type TabProps = {
  active: string;
  setActive: any;
};

const Tab: FC<TabProps> = ({ active, setActive }) => {
  return (
    <div className='mt-[20px] flex gap-[20px] text-[16px]'>
      <p
        className={classNames(
          'border-solid border-blue border-[1px] cursor-pointer rounded-[8px] flex items-center justify-center w-[165px] h-[39px]',
          { 'bg-blue': active === 'Позиции' },
        )}
        onClick={() => setActive('Позиции')}
      >
        Позиции
      </p>
      <p
        className={classNames(
          'border-solid border-blue border-[1px] cursor-pointer rounded-[8px] flex items-center justify-center w-[165px] h-[39px]',
          { 'bg-blue': active === 'Ордера' },
        )}
        onClick={() => setActive('Ордера')}
      >
        Ордера
      </p>
      <p
        className={classNames(
          'border-solid border-blue border-[1px] cursor-pointer rounded-[8px] flex items-center justify-center w-[165px] h-[39px]',
          { 'bg-blue': active === 'Инструменты' },
        )}
        onClick={() => setActive('Инструменты')}
      >
        Инструменты
      </p>
    </div>
  );
};

export default Tab;
