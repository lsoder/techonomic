import styles from '../styles/Section1.module.scss';
import SubscriptionCardBasic, { SubscriptionCardExtra } from './subscriptionCards/subscriptionCards';
import SubscriptionDesktop from './subscriptionDesktop/subscriptionDesktop';
import Link from 'next/link';

const Section5 = () => {
  return (
    <>
      <div className={styles.hideLarge}>
        <h2>Abonnemang</h2>
        <SubscriptionCardBasic/>
        <SubscriptionCardExtra/>
      </div>
      {/* <div className={styles.subscriptionWrapper}>
        <h2>Abonnemang</h2>
        <h3>Fr. 1500kr/mån</h3>
        <SubscriptionDesktop />
        <i>
          Vill du veta mer om vårt abonnemang och övriga tjänster klicka{' '}
          <Link href="/abonnemang" passHref>
            <b>här.</b>
          </Link>
        </i>
      </div> */}
    </>
  );
};

export default Section5;
