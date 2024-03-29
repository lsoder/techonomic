import Image from 'next/image';
import styles from './CustomerCard.module.scss';

const CustomerCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageDiv}>
        <Image
          src={props.image}
          alt="bild på kund till oss"
          width="100"
          height="100"
          placeholder="blur"
        />
      </div>
      <div className={styles.commentDiv}>
        <i>
          {' '}
          <span className={styles.quote}>&quot;</span> {props.comment}{' '}
          <span className={styles.quote}>&quot;</span>
        </i>
        <p>{'-' + ' ' + props.name}</p>
      </div>
    </div>
  );
};
export default CustomerCard;

export const CustomerCardReverse = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.commentDiv}>
        <i>
          {' '}
          <span className={styles.quote}>&quot;</span> {props.comment}{' '}
          <span className={styles.quote}>&quot;</span>
        </i>
        <p>{'-' + ' ' + props.name}</p>
      </div>
      <div className={styles.imageDiv}>
        <Image src={props.image} alt="logo" width="100" height="100" placeholder="blur"/>
      </div>
    </div>
  );
};
