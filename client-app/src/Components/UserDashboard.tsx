
import React, {useEffect, useState} from 'react';
import CreateTeamButton from './CreateTeamButton'
import { Table, Tag } from 'antd';
import { Team } from '../interfaces';
const { Column, ColumnGroup } = Table;

import 'antd/dist/antd.css';
  interface Teammate {
    user_id: number;
    team_id: number;
    per_swear: number;
    username: string; // REFACTOR maybe not necessary
    identify_as: string;
    email: string;
    temp_total_swears: number; // REFACTOR, join with swears table
  }
const UserDashboard = (props: {teams: object[], action: Function}) => {
    const [teammates, setTeammates] = useState<Teammate[]>();
    const teams = props.teams;
    useEffect(() => {
            if (!teams.length) return;
            props.action(
                props.teams.map((t: Team) => t.id)
            ).then(
                //data => console.log(data)
                (res: Teammate[]) => setTeammates(res)
            );
    }, [teams]);

    // if (props.teams.length <= 0) return(
    //     // TODO this will prompt 'create team' button
    //     <div>oops! nothing to see here</div>
    // )

    // sort teammates by team ID
    // const table = teammates.map((teammates: Teammate[])=> {
        const columns = [
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
            },
        ]

    return <Table dataSource={teammates} columns={columns} />
    // });
   return(
       <div>
           
            {}
        {/* //        <CreateTeamButton
        //        action={team.action}
        //        team={team.id}
        //        /> */}
            
       </div>
   )
}

 

export default UserDashboard;