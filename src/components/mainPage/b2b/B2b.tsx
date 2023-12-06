import Image from 'next/image';
import img from './assets/Frame 39686.svg';
import img_tab from './assets/hodlbot_illustration 2 (1).png';
import backImg from '@/assets/background/liquid glass med drops0017 2 3.png';
import styles from './B2b.module.scss';
import classNames from 'classnames';

const B2b = () => {
  return (
    <div className={styles.b2b}>
      <div className={styles.b2b__top}>
        <h2>B2B сервис</h2>

        <p>
          помогает осуществить взаимодействие между юридическими лицами по всему
          миру
        </p>
      </div>

      <div className={styles.b2b__picture}>
        <div className={styles.b2b__web}>
          <Image src={img} alt={'img'} />
        </div>

        <div className={styles.b2b__tab}>
          <Image src={img_tab} alt={'img'} />
        </div>

        <div
          className={classNames(
            styles.b2b__picture_evently,
            styles.b2b__picture_web,
          )}
        >
          <p className={styles.b2b__right}>
            Алгоритм анализа <br /> благонадежности контрагентов
          </p>

          <p className={styles.b2b__left}>
            Возможность приобретения и продажи ТМЦ и услуг
          </p>
        </div>

        <div
          className={classNames(
            styles.b2b__picture_around,
            styles.b2b__picture_web,
          )}
        >
          <p className={styles.b2b__right}>
            Оптимизация <br /> бизнес процессов
          </p>

          <p className={styles.b2b__left}>
            Безопасное заключение международных сделок
          </p>
        </div>

        <div
          className={classNames(
            styles.b2b__picture_between,
            styles.b2b__picture_web,
          )}
        >
          <p className={styles.b2b__right}>
            Поиск подходящих и <br /> проверенных <br /> контрагентов
          </p>

          <p className={styles.b2b__left}>
            Криптовалютные <br /> переводы
          </p>
        </div>

        <div
          className={classNames(
            styles.b2b__picture_left,
            styles.b2b__picture_little_tab,
          )}
        >
          <p>
            Поиск подходящих и проверенных <br /> контрагентов
          </p>

          <p>Оптимизация бизнес процессов</p>

          <p>
            Алгоритм анализа благонадежности <br /> контрагентов
          </p>
        </div>

        <div
          className={classNames(
            styles.b2b__picture_right,
            styles.b2b__picture_little_tab,
          )}
        >
          <p>
            Возможность приобретения и <br /> продажи ТМЦ и услуг
          </p>

          <p>Криптовалютные переводы</p>

          <p>Безопасное заключение международных сделок</p>
        </div>
      </div>

      <div className={styles.background}>
        <Image src={backImg} alt={'background'} />
      </div>
    </div>
  );
};

export default B2b;
