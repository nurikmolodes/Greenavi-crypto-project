import styles from './Calculator.module.scss';
import CalculateBlock from '@/components/mainPage/calculator/component/CalculateBlock';
import backImg from '@/assets/background/চন্দ্রনাথ অভিযান (5) 2 (1).png';
import backImg2 from '@/assets/background/liquid glass med drops0017 2 3 (1).png';
import Image from 'next/image';

const Calculator = () => {
  return (
    <>
      <div className='relative pl-[20px]  xl:p-0'>
        <div
          className={'flex justify-between gap-[100px] text-right xl:hidden'}
        >
          <CalculateBlock />

          <div className='pr-[52px] xl:p-0'>
            <h2 className='mt-[40px] normal-case xl:mt-[60px]'>
              Торгуйте вместе с <br /> друзьями. <br /> Зарабатывайте больше
            </h2>

            <button className='mt-[48px] cursor-pointer rounded-[9px] border-none bg-blue p-[17px_47px] text-[24px] font-normal text-lightgray outline-0 lg:text-[18px] '>
              Получить реферальную ссылку
            </button>
          </div>
        </div>

        <div className={styles.calculate__tab}>
          <h2 className='normal-case'>
            Торгуйте вместе с друзьями. <br /> Зарабатывайте больше
          </h2>

          <CalculateBlock />

          <div>
            <button>Получить реферальную ссылку</button>
          </div>
        </div>

        <div className={styles.background}>
          <Image src={backImg} alt={'background'} />
        </div>
      </div>

      <div className={styles.background2}>
        <Image src={backImg2} alt={'background'} />
      </div>
    </>
  );
};

export default Calculator;
