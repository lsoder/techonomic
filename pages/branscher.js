import styles from '../styles/Branscher.module.scss';
import CustomerCard, { CustomerCardReverse } from '../components/customerCards';
import Head from 'next/head';
import { gear } from '../components/coloredIcons';

const Branscher = () => {
  return (
    <>
      <Head>
        <title>Techonomic - BRANSCHER</title>
        <meta
          name="description"
          content="Meta description for the About page"
        />
      </Head>
      <div className={styles.container}>
        <h2>Branscher</h2>
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
        <div className={styles.content}>
          <div className={styles.customerDiv}>
            <CustomerCard
              image="/images/petter.png"
              comment="Jag tycker att techonomic tillför exakt det jag behöver i min bokföring."
              name="Petter, mäklare"
            />
            <CustomerCardReverse
              image="/images/ola.png"
              comment="Snabbt och effektivt, dem har gjort underverk för mig och min firma."
              name="Nils, målare"
            />
          </div>
          <div className={styles.branscherDiv}>
            <h3>Några branscher vi specificerat oss på*</h3>
            <div className={styles.branschList}>
              <div className={styles.listItem}>
                {gear} <p>Mäklare</p>
              </div>
              <div className={styles.listItem}>
                {gear} <p>Utvecklare</p>
              </div>
              <div className={styles.listItem}>
                {gear} <p>Influencers</p>
              </div>
              <div className={styles.listItem}>
                {gear} <p>Tatuerare</p>
              </div>
              <div className={styles.listItem}>
                {gear} <p>Snickare</p>
              </div>
              <div className={styles.listItem}>
                {gear} <p>Frisöres</p>
              </div>
            </div>
            <i>
              * tveka inte att höra av dig om du tillhör någon annan bransch, vi
              tror på det bla bla lba
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branscher;
