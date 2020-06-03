
import React from 'react';

import { User, Team, Teammate } from '../interfaces'; // REFACTOR
import {teamTableData} from '../helpers/local-data' // REFACTOR

import CreateTeamModal from './CreateTeamModal' // REFACTOR
import CreateTeamForm from './CreateTeamForm'
import TeamTable from './TeamTable'
import TestModal from './TestModal'

interface Props {
    teams?: Team[]
    user?: User
    getTeam?: Function;
    postSwear?: Function;
    postTeam?: Function;
}

const UserDashboard = (props: Props) => {
    const {teams, user} = props;

    return(
        <div>
            <TestModal
                user={user}
                postTeam={props.postTeam}

            />

        {/* <CreateTeamModal
            user={user}
            postTeam={props.postTeam}
        />
            <CreateTeamForm
                user={user}
                postTeam={props.postTeam}
            /> */}








            {/* {teams.map(team => {
                return <TeamTable 
                    key={team.id}
                    team={team}
                    teamTableData={teamTableData}
                    getTeam={props.getTeam}
                    postSwear={props.postSwear}
                />
            })} */}
        </div>
    )
}

export default UserDashboard;