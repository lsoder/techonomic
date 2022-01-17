import styles from '../styles/Contact.module.scss'
import ContactCard from '../components/contactCard/contactCard'
import Head from 'next/head'

const Kontakta = () => {
  return (
    <>
      <Head>
        <title>Techonomic - KONTAKTA OSS</title>
        <meta
          name='description'
          content='Meta description for the contact page'
        />
      </Head>
      <div className={styles.container}>
        <h2>Kontakta oss</h2>
        <div className={styles.textContainer}>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet!
            <br />
            <br />
            Frågor? Prata med någon av våra experter!
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
