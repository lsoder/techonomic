import SubscriptionCard from './subscriptionCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
    green: {
      main: '#A7D0AB',
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

const plus = (
  <ThemeProvider theme={theme}>
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      {/* <AddCircleIcon color="green" /> */}
      <AddCircleOutlineIcon color="green" />
    </Box>
  </ThemeProvider>
);

const Section5 = () => {
  return (
    <>
      <h2 className={styles.hideLarge}>Abonnemang</h2>
      <div className={styles.hideLarge}>
        <SubscriptionCard heading="Grundpaket" price="Fr. 1500kr/mån" link='/abonnemang' underText='Detta ingår i vårt grundpaket, vi erhåller
        även andra tjänster att lägga till.'>
          <p>{bull} Personlig konsult</p>
          <p>{bull} Rådgivning</p>
          <p>{bull} Löpande bokföring</p>
          <p>{bull} Kvartals-/års-moms</p>
          <p>{bull} Arbetsgivardeklaration</p>
          <p>{bull} Programvarukostnad</p>
          <p>{bull} Grafisk rapporteringsverktyg</p>
        </SubscriptionCard>
        <SubscriptionCard heading="Plustjänster" price=" " link='/abonnemang' underText='Dessa tillägg man kan lägga till i abonnemanget.'>
          <p>{plus} Betalning av lev.fakturor</p>
          <p>{plus} Månadsmoms</p>
          <p>{plus} Löner</p>
          <p>{plus} Periodisk sammanställning</p>
          <p>{plus} Årstjänster</p>
        </SubscriptionCard>
      </div>
    </>
  );
};

export default Section5;
