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
 const theme1 = useTheme();
 console.log(theme1)
 
  return(
   /* <div className="book-list">
      <ul>
        {supportlist.map(s => {
          return ( <SupportDetails support={s} key={s.id} /> );
        })}
      </ul>
    </div>*/
    <div >
        <Paper>
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell>Staff Name</TableCell>
                  <TableCell>ZD ID</TableCell>
                  <TableCell >Date Worked</TableCell>
                  <TableCell>Priority</TableCell>
                  <TableCell>Current Status</TableCell>
                  <TableCell>Time Spent</TableCell>
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