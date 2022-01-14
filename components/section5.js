import SubscriptionCard from './subscriptionCard';
import { bull } from './coloredIcons';
import { plus } from './coloredIcons';

import styles from '../styles/Section1.module.scss';
import { ButtonSm } from './buttonNew';
import SubscriptionDesktop from './subscriptionDesktop';
import Link from 'next/link';

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
          price=" "
          link="/abonnemang"
          underText="Dessa tillägg man kan lägga till i abonnemanget."
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
        </SubscriptionCard>
      </div>
      <div className={styles.subscriptionWrapper}>
        <h2>Abonnemang</h2>
        <h3>Fr. 1500kr/mån</h3>
        <SubscriptionDesktop />
        <i>
          Vill du veta mer om vårt abonnemang och övriga tjänster klicka{' '}
          <Link href="/abonnemang" passHref>
            <b>här.</b>
          </Link>
        </i>
      </div>
    </>
  );
};

export default Section5;
