import styles from '../styles/Branscher.module.scss';
import CustomerCard from '../components/customerCard';
import CustomerCardReverse from '../components/customerCardReverse';
import Head from 'next/head';

const Branscher = () => {
  return (
    <>
      <Head>
        <title>Techonomic - BRANSCHER</title>
        <meta
          name="description"
          content="Meta description for the About page"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.customerDiv}>
          <CustomerCard
            image="/images/petter.png"
            comment='Jag tycker att techonomic tillför exakt det jag behöver i min bokföring.'
            name="Petter, mäklare"
          />
          <CustomerCardReverse
            image="/images/ola.png"
            comment='Snabbt och effektivt, dem har gjort underverk för mig och min firma.'
            name="Nils, målare"
          />
        </div>
        <div className={styles.branscherDiv}>
          <h2>Några branscher vi specificerat oss på*</h2>
          <p>mäklare</p>
          <p>mäklare</p>
          <p>mäklare</p>
          <p>mäklare</p>
          <i>
            * tveka inte att höra av dig om du tillhör någon annan bransch, vi
            tror på det bla bla lba
          </i>
        </div>
      </div>
    </>
  );
};

export default Branscher;
