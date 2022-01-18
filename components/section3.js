import Image from 'next/image';
import styles from '../styles/Section1.module.scss';
import FadeIn from '../motion/fadeIn';

const Section3 = () => {
  return (
    <>
      <div className={styles.hideLarge}>
        <FadeIn>
        <div className={styles.container3}>
          <h2>Branscher</h2>
            <Image src="/money.png" alt="logo" width="200" height="200" />
            <p>
              Teknik, ekonomi och personliga relationer driver Techonomic
              framåt.
            </p>
            <h3>Mäklare</h3>
            <h3>Redovisningsekonomer</h3>
            <h3>Finansbolag</h3>
        </div>
        </FadeIn>
      </div>
    </>
  );
};

export default Section3;
