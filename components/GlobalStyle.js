import { withStyles } from '@material-ui/core/styles';
import { constant } from 'lodash';

const styles = ({ palette }) => ({
  '@global': {
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },

    html: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
    },

    body: {
      minWidth: '320px',
      minHeight: '100vh',
      margin: 800,
      marginTop:0,
      backgroundColor: palette.background.default,
      '@media print': {
        backgroundColor: palette.common.white, /* [3] */
      },
    'tb': {
      minWidth: 700,
       backgroundColor: 'blue(500)'
    },
    },

    
  },
});

const GlobalStyles = withStyles(styles)(constant(null)); /* [4] */

export default GlobalStyles;