import React, {useEffect, useState} from 'react';

import { Team, Teammate } from '../interfaces'; // REFACTOR

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

interface Props {
    team?: Team;
    getTeam?: Function;
    postSwear?: Function;
}

const TeamTableRows = (props: Props) => {
    const team = props.team
    const [teammates, setTeammates] = useState<Teammate[]>([]);

    useEffect(()=> {
        if (teammates.length) return;
        props.getTeam(team.id)
        .then(res => setTeammates(res));
    });

    if (!teammates.length) return <TableBody><TableRow className='team-table-loading'><TableCell>loading...</TableCell></TableRow></TableBody>

    return <TableBody
        className='team-table-body'
    >
        {teammates.map(teammate => {
            // TODO make rows editable by user
            return <TableRow 
                key={teammate.id}
                className='team-table-teammate-row'
                hover={true}
                // selected={true}
            >
                {/* personal data */}
                <TableCell 
                    component="th" 
                    scope="row"
                >
                    {teammate.email}
                </TableCell>
                <TableCell>
                    {teammate.identify_as}
                </TableCell>
                <TableCell>
                    ${teammate.per_swear}
                </TableCell>
                <TableCell>
                    {teammate.temp_total_swears}
                </TableCell>

                {/* calculates total 'owed' */}
                <TableCell>
                    ${(teammate.per_swear * teammate.temp_total_swears)}
                </TableCell>

                {/* adds a 'swear' to database */}
                {/* TODO have onClick either re-render the component or refactor the db call so that it re-renders just this row */}
                <TableCell>
                    <Button
                        onClick={() => props.postSwear(teammate.id, teammate.team_id)}
                    >
                        +
                    </Button>
                </TableCell>

            </TableRow>
        })
    }
    </TableBody>
}

export default TeamTableRows;