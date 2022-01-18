import Navbar from './nav/nav'
import Footer from './footer/footer'
import Box from '../components/cursor';

export default function Layout({ children }) {
  return (
    <>
    <Box>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Box>
    </>
  )
}
