import img from './Group 4330.png';
import Image from 'next/image';

const Start = () => {
  return (
    <div className='mt-[390px] flex items-center justify-between xl:mt-[200px] lg:mt-[20px] lg:flex-col lg:items-end sm:mt-[0]'>
      <div>
        <div className='absolute left-0 translate-y-[-250px] xl:left-[-200px] lg:left-0 lg:translate-y-[-100px] md:translate-x-[-50px] md:translate-y-[-100px]'>
          <Image
            className='h-[553px] lg:w-[450px] lg:object-contain md:w-[440px] sm:w-[350px]'
            src={img}
            alt={'img'}
          />
        </div>
      </div>

      <div className='relative top-[-50px] xl:static lg:mt-[340px] md:mt-[320px] sm:mt-[300px]'>
        <h2 className='text-right xl:max-w-[607px] xl:leading-[120%] lg:max-w-[470px]'>
          Не знаешь, с чего начать?
        </h2>

        <p className='relative top-[69px] mb-[22px] max-w-[876px] text-right font-normal leading-[36px] xl:top-[13px] xl:max-w-[607px] lg:mb-[8px] lg:ml-[70px] lg:max-w-[370px]'>
          Ничего страшного!
        </p>

        <p className='relative top-[69px] max-w-[876px] text-right font-normal leading-[36px] xl:top-[13px] xl:max-w-[607px] lg:ml-[70px] lg:max-w-[370px] lg:leading-normal'>
          Пройди наше небольшое обучение и начинай зарабатывать свои первые
          деньги.
        </p>
      </div>
    </div>
  );
};

export default Start;
