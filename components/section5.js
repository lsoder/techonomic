import SubscriptionCard from './subscriptionCard';
import { bull } from './coloredIcons';
import { plus } from './coloredIcons';

import styles from '../styles/Section1.module.scss';
import { ButtonSm } from './buttonNew';

const Section5 = () => {
  return (
    <>
      <h2 className={styles.hideLarge}>Abonnemang</h2>
      <div className={styles.hideLarge}>
        <SubscriptionCard
          heading="Grundpaket"
          price="Fr. 1500kr/mån"
          link="/abonnemang"
          underText="Detta ingår i vårt grundpaket, vi erhåller
        även andra tjänster att lägga till."
        >
          <p>{bull} Personlig konsult</p>
          <p>{bull} Rådgivning</p>
          <p>{bull} Löpande bokföring</p>
          <p>{bull} Kvartals-/års-moms</p>
          <p>{bull} Arbetsgivardeklaration</p>
          <p>{bull} Programvarukostnad</p>
          <p>{bull} Grafisk rapporteringsverktyg</p>
          <div className={styles.buttonDiv}>
            <ButtonSm href="/abonnemang" text="Läs mer" />
          </div>
        </SubscriptionCard>
        <SubscriptionCard
          heading="Plustjänster"
          price=" "
          link="/abonnemang"
          underText="Dessa tillägg man kan lägga till i abonnemanget."
        >
          <p>{plus} Betalning av lev.fakturor</p>
          <p>{plus} Månadsmoms</p>
          <p>{plus} Löner</p>
          <p>{plus} Periodisk sammanställning</p>
          <p>{plus} Årstjänster</p>
        </SubscriptionCard>
      </div>
    </>
  );
};

export default Section5;
