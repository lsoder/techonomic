import styles from './Section5.module.scss';
import FadeIn from '../../motion/fadeIn';
import ContactUs from '../contactUs/contactUs';

const Section5 = () => {
  return (
    <FadeIn>
      <ContactUs />
    </FadeIn>
  );
};

export default Section5;
