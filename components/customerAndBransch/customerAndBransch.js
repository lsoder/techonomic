import styles from './CustomerAndBransch.module.scss';
import CustomerCard, {
  CustomerCardReverse,
} from '../customerCards/customerCards';
import { ButtonSm } from '../buttons';

const CustomerAndBransch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.hideSmall} ${styles.branscherContent}`}>
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
        <div className={styles.customerContent}>
            <h2>Våra kunder tycker</h2>
            <CustomerCard
              image="/images/petter.png"
              comment="Jag tycker att techonomic tillför exakt det jag behöver i min bokföring."
              name="Petter, mäklare"
            />
          <div>
            <CustomerCardReverse
              image="/images/ola.png"
              comment="Snabbt och effektivt, helt klart den bästa redovisningsbyrå jag någonsin har haft!"
              name="Ola, utvecklare"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAndBransch;
