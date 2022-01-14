import Layout from '../components/layout'
import '../styles/globals.scss'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
