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
    children: any[];
    team: Team;
    teammates: Teammate[]
    action: Function;
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
    // const [teammates, setTeammates] = useState<Teammate[]>();

    // useEffect(() => {
    //         if (!props.teammates === undefined) return;
    //         teammates => setTeammates(teammates)
    // }, [props.teammates]);
    
    return <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="a dense table">
        <caption>{team.team_name}</caption>
            <TableHead>
                {console.log('table head props', props)}
                <Toolbar>{team.team_name}</Toolbar>
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
            <TableBody>
          {teammates.map((teammate) => (
            <TableRow key={teammate.user_id} className='team-table-body'>
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