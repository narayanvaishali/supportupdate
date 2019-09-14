//https://codesandbox.io/s/material-ui-responsive-table-km62k

import React, { useContext } from 'react';
import { SupportContext } from '../contexts/SupportContext';
import SupportDetails from './SupportDetails';
import { makeStyles, useTheme } from "@material-ui/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useTheme } from "@material-ui/styles";

/*const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
    background: 'grey',
    fontSize : '63px'
  },

  font: {
      fontSize: '14px', fontWeight:'bold',
      fontFamily: ['Courier', 'Helvetica'],
  }
}));*/

const SupportList =  () => {
  const { supportlist } = useContext(SupportContext);
 // const classes = useStyles();
 const theme = useTheme();
 //console.log(theme)
 
  return(
   /* <div className="book-list">
      <ul>
        {supportlist.map(s => {
          return ( <SupportDetails support={s} key={s.id} /> );
        })}
      </ul>
    </div>*/
    <div>
        <Paper  style={{ padding: 5}}>
            <Table>
              <TableHead >
                <TableRow  className = "tablehead1">
                  <TableCell className = "tablecell">Staff Name</TableCell>
                  <TableCell className = "tablecell">ZD ID</TableCell>
                  <TableCell className = "tablecell">Date Worked</TableCell>
                  <TableCell className = "tablecell">Priority</TableCell>
                  <TableCell className = "tablecell">Current Status</TableCell>
                  <TableCell className = "tablecell">Time Spent</TableCell>
                </TableRow>
              </TableHead>
               {supportlist.map(s => {
                return ( <SupportDetails support={s} key={s.id} /> );
              })}
            </Table>
          </Paper>
      </div>


  )
}
 
export default SupportList;