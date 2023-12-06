import Image from 'next/image';
import arrow from './assets/Button.svg';
import {
  dataBeginner,
  dataSenior,
} from '@/components/mainPage/question/mock/data';
import { useState } from 'react';
import classNames from 'classnames';

const Question = () => {
  const [dataBeginnerState, setDataBeginnerState] = useState<any>(dataBeginner);
  const [dataSeniorState, setDataSeniorState] = useState<any>(dataSenior);

  const handleOpen = (title: string, isBeginner: boolean, isOpen: boolean) => {
    if (isBeginner) {
      setDataBeginnerState(() => {
        return dataBeginnerState.map((item: any) => {
          if (item.title === title) {
            item.isOpen = !isOpen;
          }

          return item;
        });
      });
    } else {
      setDataSeniorState(() => {
        return dataSeniorState.map((item: any) => {
          if (item.title === title) {
            item.isOpen = !isOpen;
          }

          return item;
        });
      });
    }
  };

  return (
    <div className='mt-[410px] xl:mb-[-40px] xl:mt-[225px] lg:mb-[-60px] lg:mt-[110px]'>
      <div className='text-center'>
        <h2>Часто задаваемые вопросы</h2>
      </div>

      <div className='mt-[74px] flex items-start gap-[24px] xl:mt-[58px] xl:flex-col xl:gap-[38px] lg:mt-[50px] lg:gap-[20px] md:mt-[50px] sm:mt-[40px]'>
        <div className='min-h-[100px] w-full rounded-[24px] border-[2px] border-solid border-blue bg-darkblue3 px-[24px] py-[42px] lg:rounded-[10px] lg:p-[10px]'>
          <div className='w-[221px] rounded-[12px] bg-blue px-[36px] py-[12px] text-center text-[21px] font-normal lg:w-[172px] lg:p-[10px_30px] lg:text-[18px]'>
            Начинающий
          </div>

          {dataBeginnerState.map((item: any) => (
            <div key={item.title}>
              <div
                className='border-b-solid flex cursor-pointer items-center justify-between border-b-[2px] border-b-blue lg:h-[62px]'
                onClick={() => handleOpen(item.title, true, item.isOpen)}
              >
                <p className='m-[19px_10px_19px_0] text-[24px] font-semibold leading-normal lg:text-[18px] sm:text-[14px]'>
                  {item.title}
                </p>

                <Image
                  style={{
                    transform: `rotate(${item.isOpen ? '180deg' : '0'})`,
                  }}
                  alt={'arrow'}
                  src={arrow}
                  className='duration-500'
                />
              </div>

              <div
                className={classNames(
                  'border-blue border-solid border-[2px] transition-opacity bg-darkblue3 mt-[-2px] text-[18px] h-[0] overflow-hidden opacity-0 p-[0] duration-500 lg:text-[16px]',
                  {
                    'h-[auto] opacity-[1] p-[10px]': item.isOpen,
                  },
                )}
              >
                Идейные соображения высшего порядка, а также новая модель
                организационной деятельности позволяет оценить значение позиций,
                занимаемых участниками в отношении поставленных задач.
                Повседневная практика показывает, что рамки и место обучения
                кадров играет важную роль в формировании систем массового
                участия. Задача организации, в особенности же дальнейшее
                развитие различных форм деятельности позволяет оценить значение
                модели развития.
              </div>
            </div>
          ))}
        </div>

        <div className='min-h-[100px] w-full rounded-[24px] border-[2px] border-solid border-blue bg-darkblue3 px-[24px] py-[42px] lg:rounded-[10px] lg:p-[10px]'>
          <div className='w-[221px] rounded-[12px] bg-blue px-[36px] py-[12px] text-center text-[21px] font-normal lg:w-[172px] lg:p-[10px_30px] lg:text-[18px]'>
            Продвинутый
          </div>

          {dataSeniorState.map((item: any) => (
            <div key={item.title}>
              <div
                className='border-b-solid flex cursor-pointer items-center justify-between border-b-[2px] border-b-blue lg:h-[62px]'
                onClick={() => handleOpen(item.title, false, item.isOpen)}
              >
                <p className='m-[19px_10px_19px_0] text-[24px] font-semibold leading-normal lg:text-[18px] sm:text-[14px]'>
                  {item.title}
                </p>

                <Image
                  alt={'arrow'}
                  style={{
                    transform: `rotate(${item.isOpen ? '180deg' : '0'})`,
                  }}
                  src={arrow}
                  className='duration-500'
                />
              </div>

              <div
                className={classNames(
                  'border-blue border-solid border-[2px] bg-darkblue3 mt-[-2px] text-[18px] h-[0] overflow-hidden opacity-0 p-[0] transition-opacity duration-500 lg:text-[16px]',
                  {
                    'h-[auto] opacity-[1] p-[10px]': item.isOpen,
                  },
                )}
              >
                Идейные соображения высшего порядка, а также новая модель
                организационной деятельности позволяет оценить значение позиций,
                занимаемых участниками в отношении поставленных задач.
                Повседневная практика показывает, что рамки и место обучения
                кадров играет важную роль в формировании систем массового
                участия. Задача организации, в особенности же дальнейшее
                развитие различных форм деятельности позволяет оценить значение
                модели развития.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
