import Image from 'next/image'
import styles from './ContactCard.module.scss'
import Some from '../some'
import { ButtonSm } from '../buttons'

const ContactCard = (props) => {
  return (
    <div className={styles.container}>
      <Image src={props.image} alt='bild' width='150' height='150' />
      <p>{props.name}</p>
      <h4>{props.mail}</h4>
      <h4>{props.phone}</h4>
      <Some facebook='/' linkedIn='/' instagram='/' />
      <ButtonSm href='/' text='Boka möte' />
    </div>
  )
}

export default ContactCard
