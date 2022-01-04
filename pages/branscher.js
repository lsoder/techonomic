import styles from '../styles/Branscher.module.scss'
import CustomerCard from '../components/customerCard';
import CustomerCardReverse from '../components/customerCardReverse';

const Branscher = () => {
    return (
        <div className={styles.container}>
            <div className={styles.customerDiv}>
                <CustomerCard comment='"Jag tycker att techonomic tillför exakt det jag behöver i min bokföring."' name='Petter, mäklare'/>
                <CustomerCardReverse comment='"Snabbt och effektivt"' name='Ola, utvecklare'/>
            </div>
            <div className={styles.branscherDiv}>
            <h1>Några branscher vi specificerat oss på*</h1>
            <p>mäklare</p>
            <p>mäklare</p>
            <p>mäklare</p>
            <p>mäklare</p>
            <i>* tveka inte att höra av dig om du tillhör någon annan bransch, vi tror på det bla bla lba</i>
            </div>
        </div>
    )
}

export default Branscher;