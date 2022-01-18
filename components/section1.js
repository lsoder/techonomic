import styles from '../styles/Section1.module.scss'
import SubscriptionCardBasic, {
  SubscriptionCardExtra,
} from './subscriptionCards/subscriptionCards'
import Lottie from 'lottie-react'
// import animation from "../lottie/pattern.json"
import FadeIn from '../motion/fadeIn'

const Section1 = () => {
  return (
    <>
      {/* <Section5/> */}
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2>Techonomic på 5 sek.</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
            <br />
            <br />
            För mer information, kontakta någon av våra experter!
            <br />
          </p>
        </div>
        <div className={styles.Subscription}>
          <FadeIn>
            <SubscriptionCardBasic />
          </FadeIn>
          {/* <Lottie className={styles.animation} animationData={animation}></Lottie> */}
          {/* <SubscriptionCardExtra/> */}
        </div>
      </div>
    </>
  )
}

export default Section1
