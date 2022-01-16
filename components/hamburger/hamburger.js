import Link from 'next/link'
import Image from 'next/image'
import Some from '../some'
import styles from '../hamburger/Hamburger.module.scss'
import { useState } from 'react'

const Hamburger = () => {
  const [active, setActive] = useState(false)
  return (
    <div onClick={() => setActive(!active)} className={styles.wrapper}>
      <div className={active ? styles.activeHamburger : styles.hamburger} />
      <div className={active ? styles.activeSidenav : styles.sidenav}>
        <ul className={styles.ulMenu}>
          <li>
            <Link href='/'>HEM</Link>
          </li>
          <li>
            <Link href='/abonnemang'>ABONNEMANG</Link>
          </li>
          <li>
            <Link href='/branscher'>BRANSCHER</Link>
          </li>
          <li>
            <Link href='/about'>OM OSS</Link>
          </li>
          <li>
            <Link href='/kontakta'>KONTAKT</Link>
          </li>
        </ul>
        <div className={styles.sidenavFooterContainer}>
          <div className={styles.sidenavFooterContent}>
            <Image src='/logo.png' alt='logo' width='120' height='18' />
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Frågor? Prata med någon av våra experter!
            <div className={styles.padding}>
              <h4>info@techonomic.se</h4> <h4>0700 - 12 34 56</h4>
            </div>
            <Some
              facebook='https://www.facebook.com/'
              linkedIn='https://www.linkedin.com/'
              instagram='https://www.instagram.com/'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
