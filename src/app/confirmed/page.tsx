'use client';

import { Button } from '@/components/ui/Button/Button';
import { useRouter } from 'next/navigation';

export default function Confirmed() {
  const router = useRouter();

  return (
    <section className='absolute flex flex-col items-center gap-[37px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <h1 className='font-bold text-[36px] text-center'>
        Адрес электронной почты подтвержден
      </h1>
      <Button
        title='Вернуться на главную'
        onClick={() => {
          router.replace('/');
        }}
        className='max-w-[354px]'
      />
    </section>
  );
}
