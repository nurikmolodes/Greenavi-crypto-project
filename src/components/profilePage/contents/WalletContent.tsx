import Image from 'next/image';

import BoxWrapper from '../BoxWrapper';

import infoCircleL from '@/assets/svgs/alert_circle_l.svg';
import CustomTable from './components/CustomTable';
import WalletTableRow from './components/tableRows/WalletTableRow';
import { ViivodAmountMethod, VvodAmountMethod } from '../modals';
import { useModal } from '@/custom-hooks/useModal';
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

const headers = [
  { title: 'Валюта' },
  { title: 'Сумма' },
  { title: 'Доступно' },
  { title: 'Заморожено' },
  { title: 'Действия' },
];

const data = [
  {
    currency: 'USDT',
    amt: 0,
    access: 0,
    blocked: 0,
    actions: ['Купить', 'Продать', 'Ввод', 'Вывод'],
  },
  {
    currency: 'BTC',
    amt: 0,
    access: 0,
    blocked: 0,
    actions: ['Купить', 'Продать', 'Ввод', 'Вывод'],
  },
  {
    currency: 'ETH',
    amt: 0,
    access: 0,
    blocked: 0,
    actions: ['Купить', 'Продать', 'Ввод', 'Вывод'],
  },
];

const WalletContent = () => {
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
      <div className='flex gap-2 pl-2.5'>
        <div className='flex min-h-[236px] basis-1/3 flex-col gap-3.5'>
          <BoxWrapper className='h-[236px] w-[409px] bg-darkblue'>
            <div className='flex items-center justify-between'>
              <p className='text-xl text-lightgray'>Общий баланс</p>
              <Image src={infoCircleL} alt={'information'} />
            </div>
            <p className='mt-4 text-3xl font-medium text-blue'>
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
          </BoxWrapper>
          <BoxWrapper className='h-[236px] w-[409px] bg-darkblue'>
            <div className='flex items-center justify-between'>
              <p className='text-xl text-lightgray'>
                Баланс <span className='text-blue '>B2B</span>
              </p>
              <Image src={infoCircleL} alt={'information'} />
            </div>

            <p className='mt-2.5 text-3xl font-medium text-blue'>
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
          </BoxWrapper>
        </div>
        <div className='flex min-h-[236px] w-[764px] flex-col gap-5'>
          <BoxWrapper className='h-full w-full'>
            <CustomTable
              headers={headers}
              RomComponent={WalletTableRow}
              data={data}
            />
          </BoxWrapper>
          <BoxWrapper className='h-full w-full'>
            <CustomTable
              headers={headers}
              RomComponent={WalletTableRow}
              data={data}
            />
          </BoxWrapper>
        </div>
      </div>

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

export default WalletContent;
