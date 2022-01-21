import styles from './Section1.module.scss'
import SubscriptionCardBasic from '../subscriptionCards/subscriptionCards'
import { ButtonSm } from '../buttons'

import Lottie from 'lottie-react'
// import animation from "../lottie/pattern.json"
import FadeIn from '../../motion/fadeIn'
import Some from '../some'

const Section1 = () => {
  return (
    <>
      {/* <Section5/> */}
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <FadeIn>
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
              <br />
              Varmt välkommen till oss!
            </p>

            <h4>
              info@techonomic.se <br />
              073 - 00 00 00
            </h4>
            <Some
              facebook='https://www.facebook.com/'
              linkedIn='https://www.linkedin.com/'
              instagram='https://www.instagram.com/'
            />
          </FadeIn>
          <div className={styles.center}>
            <ButtonSm href='/' text='Boka demo' />
          </div>
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
