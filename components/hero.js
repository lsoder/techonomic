import Image from 'next/image'
import styles from '../styles/Hero.module.scss'
import { motion } from 'framer-motion'
import { container, container2, container3, item } from '../motion/motion'
import { ButtonLgBlue, ButtonSmBlue } from './buttons'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

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
            <motion.div variants={container} initial='hidden' animate='show'>
              <motion.div variants={item} size={50}>
                Personlig konsult, rådgivning och bokföring på abonnemang <br />
              </motion.div>
            </motion.div>
            <motion.div variants={container2} initial='hidden' animate='show'>
              <motion.div variants={item} size={50}>
                <span className={styles.h1blue}>- helt enkelt.</span>
              </motion.div>
            </motion.div>
          </h1>
          {/* Below code is hidden on mobile */}

          <div className={styles.hideMobile}>
            <motion.div variants={container3} initial='hidden' animate='show'>
              <motion.div variants={item} size={50}>
                <ButtonLgBlue href='/' text='Kontakta oss' />
                <h6>Frågor? Prata med någon av våra experter!</h6>
              </motion.div>
            </motion.div>
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
        <motion.div whileHover={{ scale: 2.1 }} whileTap={{ scale: 1 }}>
          <KeyboardArrowDownOutlinedIcon />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
