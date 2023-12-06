import styles from './FooterNav.module.scss';
import { useState } from 'react';
import classNames from 'classnames';

const FooterNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div className={styles.footer__nav}>
      <ul>
        <li className={styles.footer__title}>
          <p
            className={classNames(styles.footer__title_p, {
              [styles.footer__title_p_isOpen]: isOpen,
            })}
            onClick={() => setIsOpen(!isOpen)}
          >
            Социальные сети
          </p>

          <div className={isOpen ? '!sm:h-[140px] !h-[120px]' : ''}>
            <ul>
              <li>Telegram</li>
              <li>VK</li>
              <li>YouTube</li>
            </ul>
          </div>
        </li>

        <li className={styles.footer__title}>
          <p
            className={classNames(styles.footer__title_p, {
              [styles.footer__title_p_isOpen]: isOpen2,
            })}
            onClick={() => setIsOpen2(!isOpen2)}
          >
            Продукты
          </p>

          <div className={isOpen2 ? '!sm:h-[230px] !h-[170px]' : ''}>
            <ul>
              <li>P2P - торговля</li>
              <li>Спот</li>
              <li>Опцион</li>
              <li>Фьючерсы</li>
              <li>B2B</li>
            </ul>
          </div>
        </li>

        <li className={styles.footer__title}>
          <p
            className={classNames(styles.footer__title_p, {
              [styles.footer__title_p_isOpen]: isOpen3,
            })}
            onClick={() => setIsOpen3(!isOpen3)}
          >
            Торговля
          </p>

          <div className={isOpen3 ? '!h-[98px]' : ''}>
            <ul>
              <li>Купить USDT</li>
              <li>Продать USDT</li>
            </ul>
          </div>
        </li>

        <li className={styles.footer__title}>
          <p
            className={classNames(styles.footer__title_p, {
              [styles.footer__title_p_isOpen]: isOpen4,
            })}
            onClick={() => setIsOpen4(!isOpen4)}
          >
            Поддержка
          </p>

          <div className={isOpen4 ? '!h-[230px]' : ''}>
            <ul>
              <li>Контакты</li>
              <li>Политика конфиденциальности</li>
              <li>Условия соглашения</li>
              <li>Руководство по торговле</li>
              <li>Правила торговли</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FooterNav;
