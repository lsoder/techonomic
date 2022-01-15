import Image from 'next/image'
import styles from '../styles/Hero.module.scss'
import { ButtonSm, ButtonLg, ButtonLgBlue, ButtonSmBlue } from './buttons'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { style } from '@mui/system'
// import Lottie from "lottie-react";
// import animation from "../lottie/gear.json"
// import animation2 from "../lottie/test3.json"
// import animation3 from "../lottie/test2.json"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.box1}>
          <div className={styles.imageMobile}>
            <Image
              src='/illustration.png'
              alt='bild'
              width='190'
              height='100'
            />
          </div>

          <h1>
            Personlig konsult, rådgivning och bokföring på abonnemang <br />
            <span className={styles.h1blue}>- helt enkelt.</span>
          </h1>

          {/* Below code is hidden on mobile */}

          <div className={styles.hideMobile}>
            <ButtonLgBlue href='/' text='Kontakta oss' />
            <h6>Frågor? Prata med någon av våra experter!</h6>
          </div>
        </div>

        {/*         <div className={styles.box2}>
          {/* <Lottie animationData={animation3}/> 
        </div> */}
      </div>

      <div className={styles.mobile}>
        <ButtonSmBlue href='/' text='Boka möte' />
        <h6>Frågor? Prata med någon av våra experter!</h6>
      </div>
      <div className={styles.centered}>
        <KeyboardArrowDownOutlinedIcon />
      </div>
    </div>
  )
}

export default Hero
