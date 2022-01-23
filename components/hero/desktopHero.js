import styles from '../hero/Hero.module.scss'
import { motion } from 'framer-motion'
import { container3, item } from '../../motion/motion'
import { ButtonLgBlue } from '../buttons'

const DesktopHero = () => {
  return (
    <div className={styles.hideMobile}>
      <motion.div variants={container3} initial='hidden' animate='show'>
        <motion.div variants={item} size={50}>
          <ButtonLgBlue href='/' text='Kontakta oss' />
        </motion.div>
      </motion.div>
    </div>
  )
}
export default DesktopHero
