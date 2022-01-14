import Head from 'next/head';
import { ButtonSm } from '../components/buttons';
import { filledPlus } from '../components/coloredIcons';
import SubscriptionCardBasic, {SubscriptionCardExtra} from '../components/subscriptionCards';
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
        <SubscriptionCardBasic />
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <SubscriptionCardExtra/>
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
              <div className={styles.listItem}>
                {filledPlus}
                <p>Betalning av lev.fakturor</p>
              </div>
              <div className={styles.listItem}>
                {filledPlus}
                <p>Månadsmoms</p>
              </div>
              <div className={styles.listItem}>
                {filledPlus}
                <p>Löner</p>
              </div>
              <div className={styles.listItem}>
                {filledPlus}
                <p>Periodisk sammanställning</p>
              </div>
              <div className={styles.listItem}>
                {filledPlus}
                <p>Årstjänster</p>
              </div>
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
