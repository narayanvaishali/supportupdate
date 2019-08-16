/*
  https://appdividend.com/2018/11/13/react-material-ui-example-tutorial/
  https://reactgo.com/material-ui-react-tutorial/
*/

import React, { useContext, useState } from 'react';
import { SupportContext } from '../contexts/SupportContext';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NativeSelect from '@material-ui/core/NativeSelect';

import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";

const NewSupportForm = () => {
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

  <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form style={{ width: "80%" }}  onSubmit={handleSubmit}>
          <h1>Add Support Update</h1>

          <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="uncontrolled-native">staff name</InputLabel>
              <NativeSelect name="staffname"  required  
                  onChange={(e) => setstaffname(e.target.value)}>
                  {optionItems}
              </NativeSelect>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <input type="text" placeholder="ZD ID" value={ZD_ID}
              onChange={(e) => setZD_ID(e.target.value)}  required />
          </FormControl>

          <FormControl margin="normal" fullWidth>
              <input type="text" placeholder="date worked" value={dateworked}
                onChange={(e) => setDateworked(e.target.value)}  required  />
          </FormControl>

          <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="uncontrolled-native">current status</InputLabel>
           <NativeSelect name="currentstatus"  required  
                  onChange={(e) => setCurrentstatus(e.target.value)}>
                    {statusItems}
            </NativeSelect>

          </FormControl>

          <FormControl margin="normal" fullWidth>           
             <InputLabel htmlFor="uncontrolled-native">priority</InputLabel>
              <NativeSelect name="priority"   required    
                  onChange={(e) => setPriority(e.target.value)}>
                    {priorityItems}
            </NativeSelect>

          </FormControl>

          <FormControl margin="normal" fullWidth>
                <input type="text" placeholder="time spent" value={timespent}  required  
                  onChange={(e) => setTimespent(e.target.value)} />
          </FormControl>
          <FormControl margin="normal">
          <Button variant="contained" color="primary" size="medium" type="submit">
            Send
          </Button>
          </FormControl>
        </form>
      </div>


  );
}
 
export default NewSupportForm;