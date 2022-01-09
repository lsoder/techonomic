import styles from '../styles/Contact.module.scss'
import ContactCard from './contactCard'
import Some from './some';

const Section4 = () => {
  return (
    <div className={styles.container}>
      <h2>Kontakta oss</h2>
      <div className={styles.textContainer}>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet!
          <br />
          <br />
          Frågor? Prata med någon av våra experter!
        </p>
      </div>
      <div className={styles.cardContainer}>
        <ContactCard
          image='/avatar-male.png'
          name='Namn Efternamn'
          mail='mail@mail.com'
          phone='073 000000'
          facebook='https://www.facebook.com/'
          linkedIn='https://www.linkedIn.com/'
          instagram='https://www.instagram.com/'
        />
        <ContactCard
          image='/avatar-male.png'
          name='Namn Efternamn'
          mail='mail@mail.com'
          phone='073 000000'
          facebook='https://www.facebook.com/'
          linkedIn='https://www.linkedIn.com/'
          instagram='https://www.instagram.com/'
        >
        </ContactCard>
      </div>
    </div>
  )
}

export default Section4
