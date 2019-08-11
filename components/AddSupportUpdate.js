import React, {useState, useCallback} from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, useTheme } from "@material-ui/styles";
import {
 Paper,
 Button,
 Typography,
 TextField,
 /*Table,
 TableRow,
 TableCell,
 TextField,
 TableBody,
 TableHead,*/
 Grid,
} from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

import { useInput, useSubmit } from "../hooks/form";

//create a hook for classes objects
const useStyles = makeStyles(
        theme => ({
        root: {
            padding: theme.spacing(3)
        },
        form: {
            marginTop:theme.spacing(3)
        },
        input: {
            marginBottom: theme.spacing(3)
        }
        }),
        { withTheme: true }
);

// regular expression constants for validation 
const validations = {
 // eslint-disable-next-line
 EMAIL: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
 NUMBER: /^\d*$/,
 DATE : /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
 STRING : /^[ A-Za-z0-9_@./#&+-]*$/
};

const stafflist = [{'id': 0, 'staffname': ''}, { 'id': 1, 'staffname': 'VP' }, { 'id': 2, 'staffname': 'TA' }, 
{ 'id': 3, 'staffname': 'SKT' }, { 'id': 4, 'staffname': 'FZ' }, { 'id': 5, 'staffname': 'KT' }]


function AddSupportUpdate () {

      const [values, setValues] = React.useState({stafflist});

        // use of custom hook to bring in styles (usually done with HOC and prop)
        const classes = useStyles();

        // we can also use a hook to access the theme object (as above)
        const theme = useTheme();

        const staffemail = useInput("staffemail", "", handleValidation, validations.EMAIL);
        const zdid = useInput("zdid", "", handleValidation, validations.NUMBER);
        const dateworked = useInput ("dateworked", "", handleValidation, validations.DATE)
        const staffname = useInput ("staffname", "", handleValidation, validations.STRING)
        
         // create and init state variable and state mutator with useState React hook
        const [data, setData] = useState("");

        // our custom validation function, which the hook calls back to
        function handleValidation(value, regex) {
            // we could get fancy here with validations based on type of input
            // could be put in a form hook library and imported
            if (value && regex && value.match(regex)) return true;
            return false;
        }

      // our success handler when all items are validated
        function handleSuccess(data) {
            // we're just setting the state here, but typically this would
            // be sent to the server for further validation and persistence
            console.log(data);
            setData(data);            
        }    

         // create memoised event handler for input field onChange event
        // similar to this.handleChange in class component
        const handleChange = useCallback(e => {setData(e.target.value);}, []);

        //function handleDDLChange(event) {

           //console.log(JSON.stringify(event.target.value));
          // useCallback(e => {setData(e.target.value);}, []);
           /* setValues(oldValues => ({
              ...oldValues,
              [event.target.name]: event.target.value,
            }));*/
        //  }
        //the custom hook that is called onSubmit, taking our two input hooks return values
        //as parameters, this means the state from the two inputs is available to this hook
        const submit = useSubmit([staffemail, zdid, dateworked, staffname], handleSuccess);

         let optionItems = stafflist.map((s) =>
              <option key={s.id}>{s.staffname}</option>
            );

          return ( <Paper className={classes.root}>
                    <Grid container justify="center">
                        <Typography variant="h4">Add Support Details</Typography>
                    </Grid>
                    <form className={classes.form} {...submit.props}>
                        <Grid item  container justify="center">
                             <TextField label="Email" variant="outlined" {...staffemail.props} required/>
                                {staffemail.props.error && (
                                    <Typography variant="body1" color="error" >
                                            Invalid Email address
                                    </Typography>
                                )}
                        </Grid>
                        <Grid item  container justify="center"><br/></Grid>
                        <Grid item  container justify="center">
                           
                                <TextField label="ZD ID" variant="outlined" {...zdid.props} required/>
                                    {zdid.props.error && (
                                        <Typography variant="body1" color="error"  container justify="center">
                                        Invalid ZD ID
                                        </Typography>
                                )}
                        </Grid>
                        <Grid item  container justify="center"><br/></Grid>
                        <Grid item  container justify="center" >
                                <TextField label="Date Worked" variant="outlined" {...dateworked.props} required/>
                                    {dateworked.props.error && (
                                        <Typography variant="body1" color="error"  container justify="center">
                                            Invalid Date
                                        </Typography>
                                )}                                
                        </Grid>
                        <Grid item  container justify="center"><br/></Grid>     
                        <Grid item  container justify="center" >                      
                              <NativeSelect label="staff"  variant="outlined" {...staffname.props}  required
                                  value={...values.staffname} 
                                  onChange= {handleChange}>
                                {optionItems}
                                </NativeSelect>
                                  {values.staffname == "" && (
                                        <Typography variant="body1" color="error"  container justify="center">
                                            Please select valid staff name
                                        </Typography>
                                )}                       
                        </Grid>
                        <Grid item  container justify="center"><br/><br/></Grid>     
                        <Grid item  container justify="center" > </Grid>                          
                        <Grid item  container justify="center"></Grid>   
                      <Grid  container justify="center" >
                                <Button type="submit" color="primary" variant="contained">
                                    Submit
                                </Button>
                        </Grid>
                        {submit.errorItems && submit.errorItems.length > 0 && (
                            <Typography variant="body1" color="error"  container justify="center">
                                {`Please fix ${submit.errorItems && submit.errorItems.length} form field error(s)`}
                            </Typography>                                        
                        )}
                    </form>
                </Paper>
          )}
export default AddSupportUpdate;

