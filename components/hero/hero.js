import styles from '../hero/Hero.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { container, container2, container3, item } from '../../motion/motion'
import { ButtonSmBlue } from '../buttons'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import DesktopHero from './desktopHero'
import Lottie from 'lottie-react'
import animation from '../../lottie/background.json'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Lottie className={styles.animation} animationData={animation}></Lottie>
      <div className={styles.container}>
        <div className={styles.box1}>
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
          <DesktopHero />
        </div>
      </div>
      <div className={styles.mobile}>
        <motion.div variants={container3} initial='hidden' animate='show'>
          <motion.div variants={item} size={50}>
            <ButtonSmBlue href='https://calendly.com/techonomic-jonatan' text='Boka möte' />
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.centered}>
        <motion.div variants={container3} initial='hidden' animate='show'>
          <motion.div variants={item} size={50}>
            <Link href='#tech' scroll={false}>
              <a>
                <KeyboardArrowDownOutlinedIcon />
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
