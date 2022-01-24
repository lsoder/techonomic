import Head from 'next/head';
import { ButtonSm, ButtonSmBlue } from '../components/buttons';
import { filledPlus } from '../components/coloredIcons';
import SubscriptionCardBasic, {
  SubscriptionCardExtra,
} from '../components/subscriptionCards/subscriptionCards';
import SubscriptionDesktop from '../components/subscriptionDesktop/subscriptionDesktop';
import styles from '../styles/Abonnemang.module.scss';
import Image from 'next/image';
import FadeIn from '../motion/fadeIn';

const Abonnemang = () => {
  return (
    <>
      <Head>
        <title>Techonomic - Abonnemang</title>

        <meta
          name='description'
          content='Vi levererar en heldigitaliserad redovisningslösning till en fast kostnad. Inga extra kostnader för uppstart eller andra dolda avgifter. Utan bindningstid och uppsägningstid - flexibelt och enkelt. '
        />
      </Head>
      {/* <div className={styles.subscriptionWrapperMobile}>
        <div>
          <h2>Abonnemang</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <SubscriptionCardBasic />
        <SubscriptionCardExtra />

        <i>
          (Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore.)
        </i>
        <div className={styles.center}>
          <ButtonSmBlue href='/kontakta' text='Kontakta oss' />
        </div>
      </div> */}
      <div className={styles.subscriptionWrapperDesktop}>
        <FadeIn>
          <div className={styles.box1}>
            <div className={styles.infoText}>
              <h2>Löpande bokföring på abonnemang</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h3>Fr. 1500kr/mån.</h3>
            </div>
            <div className={styles.imageDiv}>
              <Image
                src="/images/fortnox.jpeg"
                alt="bild på oss i fortnox tidning"
                width="1616"
                height="1216"
              />
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <SubscriptionDesktop />
        </FadeIn>
        <FadeIn>
        <div className={styles.content}>
          <div className={styles.box2}>
            <h2>
              <span>Plustjänster</span>
            </h2>
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
          <div className={styles.box3}>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <i>
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore.
            </i>
            <ButtonSm href="/kontakta" text="Boka demo" />
          </div>
        </div>
        </FadeIn>
      </div>
    </>
  );
};

export default Abonnemang;
