import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className={styles.footerMenuContainer}>
          <div className={styles.footerMenu}>
            <ul>
              <li>MENY</li>
              <li>
                <Link href='/abonnemang'>Abonnemang</Link>
              </li>
              <li>
                <Link href='/branscher'>Branscher</Link>
              </li>
              <li>
                <Link href='/about'>Om oss</Link>
              </li>
            </ul>
            <ul>
              <li>KONTAKT</li>
              <li>073- 00 00 00</li>
              <li>info@techonomic</li>
            </ul>
          </div>
        </div>
        <Image src='/logo.png' alt='logo' width='120' height='18' />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={styles.bottom}>
        <p>Powered by Linda & Amanda</p>
      </div>
    </>
  )
}

export default Footer
