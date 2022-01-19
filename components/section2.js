import FadeIn from '../motion/fadeIn';
import BookAMeeting from './bookAMeeting/bookAMeeting';
import CustomerAndBransch from './customerAndBransch/customerAndBransch';

const Section2 = () => {
  return (
    <>
      <FadeIn>
        <CustomerAndBransch />
      </FadeIn>
      <BookAMeeting />
    </>
  );
};

export default Section2;
