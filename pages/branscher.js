import styles from '../styles/Branscher.module.scss'
import CustomerCard, {
  CustomerCardReverse,
} from '../components/customerCards/customerCards'
import Head from 'next/head'
import BranschCard from '../components/branschCard/branschCard'
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
