//https://api.flutter.dev/flutter/material/Scaffold/backgroundColor.html
//https://material-ui.com/customization/color/
//https://www.quackit.com/css/properties/

import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  type: 'light',
  primary: {
    light: '#9c27b0',
    main: '#3f323c',
    dark: '#964713',
  },
  secondary: {
    light: '#9097A1',
    main: '#656E7C',
    dark: '#353F50',
  },
  error: {
    light: '#fe8796',
    main: '#fe3851',
    dark: '#cb2c40',
  },
  divider: '#454e5e',
  background: {
    default: '#d2bda0',
    paper: '#ecdbc3',
    secondary: '#353F50',
  },
  tb: {
    minWidth: 700,
    backgroundColor : 'blue'
  },
  divClass: {
          spacing: "40px",
          color: "yellow",
          fontSize: "30px"
        }
};

const table = {
  tablehead: {
    minWidth: 700,
    backgroundColor : '#9ccc65'
  },

  tablebody: {
    minWidth: 200,
    backgroundColor : '#dcedc8'
  },

  div  : {
      backgroundColor: '#9ccc65',
      minWidth: '10px',
     // padding: '15vh',
     'align-items': 'center',
      margin:400,
      marginTop:0,
      marginBottom:20,
      display: "flex",
      border: '9px solid orange',
      'text-align': 'center'
  },

  btn : {
    primary : {
        variant : "contained", 
        color : "#ff9e80", 
        size : "medium",
        backgroundColor: '#3e2723',
        textTransform: 'lowercase',
      }
  },

  h1: {
    fontWeight: 800,
    fontSize: '2rem',
    lineHeight: 1.2,
    letterSpacing: 1,
    'text-align': 'center'
  },

  formControl : {
    align : 'center',
    padding : 20
  }
}


const typography = {
  useNextVariants: true /* [1] */,
  fontFamily: 'Poppins, sans-serif',
  h1: {
    fontWeight: 800,
    fontSize: '2rem',
    lineHeight: 1.2,
    letterSpacing: 1,

  },
  h2: {
    fontWeight: 600,
    fontSize: '1.6rem',
    lineHeight: 1.2,
  },
  h3: {
    fontWeight: 500,
    fontSize: '1.4rem',
    lineHeight: 1.2,
  },
  h4: {
    fontWeight: 200,
    fontSize: '1.3rem',
    lineHeight: 1.2,
    textTransform: 'uppercase',
  },
  h5: {
    fontWeight: 200,
    fontSize: '1.3rem',
    lineHeight: 1.2,
  },
  h6: {
    fontWeight: 700,
    fontSize: '1.2rem',
    lineHeight: 1.2,
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
  subtitle2: {
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
  body1: {
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  body2: {
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  button: {
    fontWeight: 800,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  caption: {
    fontWeight: 700,
    fontSize: '0.75rem',
    lineHeight: 1.66,
    letterSpacing: 0.5,
  },
  overline: {
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 2.66,
    textTransform: 'uppercase',
  },


};

const light = createMuiTheme({ typography });
const supporttheme = createMuiTheme({ palette, typography, table });

export { light, supporttheme };