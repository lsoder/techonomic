import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import styles from '../styles/ContactCard.module.scss'

const Some = (props) => {
  return (
    <div className={styles.some}>
      <FacebookIcon fontSize='small'>{props.facebook}</FacebookIcon>
      <LinkedInIcon fontSize='small'>{props.linkedIn}</LinkedInIcon>
      <InstagramIcon fontSize='small'>{props.insta}</InstagramIcon>
    </div>
  )
}

export default Some
