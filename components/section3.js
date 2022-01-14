import Image from 'next/image';
import styles from '../styles/Section1.module.scss';
import SubscriptionDesktop from './subscriptionDesktop';
import Link from 'next/link';

const Section3 = () => {
  return (
    <>
      <div className={styles.hideLarge}>
        <div className={styles.container3}>
          <h2>Branscher</h2>
          <Image src="/money.png" alt="logo" width="200" height="200" />
          <p>
            Teknik, ekonomi och personliga relationer driver Techonomic framåt.
          </p>
          <h3>Mäklare</h3>
          <h3>Redovisningsekonomer</h3>
          <h3>Finansbolag</h3>
        </div>
      </div>
      <div className={styles.subscriptionWrapper}>
        <h2>Abonnemang</h2>
        <h3>Fr. 1500kr/mån</h3>
        <SubscriptionDesktop />
        <i>
          Vill du veta mer om vårt abonnemang och övriga tjänster klicka{' '}
          <Link href="/abonnemang" passHref>
            <b>här.</b>
          </Link>
        </i>
      </div>
    </>
  );
};

export default Section3;
