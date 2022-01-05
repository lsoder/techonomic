import Image from 'next/image';
import styles from '../styles/CustomerCard.module.scss';


const CustomerCardReverse = (props) => {
    return (
        <div className={styles.container}>
           <div className={styles.commentDiv}>
            <i>{props.comment}</i>
            <p>{'-' + ' ' + props.name}</p>
           </div>
           <Image src={props.image} alt='logo' width='100' height='100'/>
        </div>
    )
}

export default CustomerCardReverse;