import styles from '@/components/mainPage/calculator/Calculator.module.scss';
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

const CalculateBlock = () => {
  const [value, setValue] = useState<any>([0]);
  const [value1, setValue1] = useState<any>([0]);

  return (
    <div className={styles.calculate}>
      <p
        className={
          'pt-[20px] text-left text-[23px] font-semibold leading-normal text-lightgray lg:mb-[0] lg:text-[16px]'
        }
      >
        Оборот ваших друзей в USDT
      </p>

      <div className={styles.calculate__range}>
        {/* <Range
          step={1}
          min={0}
          max={100}
          values={value}
          onChange={(values) => setValue([values])}
          renderTrack={({ props, children }) => (
            <div {...props} className={styles.calculate__range_element}>
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '18px',
                width: '18px',
                borderRadius: '50%',
                border: '2px solid #2666FF',
                background: 'rgba(255, 255, 255, 0.80)',
              }}
            />
          )}
        /> */}
        <Slider
          onValueChange={(values) => setValue([values])}
          defaultValue={[33]}
          max={100}
          step={1}
        />

        <div>{value}</div>
      </div>

      <p
        className={
          'mt-[25px] text-left text-[23px] font-semibold leading-normal text-lightgray lg:mb-[0] lg:mt-[13px] lg:text-[16px]'
        }
      >
        Количество рефералов
      </p>

      <div className={styles.calculate__range}>
        {/* <Range
          step={1}
          min={0}
          max={100}
          values={value1}
          onChange={(values) => setValue1([values])}
          renderTrack={({ props, children }) => {
            return (
              <div className={styles.calculate__range_element} {...props}>
                {children}
              </div>
            );
          }}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '18px',
                width: '18px',
                borderRadius: '50%',
                border: '2px solid #2666FF',
                background: 'rgba(255, 255, 255, 0.80)',
              }}
            />
          )}
        /> */}

        <Slider
          onValueChange={(values) => setValue1([values])}
          defaultValue={[33]}
          max={100}
          step={1}
        />

        <div>{value1}</div>
      </div>

      <p
        className={
          'mb-[12px] mt-[25px] text-left text-[23px] font-semibold leading-normal text-lightgray lg:mb-[0] lg:mt-[13px] lg:text-[16px]'
        }
      >
        Вы заработаете
      </p>

      <p className='m-[0] text-left text-[71px] font-semibold text-blue lg:text-[32px] '>
        3.00 ₽
      </p>
    </div>
  );
};

export default CalculateBlock;
