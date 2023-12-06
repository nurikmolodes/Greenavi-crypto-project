'use client';

import React, { useState } from 'react';
import Filter from '@/components/common/filter/Filter';
import AdditionButton from '@/app/trade/_components/additionButton/AdditionButton';
import Footer from '@/components/common/footer/Footer';
import P2pItem from '@/app/trade/_components/p2pItem/P2pItem';
import SellBlock from '@/app/trade/_components/sellBlock/SellBlock';
import ContainerTradeBuy from '@/app/trade/_components/containerTradeBuy/ContainerTradeBuy';

const Page = () => {
  const [checked, setChecked] = useState('Покупка');

  return (
    <div>
      <section>
        <ContainerTradeBuy>
          <div>
            <Filter setChecked={setChecked} checked={checked} />

            <SellBlock checkedFilter={checked} />

            <P2pItem checked={checked} />
          </div>
        </ContainerTradeBuy>
      </section>

      <div className='xl:hidden'>
        <AdditionButton />
      </div>

      <div className='mt-[45px] hidden xl:block'>
        <ContainerTradeBuy>
          <AdditionButton />
        </ContainerTradeBuy>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
