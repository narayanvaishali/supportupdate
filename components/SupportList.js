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
  },
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
                  <TableCell>staffname</TableCell>
                  <TableCell align="right">ZD ID</TableCell>
                  <TableCell align="right">Date Worked</TableCell>
                  <TableCell align="right">Priority</TableCell>
                  <TableCell align="right">Current Status</TableCell>
                  <TableCell align="right">Time Spent</TableCell>
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