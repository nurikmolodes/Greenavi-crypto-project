import img from './assets/helmet-one.svg';
import img2 from './assets/customer.svg';
import Image from 'next/image';

const AdditionButton = () => {
  return (
    <div className='absolute right-[24px] top-[50%] flex translate-y-[-50%] flex-col gap-[9px] xl:static xl:flex-row xl:justify-end'>
      <button className='flex h-[122px] w-[122px] cursor-pointer items-center justify-center rounded-[50%] bg-darkblue2 xl:h-[45px] xl:w-[45px]'>
        <Image className='xl:h-[24px] xl:w-[24px]' src={img} alt={'img'} />
      </button>

      <button className='flex h-[122px] w-[122px] cursor-pointer items-center justify-center rounded-[50%] bg-darkblue2 xl:h-[45px] xl:w-[45px]'>
        <Image className='xl:h-[24px] xl:w-[24px]' src={img2} alt={'img'} />
      </button>
    </div>
  );
};

export default AdditionButton;
