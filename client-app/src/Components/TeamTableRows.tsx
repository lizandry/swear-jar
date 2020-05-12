import React, {useEffect, useState} from 'react';
import { Team, Teammate } from '../interfaces';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

interface Props {
    team: Team;
    // teammates?: Teammate[];
    getTeam?: Function;
    postSwear?: Function;
}

const TeamTableRows = (props: Props) => {
const team = props.team
// const [data, handleEvent] = useState()
const [teammates, setTeammates] = useState<Teammate[]>([]);
useEffect(()=> {
    if (teammates.length) return;
    props.getTeam(team.id)
    .then(res => setTeammates(res));
});
if (!teammates.length)return <span>loading...</span>

return <TableBody>
{teammates.map(teammate => {
    
    return <TableRow key={teammate.id}
    className='team-table-body'
    >
        <TableCell component="th" scope="row">
        {teammate.email}
        </TableCell>
        <TableCell align="right">{teammate.identify_as}</TableCell>
        <TableCell align="right">${teammate.per_swear}</TableCell>
        <TableCell align="right">{teammate.temp_total_swears}</TableCell>
        <TableCell align="right">${(teammate.per_swear * teammate.temp_total_swears)}</TableCell>
        <TableCell align="right">
            <Button
        onClick={() => props.postSwear(teammate.id, teammate.team_id)}
            >+</Button>
        </TableCell>

    </TableRow>
})
}
</TableBody>

}

export default TeamTableRows;