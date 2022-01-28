import Navbar from '../nav/nav'
import Footer from '../footer/footer'
import styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}
