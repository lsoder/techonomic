import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import styles from './contactCard/ContactCard.module.scss'

const Some = (props) => {
  return (
    <div className={styles.some}>
      <a href={props.facebook}>
        <FacebookIcon fontSize='small'></FacebookIcon>
      </a>
      <a href={props.linkedIn}>
        <LinkedInIcon fontSize='small'></LinkedInIcon>
      </a>
      <a href={props.instagram}>
        <InstagramIcon fontSize='small'></InstagramIcon>
      </a>
    </div>
  )
}

export default Some
