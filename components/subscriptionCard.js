import ButtonSm from './buttonNew';
import styles from '../styles/SubscriptionCard.module.scss';
import { Children } from 'react';

const SubscriptionCard = (props) => {
  const Children = props.children;
  return (
    <div className={styles.cardContainer}>
      <h3>{props.heading}</h3>
      <h2>{props.price}</h2>
      <div className={styles.cardContent}>
      {Children}
      </div>
      <ButtonSm text="Läs mer" />
      <i>lorem ipsum sit dolor hej</i>
    </div>
  );
};

export default SubscriptionCard;

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// const theme = createTheme({
//   typography: {
//     purpleHeader: {
//       color: '#5A2CDD',
//       fontSize: 20,
//       fontWeight: 'bold',
//     },
//   },
//   palette: {
//     mainColor: {
//       main: '#5A2CDD',
//       contrastText: '#fff',
//     },
//     black: {
//       main: '#000000',
//       contrastText: '#fff',
//     },
//   },
// });

// const bull = (
//   <ThemeProvider theme={theme}>
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     <CheckCircleIcon color="mainColor"/>
//   </Box>
//   </ThemeProvider>
// );

// export default function SubscriptionCard(props) {
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <ThemeProvider theme={theme}>
//       <CardContent>
//         <Typography variant="purpleHeader" color="mainColor" gutterBottom>
//           {props.heading}
//         </Typography>
//         <Typography variant="h5" component="div">
//           {props.price}
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         </Typography>
//         <Typography variant="body2">
//         <CheckCircleIcon color="mainColor"/>
//              {props.text}
//           <br />
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <ButtonSm text='Läs mer'/>
//       </CardActions>
//     </ThemeProvider>
//     </Card>
//   );
// }
