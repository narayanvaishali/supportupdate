import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

//import Form from './components/Form';
import AddSupportUpdate from './components/AddSupportUpdate'

// create our material ui theme using up to date typography variables
const theme = createMuiTheme({
 typography: {
   useNextVariants: true
 }
});

// Let's convert App from class to function to get into the mood!
function App() {
 return (
   <ThemeProvider theme={theme}>
      <AddSupportUpdate/>
   </ThemeProvider>
 );
}

export default App;