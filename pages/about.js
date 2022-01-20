import Head from 'next/head'
import Some from '../components/some'
import Image from 'next/image'
import styles from '../styles/About.module.scss'

const About = () => {
  return (
    <>
      <Head>
        <title>Techonomic - OM OSS</title>
        <meta
          name='description'
          content='Meta description for the about page'
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.aboutContainer}>
          <div className={styles.textContainer}>
            <h2>Om oss</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet!
              <br />
              <br />
              Frågor? Prata med någon av våra experter!
            </p>
          </div>
          <div className={styles.about}>
            <div className={styles.bild}>
              <Image
                src='/images/about.png'
                alt='bild'
                width='422'
                height='318'
              />
            </div>
            <div className={styles.some}>
              <div className={styles.padding}>
                <p>Thobias Granström</p>
                <h4>thobias@techonomic.se</h4> <h4>0700 - 00 00 00</h4>
                <div className={styles.paddingTop}>
                  <Some facebook='' linkedIn='' instagram='' />
                </div>
              </div>
              <div className={styles.padding}>
                <p>Jonatan Brekke</p>
                <h4>jonatan@techonomic.se</h4> <h4>0768 - 58 03 65</h4>
                <div className={styles.paddingTop}>
                  <Some facebook='' linkedIn='' instagram='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
