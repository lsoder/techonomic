import styles from '../styles/Section1.module.scss';
import SubscriptionCardBasic, {
  SubscriptionCardExtra,
} from './subscriptionCards/subscriptionCards';
import Lottie from "lottie-react";
// import animation from "../lottie/pattern.json"

const Section1 = () => {
  return (
    <>
      {/* <Section5/> */}
      <div className={styles.Subscription}>
        <SubscriptionCardBasic />
        {/* <Lottie className={styles.animation} animationData={animation}></Lottie> */}
        {/* <SubscriptionCardExtra/> */}
      </div>
    </>
  );
};

export default Section1;
