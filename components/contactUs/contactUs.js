import { ButtonLg } from '../buttons'
import styles from './ContactUs.module.scss'

const ContactUs = () => {
  return (
    <div className={styles.containerContact}>
      {/* <Image src='/illustration.png' alt='bild' width='250' height='150' /> */}
      <h2>Bli kontaktad av oss?</h2>
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
        {/*   <button className={styles.buttonStyle} type='submit'>
          Skicka
        </button> */}
        <div className={styles.padding}>
          <ButtonLg href='/' text='Skicka' />
        </div>
      </form>
      <h4>
        <br></br>
        info@techonomic.se <br />
        073 - 00 00 00
      </h4>
    </div>
  )
}

export default ContactUs
