import Image from 'next/image'
import styles from '../styles/ContactUs.module.scss'

const Section6 = () => {
  return (
    <div className={styles.containerContact}>
      <Image src='/logo.png' alt='logo' width='120' height='18' />

      <h1>Bli kontaktad av oss?</h1>
      <div className={styles.textContainer}>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit! <br />
          <br />
          Sed do eiusmod tempor.
        </p>
      </div>
      <form>
        <input id='name' placeholder='Ditt namn' type='text' required />
        <input
          id='name'
          placeholder='dinmail@example.com'
          type='text'
          required
        />
        <button className={styles.buttonStyle} type='submit'>
          Skicka
        </button>
      </form>
      <h4>
        info@techonomic.se <br />
        073 - 00 00 00
      </h4>
    </div>
  )
}

export default Section6
