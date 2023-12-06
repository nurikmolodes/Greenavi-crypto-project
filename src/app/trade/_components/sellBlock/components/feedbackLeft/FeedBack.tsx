import like from '../../assets/good-two.svg';
import Image from 'next/image';
import avatar from '../../../iconU.svg';

const FeedBack = () => {
  return (
    <div className='mt-[15px] grid grid-cols-[195px_10px_250px_40px] items-center lg:mt-[7px]  lg:grid-cols-[50px_15px_140px_50px] md:grid-cols-[50px_15px_1fr_50px]'>
      <div className='grid grid-cols-[60px_1fr] content-center items-center lg:grid-cols-[48px_1fr]'>
        <div>
          <p className='hidden lg:mb-[3px] lg:ml-[3.5px] lg:block'>User1</p>

          <Image
            className='lg:h-[38px] lg:w-[38px]'
            src={avatar}
            alt={'avatar'}
          />

          <p className='mt-[4px] hidden text-[8px] font-normal leading-normal text-darkBlueText lg:block'>
            2023-10-17 <br /> Payeer
          </p>
        </div>

        <div>
          <p className='my-[2px] text-[16px] font-medium leading-normal lg:mt-[0] lg:hidden'>
            ****.com
          </p>

          <p className='mb-[2px] text-[12px] font-normal leading-normal text-darkBlueText lg:hidden'>
            2023-10-17 Payeer
          </p>
        </div>
      </div>

      <div className='h-[38px] w-[1px] bg-blue lg:h-[75px]'></div>

      <p className='lg:text-[10px]'>Быстрая сделка, вежливый контрагент</p>

      <div className='lg:ml-[14px]'>
        <Image src={like} alt={'like'} />
      </div>
    </div>
  );
};

export default FeedBack;
