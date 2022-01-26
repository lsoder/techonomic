import Head from 'next/head';
import Some from '../components/some';
import Image from 'next/image';
import styles from '../styles/Omoss.module.scss';
import FadeIn from '../motion/fadeIn';

const About = () => {
  return (
    <>
      <Head>
        <title>Techonomic - Om oss</title>

        <meta
          name="description"
          content="Teknik, ekonomi och personliga relationer driver Techonomic framåt. Vi är övertygade om att kombinationen av detta är rätt väg att gå - kryddat med mycket glädje. "
        />
      </Head>
      <div className={styles.aboutContainer}>
        <div className={styles.textContainer}>
          <FadeIn>
            <h2>Techonomic</h2>
            <h3>Det här är vi</h3>
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
        <div className={styles.about}>
          <FadeIn>
            <div className={styles.bild}>
              <Image
                src="/images/omosss.png"
                alt="bild på Techonomic"
                width="800px"
                height="612px"
              />
            </div>
          </FadeIn>
          <FadeIn>
            <div className={styles.some}>
              <div className={styles.padding}>
                <p>Thobias Granström</p>
                <h4>thobias@techonomic.se</h4> <h4>0700 - 00 00 00</h4>
                <div className={styles.paddingTop}>
                  <Some facebook="" linkedIn="" instagram="" />
                </div>
              </div>
              <div className={styles.padding}>
                <p>Jonatan Brekke</p>
                <h4>jonatan@techonomic.se</h4> <h4>0768 - 58 03 65</h4>
                <div className={styles.paddingTop}>
                  <Some facebook="" linkedIn="" instagram="" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default About;
