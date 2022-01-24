import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Techonomic - Sveriges första redovisningsabonnemang</title>
        <meta
          name='description'
          content='Meta description for the index page'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
