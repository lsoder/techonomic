
import styles from '../styles/SubscriptionCard.module.scss';
import Link from 'next/link';
import { ButtonSm } from './buttonNew';

const SubscriptionCard = (props) => {
  const Children = props.children;
  return (
    <div className={styles.cardContainer}>
      <h3>{props.heading}</h3>
      <h2>{props.price}</h2>
      <div className={styles.cardContent}>{Children}</div>
      <ButtonSm href='/abonnemang' text="Läs mer" />
      <i>
        {props.underText}
      </i>
    </div>
  );
};

export default SubscriptionCard;

