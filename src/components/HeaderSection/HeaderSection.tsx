import { FC } from 'react';
import img from '@/assets/svgs/GREEnavi.svg';
import styles from './header-section.module.scss';
import Image from 'next/image';
import telegram from '@/assets/telegram.svg';
import arrow from '@/assets/arrow.svg';

export const HeaderSection: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header_section_text}>
          <h3>
            инновационная криптовалютная биржа с расширенными финансовыми
            предложениями.
          </h3>

          <div className={styles.header_section_button}>
            <button>
              Торговать <Image src={arrow} alt={'arrow'} />
            </button>

            <button>
              <Image src={telegram} alt={'telegram'} />
            </button>
          </div>
        </div>
        <Image className={styles.logo} src={img} alt={'logo'} />
      </div>

      <div className={styles.blue_line}>
        <p className='font-flex'>Получите 50 ₽ за каждый завершенный ордер</p>
      </div>
    </>
  );
};
