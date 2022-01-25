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
            <ButtonSm href="https://calendly.com/techonomic-jonatan" text="Boka möte" />
            <p><span>Vi väntar på just dig!</span></p>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default BookAMeeting;
