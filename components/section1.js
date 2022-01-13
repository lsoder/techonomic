import styles from '../styles/Section1.module.scss'
import CustomerCard from './customerCard'
import CustomerCardReverse from './customerCardReverse'

const Section1 = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.hideLarge}>Våra kunder tycker</h2>
      <h2 className={styles.hideSmall}>Branscher</h2>
      <div className={styles.content}>
        <div className={styles.customerContent}>
          <CustomerCard
            image='/images/petter.png'
            comment='Jag tycker att techonomic tillför exakt det jag behöver i min bokföring.'
            name='Petter, mäklare'
          />
          <div className={styles.hideSmall}>
            <CustomerCardReverse
              image='/images/ola.png'
              comment='"Snabbt och effektivt, helt klart den bästa redovisningsbyrå jag någonsin har haft!"'
              name='Ola, utvecklare'
            />
          </div>
        </div>
        <div className={`${styles.hideSmall} ${styles.branscherContent}`}>
          <h3>Urval av branscher vi jobbar mot:</h3>
          <p>Mäklare</p>
          <p>Utvecklare</p>
          <p>Målare</p>
          <p>Lorem</p>
          <p>Ipsum</p>
          <p>Sit</p>
          <p>Dolor</p>
        </div>
      </div>
    </div>
  )
}

export default Section1
