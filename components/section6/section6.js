import styles from './Section5.module.scss';
import SubscriptionCardBasic, { SubscriptionCardExtra } from '../subscriptionCards/subscriptionCards';

const Section6 = () => {
  return (
    <>
      <div className={styles.hideLarge}>
        <h2>Abonnemang</h2>
        <SubscriptionCardBasic/>
        <SubscriptionCardExtra/>
      </div>
    </>
  );
};

export default Section6;
