import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Nav.module.scss'
import { ButtonSm } from './buttons'
import Hamburger from './hamburger'

const Navbar = () => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.logoStyling}>
          <Link href='/' passHref>
            <Image src='/logo.png' alt='logo' width='180' height='27' />
          </Link>
        </div>
        <div className={styles.menuDesktop}>
          <Link href='/'>HEM</Link>
          <Link href='/abonnemang'>ABONNEMANG</Link>
          <Link href='/branscher'>BRANSCHER</Link>
          <Link href='/about'>OM OSS</Link>
          <Link href='/kontakta'>KONTAKT</Link>

          <ButtonSm href='/' text='Boka möte' />
        </div>
        {/* Below show only on mobile */}
        <Hamburger />
      </div>
    </>
  )
}

export default Navbar
