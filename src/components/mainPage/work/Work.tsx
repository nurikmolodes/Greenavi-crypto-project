import Company from '@/components/mainPage/work/company/Company';

import logo1 from './assets/KUCOIN-logo-3.0 (1).svg';
import logo2 from './assets/30af6914d7023f986a72ea6c3ec29d804391ae27 1.svg';
import logo3 from './assets/image 75.svg';
import logo4 from './assets/image 76.svg';
import logo5 from './assets/image 77.svg';
import logo6 from './assets/image 78.svg';
import logo7 from './assets/image 79.svg';
import logo8 from './assets/image 75 (1).svg';
import logo9 from './assets/image 752.svg';

import backImg from '@/assets/background/liquid glass med drops0017 2 1.png';

import Image from 'next/image';

const Work = () => {
  return (
    <div className='relative mt-[225px] px-[24px] xl:mt-[-60px] lg:mt-[-50px]'>
      <div className='block xl:hidden'>
        <div className='mt-[56px] flex gap-[50px] xl:mt-[30px] xl:gap-[30px] lg:mt-[18px] lg:gap-[20px]'>
          <div className='mr-[20px] xl:mb-[50px] lg:mb-[25px] md:mb-[-10px]'>
            <h2 className='mb-[33px] xl:mb-[20px] lg:mb-[12px]'>Мы работаем</h2>
            <p className='mb-[0] mt-[8px] '>
              с крупными криптовалютными биржами
            </p>
          </div>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo1}
              alt={'logo'}
            />
          </Company>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo7}
              alt={'logo'}
            />
          </Company>
        </div>
      </div>

      <div className='block xl:hidden'>
        <div className='mt-[56px] flex gap-[50px] xl:mt-[30px] xl:gap-[30px] lg:mt-[18px] lg:gap-[20px]  md:mt-[26px]'>
          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo9}
              alt={'logo'}
            />
          </Company>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo4}
              alt={'logo'}
            />
          </Company>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo2}
              alt={'logo'}
            />
          </Company>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo5}
              alt={'logo'}
            />
          </Company>
        </div>
      </div>

      <div className='block xl:hidden'>
        <div className='mt-[56px] flex justify-center gap-[50px] xl:mt-[30px] xl:justify-start xl:gap-[30px] lg:mt-[18px] lg:gap-[20px] md:mt-[26px]'>
          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo3}
              alt={'logo'}
            />
          </Company>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo6}
              alt={'logo'}
            />
          </Company>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo8}
              alt={'logo'}
            />
          </Company>
        </div>
      </div>

      <div className='hidden xl:block md:hidden'>
        <div className='mr-[20px] xl:mb-[50px] lg:mb-[25px] md:mb-[-10px]'>
          <h2 className='mb-[33px] xl:mb-[20px] lg:mb-[12px]'>Мы работаем</h2>
          <p className='mb-[0] mt-[8px] '>с крупными криптовалютными биржами</p>
        </div>

        <div className='mt-[56px] flex gap-[50px] xl:mt-[30px] xl:gap-[30px] lg:mt-[18px] lg:gap-[20px] md:mt-[26px]'>
          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo1}
              alt={'logo'}
            />
          </Company>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo7}
              alt={'logo'}
            />
          </Company>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo9}
              alt={'logo'}
            />
          </Company>
        </div>

        <div className='mt-[56px] flex justify-end gap-[50px] xl:mt-[30px] xl:gap-[30px] lg:mt-[18px] lg:gap-[20px] md:mt-[26px]'>
          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo4}
              alt={'logo'}
            />
          </Company>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo2}
              alt={'logo'}
            />
          </Company>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo5}
              alt={'logo'}
            />
          </Company>
        </div>
      </div>

      <div className='hidden xl:block md:hidden'>
        <div className='justify-cente xl:justify-startr mt-[56px] flex gap-[50px] xl:mt-[30px] xl:gap-[30px] lg:mt-[18px] lg:gap-[20px] md:mt-[26px] '>
          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo3}
              alt={'logo'}
            />
          </Company>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo6}
              alt={'logo'}
            />
          </Company>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo8}
              alt={'logo'}
            />
          </Company>
        </div>
      </div>

      <div className='hidden md:mt-[70px] md:block'>
        <div className='mr-[20px] xl:mb-[50px] lg:mb-[25px] md:mb-[-10px]'>
          <h2 className='mb-[33px] xl:mb-[20px] lg:mb-[12px]'>Мы работаем</h2>
          <p className='mb-[0] mt-[8px] '>с крупными криптовалютными биржами</p>
        </div>

        <div className='mt-[56px] flex justify-center gap-[50px] xl:mt-[30px] xl:justify-start xl:gap-[30px] lg:mt-[18px] lg:gap-[20px] md:mt-[26px]'>
          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo1}
              alt={'logo'}
            />
          </Company>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo7}
              alt={'logo'}
            />
          </Company>
        </div>

        <div className='ml-[20px] mt-[56px] flex justify-center gap-[50px] xl:mt-[30px] xl:justify-start xl:gap-[30px] lg:mt-[18px] lg:gap-[20px] md:mt-[26px]'>
          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo9}
              alt={'logo'}
            />
          </Company>
          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo4}
              alt={'logo'}
            />
          </Company>
        </div>

        <div className='mr-[20px] mt-[56px] flex justify-center gap-[50px] xl:mt-[30px] xl:justify-start xl:gap-[30px] lg:mt-[18px] lg:gap-[20px] md:mt-[26px]'>
          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo2}
              alt={'logo'}
            />
          </Company>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo5}
              alt={'logo'}
            />
          </Company>
        </div>

        <div className='ml-[20px] mt-[56px] flex justify-center gap-[50px] xl:mt-[30px] xl:justify-start xl:gap-[30px] lg:mt-[18px] lg:gap-[20px] md:mt-[26px]'>
          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo3}
              alt={'logo'}
            />
          </Company>

          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo6}
              alt={'logo'}
            />
          </Company>
        </div>

        <div className='ml-[20%] mt-[56px] flex w-auto justify-center gap-[50px] xl:mt-[30px] xl:justify-start xl:gap-[30px] lg:mt-[18px] lg:gap-[20px] md:mt-[26px]'>
          <Company>
            <Image
              className='xl:w-[190px] lg:w-[130px] sm:w-[100px] '
              src={logo8}
              alt={'logo'}
            />
          </Company>
        </div>
      </div>

      <div className='absolute right-[50px] top-[-250px] -z-10 xl:right-[-30px] xl:top-[-70px] lg:right-[-5px] lg:top-[-50px] md:right-[70px] md:top-[160px]'>
        <Image
          className='h-[700px] w-[880px] object-cover md:h-[600px] md:w-[400px]'
          src={backImg}
          alt={'background'}
        />
      </div>
    </div>
  );
};

export default Work;
