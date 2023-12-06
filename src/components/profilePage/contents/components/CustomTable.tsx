import { memo } from 'react';

interface HeaderProps {
  title: string;
}

interface Props {
  headers: HeaderProps[];
  RomComponent: any;
  data: any;
}

const CustomTable = ({ headers, RomComponent, data }: Props) => {
  return (
    <table className='w-full'>
      <thead className='w-full bg-darkblue'>
        <tr
          style={{ borderRadius: 5 }}
          className='w-full border-separate rounded-md'
        >
          {headers.map((header: HeaderProps, index: number) => (
            <th
              key={`table_header_row_${index + 1}`}
              className='p-1.5 text-lg text-lightgray first:rounded-l-md last:rounded-r-md'
            >
              {header?.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='pt-2.5 text-lg'>
        {data.map((elem: any, index: number) => (
          <RomComponent key={`table_row_${index + 1}`} element={elem} />
        ))}
      </tbody>
    </table>
  );
};

export default memo(CustomTable);
