import Footer from '../components/footer';
import Navbar from '../components/nav';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
