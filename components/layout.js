import Navbar from './nav/nav';
import Footer from './footer/footer';
import Box from '../motion/cursor';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box>
        <main>{children}</main>
        <Footer />
      </Box>
    </>
  );
}
