import FeedBack from '../feedbackLeft/FeedBack';
import FeedBackForm from '../feedbackNoLeft/FeedbackForm';

const TabBlockFeedback = () => {
  return (
    <div>
      <div className='mb-[5px] ml-[-5px] mt-[22px] flex h-[22px] w-[333px] items-center justify-center bg-darkblue text-[12px] font-normal leading-normal lg:ml-[0px] lg:w-[240px] lg:text-[8px] md:w-full'>
        100% | Отзывы (3)
      </div>

      <div className='lg:h-[190px] lg:overflow-y-auto  lg:overflow-x-hidden'>
        <FeedBack />

        <FeedBack />

        <FeedBack />
      </div>

      <div className='hidden lg:mb-[15px] lg:mt-[20px] lg:block lg:h-[1px] lg:w-full lg:bg-blue'></div>

      <div className='mt-[50px] lg:mt-[0px]'>
        <FeedBackForm />
      </div>
    </div>
  );
};

export default TabBlockFeedback;
