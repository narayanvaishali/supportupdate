import React, { useContext } from 'react';
import { SupportContext } from '../contexts/SupportContext';
import SupportDetails from './SupportDetails';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
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
fontSize: '14px', fontWeight:'bold'
  }
}));

const SupportList =  () => {
  const { supportlist } = useContext(SupportContext);
  const classes = useStyles();

  return(
   /* <div className="book-list">
      <ul>
        {supportlist.map(s => {
          return ( <SupportDetails support={s} key={s.id} /> );
        })}
      </ul>
    </div>*/
    <div style={{ marginTop: 20, padding: 30 }}>
        <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell  className={classes.font}>Staff Name</TableCell>
                  <TableCell  className={classes.font}>ZD ID</TableCell>
                  <TableCell  className={classes.font}>Date Worked</TableCell>
                  <TableCell  className={classes.font}>Priority</TableCell>
                  <TableCell  className={classes.font}>Current Status</TableCell>
                  <TableCell  className={classes.font}>Time Spent</TableCell>
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