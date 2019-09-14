import React from "react";
//import { createMuiTheme } from "@material-ui/core/styles";
////import { ThemeProvider } from "@material-ui/styles";

//import Form from './components/Form';
//import AddSupportUpdate from './components/AddSupportUpdate'

//https://stackoverflow.com/questions/56496201/how-to-use-usetheme-hook-from-material-ui

import { MuiThemeProvider } from '@material-ui/core/styles';
import { supporttheme } from './components/theme';
import GlobalStyle from './components/GlobalStyle';

import SupportContextProvider from './contexts/SupportContext';
import SupportList from './components/SupportList';
import NewSupportForm from './components/AddSupport';
//import { ThemeProvider, useTheme } from "@material-ui/styles";

// Let's convert App from class to function to get into the mood!
function App() {
 return (
    <MuiThemeProvider theme={supporttheme}>
      <GlobalStyle/>
       <SupportContextProvider>
          <NewSupportForm />
          <SupportList />
        </SupportContextProvider>
       </MuiThemeProvider>
 );
}

export default App;