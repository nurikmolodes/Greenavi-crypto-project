interface Props {
  element: {
    id: string;
    type: string | undefined | null;
    amt: number | undefined | null;
    amtCurrency: number | undefined | null;
    date: string | undefined | null;
    contrAgent: string | undefined | null;
    status: string | undefined | null;
  };
}

const HistoryTableRow = ({ element }: Props) => {
  return (
    <tr className='border-b border-solid border-blue'>
      <td className='pt-1.5'>{element?.id}</td>
      <td className='pt-1.5'>{element?.type}</td>
      <td className='pt-1.5'>
        {element?.amt}
        <span className='ml-2 text-sm text-lightgray'>
          {element?.amtCurrency}
        </span>
      </td>
      <td className='pt-1.5'>{element?.date}</td>
      <td className='pt-1.5'>{element?.contrAgent}</td>
      <td className='pt-1.5'>{element?.status}</td>
    </tr>
  );
};

export default HistoryTableRow;
