import { withStyles } from '@material-ui/core/styles';
import { constant } from 'lodash';

const styles = ({ palette }) => ({
  '@global': {
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },

  /*'.MuiButton-root': {
      backgroundColor : 'black',
      color : 'white',
      marginBottom:20,      
    },*/
    html: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
    },

    body: {
     // minWidth: '320px',
    //  minHeight: '50vh',
      margin: 500,
      marginTop:10,
      //marginBottom:20,
      //border: '9px solid orange',
      backgroundColor: palette.background.default,
      '@media print': {
        backgroundColor: palette.common.white, /* [3] */
      }
    },

    
  },
});

const GlobalStyles = withStyles(styles)(constant(null)); /* [4] */

export default GlobalStyles;