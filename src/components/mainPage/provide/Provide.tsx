import img from './assets/slider1-graphic1 1.svg';
import img1 from './assets/Mask group (1).svg';
import Image from 'next/image';

import styles from './Provide.module.scss';

const Provide = () => {
  return (
    <div className='mb-[350px] flex justify-between xl:mb-[270px] lg:mb-[75px]'>
      <div className='ml-[34px] mt-[120px] xl:ml-[10px] xl:mt-[100px] lg:ml-0 lg:mt-[60px] lg:px-[18px] lg:py-0 md:mt-[50px]'>
        <h2>Обеспечиваем</h2>

        <p className='my-[38px] ml-[10px] font-normal leading-[120%] tracking-[0.9px] lg:my-[22px]'>
          безопасность на платформе
        </p>

        <ul className={styles.provide__info}>
          <li className='before:bg-[url("../../../assets/Group 39484.svg")] relative mb-[41px] ml-[60px] text-[25px] font-normal leading-[138%] tracking-[0.75px] before:absolute before:left-[-70px] before:top-[50%] before:block before:h-[48px] before:w-[48px] before:translate-y-[-50%] before:bg-cover before:content-[""] lg:mb-[21px] lg:ml-0 lg:text-[15px] lg:leading-[120%] lg:tracking-[0.45px] lg:before:left-[-44px] lg:before:h-[24px] lg:before:w-[24px]'>
            Используем защищенный сервер с современной <br /> системой защиты от
            DDoS-атак
          </li>

          <li className='before:bg-[url("../../../assets/Group 39484.svg")] relative mb-[41px] ml-[60px] text-[25px] font-normal leading-[138%] tracking-[0.75px] before:absolute before:left-[-70px] before:top-[50%] before:block before:h-[48px] before:w-[48px] before:translate-y-[-50%] before:bg-cover before:content-[""] lg:mb-[21px] lg:ml-0 lg:text-[15px] lg:leading-[120%] lg:tracking-[0.45px] lg:before:left-[-44px] lg:before:h-[24px] lg:before:w-[24px]'>
            Используем двухэтапную аутентификацию при выводе средств
          </li>

          <li className='before:bg-[url("../../../assets/Group 39484.svg")] relative mb-[41px] ml-[60px] text-[25px] font-normal leading-[138%] tracking-[0.75px] before:absolute before:left-[-70px] before:top-[50%] before:block before:h-[48px] before:w-[48px] before:translate-y-[-50%] before:bg-cover before:content-[""] lg:mb-[21px] lg:ml-0 lg:text-[15px] lg:leading-[120%] lg:tracking-[0.45px] lg:before:left-[-44px] lg:before:h-[24px] lg:before:w-[24px]'>
            Администратор платформы лично проверяет вводы и выводы <br />{' '}
            средств пользователей, которые прошли верификацию
          </li>

          <li className='before:bg-[url("../../../assets/Group 39484.svg")] relative mb-[41px] ml-[60px] text-[25px] font-normal leading-[138%] tracking-[0.75px] before:absolute before:left-[-70px] before:top-[50%] before:block before:h-[48px] before:w-[48px] before:translate-y-[-50%] before:bg-cover before:content-[""] lg:mb-[21px] lg:ml-0 lg:text-[15px] lg:leading-[120%] lg:tracking-[0.45px] lg:before:left-[-44px] lg:before:h-[24px] lg:before:w-[24px]'>
            Защищаем от фальсификации баланса
          </li>

          <li className='before:bg-[url("../../../assets/Group 39484.svg")] relative mb-[41px] ml-[60px] text-[25px] font-normal leading-[138%] tracking-[0.75px] before:absolute before:left-[-70px] before:top-[50%] before:block before:h-[48px] before:w-[48px] before:translate-y-[-50%] before:bg-cover before:content-[""] lg:mb-[21px] lg:ml-0 lg:text-[15px] lg:leading-[120%] lg:tracking-[0.45px] lg:before:left-[-44px] lg:before:h-[24px] lg:before:w-[24px]'>
            Записываем каждое действие пользователя
          </li>

          <li className='before:bg-[url("../../../assets/Group 39484.svg")] relative mb-[41px] ml-[60px] text-[25px] font-normal leading-[138%] tracking-[0.75px] before:absolute before:left-[-70px] before:top-[50%] before:block before:h-[48px] before:w-[48px] before:translate-y-[-50%] before:bg-cover before:content-[""] lg:mb-[21px] lg:ml-0 lg:text-[15px] lg:leading-[120%] lg:tracking-[0.45px] lg:before:left-[-44px] lg:before:h-[24px] lg:before:w-[24px]'>
            Гарантируем конфиденциальность действий <br /> пользователя
          </li>
        </ul>
      </div>

      <div className='block xl:hidden'>
        <Image className='absolute right-0 ' src={img} alt={'image'} />
      </div>

      <div className='hidden xl:block lg:mt-[80px]'>
        <Image
          className='absolute right-0 xl:h-[1028px] xl:max-w-[100%] lg:h-[447px]'
          src={img1}
          alt={'image'}
        />
      </div>
    </div>
  );
};

export default Provide;
