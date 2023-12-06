import P2pItem from '@/app/trade/_components/p2pItem/P2pItem';
import { FC, useEffect } from 'react';
import useStore from '../../../../store/p2pStore';

type ItemsWrapperProps = {
  checked: string;
};

const ItemsWrapper: FC<ItemsWrapperProps> = ({ checked }) => {
  const { data, fetchData } = useStore();
  console.log(data);

  useEffect(() => {
    // Retrieve the token from local storage
    const token = '3JSxiny-eiYyFC1ABuYflN2UvwZ5Tnz2';
    console.log(token);

    if (token) {
      // Fetch data when the component mounts
      fetchData(token);
    } else {
      console.error('Token not found in local storage');
    }
  }, []);

  return (
    <div className='custom-scroll mb-[50px] h-[787px] w-[calc(100%+30px)] overflow-auto pr-[20px] lg:w-[calc(100%+20px)] lg:pr-[6px]'>
      <P2pItem checked={checked} />
    </div>
  );
};

export default ItemsWrapper;
