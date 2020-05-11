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
    teammates?: Teammate[];
}

const TeamTableRows = (props: Props) => {
const teammates = props.teammates

return (
    <div>
{/* {console.log('teammates', teammates)} */}
    {/* <TableRow key={teammate.user_id}
    className='team-table-body'
    >
        <TableCell component="th" scope="row">
                {teammate.email}
              </TableCell>
              <TableCell align="right">{teammate.identify_as}</TableCell>
              <TableCell align="right">${teammate.per_swear}</TableCell>
              <TableCell align="right">{teammate.temp_total_swears}</TableCell>
              <TableCell align="right">${(teammate.per_swear * teammate.temp_total_swears)}</TableCell>

    </TableRow> */}
    </div>


)

}

export default TeamTableRows;