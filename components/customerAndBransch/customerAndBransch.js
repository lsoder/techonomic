import styles from './CustomerAndBransch.module.scss'
import CustomerCard, { CustomerCardReverse } from '../customerCards/customerCards';
import { ButtonSm } from '../buttons';

const CustomerAndBransch = () => {
    return (
        <div className={styles.container}>
        <div className={styles.content}>
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
                comment='Snabbt och effektivt, helt klart den bästa redovisningsbyrå jag någonsin har haft!'
                name="Ola, utvecklare"
              />
            </div>
          </div>
          <div className={`${styles.hideSmall} ${styles.branscherContent}`}>
            <h2>Branscher vi jobbar mot</h2>
            <div className={styles.branschList}>
              <p>Mäklare</p>
              <p>Utvecklare</p>
              <p>Influencers</p>
              <p>Tatuerare</p>
              <p>Snickare</p>
              <p>Frisörer</p>
            </div>
            <ButtonSm href="/branscher" text="Läs mer" />
          </div>
        </div>
      </div>
    )
}

export default CustomerAndBransch;