import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Nav.module.scss'
import { useState } from 'react'
import PurpleButton from './buttons'

const Navbar = () => {
  const [active, setActive] = useState(false)
  return (
    <>
      <div className={styles.row}>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width='120' height='18' />
        </Link>
        <div className={styles.menuDesktop}>
          <Link href='/'>HEM</Link>
          <Link href='/abonnemang'>ABONNEMANG</Link>
          <Link href='/branscher'>BRANSCHER</Link>
          <Link href='/about'>OM OSS</Link>
          <Link href='/kontakta'>KONTAKT</Link>
          <PurpleButton text='boka möte'/>
        </div>
      </div>
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
              Frågor? Prata med någon av våra experter
              <br />
              <br />
              <br />
              Facebook Linkedin Instagram
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
