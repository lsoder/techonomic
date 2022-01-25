import styles from './Section5.module.scss'
import FadeIn from '../../motion/fadeIn'
import ContactUs from '../contactUs/contactUs'
import Lottie from 'lottie-react'
import contact from '../../lottie/contact.json'

const Section5 = () => {
  return (
    <div className={styles.center}>
      <Lottie className={styles.animation} animationData={contact} />
      <FadeIn>
        <ContactUs />
      </FadeIn>
    </div>
  )
}

export default Section5
