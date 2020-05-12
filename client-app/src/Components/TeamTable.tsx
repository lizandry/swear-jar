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
    children: any;
    team: Team;
    teammates: Teammate[]
    cellHeaders: string[]
    // action: Function;
}

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const TeamTable = (props: Props) => {
    const classes = useStyles();
    const team = props.team;
    const teammates = props.teammates || [];

    return <TableContainer component={Paper}>
                <Toolbar 
                // TODO accessibility
                // alt={team.team_name}
                >
                    {team.team_name}
                    </Toolbar>
        <Table className={classes.table} aria-label="a dense table">
            <TableBody>
          {teammates.map((teammate) => (
            <TableRow key={teammate.id} className='team-table-body'>
              <TableCell component="th" scope="row">
                {teammate.email}
              </TableCell>
              <TableCell align="right">{teammate.identify_as}</TableCell>
              <TableCell align="right">${teammate.per_swear}</TableCell>
              <TableCell align="right">{teammate.temp_total_swears}</TableCell>
              <TableCell align="right">${(teammate.per_swear * teammate.temp_total_swears)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
    </TableContainer>


}

export default TeamTable;