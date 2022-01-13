import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    black: {
      main: '#000000',
      contrastText: '#fff',
    },
  },
});

export const bull = (
  <ThemeProvider theme={theme}>
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      <CheckCircleIcon color="mainColor" />
    </Box>
  </ThemeProvider>
);

export const plus = (
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

export const filledPlus = (
  <ThemeProvider theme={theme}>
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      <AddCircleIcon color="black" />
    </Box>
  </ThemeProvider>
);
