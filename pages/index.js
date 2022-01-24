import Head from 'next/head'
import Hero from '../components/hero/hero'
import styles from '../styles/Home.module.scss'
import Section1 from '../components/section1/section1'
import Section2 from '../components/section2/section2'
import Section3 from '../components/section3/section3'
import Section4 from '../components/section4/section4'
import Section5 from '../components/section5/section5'
// import Section6 from '../components/section5/section6'

export default function Home({ content }) {
  return (
    <div>
      <Head>
        <title>Techonomic - Sveriges första redovisningsabonnemang</title>
        <meta
          name='description'
          content='Meta description for the index page'
        />
      </Head>
      <main className={styles.main}>
        <Hero />
        <section1 id='tech'>{content}</section1>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        {/* <Section6 /> */}
      </main>
    </div>
  )
}
