import styles from '../styles/Section1.module.scss'
import { BlackButton } from './buttons'

const Section2 = () => {
  return (
    <div className={`${styles.container2} ${styles.hideLarge}`}>
      <div className={`${styles.bookMeetingContent}`}>
        <h2>Boka ett möte med oss</h2>
        <BlackButton text='till kalender' />
        <p>Lorem ipsum dolor sit amet,</p>
      </div>
    </div>
  )
}

export default Section2
