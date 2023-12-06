import Avatar from '../avatar/Avatar';

const TabBlockData = () => {
  return (
    <div className='mt-[20px]'>
      <Avatar title={'User1'} text={'Электронная почта СМС KYC'} />

      <div className='my-[15px] h-[1px] w-full bg-blue'></div>

      <div className='mb-[10px] flex justify-between lg:hidden'>
        <p>Ордера за 30 дн.</p>
        <p>Процент выполнения за 30 дн.</p>
      </div>

      <div className='mb-[10px] flex justify-between lg:hidden'>
        <p className='mt-[-6px] text-[20px] font-normal leading-normal'>20</p>
        <p className='mt-[-6px] text-[20px] font-normal leading-normal'>95%</p>
      </div>

      <div className='hidden justify-between lg:flex'>
        <p className='lg:text-[8px] lg:text-lightgray'>Ордера за 30 дн.</p>
        <p className='lg:text-[8px]'>20</p>
      </div>

      <div className='mt-[5px] hidden justify-between lg:flex'>
        <p className='lg:text-[8px] lg:text-lightgray'>
          Процент выполнения за 30 дн.
        </p>
        <p className='lg:text-[8px]'>95%</p>
      </div>

      <div className='my-[15px] h-[1px] w-full bg-blue'></div>

      <div className='mb-[10px] flex justify-between'>
        <p className='text-lightgray lg:text-[8px]'>Среднее время перевода</p>
        <p className='text-lightgray lg:text-[8px]'>
          <span className='text-white'>5.55</span> Минут(ы)
        </p>
      </div>

      <div className='mb-[10px] flex justify-between'>
        <p className='text-lightgray lg:text-[8px]'>Среднее время оплаты</p>
        <p className='text-lightgray lg:text-[8px]'>
          <span className='text-white'>6.65</span> Минут(ы)
        </p>
      </div>

      <div className='my-[15px] h-[1px] w-full bg-blue'></div>

      <div className='mb-[10px] flex justify-between'>
        <p className='text-lightgray lg:text-[8px]'>С момента регистрации</p>
        <p className='text-lightgray lg:text-[8px]'>
          <span className='text-white'>30</span> дней назад
        </p>
      </div>

      <div className='mb-[10px] flex justify-between'>
        <p className='text-lightgray lg:text-[8px]'>Первая сделка</p>
        <p className='text-lightgray lg:text-[8px]'>
          <span className='text-white'>5</span> дней назад
        </p>
      </div>

      <div className='mb-[10px] flex justify-between'>
        <p className='text-lightgray lg:text-[8px]'>Все сделки</p>
        <p className='text-lightgray lg:text-[8px]'>
          <span className='text-white'>17</span> раз
        </p>
      </div>
    </div>
  );
};

export default TabBlockData;
