import Head from 'next/head';
import styles from '../styles/Kontakta.module.scss';
import ContactCard from '../components/contactCard/contactCard';
const Kontakt = () => {
  return (
    <>
      <Head>
        <title>Techonomic - Sveriges första redovisningsabonnemang</title>

        <meta
          name="description"
          content="Meta description for the contact page"
        />
      </Head>
      <div className={styles.container}>
          <div className={styles.textContainer}>
              <h2>Kontakta oss</h2>
            <p>
              Med fokus på personligt bemötande och en heldigitaliserad
              redovisningslösning blir Techonomic din ekonomiavdelning - som
              hjälper dig ta rätt beslut. Ta kontakt med oss så bokar vi in ett
              personligt möte, utan kostnad.
              <br />
              <br />
              Vill ni veta mer? Prata med någon av våra experter!
            </p>
          </div>
          <div className={styles.cardContainer}>
            <ContactCard
              image="/images/jonatan1.png"
              name="Jonatan Brekke"
              mail="jonatan@techonomic.se"
              phone="073 000000"
              href="https://calendly.com/techonomic-jonatan"
            />
            <ContactCard
              image="/images/thobias1.png"
              name="Thobias Granström"
              mail="thobias@techonomic.se"
              phone="073 000000"
              href="https://calendly.com/thobias-techonomic"
            />
          </div>
      </div>
    </>
  );
};

export default Kontakt;
