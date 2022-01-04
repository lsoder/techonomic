import Image from 'next/image';
import styles from '../styles/Section1.module.scss';

const Section3 = () => {
  return (
    <div className={styles.hideLarge}>
      <div className={styles.container3}>
        <h1>Branscher</h1>
        <Image src="/money.png" alt="logo" width="200" height="200" />
        <p>
          Teknik, ekonomi och personliga relationer driver Techonomic framåt.
        </p>
        <h3>Mäklare</h3>
        <h3>Redovisningsekonomer</h3>
        <h3>Finansbolag</h3>
      </div>
    </div>
  );
};

export default Section3;
