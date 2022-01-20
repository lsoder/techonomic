import styles from './Section3.module.scss';
import FadeIn from '../../motion/fadeIn';
import BranschCard from '../branschCard/branschCard';

const Section3 = () => {
  return (
    <>
      <div className={styles.hideLarge}>
      <FadeIn>
        <BranschCard />
      </FadeIn>
      </div>
    </>
  );
};

export default Section3;
