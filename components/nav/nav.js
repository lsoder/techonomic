import Link from 'next/link'
import Image from 'next/image'
import styles from '../nav/Nav.module.scss'
import { ButtonSm, ButtonSmBlue } from '../buttons'
import Hamburger from '../hamburger/hamburger'

const Navbar = () => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.logoStyling}>
          <Link href='/' passHref>
            <Image src='/logo.png' alt='logo' width='130' height='19' />
          </Link>
        </div>
        <div className={styles.menuDesktop}>
          <Link href='/'>HEM</Link>
          <Link href='/abonnemang'>ABONNEMANG</Link>
          <Link href='/branscher'>BRANSCHER</Link>
          <Link href='/about'>OM OSS</Link>
          <Link href='/kontakta'>KONTAKT</Link>

          <ButtonSmBlue href='/' text='Boka demo' />
        </div>
        {/* Below show only on mobile */}
        <Hamburger />
      </div>
    </>
  )
}

export default Navbar
