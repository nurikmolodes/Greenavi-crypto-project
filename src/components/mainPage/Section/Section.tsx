import React from 'react';
import Image from 'next/image';
import { Block } from '@/components/mainPage/Section/Block/Block';
import phoneImage from '../../../../public/assets/images/section-phone.png';
import { blockText, features } from '@/lib/features';
import styles from './AboutUsSection.module.scss';
import img from '@/assets/background/liquid glass med drops0017 2 4.png';
import img1 from '@/assets/background/morflax-studio 1.png';
import img2 from '@/assets/background/liquid glass med drops0017 2 2.png';
import img3 from '@/assets/background/liquid glass med drops0017 2 2 (1).png';
import classNames from 'classnames';

const AboutUsSection = () => {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            <div className={styles.phoneImage}>
              <Image src={phoneImage} alt='Phone' width={569} height={892} />

              <Image
                alt={'background'}
                className={styles.background2}
                src={img1}
              />

              <Image
                alt={'background'}
                className={styles.background3}
                src={img2}
              />

              <Image
                alt={'background'}
                className={styles.background4}
                src={img3}
              />
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.rightTitle}>
              <h2>GREENAVI - это</h2>
            </div>

            {features.map((feature, index) => (
              <div className={styles.feature} key={index}>
                <p>{feature.title}</p>

                <Image
                  src={feature.icon}
                  alt='Feature icon'
                  width={80}
                  height={80}
                />
              </div>
            ))}

            <div className={styles.opportunities__web}>
              <div className={styles.opportunities__wrapper}>
                <h2>У нас ты можешь:</h2>

                <div className={styles.opportunities}>
                  <div className={styles.cards}>
                    {blockText.map((text, index) => (
                      <Block key={index} className={styles.block}>
                        {text.title}
                      </Block>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.opportunities__tab}>
          <div className={styles.opportunities__wrapper}>
            <h2>У нас ты можешь:</h2>

            <div className={styles.opportunities__img_wrapper}>
              <div className={styles.opportunities__img}>
                <Image src={phoneImage} alt='Phone' width={215} height={394} />

                <Image
                  alt={'background'}
                  className={classNames(
                    styles.background2,
                    styles.background2_little,
                  )}
                  src={img1}
                />
              </div>

              <div className={styles.opportunities}>
                <div className={styles.cards}>
                  {blockText.map((text, index) => (
                    <Block key={index} className={styles.block}>
                      {text.title}
                    </Block>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.background}>
        <Image src={img} alt={'background'} />
      </div>
    </div>
  );
};

export default AboutUsSection;
