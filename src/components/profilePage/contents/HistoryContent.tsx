import BoxWrapper from '../BoxWrapper';
import CustomTable from './components/CustomTable';
import HistoryTableRow from './components/tableRows/HistoryTableRow';

const headers = [
  { title: 'ID' },
  { title: 'Тип' },
  { title: 'Сумма' },
  { title: 'Дата' },
  { title: 'Контрагент' },
  { title: 'Статус' },
];

const data = [
  {
    id: '00000001',
    type: 'Продажа',
    amt: 10,
    amtCurrency: 'USDT',
    date: '06.07.2023',
    contrAgent: 'ADMIN',
    status: 'Отменена',
  },
  {
    id: '00000001',
    type: 'Продажа',
    amt: 10,
    amtCurrency: 'USDT',
    date: '06.07.2023',
    contrAgent: 'ADMIN',
    status: 'Отменена',
  },
  {
    id: '00000001',
    type: 'Продажа',
    amt: 10,
    amtCurrency: 'USDT',
    date: '06.07.2023',
    contrAgent: 'ADMIN',
    status: 'Отменена',
  },
];

const HistoryContent = () => {
  return (
    <div className='pl-2.5'>
      <BoxWrapper className='min-h-[237px] w-full'>
        <div className='flex w-full justify-between'>
          <p className='text-xl'>Последние операции</p>
          <p className='cursor-pointer text-base text-blue'>
            Перейти к истории
          </p>
        </div>
        <div className='mt-2.5 w-[1203px]'>
          <CustomTable
            headers={headers}
            RomComponent={HistoryTableRow}
            data={data}
          />
        </div>
      </BoxWrapper>
    </div>
  );
};

export default HistoryContent;
