import styles from '../styles/Section1.module.scss';
import { ButtonSm } from './buttons';
import SubscriptionCardBasic, { SubscriptionCardExtra } from './subscriptionCards';

const Section2 = () => {
  return (
    <>
      <div className={styles.container2}>
        <div className={`${styles.bookMeetingContent}`}>
          <h2>Boka ett möte med oss</h2>
          <ButtonSm href="/" text="Boka möte" />
          <p>Vi väntar på just dig!</p>
        </div>
      </div>
      <div className={styles.SubscriptionCardDesktop}>
          <SubscriptionCardBasic/>
          <SubscriptionCardExtra/>
      </div>
    </>
  );
};

export default Section2;
