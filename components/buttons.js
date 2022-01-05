import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    purple: {
      main: '#5A2CDD',
      contrastText: '#fff',
    },
    black: {
      main: '#000000',
      contrastText: '#fff',
    },
  },
});

export default function PurpleButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <Button color="purple" variant="contained">
        {props.text}
      </Button>
    </ThemeProvider>
  );
};

export function BlackButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <Button color="black" variant="contained">
        {props.text}
      </Button>
    </ThemeProvider>
  );
};


