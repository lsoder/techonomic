import styles from './Section4.module.scss';
import FadeIn from '../../motion/fadeIn';
import ContactUs from '../contactUs/contactUs';
import Lottie from 'lottie-react';
import contact from '../../lottie/contact.json';

const Section4 = () => {
  return (
    <FadeIn>
      <div className={styles.center}>
        <Lottie className={styles.animation} animationData={contact} />
        <ContactUs />
      </div>
    </FadeIn>
  );
};

export default Section4;
