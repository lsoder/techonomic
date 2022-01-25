import Kontakt from '../../pages/kontakta-oss';
import FadeIn from '../../motion/fadeIn';
import styles from './Section4.module.scss';

const Section4 = () => {
  return (
    <div className={styles.container}>
      <FadeIn>
        <Kontakt />
      </FadeIn>
    </div>
  );
};

export default Section4;
