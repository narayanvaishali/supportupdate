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



const SupportDetails = ({ support }) => {
  const { removeSupport } = useContext(SupportContext);
  
  return (
              <TableBody>
                  <TableRow key={support.id}  onClick={() => removeSupport(support.id)}>
                    <TableCell align="left">{support.staffname}</TableCell>
                    <TableCell align="center">{support.ZD_ID}</TableCell>
                    <TableCell align="left">{support.dateworked}</TableCell>
                    <TableCell align="left">{support.priority}</TableCell>
                    <TableCell align="left">{support.currentstatus}</TableCell>
                    <TableCell align="center">{support.timespent}</TableCell>
                  </TableRow>
              </TableBody>
  );
}

export default SupportDetails;