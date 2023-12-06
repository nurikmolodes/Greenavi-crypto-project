import SelectCustom from '@/components/ui/select/SelectCustom';

import icon1 from '../assets/currency/Group.svg';
import icon2 from '../assets/currency/Group-1.svg';
import icon3 from '../assets/currency/Ellipse 373.svg';
import icon4 from '../assets/currency/Group-2.svg';
import icon5 from '../assets/currency/Group-3.svg';
import icon6 from '../assets/currency/Group-4.svg';
import icon7 from '../assets/currency/Group-5.svg';
import icon8 from '../assets/currency/Group-6.svg';
import icon9 from '../assets/currency/Group-7.svg';

const InputPrice = () => {
  return (
    <div className='flex items-center'>
      <input
        className='h-[39px] w-[210px] rounded-[8px] border-[1px] border-solid border-blue bg-backgroundBlue pl-[10px] font-sans text-[16px] text-white outline-0 placeholder:font-sans placeholder:text-[16px] placeholder:font-normal placeholder:text-white lg:h-[30px] lg:text-[14px] lg:placeholder:text-[14px] md:h-[20px] md:w-[160px] md:text-[10px] md:placeholder:text-[10px]'
        type='text'
        placeholder={'Введите сумму'}
      />

      <div className='currency relative z-10 ml-[-50px] w-[131px] rounded-[8px] bg-backgroundBlue md:w-[80px]'>
        <SelectCustom
          checked={{ icon: icon1, text: 'RUB' }}
          cls='currency'
          options={[
            { icon: icon1, text: 'RUB' },
            { icon: icon2, text: 'NOK' },
            { icon: icon3, text: 'NPR' },
            { icon: icon4, text: 'NZD' },
            { icon: icon5, text: 'PEN' },
            { icon: icon6, text: 'PHP' },
            { icon: icon7, text: 'PKR' },
            { icon: icon8, text: 'PLN' },
            { icon: icon9, text: 'RON' },
          ]}
        />
      </div>
    </div>
  );
};

export default InputPrice;
