import Avatar from '../avatar/Avatar';
import Warning from '@/components/common/warning/Warning';

const TabBlockCondition = () => {
  return (
    <div className='mt-[10px] flex h-[368px] flex-col justify-between lg:h-[300px] md:h-[230px]'>
      <div>
        <div className='mb-[30px] mt-[5px] lg:mb-[20px]'>
          <Avatar title={'User1'} text={'1,508 исполнено | 100%'} />
        </div>

        <p className='text-[16px] font-normal leading-normal lg:text-[10px]'>
          текст от продавца и тд и тп текст от продавца и тд и тптекст от
          продавца и тд и тптекст от продавца и тд и тптекст от продавца и тд и
          тптекст от продавца и тд и тптекст от продавца и тд и тптекст от
          продавца и тд и тп
        </p>
      </div>

      <div className='text-[12px] lg:text-[8px]'>
        <Warning>
          Внимательно прочтите все условия мерчанта. Несоблюдение условий может
          привести к неудачным транзакциям.
        </Warning>
      </div>
    </div>
  );
};

export default TabBlockCondition;
