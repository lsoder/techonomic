import styles from '../styles/Section1.module.scss';
import SubscriptionCardBasic, {
  SubscriptionCardExtra,
} from './subscriptionCards/subscriptionCards';
// import Lottie from "lottie-react";
// import animationDesktop from "../lottie/desktop.json"

const Section1 = () => {
  return (
    <>
      {/* <Section5/> */}
      <div className={styles.Subscription}>
        <SubscriptionCardBasic />
        {/* <Lottie animationData={animationDesktop}/> */}
        {/* <SubscriptionCardExtra/> */}
      </div>
    </>
  );
};

export default Section1;
