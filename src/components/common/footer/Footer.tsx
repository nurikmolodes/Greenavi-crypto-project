import styles from './Footer.module.scss';
import Container from '@/components/mainPage/container/Container';
import Logo from './assets/morflax-studio 1-PhotoRoom 3.svg';
import Image from 'next/image';

import media1 from './assets/vk.svg.svg';
import media2 from './assets/telegram.svg.svg';
import media3 from './assets/vcru.svg.svg';
import media4 from './assets/youtube.svg.svg';
import classNames from 'classnames';
import FooterNav from '@/components/common/footer/component/mobile/footerNav/FooterNav';

const Footer = () => {
  return (
    <div className={`${styles.footer__wrapper} font-flex`}>
      <Container>
        <div>
          <div className={styles.footer__web}>
            <div className={styles.footer}>
              <div>
                <Image
                  className='h-[270px] w-[240px] lg:h-[170px] lg:w-[150px]'
                  src={Logo}
                  alt={'logo'}
                />
              </div>

              <div className={styles.footer__column}>
                <p className={styles.footer__title}>Продукты</p>

                <ul className={styles.footer__links}>
                  <li>P2P - торговля</li>
                  <li>Спот</li>
                  <li>Опцион</li>
                  <li>Фьючерсы</li>
                  <li>B2B</li>
                </ul>
              </div>

              <div className={styles.footer__column}>
                <p className={styles.footer__title}>Поддержка</p>

                <ul className={styles.footer__links}>
                  <li>Контакты</li>
                  <li>
                    Политика <br /> конфиденциальности
                  </li>
                  <li>Условия соглашения</li>
                  <li>Руководство по торговле</li>
                </ul>
              </div>

              <div className={styles.footer__column}>
                <p className={styles.footer__title}>Социальные сети</p>

                <ul className={styles.footer__links}>
                  <li>Telegram</li>
                  <li>VK</li>
                  <li>YouTube</li>
                </ul>
              </div>

              <div className={styles.footer__column}>
                <p className={styles.footer__title}>Торговля</p>

                <ul className={styles.footer__links}>
                  <li>Купить USDT</li>
                  <li>Продать USDT</li>
                </ul>
              </div>

              <div className={styles.footer__column}>
                <div className={styles.footer__media}>
                  <Image src={media1} alt={'media'} />

                  <Image src={media2} alt={'media'} />

                  <Image src={media3} alt={'media'} />

                  <Image src={media4} alt={'media'} />
                </div>

                <p
                  className={classNames(
                    styles.footer__links,
                    styles.footer__email,
                  )}
                >
                  GRENAVI@GREENAVI.RU
                </p>

                <p className={styles.footer__title}>
                  © 2023 GREEnavi.ru Все права защищены.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.footer__tab}>
            <footer className={styles.footer__row}>
              <div>
                <div>
                  <Image
                    className='h-[270px] w-[240px] lg:h-[170px] lg:w-[150px]'
                    src={Logo}
                    alt={'logo'}
                    width={160}
                  />
                </div>

                <div>
                  <div className={styles.footer__media}>
                    <Image src={media1} alt={'media'} />

                    <Image src={media2} alt={'media'} />

                    <Image src={media3} alt={'media'} />

                    <Image src={media4} alt={'media'} />
                  </div>

                  <p
                    className={classNames(
                      styles.footer__links,
                      styles.footer__email,
                    )}
                  >
                    GRENAVI@GREENAVI.RU
                  </p>

                  <p className={styles.footer__title}>
                    © 2023 GREEnavi.ru Все права защищены.
                  </p>
                </div>
              </div>

              <FooterNav />
            </footer>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
