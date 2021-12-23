import Link from 'next/link'
import styles from '../styles/nav.module.scss'


const Navbar = () => {
    return (
        <div className={styles.row}>
            <h1>MENU</h1>
            <Link href='/'>HEM</Link>
            <Link href='/abonnemang'>ABONNEMANG</Link>
            <Link href='/branscher'>BRANSCHER</Link>
            <Link href='/about'>OM OSS</Link>
            <button>Boka möte</button>
        </div>
    )
}

export default Navbar;