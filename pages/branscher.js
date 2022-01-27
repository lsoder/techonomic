import styles from '../styles/Branscher.module.scss'
import CustomerCard, {
  CustomerCardReverse,
} from '../components/customerCards/customerCards'
import Head from 'next/head'
import { BranschCard2 } from '../components/branschCard/branschCard'
import FadeIn from '../motion/fadeIn'
import petter from '../public/images/petter.png'
import ola from '../public/images/ola.png'

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
      <div className={styles.branschContainer}>
        <div className={styles.row}>
          <div className={styles.textContainer}>
            <FadeIn>
              <h2>Branscher som vi jobbar med</h2>
            </FadeIn>
            <FadeIn>
              <p>
                Teknik, ekonomi och personliga relationer driver Techonomic
                framåt. Vi är övertygade om att kombinationen av detta är rätt
                väg att gå - kryddat med mycket glädje. Vi har skapat ett
                redovisningsabonnemang där vi blir din digitala
                ekonomiavdelning. Det ska vara enkelt, personligt och
                skräddarsytt för dig och din verksamhet.
                <br></br>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </FadeIn>
            <FadeIn>
              <i> Vill du veta mer? Prata med någon av våra experter!</i>
            </FadeIn>
          </div>
          <div className={styles.bransch}>
            <FadeIn>
              <div className={styles.branschCard}>
                <BranschCard2 />
              </div>
            </FadeIn>
          </div>
        </div>
        <FadeIn>
          <div className={styles.branscherDiv}>
            <CustomerCard
              image={petter}
              comment='Jag tycker att techonomic tillför exakt det jag behöver i min bokföring.'
              name='Petter, mäklare'
            />
            <CustomerCardReverse
              image={ola}
              comment='Snabbt och effektivt, dem har gjort underverk för mig och min firma.'
              name='Nils, målare'
            />
          </div>
        </FadeIn>
      </div>
    </>
  )
}

export default Branscher
