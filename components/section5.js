import SubscriptionCard from './subscriptionCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import styles from '../styles/Section1.module.scss';
import PaidIcon from '@mui/icons-material/Paid';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { ButtonLg } from './buttonNew';
import Link from 'next/link';
import Abonnemang from '../pages/abonnemang';

const theme = createTheme({
  typography: {
    purpleHeader: {
      color: '#5A2CDD',
      fontSize: 20,
      fontWeight: 'bold',
    },
  },
  palette: {
    mainColor: {
      main: '#5A2CDD',
      contrastText: '#fff',
    },
    black: {
      main: '#000000',
      contrastText: '#fff',
    },
  },
});

const bull = (
  <ThemeProvider theme={theme}>
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      <CheckCircleIcon color="mainColor" />
    </Box>
  </ThemeProvider>
);

const Section5 = () => {
  return (
    <>
      <h2 className={styles.hideLarge}>Abonnemang</h2>
      <div className={styles.hideLarge}>
        <SubscriptionCard heading="Grundpaket" price="Fr. 499kr/mån" link='/abonnemang'>
          <p>{bull} Bokföring </p>
          <p>{bull} Fakturering</p>
          <p>{bull} Deklarationer</p>
          <p>{bull} Lön</p>
          <p>{bull} Månadsrapportering</p>
          <p>{bull} Rådgivning</p>
        </SubscriptionCard>
      </div>
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
      {/* <SubscriptionCard
        heading="Medium"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor"
      />
      <SubscriptionCard
        heading="Large"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor"
      /> */}
    </>
  );
};

export default Section5;
