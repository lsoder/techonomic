import Image from 'next/image'
import styles from '../styles/Hero.module.scss'
import PurpleButton, { BlackButton } from './buttons'
import { ButtonSm, ButtonLg } from './buttonNew'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/*       <h1>Techonomic</h1>
       */}
      <div className={styles.container}>
        <div className={styles.box1}>
          <div className={styles.imageMobile}>
            <Image
              src='/illustration.png'
              alt='bild'
              width='250'
              height='150'
            />
          </div>

          <h1>
            Duis aute irure dolor in reprehenderit in voluptate velit esse!
          </h1>

          {/* Below code is hidden on mobile */}

          <div className={styles.hideMobile}>
            <ButtonSm href='/' text='Kontakta oss' />
          </div>
        </div>

        <div className={styles.box2}>
          <Image src='/illustration.png' alt='bild' width='500' height='300' />
        </div>
      </div>
      <div className={styles.hide}>
        <KeyboardArrowDownOutlinedIcon />
      </div>
      <div className={styles.mobile}>
        <ButtonSm href='/' text='Boka möte' />

        <div className={styles.underButtonLink}>
          <h6>Frågor? Prata med någon av våra experter!</h6>
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Hero
