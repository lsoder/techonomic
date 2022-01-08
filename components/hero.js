import Image from 'next/image'
import styles from '../styles/Hero.module.scss'
import PurpleButton, { BlackButton } from './buttons'
import ButtonSm, { ButtonLg } from './buttonNew'

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/*       <h1>Techonomic</h1>
       */}
      <div className={styles.box1}>
        <div className={styles.imageMobile}>
          <Image src='/illustration.png' alt='bild' width='250' height='150' />
        </div>

        <h1>Duis aute irure dolor in reprehenderit in voluptate velit esse!</h1>

        <div className={styles.hideMobile}>
          {/*           <BlackButton text='Kontakta oss!' />
           */}{' '}
          <ButtonSm text='Kontakta oss' />
        </div>
      </div>
      <div className={styles.box2}>
        <Image src='/illustration.png' alt='bild' width='500' height='300' />
      </div>
      <div className={styles.mobile}>
        {/*         <PurpleButton text='Boka möte' />
         */}
        <ButtonSm text='Boka möte' />

        <div className={styles.underButtonLink}>
          <h6>Frågor? Prata med någon av våra experter!</h6>
        </div>
      </div>

      {/* <button className={styles.buttonStyle}>Boka möte</button> */}
      {/* <BlackButton text='Boka möte' /> */}
    </div>
  )
}

export default Hero
