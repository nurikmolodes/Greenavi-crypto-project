import { memo } from 'react';

interface Props {
  element: {
    currency: string | undefined | null;
    amt: number | undefined | null;
    access: number | undefined | null;
    blocked: number | undefined | null;
    actions: string[];
  };
}

const WalletTableRow = ({ element }: Props) => {
  return (
    <tr className='border-b border-solid border-blue'>
      <td className='pt-1.5'>{element?.currency}</td>
      <td className='pt-1.5'>{element?.amt}</td>
      <td className='pt-1.5'>{element?.access}</td>
      <td className='pt-1.5'>{element?.blocked}</td>
      <td className='pt-1.5 text-lightgray'>
        {element?.actions ? element.actions.map((item) => `${item} `) : ''}
      </td>
    </tr>
  );
};

export default memo(WalletTableRow);
