/*
  https://appdividend.com/2018/11/13/react-material-ui-example-tutorial/
  https://reactgo.com/material-ui-react-tutorial/
  https://codesandbox.io/s/9ywq085k9w?from-embed
*/

import React, { useContext, useState } from 'react';
import { SupportContext } from '../contexts/SupportContext';
import CssBaseline from '@material-ui/core/CssBaseline';
//import TypoGraphy from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
//import { withTheme } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/styles";

import {
  InputLabel,
  Input,
  Button,
  TextField,
  NativeSelect,
  Container,
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";

/*const useStyles = makeStyles({
  root: {
    background: 'black',
    color: 'white'
  }
});*/
//const styles = useStyles();

const NewSupportForm = () => {
  const theme = useTheme();

  console.log('theme ' + JSON.stringify(theme));

  const { addSupport } = useContext(SupportContext);

  const [staffname, setstaffname] = useState('');
  const [ZD_ID, setZD_ID] = useState('');
  const [dateworked, setDateworked] = useState('');
  const [currentstatus, setCurrentstatus] = useState('');
  const [priority, setPriority] = useState('');
  const [timespent, setTimespent] = useState('');
 
    const stafflist = [
      { 'id': 0, 'staffname': ''}, 
      { 'id': 1, 'staffname': 'VP' }, 
      { 'id': 2, 'staffname': 'TA' }, 
      { 'id': 3, 'staffname': 'SKT' }, 
      { 'id': 4, 'staffname': 'FZ' }, 
      { 'id': 5, 'staffname': 'KT' }]

   let optionItems = stafflist.map((s) =>
              <option key={s.id}>{s.staffname}</option>
            );
  
    const currentstatuslist = [
      { 'id': 0, 'status': ''}, 
      { 'id': 1, 'status': 'passed to ps' }, 
      { 'id': 2, 'status': 'resolved' }, 
      { 'id': 3, 'status': 'investigating' }, 
      { 'id': 4, 'status': 'on hold' }]

   let statusItems = currentstatuslist.map((s) =>
              <option key={s.id}>{s.status}</option>
            );

    const prioritylist = [
      { 'id': 0, 'priority': ''}, 
      { 'id': 1, 'priority': 'high' }, 
      { 'id': 2, 'priority': 'urgent' }, 
      { 'id': 3, 'priority': 'low' }, 
      { 'id': 4, 'priority': 'normal' }]

   let priorityItems = prioritylist.map((s) =>
              <option key={s.id}>{s.priority}</option>
            );            

  const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(title, author);
        addSupport(staffname, ZD_ID, dateworked, currentstatus, priority, timespent);

        setstaffname('');
        setZD_ID('');
        setDateworked('');
        setCurrentstatus('');
        setPriority('');
        setTimespent('');
  }

  return (
    <React.Fragment>
     <CssBaseline />
      <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}
            /*  style={{
            display: "flex",
            justifyContent: "center",
            margin: 20,
            padding: 20,
            background: 'lightblue',
            color: 'darkblue'
          }}*/
        >
      <Typography variant="h4" align="center" component="h1" gutterBottom>
                  Add Support
      </Typography>
          <form onSubmit={handleSubmit} noValidate>
          <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={6}>
                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="uncontrolled-native" >staff name</InputLabel>
                              <NativeSelect name="staffname"  required  value={staffname}
                                  onChange={(e) => setstaffname(e.target.value)}>
                                  {optionItems}
                              </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl margin="normal" fullWidth>
                            <TextField
                              id="outlined-uncontrolled"
                              label="ZD ID"
                              defaultValue="foo"               
                              margin="normal"
                              variant="outlined"
                              value={ZD_ID}
                              required 
                              type="number"
                              onChange={(e) => setZD_ID(e.target.value)}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-uncontrolled"
                        label=""
                        defaultValue=""               
                        margin="normal"
                        variant="outlined"
                        value={dateworked}
                        required
                        type="date"
                        onChange={(e) => setDateworked(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={6}>
                          <TextField
                          id="outlined-uncontrolled"
                          label="time spent"
                          defaultValue="foo"               
                          margin="normal"
                          variant="outlined"
                          value={timespent}
                          required
                          type="number"
                          onChange={(e) => setTimespent(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="uncontrolled-native">current status</InputLabel>
                          <NativeSelect name="currentstatus"  required  value={currentstatus}  
                                  onChange={(e) => setCurrentstatus(e.target.value)}>
                                    {statusItems}
                          </NativeSelect>
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="uncontrolled-native">priority</InputLabel>
                          <NativeSelect name="priority"   required   value={priority}  
                              onChange={(e) => setPriority(e.target.value)}>
                                {priorityItems}
                        </NativeSelect>
                    </Grid>
                    <Grid item xs={12} align="center">
                      <Button type="submit">Send</Button>
                    </Grid>
              </Grid>
          </Paper>
          </form> 
           <Typography variant="h4" align="center" component="h1" gutterBottom/>
      </div>
       </React.Fragment>
  );
}
 
export default (NewSupportForm);