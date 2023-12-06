import Image from 'next/image';

import { Button } from '@/components/ui/Button/Button';
import BoxWrapper from '../BoxWrapper';

import {
  AddPaymentMethod,
  ViivodAmountMethod,
  VvodAmountMethod,
} from '../modals';
import { useModal } from '@/custom-hooks/useModal';

import infoCircleL from '@/assets/svgs/alert_circle_l.svg';
import { Icon, IconName } from '@/components/ui/icon';

const actionsList = [
  {
    id: 'viivod',
    name: 'Вывод',
    icon: 'viivod_icon',
    action: (callback: () => void) => callback(),
  },
  {
    id: 'vvod',
    name: 'Ввод',
    icon: 'vvod_icon',
    action: (callback: () => void) => callback(),
  },
  {
    id: 'pokupka',
    name: 'Покупка',
    icon: 'pokupka_icon',
    action: (callback: () => void) => callback(),
  },
  {
    id: 'prodaja',
    name: 'Продажа',
    icon: 'prodaja_icon',
    action: (callback: () => void) => callback(),
  },
];

const statistics = [
  { id: 'order', name: 'Ордера за 30 дней', number: 0, measurement: 'раз' },
  {
    id: 'done',
    name: 'Выполненных сделок в %',
    number: 100,
    measurement: '% за 30 дней',
  },
  {
    id: 'average_transition_time',
    name: 'Среднее время перевода',
    number: 0.0,
    measurement: 'мин.',
  },
  {
    id: 'average_respond_time',
    name: 'Среднее время ответа',
    number: 0.0,
    measurement: 'мин.',
  },
  {
    id: 'registered',
    name: 'Зарегистрирован',
    number: 0,
    measurement: '12 дней назад',
  },
  {
    id: 'all_trades',
    name: 'Все сделки',
    number: 0,
    measurement: 'раз',
  },
  {
    id: 'revenue_all',
    name: 'Примерный объем за все время',
    number: 0,
    measurement: 'USDT',
  },
  {
    id: 'revenue_day',
    name: 'Примерный объем за 30 дней',
    number: 0,
    measurement: 'USDT',
  },
];

const ProfileContent = () => {
  const {
    hideModal: hideModalAddPayMethod,
    isModalOpened: isModalAddPayMethod,
    openModal: openAddPayMethod,
  } = useModal();

  const {
    hideModal: hideModalVvodAmount,
    isModalOpened: isModalVvodAmount,
    openModal: openVvodAmount,
  } = useModal();

  const {
    hideModal: hideModalViivodAmount,
    isModalOpened: isModalViivodAmount,
    openModal: openViivodAmount,
  } = useModal();

  const openTransferModals = (id: string) => {
    switch (id) {
      case 'vvod':
        return openVvodAmount();
      case 'viivod':
        return openViivodAmount();
      default:
        break;
    }
  };

  return (
    <>
      <div className='pl-2.5'>
        <div className='flex min-h-[236px] gap-5'>
          <BoxWrapper className='h-[236px] w-[536px] p-3'>
            <div className='flex items-center justify-between'>
              <p className='text-xl text-lightgray'>Общий баланс</p>
              <Image src={infoCircleL} alt={'information'} />
            </div>
            <p className='mt-1.5 text-3xl font-medium text-blue'>
              ≈10021.00{' '}
              <span className='text-2xl font-light text-white'>USDT</span>
            </p>
            <div className='mt-1.5 flex gap-5'>
              <p className='text-sm text-lightgray'>
                Доступно: <span>00.00 USDT</span>
              </p>
              <p className='text-sm text-lightgray'>
                Заморожено: <span>00.00 USDT</span>
              </p>
            </div>
            <div className='mt-2.5 flex h-[63px] gap-14'>
              {actionsList.map((action) => (
                <div
                  key={action?.id}
                  className='flex flex-col items-center gap-1.5'
                >
                  <Icon
                    name={action.icon as IconName}
                    className={'h-9 w-9 cursor-pointer'}
                    onClick={() => openTransferModals(action?.id)}
                  />

                  <p className='text-sm text-lightgray'>{action?.name}</p>
                </div>
              ))}
            </div>
            <Button
              onClick={() => console.log('В кошелек')}
              title={'В кошелек'}
              className='mt-2.5 !h-[40px] w-full !max-w-[354px]'
              textSize={'medium'}
              variant={'blue'}
            />
          </BoxWrapper>
          <BoxWrapper className='h-[236px] w-[536px] p-3'>
            <div className='flex items-center justify-between'>
              <p className='text-xl text-lightgray'>
                Баланс <span className='text-blue '>B2B</span>
              </p>
              <Image src={infoCircleL} alt={'information'} />
            </div>
            <p className='mt-1.5 text-3xl font-medium text-blue'>
              ≈10021.00{' '}
              <span className='text-2xl font-light text-white'>USDT</span>
            </p>
            <div className='mt-1.5 flex gap-5'>
              <p className='text-sm text-lightgray'>
                Доступно: <span>00.00 USDT</span>
              </p>
              <p className='text-sm text-lightgray'>
                Заморожено: <span>00.00 USDT</span>
              </p>
            </div>
            <div className='mt-2.5 flex h-[63px] gap-14'>
              {actionsList.map((action) => (
                <div
                  key={action?.id}
                  className='flex flex-col items-center gap-1.5'
                >
                  <Icon
                    name={action.icon as IconName}
                    className={'h-9 w-9 '}
                    onClick={() => openTransferModals(action?.id)}
                  />

                  <p className='text-sm text-lightgray'>{action?.name}</p>
                </div>
              ))}
            </div>
            <Button
              onClick={() => console.log('В кошелек')}
              title={'В кошелек'}
              className='mt-2 !h-[40px] w-full !max-w-[354px]'
              textSize={'medium'}
              variant={'blue'}
            />
          </BoxWrapper>
        </div>
        <div className='mt-2.5 flex'>
          <BoxWrapper className='h-[273px] w-full'>
            <p className='text-xl text-lightgray'>Статистика</p>
            <div className='mt-1.5 grid grid-cols-4 grid-rows-2 gap-4'>
              {statistics.map((stat) => (
                <BoxWrapper
                  key={stat?.id}
                  className='flex h-[100px] w-full flex-col justify-between bg-darkblue !py-0.5'
                >
                  <p className='text-lg font-semibold leading-normal text-white'>
                    {stat?.name}
                  </p>
                  <p className='text-lg font-normal text-blue'>
                    {stat?.number} <span>{stat?.measurement}</span>
                  </p>
                </BoxWrapper>
              ))}
            </div>
          </BoxWrapper>
        </div>
        <div className='mt-10'>
          <p className='text-xl font-semibold text-lightgray'>
            Способы оплаты P2P
          </p>
          <p className='mt-2.5 text-lg font-normal'>
            Способы оплаты для P2P: при продаже криптовалюты добавленный Вами
            способ оплаты будет показан покупателю в качестве доступного способа
            для совершения платежа. Убедитесь, что имя владельца счета
            соответствует подтвержденному Вами имени на Exnode P2P. Можно
            добавить до 20 способов оплаты.
          </p>
          <Button
            onClick={openAddPayMethod}
            title={'Добавить способ оплаты'}
            className='mt-2.5 w-full !max-w-[354px]'
            textSize={'medium'}
            variant={'blue'}
          />
        </div>
      </div>

      <AddPaymentMethod
        isModalOpened={isModalAddPayMethod}
        hideModal={hideModalAddPayMethod}
      />
      <VvodAmountMethod
        isModalOpened={isModalVvodAmount}
        hideModal={hideModalVvodAmount}
      />
      <ViivodAmountMethod
        isModalOpened={isModalViivodAmount}
        hideModal={hideModalViivodAmount}
      />
    </>
  );
};

export default ProfileContent;
