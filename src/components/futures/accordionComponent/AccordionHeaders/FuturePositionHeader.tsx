import { Button } from '@/components/ui/Button/Button';
import classNames from 'classnames';
import { memo } from 'react';

type Props = {
  data: {
    id: string;
    amount: number;
    currency: string;
    positionType: string;
    type: string;
    sizePosition: string;
    enterPrice: string;
    markPrice: string;
    priceLiquidation: string;
    quantity: number;
    positionBtn?: any;
  };
  setPositionBtn?: any;
  open?: boolean;
};

const FuturePositionHeader = ({ data, setPositionBtn, open }: Props) => {
  return (
    <div className='flex h-full w-full items-center justify-between px-7 text-xl'>
      {/* <div className='w-full flex justify-between'> */}
      <div>
        <span className='text-2xl'>{data?.amount}</span>
        <span className='text-2xl'>{data.currency}</span>
        <span className='inline-block bg-lightGreen text-xs text-green'>
          {data?.positionType}
        </span>
        <p className='text-darkBlueText'>{data?.type}</p>
      </div>

      <div>
        <p className='text-darkBlueText'>Размер позиции</p>
        <p>{data?.sizePosition}</p>
      </div>

      <div>
        <p className='text-darkBlueText'>Цена входа</p>
        <p>{data?.enterPrice}</p>
      </div>

      <div>
        <p className='text-darkBlueText'>Mark Price</p>
        <p>{data?.markPrice}</p>
      </div>

      <div>
        <p className=''>Ориентировочная цена ликвидации</p>
        <p className='text-warning'>{data?.priceLiquidation}</p>
      </div>

      <div className='z-50 flex flex-row gap-4'>
        <Button
          onClick={() => setPositionBtn({ btn: 'tp_sl', id: data?.id })}
          title={'Установить TP/SL'}
          className={classNames(
            '!w-[184px] !h-[38px] flex justify-center items-center accordion-header-button !border !border-solid !border-blue',
            { '!bg-blue': open && data?.positionBtn?.btn == 'tp_sl' },
          )}
          textSize={'medium'}
          variant={'darkblue'}
        />
        <Button
          onClick={() => setPositionBtn({ btn: 'close', id: data?.id })}
          title={'Закрыть'}
          className={classNames(
            '!w-[184px] !h-[38px] flex justify-center items-center accordion-header-button',
            { '!bg-blue': open && data?.positionBtn?.btn == 'close' },
          )}
          textSize={'medium'}
          variant={'darkblue'}
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default memo(FuturePositionHeader);
