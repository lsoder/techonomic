import { ButtonLg, ButtonSm } from '../components/buttons'
import styles from '../styles/404.module.scss'
import { motion } from 'framer-motion'
import { container, container2, container3, item } from '../motion/motion'
import Head from 'next/head'

import Lottie from 'lottie-react'
import errorImage from '../lottie/404.json'

const MyCustom404Page = () => {
  return (
    <>
      <Head>
        <title>Techonomic - SIDAN EXISTERAR INTE</title>
        <meta
          name='description'
          content='Meta description for the index page'
        />
      </Head>
      <div className={styles.container404}>
        <Lottie
          className={styles.animation}
          animationData={errorImage}></Lottie>
        <div>
          <motion.div variants={container} initial='hidden' animate='show'>
            <motion.div variants={item} size={50}>
              <h1>Oops något gick fel :(</h1>
            </motion.div>
          </motion.div>
          <motion.div variants={container2} initial='hidden' animate='show'>
            <motion.div variants={item} size={50}>
              <h3>
                Antingen har vi som har klantat till det eller så existerar inte
                denna sida.
              </h3>
            </motion.div>
          </motion.div>
          <motion.div variants={container3} initial='hidden' animate='show'>
            <motion.div variants={item} size={50}>
              <div className={styles.mobile}>
                <ButtonSm href='/' text='Tillbaka till techonomic' />
              </div>
              <div className={styles.desktop}>
                <ButtonLg href='/' text='Tillbaka till techonomic' />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default MyCustom404Page
