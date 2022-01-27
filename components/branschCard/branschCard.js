import { ButtonSm } from '../buttons';
import styles from './BranschCard.module.scss';

const BranschCard = () => {
  return (
    <div className={styles.branscherContent}>
      <h2>Branscher vi jobbar mot</h2>
      <div className={styles.branschList}>
        <p>
          <span>Mäklare</span>
        </p>
        <p>
          <span>Utvecklare</span>
        </p>
        <p>
          <span>Influencers</span>
        </p>
        <p>
          <span>Tatuerare</span>
        </p>
        <p>
          <span>Snickare</span>
        </p>
        <p>
          <span>Frisörer</span>
        </p>
        <p>
          <span>Fiskare</span>
        </p>
        <p>
          <span>Handlare</span>
        </p>
        <p>
          <span>Målare</span>
        </p>
        <p>
          <span>Tapetserare</span>
        </p>
      </div>
      <ButtonSm href="/branscher" text="Läs mer" />
      <i>Teknik, ekonomi och personliga relationer driver Techonomic framåt.</i>
    </div>
  );
};

export default BranschCard;

export const BranschCard2 = () => {
  return (
    <div className={styles.branscherContent}>
      <h2>Branscher vi jobbar mot</h2>
      <div className={styles.branschList}>
        <p>
          <span>Mäklare</span>
        </p>
        <p>
          <span>Utvecklare</span>
        </p>
        <p>
          <span>Influencers</span>
        </p>
        <p>
          <span>Tatuerare</span>
        </p>
        <p>
          <span>Snickare</span>
        </p>
        <p>
          <span>Frisörer</span>
        </p>
        <p>
          <span>Fiskare</span>
        </p>
        <p>
          <span>Handlare</span>
        </p>
        <p>
          <span>Målare</span>
        </p>
        <p>
          <span>Tapetserare</span>
        </p>
      </div>
      <i>Teknik, ekonomi och personliga relationer driver Techonomic framåt.</i>
    </div>
  );
};


