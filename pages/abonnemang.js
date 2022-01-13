import Head from 'next/head';
import { ButtonSm } from '../components/buttonNew';
import { bull, plus, filledPlus } from '../components/coloredIcons';
import SubscriptionCard from '../components/subscriptionCard';
import SubscriptionDesktop from '../components/subscriptionDesktop';
import styles from '../styles/Abonnemang.module.scss';

const Abonnemang = () => {
  return (
    <>
      <Head>
        <title>Techonomic - ABONNEMANG</title>
        <meta
          name="description"
          content="Meta description for the About page"
        />
      </Head>
      <div className={styles.subscriptionWrapperMobile}>
        <h2>Abonnemang</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        </p>
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
        </SubscriptionCard>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
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
        <i>
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </i>
        <ButtonSm href="/kontakta" text="Ta kontakt med oss nu" />
      </div>
      <div className={styles.subscriptionWrapperDesktop}>
        <h2>Löpande bokföring på abonnemang</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
          <h3>Fr. 1500kr/mån.</h3>
        </p>
        <h2>Detta ingår i paketet</h2>
        <SubscriptionDesktop />
        <div className={styles.content}>
          <div className={styles.box1}>
            <h2>Plustjänster</h2>
            <div>
              <p>{filledPlus} Betalning av lev.fakturor</p>
              <p>{filledPlus} Månadsmoms</p>
              <p>{filledPlus} Löner</p>
              <p>{filledPlus} Periodisk sammanställning</p>
              <p>{filledPlus} Årstjänster</p>
            </div>
          </div>
          <div className={styles.box2}>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <i>
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </i>
        <ButtonSm href="/kontakta" text="Ta kontakt med oss nu" />
      </div>
    </>
  );
};

export default Abonnemang;
