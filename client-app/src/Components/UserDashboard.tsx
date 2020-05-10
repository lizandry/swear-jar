
import React, {useEffect, useState} from 'react';
import CreateTeamButton from './CreateTeamButton'
import TeamTable from './TeamTable'
import { Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;
import { Team, Teammate } from '../interfaces';
import {teamTableData} from '../helpers/local-data'
import TableHeaders from './TableHeaders'  
interface Props {
    teams: object[];
    teamsData: object[];
    action: Function;
    getTeam: Function;
}

const UserDashboard = (props: Props) => {
    const [teammates, setTeammates] = useState<Teammate[]>();
    const teams = props.teamsData;
    useEffect(() => {
            if (!teams.length) return;
            props.action(
                props.teams.map((t: Team) => t.id)
            ).then(
                // data => console.log(data)
                (res: Teammate[]) => setTeammates(res)
            );
    }, [teams]);

    // TODO: a whole bunch of post requests, figuring out how some of ant design's API stuff around columns works
    return(
        <div>
            {props.teams.map(team => {
                return <TeamTable
                 team={team}
                 teammates={teammates}
                 cellHeaders={teamTableData}
                //  action={props.getTeam}
                 
                 >
                     <TableHeaders
                        data={teamTableData}
                     />
                 </TeamTable>   

            })}
        </div>
    )

    
}

 

export default UserDashboard;