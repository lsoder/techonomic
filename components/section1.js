import styles from '../styles/Section1.module.scss';
import CustomerCard from './customerCard';
import CustomerCardReverse from './customerCardReverse';

const Section1 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.hideLarge}>Våra kunder tycker</h1>
      <h1 className={styles.hideSmall}>Branscher</h1>
      <div className={styles.content}>
        <div className={styles.customerContent}>
          <CustomerCard
            comment='"Jag tycker att techonomic tillför exakt det jag behöver i min bokföring."'
            name="Petter, mäklare"
          />
          <div className={styles.hideSmall}>
            <CustomerCardReverse
              comment='"Snabbt och effektivt, klart bästa redovisningsekonomer jag haft!"'
              name="Ola, utvecklare"
            />
          </div>
        </div>
        <div className={`${styles.hideSmall} ${styles.branscherContent}`}>
          <h3>Urval av branscher vi jobbar mot:</h3>
          <p>Mäklare</p>
          <p>Utvecklare</p>
          <p>Målare</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
