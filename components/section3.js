import Image from 'next/image';
import styles from '../styles/Section1.module.scss';
import FadeIn from '../motion/fadeIn';
import { ButtonSm } from './buttons';

const Section3 = () => {
  return (
    <>
        <FadeIn>
        <div className={styles.branscherContent}>
          <h2>Branscher vi jobbar mot</h2>
          <div className={styles.branschList}>
            <p><span>Mäklare</span></p>
            <p><span>Utvecklare</span></p>
            <p><span>Influencers</span></p>
            <p><span>Tatuerare</span></p>
            <p><span>Snickare</span></p>
            <p><span>Frisörer</span></p>
            <p><span>Fiskare</span></p>
            <p><span>Handlare</span></p>
            <p><span>Målare</span></p>
            <p><span>Tapetserare</span></p>
          </div>
          <ButtonSm href="/branscher" text="Läs mer" />
          <i>Vi tror på det personliga sammarbetet, så tveka inte på att ta kontakt.</i>
        </div>
        {/* <div className={styles.container3}>
          <h2>Branscher</h2>
            <Image src="/money.png" alt="logo" width="200" height="200" />
            <p>
              Teknik, ekonomi och personliga relationer driver Techonomic
              framåt.
            </p>
            <h3>Mäklare</h3>
            <h3>Redovisningsekonomer</h3>
            <h3>Finansbolag</h3>
        </div> */}
        </FadeIn>
    </>
  );
};

export default Section3;
