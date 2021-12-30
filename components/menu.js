import Link from 'next/link'

function Menu(props) {
  return (
    <div style={dropDownStyle(props)}>
      <h2>
        <Link href='/'>
          <a onClick={props.onMenuClose}>HEM</a>
        </Link>
      </h2>
      <h2>
        <Link href='/abonnemang'>
          <a onClick={props.onMenuClose}>ABONNEMANG</a>
        </Link>
      </h2>
      <h2>
        <Link href='/branscher'>
          <a onClick={props.onMenuClose}>BRANSCHER</a>
        </Link>
      </h2>
      <h2>
        <Link href='/about'>
          <a onClick={props.onMenuClose}>OM OSS</a>
        </Link>
      </h2>
      <h2>
        <Link href='/contact'>
          <a onClick={props.onMenuClose}>KONTAKTA</a>
        </Link>
      </h2>
    </div>
  )
}

const dropDownStyle = (props) => ({
  position: 'fixed',
  right: props.isOpen ? 0 : '-100%',
  top: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  background: props.isOpen ? 'white' : 'transparent',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 1s',
})

export default Menu
