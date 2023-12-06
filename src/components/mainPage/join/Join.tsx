import Image from 'next/image';
import phones from './assets/Group 39522.png';
import ellipse from './assets/Ellipse 364.svg';

const Join = () => {
  return (
    <div>
      <div className='relative mt-[140px] flex flex-col items-center text-center xl:mb-[-40px] lg:mb-[-330px] sm:mb-[-350px] mb:mb-[-400px]'>
        <h2 className='mb-[5px] xl:max-w-[800px] xl:leading-[136%] lg:max-w-[500px]'>
          Присоединяйтесь к платформе Greenavi
        </h2>

        <p className='text-[30px] font-medium leading-[120%] tracking-[0.9px] lg:text-[15px] lg:tracking-[0.45px]'>
          Нам выгодно, когда вы зарабатываете
        </p>
      </div>

      <div className='relative -z-10 mt-[85px] h-[690px] overflow-hidden xl:h-[590px] lg:mt-[15px] lg:h-[700px] md:mt-[0]'>
        <Image
          className='mt-[130px] w-full max-w-[100%] bg-cover xl:h-[807px] xl:w-[100%] xl:object-cover lg:mt-[430px] lg:h-[500px] sm:mt-[490px]'
          src={ellipse}
          alt={'ellipse'}
        />

        <Image
          className='absolute left-[50%] top-0 w-[957px] max-w-[100%] translate-x-[-50%] bg-cover xl:top-[10px] lg:top-[370px] lg:max-w-[477px] lg:object-contain sm:top-[410px] sm:max-w-[440px] mb:top-[470px]  mb:max-w-[340px] '
          src={phones}
          alt={'phone'}
        />
      </div>
    </div>
  );
};

export default Join;
