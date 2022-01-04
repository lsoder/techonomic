import styles from '../styles/Section1.module.scss'
import CustomerCard from "./customerCard";

const Section1 = () => {
  return (
    <>
    <h1>Våra kunder tycker</h1>
    <div className={styles.container}>
      <CustomerCard comment='"Jag tycker att techonomic tillför exakt det jag behöver i min bokföring."' name='Petter, mäklare' />
      <div className={styles.hide}>
      <CustomerCard className={styles.hide} comment='"Snabbt och effektivt, klart bästa redovisningsekonomer jag haft!"' name='Ola, utvecklare' />
      </div>
    </div>
    </>
  );
};

export default Section1;
