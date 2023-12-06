import { Button } from '@/components/ui/Button/Button';
import avatar from '../../../iconU.svg';
import Image from 'next/image';

const FeedBackForm = () => {
  return (
    <div className='grid h-[67px] grid-cols-[220px_260px] lg:grid-cols-[50px_190px] md:grid-cols-[50px_1fr]'>
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

      <div>
        <form className='flex flex-col gap-[5px]' action=''>
          <textarea
            className='h-[52px] w-full resize-none rounded-[8px] border-[1px] border-solid border-blue bg-backgroundBlue px-[11px] py-[4px] font-sans outline-0 placeholder:text-[12px] placeholder:text-lightgray lg:placeholder:text-[8px]'
            name=''
            id=''
            placeholder={'Напишите отзыв о продавце'}
          ></textarea>

          <Button
            className='h-[23px] !pt-[3px] !text-[10px]'
            title={'Отправить отзыв'}
            variant={'blue'}
          />
        </form>
      </div>
    </div>
  );
};

export default FeedBackForm;
