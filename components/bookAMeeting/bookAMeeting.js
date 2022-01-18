import FadeIn from '../../motion/fadeIn';
import { ButtonSm } from '../buttons';
import styles from './BookAMeeting.module.scss';

const BookAMeeting = () => {
  return (
    <>
      <div className={styles.container2}>
        <FadeIn>
          <div className={`${styles.bookMeetingContent}`}>
            <h2>Boka ett möte med oss</h2>
            <ButtonSm href="/" text="Boka möte" />
            <p>Vi väntar på just dig!</p>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default BookAMeeting;
