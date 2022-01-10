import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import styles from '../styles/ContactCard.module.scss'

const Some = (props) => {
  return (
    <div className={styles.some}>
      <a href={props.facebook} target='_blank'>
        <FacebookIcon fontSize='small'></FacebookIcon>
      </a>
      <a href={props.linkedIn} target='_blank'>
        <LinkedInIcon fontSize='small'></LinkedInIcon>
      </a>
      <a href={props.instagram} target='_blank'>
        <InstagramIcon fontSize='small'></InstagramIcon>
      </a>
    </div>
  )
}

export default Some
