import Navbar from '../nav/nav'
import Footer from '../footer/footer'
//import Box from '../motion/cursor';
import styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {/* <Box> */}
      <main className={styles.main}>{children}</main>
      <Footer />
      {/*  </Box> */}
    </>
  )
}
