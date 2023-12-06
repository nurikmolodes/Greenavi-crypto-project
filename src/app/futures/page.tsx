'use client';

import Container from '@/components/mainPage/container/Container';
//import { Hero as Header } from '@/components/Hero/Hero';
import RadioButton from '@/components/ui/radioButton/RadioButton';
import Information from '@/components/limitPage/information/Information';
import Statistic from '@/components/limitPage/statistic/Statistic';
import Chart from '@/components/limitPage/chart/Chart';
import { useMemo, useState } from 'react';
import Tab from '@/components/futures/tab/Tab';
//import TradingFutures from '@/components/futures/traidingFutures/TraidingFutures';
import classNames from 'classnames';
import AccordionComponent from '@/components/futures/accordionComponent/AccordionComponent';
import FuturePositionHeader from '@/components/futures/accordionComponent/AccordionHeaders/FuturePositionHeader';
import FuturePositionBody from '@/components/futures/accordionComponent/AccordionBodies/FuturePositionBody';

const ACCORDION_DATA = [
  {
    id: 'first',
    amount: 11111,
    currency: 'USDT',
    positionType: 'Long',
    type: 'Кросс 1.00х',
    sizePosition: '8.700',
    enterPrice: '0.000007',
    markPrice: '0.00000008',
    priceLiquidation: '0.000000009',
    quantity: 8700.0,
    positionBtn: { btn: 'tp_sl', id: '' },
  },
  {
    id: 'second',
    amount: 11111,
    currency: 'USDT',
    positionType: 'Long',
    type: 'Кросс 1.00х',
    sizePosition: '8.700',
    enterPrice: '0.000007',
    markPrice: '0.00000008',
    priceLiquidation: '0.000000009',
    quantity: 8700.0,
    positionBtn: { btn: 'tp_sl', id: '' },
  },
  {
    id: 'third',
    amount: 11111,
    currency: 'USDT',
    positionType: 'Long',
    type: 'Кросс 1.00х',
    sizePosition: '8.700',
    enterPrice: '0.000007',
    markPrice: '0.00000008',
    priceLiquidation: '0.000000009',
    quantity: 8700.0,
    positionBtn: { btn: 'tp_sl', id: '' },
  },
];

export default function Futures() {
  const [checked, setChecked] = useState('График');
  const [active, setActive] = useState('Позиции');
  const [positionSetClose, setPositionSetClose] = useState({ btn: '', id: '' });

  const ACCORDION_DATA_M = useMemo(
    () =>
      ACCORDION_DATA.map((item) =>
        item?.id == positionSetClose?.id
          ? { ...item, positionBtn: positionSetClose }
          : item,
      ),
    [positionSetClose],
  );

  return (
    <div className=''>
      {/*<Container>
        <Header part isBig />
      </Container>*/}

      <section className='mt-[-20px] lg:mt-[0]'>
        <Container>
          <div className='hidden lg:my-[15px] lg:block'>
            <div className='col-span-2 h-[65px] rounded-[8px] border-[1px] border-solid border-blue xl:col-span-1'>
              <Information />
            </div>
            <div className='w-[470px]'>
              <RadioButton
                firstName={'График'}
                secondName={'Торговля'}
                setChecked={setChecked}
                checked={checked}
                labelcls={classNames('w-full mt-8', {
                  '!bg-blue': '',
                })}
                scnLabelCls={'mr-[-11px]'}
                name={'lg_graph_trade'}
              />
            </div>
          </div>

          <div className='grid grid-cols-[3fr_1fr_1fr] gap-[10px] xl:grid-cols-[1.9fr_1.1fr] lg:grid-cols-[1fr]'>
            <div className='col-span-2 h-[65px] rounded-[8px] border-[1px] border-solid border-blue xl:col-span-1 lg:hidden'>
              <Information />
            </div>

            <div className='row-span-2 rounded-[8px] border-[1px] border-solid border-blue lg:border-none'>
              <div className='hidden w-full xl:block lg:hidden'>
                <RadioButton
                  firstName={'График'}
                  secondName={'Торговля'}
                  setChecked={setChecked}
                  checked={checked}
                  labelcls={'w-full'}
                  scnLabelCls={'mr-[-11px]'}
                />
              </div>

              <div className='block xl:hidden'>
                {/*<TradingFutures />*/}
                {/* <TraidingFuturesTrade /> */}
              </div>

              {checked === 'Торговля' && (
                <div className='hidden xl:block'>
                  {/*<TradingFutures />*/}
                  {/* <TraidingFuturesTrade /> */}
                </div>
              )}

              {checked === 'График' && (
                <div className='hidden xl:block'>
                  <Statistic />
                </div>
              )}
            </div>

            <div
              className={classNames(
                'border-solid border-[1px] rounded-[8px] border-blue h-[640px] xl:h-[675px] lg:row-end-3 lg:hidden',
              )}
            >
              <Chart />
            </div>

            <div className='h-[640px] rounded-[8px] border-[1px] border-solid border-blue xl:hidden xl:h-[675px]'>
              <Statistic />
            </div>
          </div>
        </Container>
      </section>

      <section className='mb-16 '>
        <Container>
          <Tab active={active} setActive={setActive} />
          <div className='mt-7 flex gap-2 text-base'>
            <p>Все контракты (3)</p>
            <p>Текущие контракты</p>
          </div>
          <div className='md_720:hidden mt-7 flex flex-col gap-1.5'>
            {ACCORDION_DATA_M.map((item) => (
              <AccordionComponent
                key={item?.id}
                data={item}
                setPositionBtn={setPositionSetClose}
                HeaderComponent={FuturePositionHeader}
                BodyComponent={FuturePositionBody}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
