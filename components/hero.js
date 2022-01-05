import styles from '../styles/Hero.module.scss'
import PurpleButton, { BlackButton } from './buttons'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Techonomic</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </h2>
      <div className={styles.hide}>
      <PurpleButton text='Boka möte'/>
      </div>
      {/* <button className={styles.buttonStyle}>Boka möte</button> */}
      {/* <BlackButton text='Boka möte' /> */}
    </div>
  )
}

export default Hero
