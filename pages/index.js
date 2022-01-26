import Head from 'next/head'
import Hero from '../components/hero/hero'
import Section1 from '../components/section1/section1'
import Section2 from '../components/section2/section2'
import Section3 from '../components/section3/section3'
import Section4 from '../components/section4/section4'
import styles from '../styles/Home.module.scss'

export default function Home({ content }) {
  return (
    <div>
      <Head>
        <title>Techonomic - Sveriges första redovisningsabonnemang</title>
        <meta
          name='description'
          content='Sveriges första redovisningsabonnemang. Digital helhetslösning till en fast kostnad. Techonomic är din ekonomiavdelning- som hjälper dig ta rätt beslut. www.techonomic.se'
        />
      </Head>
      <>
        <Hero />
        <div id='tech' className={styles.tech}>
          {content}
        </div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </>
    </div>
  )
}
