import styles from '../styles/Section1.module.scss';
import SubscriptionCardBasic, {
  SubscriptionCardExtra,
} from './subscriptionCards/subscriptionCards';
import Lottie from "lottie-react";
// import animation from "../lottie/pattern.json"
import FadeIn from '../motion/fadeIn';

const Section1 = () => {
  return (
    <>
      {/* <Section5/> */}
      <div className={styles.Subscription}>
        <FadeIn>
        <SubscriptionCardBasic />
        </FadeIn>
        {/* <Lottie className={styles.animation} animationData={animation}></Lottie> */}
        {/* <SubscriptionCardExtra/> */}
      </div>
    </>
  );
};

export default Section1;
