'use client';

import React, { useState } from 'react';
import Filter from '@/components/common/filter/Filter';
import ContainerTrade from '@/app/trade/_components/containerTrade/ContainerTrade';
import AdditionButton from '@/app/trade/_components/additionButton/AdditionButton';
import ItemsWrapper from '@/app/trade/_components/itemsWrapper/ItemsWrapper';

const Page = () => {
  const [checked, setChecked] = useState('Покупка');

  return (
    <div>
      <section>
        <ContainerTrade>
          <div>
            <Filter setChecked={setChecked} checked={checked} />

            <ItemsWrapper checked={checked} />
          </div>
        </ContainerTrade>
      </section>

      <div className='xl:hidden'>
        <AdditionButton />
      </div>

      <div className='hidden xl:block '>
        <ContainerTrade>
          <AdditionButton />
        </ContainerTrade>
      </div>
    </div>
  );
};

export default Page;
