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
          <Link href='/' passHref>
            <a>HEM</a>
          </Link>
          <Link href='/abonnemang' passHref>
            <a>ABONNEMANG</a>
          </Link>
          <Link href='/branscher' passHref>
            <a>BRANSCHER</a>
          </Link>
          <Link href='/om-oss' passHref>
            <a>OM OSS</a>
          </Link>
          <Link href='/kontakta-oss' passHref>
            <a>KONTAKT</a>
          </Link>

          <ButtonSm
            href='https://calendly.com/techonomic-jonatan'
            text='Boka demo'
          />
        </div>
        <Hamburger />
      </div>
    </>
  )
}

export default Navbar
