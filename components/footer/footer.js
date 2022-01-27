import Link from 'next/link'
import Image from 'next/image'
import Some from '../some'
import styles from '../footer/Footer.module.scss'

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <p>
            Med fokus på personligt bemötande och en heldigitaliserad
            redovisningslösning blir Techonomic din ekonomiavdelning.
          </p>
        </div>
        <div className={styles.footerMenuContainer}>
          <div className={styles.footerMenu}>
            <div className={styles.desktopStyle}>
              <ul className={styles.desktopUl}>
                <li className={styles.desktopLi}>
                  <Image
                    src='/vit-logo.png'
                    alt='logo'
                    width='120'
                    height='18'
                  />
                </li>
                <li>Kungsportsavenyen 21</li>
                <li>411 36 Göteborg</li>
              </ul>
            </div>
            <ul>
              <li>MENY</li>
              <li>
                <Link href='/abonnemang' passHref>
                  <a>Abonnemang</a>
                </Link>
              </li>
              <li>
                <Link href='/branscher' passHref>
                  <a>Branscher</a>
                </Link>
              </li>
              <li>
                <Link href='/om-oss' passHref>
                  <a>Om oss</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>KONTAKT</li>
              <li>0768 - 58 03 65</li>
              <li>info@techonomic.se</li>
              <Some facebook='' linkedIn='' instagram='' />
            </ul>
          </div>
        </div>
        <div className={styles.logoFooter}>
          <Image src='/vit-logo.png' alt='logo' width='120' height='18' />
        </div>
        <div className={styles.footerBottom}>
          <p>Ⓒ 2022 Techonomic - All Rights Are Reserved.</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Powered by Linda & Amanda</p>
      </div>
    </>
  )
}

export default Footer
