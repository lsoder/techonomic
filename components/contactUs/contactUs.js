import { ButtonLg } from '../buttons'
import styles from './ContactUs.module.scss'

const ContactUs = () => {
  return (
    <div className={styles.containerContact}>
      {/* <Image src='/illustration.png' alt='bild' width='250' height='150' /> */}
      <h2>Bli kontaktad av oss?</h2>
      <div className={styles.textContainer}>
        <p>
          Teknik, ekonomi och personliga relationer driver Techonomic framåt. Vi
          är övertygade om att kombinationen av detta är rätt väg att gå -
          kryddat med mycket glädje. Vi har skapat ett redovisningsabonnemang
          där vi blir din digitala ekonomiavdelning. <br />
          <br />
          Det ska vara enkelt, personligt och skräddarsytt för dig och din
          verksamhet!
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
        0768 - 58 03 65
      </h4>
    </div>
  )
}

export default ContactUs
