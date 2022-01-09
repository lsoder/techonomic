import Image from 'next/image'
import styles from '../styles/ContactCard.module.scss'
import Some from './some'
import { BlackButton } from './buttons'
import ButtonSm, { ButtonLg } from './buttonNew'

const ContactCard = (props) => {
  return (
    <div className={styles.container}>
      <Image src={props.image} alt='logo' width='100' height='100' />
      <p>{props.name}</p>
      <h4>{props.mail}</h4>
      <h4>{props.phone}</h4>
      <Some facebook={props.facebook} linkedIn={props.linkedIn} instagram={props.instagram} />
      {/*       <BlackButton text='Boka möte' />
       */}
      <ButtonSm text='Boka möte' />
    </div>
  )
}

export default ContactCard
