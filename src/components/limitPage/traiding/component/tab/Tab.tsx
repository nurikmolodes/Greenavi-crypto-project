import classNames from 'classnames';
import { FC } from 'react';

type TabProps = {
  options: any;
  active: any;
  setActive: any;
};

const Tab: FC<TabProps> = ({ options, active, setActive }) => {
  return (
    <>
      {options.map((item: any) => (
        <p
          key={item}
          className={classNames('cursor-pointer relative', {
            'text-white before:content-[""] before:block before:absolute before:h-[1px] before:w-full before:bg-blue before:top-[25px]':
              active === item,
          })}
          onClick={() => setActive(item)}
        >
          {item}
        </p>
      ))}
    </>
  );
};

export default Tab;
