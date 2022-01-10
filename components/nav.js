import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Nav.module.scss'
import ButtonSm, { ButtonLg } from './buttonNew'
import Hamburger from './hamburger'

const Navbar = () => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.logoStyling}>
          <Link href='/'>
            <Image src='/logo.png' alt='logo' width='120' height='18' />
          </Link>
        </div>
        <div className={styles.menuDesktop}>
          <Link href='/'>HEM</Link>
          <Link href='/abonnemang'>ABONNEMANG</Link>
          <Link href='/branscher'>BRANSCHER</Link>
          <Link href='/about'>OM OSS</Link>
          <Link href='/kontakta'>KONTAKT</Link>

          <ButtonSm text='Boka möte' />
        </div>
        {/* Below show only on mobile */}
        <Hamburger />
      </div>
    </>
  )
}

export default Navbar
