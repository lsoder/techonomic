import Link from 'next/link'
import styles from '../styles/Nav.module.scss'

const Nav = (props) => {
  return (
    <>
      <div className={styles.row}>
        <h3>Techonomic</h3>
        <button>Boka möte</button>
        <div className={styles.hide}>
          <Link href='/'>HEM</Link>
          <Link href='/abonnemang'>ABONNEMANG</Link>
          <Link href='/branscher'>BRANSCHER</Link>
          <Link href='/about'>OM OSS</Link>
        </div>
      </div>
      <div className={styles.container}>
        <div style={headerStyle}>
          <div id='burger' onClick={props.onMenuClick}>
            <svg viewBox='0 0 100 80' width='40' height='40'>
              <rect y='10' width='50' height='5'></rect>
              <rect y='25' width='50' height='5'></rect>
              <rect y='40' width='50' height='5'></rect>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

const headerStyle = {
  position: 'fixed',
  right: 0,
  top: '1rem',
  right: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'right',
  padding: ' 0 1rem',
  zIndex: '100',
  cursor: 'pointer',
}

export default Nav
