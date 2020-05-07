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
    team: Team;
    teammates: Teammate[]
    // action: Function;
}

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const TeamTable = (props: Props) => {
    const classes = useStyles();
    // const [teammates, setTeammates] = useState<Teammate[]>();
    const team = props.team;
    // useEffect(() => {
    //         if (!teams.length) return;
    //         props.action(
    //             props.team.map((t: Team) => t.id)
    //         ).then(
    //             // data => console.log(data)
    //             (res: Teammate[]) => setTeammates(res)
    //         );
    // }, [teams]);


    return <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
 
            <TableHead>
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
          {this.props.teammates.map((row) => (
            <TableRow key={row.name} className='team-table-body'>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody></Table>
    </TableContainer>


}

export default TeamTable;