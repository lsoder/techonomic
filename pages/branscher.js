import styles from '../styles/Branscher.module.scss'
import CustomerCard, {
  CustomerCardReverse,
} from '../components/customerCards/customerCards'
import Head from 'next/head'
import { gear } from '../components/coloredIcons'
import BranschCard from '../components/branschCard/branschCard'

import Some from '../components/some'
import Image from 'next/image'
import FadeIn from '../motion/fadeIn'

const Branscher = () => {
  return (
    <>
      <Head>
        <title>Techonomic - Branscher</title>

        <meta
          name='description'
          content='Meta description for the bransch page'
        />
      </Head>
      {/*   <div className={styles.container}>
        <h2>Branscher</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className={styles.content}>
          <div className={styles.customerDiv}>
            <CustomerCard
              image='/images/petter.png'
              comment='Jag tycker att techonomic tillför exakt det jag behöver i min bokföring.'
              name='Petter, mäklare'
            />
            <CustomerCardReverse
              image='/images/ola.png'
              comment='Snabbt och effektivt, dem har gjort underverk för mig och min firma.'
              name='Nils, målare'
            />
          </div>
          <div className={styles.branscherDiv}>
            <h3>Några branscher vi specificerat oss på*</h3>
            <div className={styles.branschList}>
              <p>Mäklare</p>
              <p>Utvecklare</p>
              <p>Influencers</p>
              <p>Tatuerare</p>
              <p>Snickare</p>
              <p>Frisöres</p>
            </div>
            <i>
              * tveka inte att höra av dig om du tillhör någon annan bransch, vi
              kan säkert hitta en lösning för er också!
            </i>
          </div>
        </div>
      </div> */}

      {/* ny kod */}

      <div className={styles.branschContainer}>
        <div className={styles.textContainer}>
          <FadeIn>
            <h2>Branscher som vi jobbar med</h2>
          </FadeIn>
          <FadeIn>
            <p>
              Teknik, ekonomi och personliga relationer driver Techonomic
              framåt. Vi är övertygade om att kombinationen av detta är rätt väg
              att gå - kryddat med mycket glädje. Vi har skapat ett
              redovisningsabonnemang där vi blir din digitala ekonomiavdelning.
              Det ska vara enkelt, personligt och skräddarsytt för dig och din
              verksamhet.
            </p>
          </FadeIn>
          <FadeIn>
            <i> Vill du veta mer? Prata med någon av våra experter!</i>
          </FadeIn>
        </div>
        <div className={styles.bransch}>
          <div className={styles.branscherDiv}>
            <CustomerCard
              image='/images/petter.png'
              comment='Jag tycker att techonomic tillför exakt det jag behöver i min bokföring.'
              name='Petter, mäklare'
            />
            <CustomerCardReverse
              image='/images/ola.png'
              comment='Snabbt och effektivt, dem har gjort underverk för mig och min firma.'
              name='Nils, målare'
            />
          </div>
          <div className={styles.branschCard}>
            <BranschCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Branscher
