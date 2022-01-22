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
            redovisningslösning blir Techonomic din ekonomiavdelning – som
            hjälper dig ta rätt beslut. Ta kontakt med oss så bokar vi in ett
            personligt möte, utan kostnad.
          </p>
        </div>
        <div className={styles.footerMenuContainer}>
          <div className={styles.footerMenu}>
            <div className={styles.desktopStyle}>
              <ul className={styles.desktopUl}>
                <li className={styles.desktopLi}>
                  <Image src='/logo.png' alt='logo' width='120' height='18' />
                </li>
                <li>Adress 1234567</li>
                <li>123 45 Göteborg</li>
              </ul>
            </div>
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
              <li>info@techonomic.se</li>
              <Some facebook='' linkedIn='' instagram='' />
            </ul>
          </div>
        </div>
        <div className={styles.logoFooter}>
          <Image src='/logo.png' alt='logo' width='120' height='18' />
        </div>
        <p>Ⓒ 2022 - Techonomic</p>
      </div>
      <div className={styles.bottom}>
        <p>Powered by Linda & Amanda</p>
      </div>
    </>
  )
}

export default Footer
