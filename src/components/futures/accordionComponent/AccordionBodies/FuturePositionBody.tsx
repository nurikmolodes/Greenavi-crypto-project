import { Progress } from '@/components/progress';
import { Button } from '@/components/ui/Button/Button';
import Input from '@/components/ui/input/Input';
import classNames from 'classnames';
import { memo, useState } from 'react';

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
};

export const Market = () => {
  return (
    <div className='text-xs'>
      <div className='flex justify-between'>
        <p className='text-lightgray'>Цена входа</p>
        <p>0.00000005</p>
      </div>
      <div className='mt-2 flex justify-between'>
        <p className='text-lightgray'>Рыночная цена</p>
        <p>0.00000005</p>
      </div>
      <div className='my-[25px] flex items-center gap-32'>
        <p className='text-lightgray'>Кол-во</p>
        <Input />
      </div>
      <Progress />
      <Button
        // onClick={openAddPayMethod}
        title={'Подтвердить'}
        className='mt-2.5 w-full'
        textSize={'medium'}
        variant={'blue'}
      />
    </div>
  );
};

const OPTIONS = [
  { id: 'market', name: 'Рыночный', content: <Market /> },
  {
    id: 'limit',
    name: 'Лимитная цена',
    content: <div className='w-[448px]' />,
  },
];

const CLoseComponent = ({ data }: Props) => {
  console.log(data);
  const [tab, setTab] = useState(OPTIONS[0]);
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <div className='max-w-[448px]'>
        <div className='flex h-[34px] w-full rounded-[9px] border border-solid border-blue xl:mt-0'>
          {OPTIONS.map((item) => (
            <div
              key={item?.id}
              className={classNames(
                'w-full cursor-pointer flex items-center justify-center rounded-[8px] h-full',
                { 'bg-blue': item?.id == tab?.id },
              )}
              onClick={() => setTab(item)}
            >
              <p className='text-[13.5px]'>{item?.name}</p>
            </div>
          ))}
        </div>
        <div className='mt-[25px]'>{tab?.content}</div>
      </div>
    </div>
  );
};

const TpSlComponent = ({ data }: Props) => {
  return (
    <div className='flex h-full w-full items-center justify-center text-xl'>
      <div className='mx-auto flex  w-full max-w-[1030px] items-center'>
        <div className='flex items-center border-r border-solid border-blue pr-28'>
          <div className='flex gap-28 py-20'>
            <div>
              <p className='w-max text-darkBlueText'>Кол-во</p>
              <p>{data?.quantity}</p>
              <p className='mt-2 w-max text-darkBlueText'>Цена входа</p>
              <p>{data?.markPrice}</p>
            </div>
            <div>
              <p className='w-max text-darkBlueText'>Рыночная цена</p>
              <p>{data?.quantity}</p>
              <p className='mt-2  w-max'>Цена ликвидации</p>
              <p className='text-warning'>{data?.markPrice}</p>
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col items-end justify-end'>
          <div className='w-fit'>
            <p className='mb-2  text-xl'>Stop Loss - Срабатывание по ROI (%)</p>

            <div className='relative'>
              <Input />
              <div className='absolute right-0 top-0 flex items-center gap-2'>
                <span className='text-xs text-blue'>Last</span>
                <Input
                  className='!max-w-[160px] !bg-darkblue'
                  placeholder='ROI'
                />
              </div>
              <span className='absolute right-1.5  top-2 text-base'>%</span>
            </div>

            <div className='mt-4'>
              <Progress />
            </div>
            <p className='mb-2 mt-10 text-xl'>
              Stop Loss - Срабатывание по ROI (%)
            </p>

            <div className='relative'>
              <Input />
              <div className='absolute right-0 top-0 flex items-center gap-2'>
                <span className='text-xs text-blue'>Last</span>
                <Input
                  className='!max-w-[160px] !bg-darkblue'
                  placeholder='ROI'
                />
              </div>
              <span className='absolute right-1.5  top-2 text-base'>%</span>
            </div>

            <div className='mt-4'>
              <Progress />
            </div>
            <Button
              onClick={() => console.log('Подтвердить')}
              title={'Подтвердить'}
              className='mt-6 flex !h-[38px] !w-[412px] items-center justify-center'
              textSize={'medium'}
              variant={'blue'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FuturePositionBody = ({ data }: Props) => {
  if (data?.positionBtn?.btn == 'tp_sl') {
    return <TpSlComponent data={data} />;
  }

  if (data?.positionBtn?.btn == 'close') {
    return <CLoseComponent data={data} />;
  }
  return '';
};

export default memo(FuturePositionBody);
