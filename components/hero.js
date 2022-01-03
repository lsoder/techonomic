import styles from '../styles/Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Techonomic</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </h2>
      <button className={styles.buttonStyle}>Boka möte</button>
    </div>
  )
}

export default Hero
