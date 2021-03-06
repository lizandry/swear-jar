import React from 'react';

import { Team, Teammate } from '../interfaces'; // REFACTOR

import TeamTableHeaders from './TeamTableHeaders'  
import TeamTableRows from './TeamTableRows'

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';

interface Props {
    team?: Team
    teamTableData?: string[]
    getTeam?: Function;
    postSwear?: Function;

}

const TeamTable = (props: Props) => {
    const team = props.team
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

                    <Table 
                        aria-label='a dense table'
                        className='team-table'
                        padding='default'
                        size='small'
                    >

                        <TeamTableHeaders
                            teamTableData={props.teamTableData}
                        />

                        <TeamTableRows 
                            team={team}
                            getTeam={props.getTeam}
                            postSwear={props.postSwear}
                        />

                    </Table>
                </TableContainer>
}
export default TeamTable;