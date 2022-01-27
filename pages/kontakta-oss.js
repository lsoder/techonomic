import Head from 'next/head'
import styles from '../styles/Kontakta.module.scss'
import ContactCard from '../components/contactCard/contactCard'
import FadeIn from '../motion/fadeIn'
import jonatan from '../public/images/jonatan1.png'
import thobias from '../public/images/thobias1.png'
const Kontakt = () => {
  return (
    <>
      <Head>
        <title>Techonomic - Sveriges första redovisningsabonnemang</title>

        <meta
          name='description'
          content='Meta description for the contact page'
        />
      </Head>
      <FadeIn>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h2>Kontakta oss</h2>
            <p>
              Med fokus på personligt bemötande och en heldigitaliserad
              redovisningslösning blir Techonomic din ekonomiavdelning - som
              hjälper dig ta rätt beslut. Ta kontakt med oss så bokar vi in ett
              personligt möte, utan kostnad.
              <br /> <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
              <br />
              <br />
              Vill ni veta mer? Prata med någon av våra experter!
            </p>
          </div>
          <div className={styles.cardContainer}>
            <ContactCard
              image={jonatan}
              name='Jonatan Brekke'
              mail='jonatan@techonomic.se'
              phone='073 000000'
              href='https://calendly.com/techonomic-jonatan'
            />
            <ContactCard
              image={thobias}
              name='Thobias Granström'
              mail='thobias@techonomic.se'
              phone='073 000000'
              href='https://calendly.com/thobias-techonomic'
            />
          </div>
        </div>
      </FadeIn>
    </>
  )
}

export default Kontakt
