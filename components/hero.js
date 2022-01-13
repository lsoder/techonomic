import Image from 'next/image'
import styles from '../styles/Hero.module.scss'
import PurpleButton, { BlackButton } from './buttons'
import { ButtonSm, ButtonLg } from './buttonNew'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import Lottie from "lottie-react";
import animation from "../lottie/gear.json"
import animation2 from "../lottie/test3.json"
import animation3 from "../lottie/test2.json"

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
            Bokföring på abonnemang, <br/> helt enkelt .
          </h1>

          {/* Below code is hidden on mobile */}

          <div className={styles.hideMobile}>
            <ButtonSm href='/' text='Kontakta oss' />
          </div>
        </div>

        <div className={styles.box2}>
          <Lottie animationData={animation3}/>
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
