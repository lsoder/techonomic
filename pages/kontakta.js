import styles from '../styles/Contact.module.scss'
import ContactCard from '../components/contactCard/contactCard'
import Head from 'next/head'

const Kontakta = () => {
  return (
    <>
      <Head>
        <title>Techonomic - Kontakta oss</title>
        <meta
          name='description'
          content='Meta description for the contact page'
        />
      </Head>
      <div className={styles.container}>
        <h2>Kontakta oss</h2>
        <div className={styles.textContainer}>
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
            image='/images/jonatan1.png'
            name='Jonatan Brekke'
            mail='jonatan@techonomic.se'
            phone='073 000000'
          />
          <ContactCard
            image='/images/thobias1.png'
            name='Thobias Granström'
            mail='thobias@techonomic.se'
            phone='073 000000'
          />
        </div>
      </div>
    </>
  )
}

export default Kontakta
