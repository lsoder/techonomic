import FadeIn from '../../motion/fadeIn';
import BookAMeeting from '../bookAMeeting/bookAMeeting';
import BranschCard from '../branschCard/branschCard';
import CustomerCard, {
  CustomerCardReverse,
} from '../customerCards/customerCards';
import styles from './Section2.module.scss';
import petter from '../../public/images/petter.png';
import ola from '../../public/images/ola.png';

const Section2 = () => {
  return (
    <>
      <FadeIn>
        <div className={styles.container2}>
          <div className={styles.content2}>
            <div className={styles.hideSmall}>
            <BranschCard />
            </div>
            <div className={styles.customerContent}>
              <h2>Våra kunder tycker</h2>
              <CustomerCard
                image={petter}
                comment="Jag tycker att techonomic tillför exakt det jag behöver i min bokföring."
                name="Petter, mäklare"
              />
              <div>
                <CustomerCardReverse
                  image={ola}
                  comment="Snabbt och effektivt, helt klart den bästa redovisningsbyrå jag någonsin har haft!"
                  name="Ola, utvecklare"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
      <BookAMeeting />
    </>
  );
};

export default Section2;
