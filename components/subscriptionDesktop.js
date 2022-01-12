import PaidIcon from '@mui/icons-material/Paid';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { ButtonLg } from './buttonNew';
import Link from 'next/link';
import styles from '../styles/Section1.module.scss';

const SubscriptionDesktop = () => {
    return (
        <div className={styles.hideSmall}>
        <div className={styles.container5}>
        <h2>Abonnemang</h2>
        <h3>Fr. 499kr/mån</h3>
          <div className={styles.gridContainer}>
            <div className={styles.gridContent}>
              <LibraryBooksIcon fontSize="large" />
              <div className={styles.gridText}>
                <h3>Bokföring</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse!
                </p>
              </div>
            </div>
            <div className={styles.gridContent}>
              <AccountBalanceWalletIcon fontSize="large" />
              <div className={styles.gridText}>
                <h3>Fakturering</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse!
                </p>
              </div>
            </div>
            <div className={styles.gridContent}>
              <AnalyticsIcon fontSize="large" />
              <div className={styles.gridText}>
                <h3>Deklarationer</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse!
                </p>
              </div>
            </div>
            <div className={styles.gridContent}>
              <PaidIcon fontSize="large" />
              <div className={styles.gridText}>
                <h3>Lön</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse!
                </p>
              </div>
            </div>
            <div className={styles.gridContent}>
              <SummarizeIcon fontSize="large" />
              <div className={styles.gridText}>
                <h3>Månadsrapportering</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse!
                </p>
              </div>
            </div>
            <div className={styles.gridContent}>
              <EmojiEmotionsIcon fontSize="large" />
              <div className={styles.gridText}>
                <h3>Rådgivning</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse!
                </p>
              </div>
            </div>
          </div>
          <i>Vill du veta mer om vårt abonnemang och övriga tjänster klicka <Link href='/abonnemang'><b>här.</b></Link></i>
        </div>
      </div>
    )
}

export default SubscriptionDesktop;