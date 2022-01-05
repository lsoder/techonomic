import styles from '../styles/Section1.module.scss'

const Section2 = () => {
  return (
    <div className={`${styles.container2} ${styles.hideLarge}`}>
      <div className={`${styles.bookMeetingContent}`}>
      <h1>Boka ett möte med oss</h1>
      <button>Till kalender</button>
      <p>
        Lorem ipsum dolor sit amet,
      </p>
      </div>
    </div>
  );
};

export default Section2;
