import Image from 'next/image';
import styles from '../styles/CustomerCard.module.scss';


const CustomerCard = (props) => {
    return (
        <div className={styles.container}>
           <Image src={props.image} alt='logo' width='100' height='100'/>
           <div className={styles.commentDiv}>
            <i>{props.comment}</i>
            <p>{'-' + ' ' + props.name}</p>
           </div>
        </div>
    )
}

export default CustomerCard;