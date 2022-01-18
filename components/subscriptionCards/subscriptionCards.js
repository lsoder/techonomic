
import styles from './SubscriptionCard.module.scss';
import { ButtonSm } from '../buttons';
import { bull } from '../coloredIcons';
import { plus } from '../coloredIcons';

const SubscriptionCard = (props) => {
  const Children = props.children;
  return (
    <div className={styles.cardContainer}>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
      <h2>{props.price}</h2>
      <div className={styles.cardContent}>{Children}</div>
      <i>
        {props.underText}
      </i>
    </div>
  );
};

const SubscriptionCardBasic = () => {
  return (
    <SubscriptionCard
    heading="Abonnemang"
    price="Fr. 1500kr/mån"
    text=""
    link="/abonnemang"
    underText="Detta ingår i vårt grundpaket, vi erhåller
  även andra tjänster att lägga till."
  >
    <div className={styles.listGrid}>
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
    <div className={styles.listItem}>
      {bull} <p>Ingen bindningstid</p>
    </div>
    </div>
    <div className={styles.buttonDiv}>
      <ButtonSm href="/abonnemang" text="Läs mer" />
    </div>
  </SubscriptionCard>
  )
}
export default SubscriptionCardBasic;

export const SubscriptionCardExtra = () => {
  return (
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
  )
};

