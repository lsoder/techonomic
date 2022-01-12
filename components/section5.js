import SubscriptionCard from './subscriptionCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import styles from '../styles/Section1.module.scss';


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
    </>
  );
};

export default Section5;
