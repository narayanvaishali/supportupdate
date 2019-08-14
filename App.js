import React from "react";
//import { createMuiTheme } from "@material-ui/core/styles";
////import { ThemeProvider } from "@material-ui/styles";

//import Form from './components/Form';
//import AddSupportUpdate from './components/AddSupportUpdate'

import SupportContextProvider from './contexts/SupportContext';
import SupportList from './components/SupportList';
import NewSupportForm from './components/AddSupport';

// Let's convert App from class to function to get into the mood!
function App() {
 return (
   <SupportContextProvider>
        <NewSupportForm />
        <SupportList />
      </SupportContextProvider>
 );
}

export default App;