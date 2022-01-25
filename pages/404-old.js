import { ButtonLg, ButtonSm } from '../components/buttons'
import styles from '../styles/404.module.scss'
import { motion } from 'framer-motion'
import { container, container2, container3, item } from '../motion/motion'
import Head from 'next/head'

import Lottie from 'lottie-react'
import errorImage from '../lottie/404.json'
import FadeIn from '../motion/fadeIn';

const MyCustom404Page = () => {
  return (
    <>
      <Head>
        <title>Techonomic - 404 sida</title>
        {/*  <meta
          name='description'
          content='Meta description for the index page'
        /> */}
      </Head>
      <div className={styles.container404}>
        <FadeIn>
        <Lottie
          className={styles.animation}
          animationData={errorImage}></Lottie>
        <div>
              <h1>Oops något gick fel..</h1>
              <h3>
                Antingen har vi klantat till det eller så existerar inte denna
                sida :(
              </h3>
              <div className={styles.mobile}>
                <ButtonSm href='/' text='Tillbaka till Techonomic' />
              </div>
              <div className={styles.desktop}>
                <ButtonLg href='/' text='Tillbaka till Techonomic' />
              </div>
        </div>
        </FadeIn>
      </div>
    </>
  )
}

export default MyCustom404Page
