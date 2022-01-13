import styles from '../styles/Section1.module.scss';
import { BlackButton } from './buttons';
import { ButtonSm } from './buttonNew';
import SubscriptionCard from './subscriptionCard';
import { bull } from './coloredIcons';
import { plus } from './coloredIcons';

const Section2 = () => {
  return (
    <>
      <div className={styles.container2}>
        <div className={`${styles.bookMeetingContent}`}>
          <h2>Boka ett möte med oss</h2>
          <ButtonSm href="/" text="Boka möte" />
          <p>Vi väntar på just dig!</p>
        </div>
      </div>
      <div className={styles.SubscriptionCardDesktop}>
        <SubscriptionCard
          heading="Grundpaket"
          price="Fr. 1500kr/mån"
          text=""
          link="/abonnemang"
          underText="Detta ingår i vårt grundpaket, vi erhåller
        även andra tjänster att lägga till."
        >
          <div className={styles.listItem}>
            {bull} <p>Personlig konsult</p>
          </div>
          <div className={styles.listItem}>
            {bull} <p>Rådgivning</p>
          </div>
          <div className={styles.listItem}>
            {bull} <p>Löpande bokföring</p>
          </div>
          <div className={styles.listItem}>
            {bull} <p>Kvartals-/års-moms</p>
          </div>
          <div className={styles.listItem}>
            {bull} <p>Arbetsgivardeklaration</p>
          </div>
          <div className={styles.listItem}>
            {bull} <p>Programvarukostnad</p>
          </div>
          <div className={styles.listItem}>
            {bull} <p>Grafisk rapporteringsverktyg</p>
          </div>
          <div className={styles.buttonDiv}>
            <ButtonSm href="/abonnemang" text="Läs mer" />
          </div>
        </SubscriptionCard>
        <SubscriptionCard
          heading="Plustjänster"
          price=""
          text="Vi har plus-tjänster som du kan lägga till i ditt abonnemang. Vi har plus-tjänster som du kan lägga till i ditt abonnemang. "
          link="/abonnemang"
          underText="Läs mer om våra priser, plustjänster och abonnemang?"
        >
          <div className={styles.listItem}>
            {plus}
            <p>Betalning av lev.fakturor</p>
          </div>
          <div className={styles.listItem}>
            {plus}
            <p>Månadsmoms</p>
          </div>
          <div className={styles.listItem}>
            {plus}
            <p>Löner</p>
          </div>
          <div className={styles.listItem}>
            {plus}
            <p>Periodisk sammanställning</p>
          </div>
          <div className={styles.listItem}>
            {plus}
            <p>Årstjänster</p>
          </div>
          <div className={styles.buttonDiv}>
            <ButtonSm href="/abonnemang" text="Läs mer" />
          </div>
        </SubscriptionCard>
      </div>
    </>
  );
};

export default Section2;
