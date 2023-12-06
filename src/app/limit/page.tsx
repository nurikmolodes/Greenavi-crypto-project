'use client';

import Container from '@/components/limitPage/container/Container';
import Information from '@/components/limitPage/information/Information';
import Chart from '@/components/limitPage/chart/Chart';
import Statistic from '@/components/limitPage/statistic/Statistic';
import Traiding from '@/components/limitPage/traiding/Traiding';
import Order from '@/components/limitPage/order/Order';
import RadioButton from '@/components/ui/radioButton/RadioButton';
import { useState } from 'react';

export default function Home() {
  const [checked, setChecked] = useState('График');

  return (
    <div>
      <section className='mt-[-20px] lg:mt-[0]'>
        <Container>
          <div className='hidden lg:my-[15px] lg:block'>
            <RadioButton
              firstName={'График'}
              secondName={'Торговля'}
              setChecked={setChecked}
              checked={checked}
            />
          </div>

          <div className='grid grid-cols-[3fr_1fr_1fr] gap-[10px] xl:grid-cols-[1.9fr_1.1fr] lg:grid-cols-[1fr]'>
            <div className='col-span-2 h-[65px] rounded-[8px] border-[1px] border-solid border-blue xl:col-span-1'>
              <Information />
            </div>

            <div className='row-span-2 rounded-[8px] border-[1px] border-solid border-blue lg:border-none'>
              <div className='hidden xl:block lg:hidden'>
                <RadioButton
                  firstName={'График'}
                  secondName={'Торговля'}
                  setChecked={setChecked}
                  checked={checked}
                />
              </div>

              <div className='block xl:hidden'>
                <Traiding />
              </div>

              {checked === 'Торговля' && (
                <div className='hidden xl:block'>
                  <Traiding />
                </div>
              )}

              {checked === 'График' && (
                <div className='hidden xl:block'>
                  <Statistic />
                </div>
              )}
            </div>

            <div className='h-[640px] rounded-[8px] border-[1px] border-solid border-blue xl:h-[675px] lg:row-end-3'>
              <Chart />
            </div>

            <div className='h-[640px] rounded-[8px] border-[1px] border-solid border-blue xl:hidden xl:h-[675px]'>
              <Statistic />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <Order />
        </Container>
      </section>
    </div>
  );
}
