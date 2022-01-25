import LoyaltyIcon from '@mui/icons-material/Loyalty';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TodayIcon from '@mui/icons-material/Today';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ContentPasteOffIcon from '@mui/icons-material/ContentPasteOff';
import styles from './SubscriptionDesktop.module.scss';
import ContentPasteOff from '@mui/icons-material/ContentPasteOff';
import { ButtonSm } from '../buttons';

const SubscriptionDesktop = () => {
  return (
    <div className={styles.containerSubscriptionDesktop}>
       <h2>Detta ingår i paketet</h2>
      <div className={styles.gridContainer}>
        <div className={styles.gridContent}>
          <LoyaltyIcon fontSize="large" />
          <div className={styles.gridText}>
            <h3>Personlig konsult</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse!
            </p>
          </div>
        </div>
        <div className={styles.gridContent}>
          <EmojiEmotionsIcon fontSize="large" />
          <div className={styles.gridText}>
            <h3>Rådgivning</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse!
            </p>
          </div>
        </div>
        <div className={styles.gridContent}>
          <LibraryBooksIcon fontSize="large" />
          <div className={styles.gridText}>
            <h3>Löpande bokföring</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse!
            </p>
          </div>
        </div>
        <div className={styles.gridContent}>
          <TodayIcon fontSize="large" />
          <div className={styles.gridText}>
            <h3>Kvartals-/års-moms</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse!
            </p>
          </div>
        </div>
        <div className={styles.gridContent}>
          <AnalyticsIcon fontSize="large" />
          <div className={styles.gridText}>
            <h3>Arbetsgivardeklarationer</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse!
            </p>
          </div>
        </div>
        <div className={styles.gridContent}>
          <AccountBalanceWalletIcon fontSize="large" />
          <div className={styles.gridText}>
            <h3>Programvarukostnad</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse!
            </p>
          </div>
        </div>
        <div className={styles.gridContent}>
          <SummarizeIcon fontSize="large" />
          <div className={styles.gridText}>
            <h3>Grafisk rapporteringsverktyg</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse!
            </p>
          </div>
        </div>
        <div className={styles.gridContent}>
          <ContentPasteOff fontSize="large" />
          <div className={styles.gridText}>
            <h3>Ingen bindningstid</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse!
            </p>
          </div>
        </div>
        <div className={styles.gridContent}>
          <div className={styles.gridText}>
          <ButtonSm href='https://calendly.com/techonomic-jonatan' text='Boka demo' />
            {/* <h3>Fr. 1500kr/mån</h3> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDesktop;
