import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import styles from './contactCard/ContactCard.module.scss'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  hoverStyle: {
    '&:hover': {
      color: '#6A6A6A',
    },
  },
}))

const Some = (props) => {
  const classes = useStyles()
  return (
    <div className={styles.some}>
      <a href={props.facebook} className={classes.hoverStyle}>
        <FacebookIcon fontSize='small'></FacebookIcon>
      </a>
      <a href={props.linkedIn} className={classes.hoverStyle}>
        <LinkedInIcon fontSize='small'></LinkedInIcon>
      </a>
      <a href={props.instagram} className={classes.hoverStyle}>
        <InstagramIcon fontSize='small'></InstagramIcon>
      </a>
    </div>
  )
}

export default Some
