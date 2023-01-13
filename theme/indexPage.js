import { makeStyles } from '@material-ui/core/styles';
import bg from '../public/images/panorama_factory.jpeg';

const sectionMargin = (margin) => margin * 15;
const useStyles = makeStyles((theme) => ({
    mainWrap: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
    },
    spaceBottom: {
      marginBottom: sectionMargin(theme.spacing()),
    },
    spaceTop: {
      paddingTop: theme.spacing(12),
    },
    containerWrap: {
      marginTop: theme.spacing(0),
    },
    firstMain: {
      backgroundImage: `url(${bg})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundColor: '#464646',
      height: '100vh',
    },
  }));

  export default useStyles;
