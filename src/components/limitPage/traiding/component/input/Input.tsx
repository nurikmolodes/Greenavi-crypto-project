import { FC } from 'react';

type InputProps = {
  label: string;
  place?: string;
};

const Input: FC<InputProps> = ({ label, place }) => {
  return (
    <div className='relative flex flex-col gap-[5px]'>
      <label className='text-[12px] text-lightgray' htmlFor=''>
        {label}
      </label>
      <input
        className='h-[45px] rounded-[8px] border-[1px] border-solid border-blue bg-darkblue pl-[16px] pr-[55px] text-[12px] outline-0'
        type='text'
      />

      <p className='absolute right-[14px] top-[37px] text-[12px]'>{place}</p>
    </div>
  );
};

export default Input;
