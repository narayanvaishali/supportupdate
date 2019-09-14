import React, { useContext } from 'react';
import { SupportContext } from '../contexts/SupportContext';
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    minWidth: 650,
    padding: 30,
    background: 'lightblue',
    fontFamily: ['Courier', 'Helvetica'],
  },
}));

const SupportDetails = ({ support }) => {
  const { removeSupport } = useContext(SupportContext);
  //const classes = useStyles();
  const theme = useTheme();

  return (
              <TableBody>
                  <TableRow key={support.id}  onClick={() => removeSupport(support.id)}>
                    <TableCell>{support.staffname}
                    </TableCell>
                    <TableCell>{support.ZD_ID}</TableCell>
                    <TableCell>{support.dateworked}</TableCell>
                    <TableCell>{support.priority}</TableCell>
                    <TableCell>{support.currentstatus}</TableCell>
                    <TableCell>{support.timespent}</TableCell>
                  </TableRow>
              </TableBody>
  );
}

export default SupportDetails;