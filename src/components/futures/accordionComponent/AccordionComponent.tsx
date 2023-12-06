import classNames from 'classnames';
import { memo, useEffect, useState } from 'react';

interface Props {
  HeaderComponent: any;
  BodyComponent: any;
  data: any;
  setPositionBtn?: any;
}

const AccordionComponent = ({
  HeaderComponent,
  BodyComponent,
  data,
  setPositionBtn,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [navOpen, setNavOpen] = useState<boolean>();

  const handleOpen = (evn: any) => {
    if (evn?.target?.className?.includes('accordion-header-button')) {
      evn.preventDefault();
    } else {
      setOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    if (open) {
      // Set a timeout to toggle the isActive state after 2 seconds
      const timeoutId = setTimeout(() => {
        setNavOpen(open);
      }, 350);

      // Clean up the timeout to avoid memory leaks
      return () => clearTimeout(timeoutId);
    } else {
      setNavOpen(open);
    }
  }, [open]);

  return (
    <div className='z-[1000000] h-max w-full rounded-md border-[0.5px] border-solid border-blue'>
      {/* Header */}
      <div
        className={classNames(
          'w-full h-[127px] z-40 cursor-pointer bg-darkblue',
          {
            'border-b-[0.5px] border-blue': open,
          },
        )}
        onClick={(e: any) => handleOpen(e)}
      >
        <HeaderComponent
          data={data}
          setPositionBtn={setPositionBtn}
          open={open}
        />
      </div>
      {/* Content */}
      <div
        className={classNames('w-full h-0 transition-all duration-500 ', {
          'h-[421px]': open,
        })}
      >
        {navOpen && (
          <div className={'relative z-[100000] block h-full transition-all'}>
            <BodyComponent data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(AccordionComponent);
