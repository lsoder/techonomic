import Image from 'next/image'
import styles from '../styles/ContactCard.module.scss'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { BlackButton } from './buttons'
import ButtonSm, { ButtonLg } from './buttonNew'

const ContactCard = (props) => {
  return (
    <div className={styles.container}>
      <Image src={props.image} alt='logo' width='100' height='100' />
      <p>{props.name}</p>
      <h4>{props.mail}</h4>
      <h4>{props.phone}</h4>
      <div className={styles.some}>
        <FacebookIcon fontSize='small' />
        <LinkedInIcon fontSize='small' />
        <InstagramIcon fontSize='small' />
      </div>
      {/*       <BlackButton text='Boka möte' />
       */}
      <ButtonSm text='Boka möte' />
    </div>
  )
}

export default ContactCard
