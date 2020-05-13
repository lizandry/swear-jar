
import React from 'react';

import { Team, Teammate } from '../interfaces'; // REFACTOR
import {teamTableData} from '../helpers/local-data' // REFACTOR

import CreateTeamButton from './CreateTeamButton' // REFACTOR
import TableHeaders from './TableHeaders'  
import TeamTableRows from './TeamTableRows'

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';

interface Props {
    teams?: Team[]
    getTeam?: Function;
    postSwear?: Function;
    postTeam?: Function;
}

const UserDashboard = (props: Props) => {
    const teams = props.teams;

    return(
        <div>
            {teams.map(team => {
                return <TableContainer 
                    className='team-table team-table-container'
                    component={Paper}
                    key={team.id}
                >

                    <Toolbar
                        className='team-table team-table-toolbar'
                    >
                        {team.team_name}
                    </Toolbar>

                    <Table>

                        <TableHeaders
                            data={teamTableData}
                        />

                        <TeamTableRows 
                            team={team}
                            getTeam={props.getTeam}
                            postSwear={props.postSwear}
                        />

                    </Table>
                </TableContainer>
            })}
        </div>
    )
}

export default UserDashboard;