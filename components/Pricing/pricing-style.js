import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pricingWrap: {
    marginTop: theme.spacing(5)
  },
  priceCard: {
    minHeight: "15rem",
    [theme.breakpoints.down("xs")]: {
      minHeight: "unset" 
    },
  },
  cardHeader: {
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[200],
    fontSize: '70px',
    letterSpacing: '.9rem',
    backgroundImage: 'linear-gradient(90deg, rgba(245,123,32,1) 42%, rgba(25,101,176,1) 58%);',
    color: 'transparent',
    backgroundClip: 'text',
    '-webkit-background-clip': 'text',
    '& span' : {
      fontWeight: 'bold',
    }
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
