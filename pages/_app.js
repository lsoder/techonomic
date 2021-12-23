import Navbar from '../components/nav'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return(
    <>
  <Navbar />
<Component {...pageProps} />
    </>
  )
}

export default MyApp
