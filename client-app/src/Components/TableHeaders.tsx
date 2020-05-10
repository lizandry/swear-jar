import React, {useEffect, useState} from 'react';
import { Team, Teammate } from '../interfaces';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';

interface Props {
    data: string[]
}

const TableHeaders = (props: Props) => {
return(

    <TableHead>
    {console.log('table head props', props)}
    <TableRow className='team-table-header'>
    {/* <TableCell>remove user button</TableCell> */}
    <TableCell>email</TableCell>
    <TableCell>teammate</TableCell>
    <TableCell align="right">pledge amount</TableCell>
    <TableCell align="right">swear count</TableCell>
    <TableCell align="right">total pledge</TableCell>
    <TableCell align="right">swore</TableCell>
    </TableRow>
    </TableHead>
    )
}

export default TableHeaders;