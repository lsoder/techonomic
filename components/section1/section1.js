import styles from './Section1.module.scss'
import SubscriptionCardBasic from '../subscriptionCards/subscriptionCards'
import { ButtonSm } from '../buttons'

import FadeIn from '../../motion/fadeIn'
import Some from '../some'

const Section1 = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <FadeIn>
            <h2>Techonomic på 5 sek.</h2>
            <p>
              Vi levererar en heldigitaliserad redovisningslösning till en fast
              kostnad. Inga extra kostnader för uppstart eller andra dolda
              avgifter. Utan bindningstid och uppsägningstid - flexibelt och
              enkelt.
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
            <ButtonSm href='https://calendly.com/techonomic-jonatan/' text='Boka demo' />
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
