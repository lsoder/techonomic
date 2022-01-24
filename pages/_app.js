import Head from 'next/head'
import Layout from '../components/layout/layout'
import '../styles/globals.scss'

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
