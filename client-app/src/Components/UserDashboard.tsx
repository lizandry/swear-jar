import * as React from 'react';
import CreateTeamButton from './CreateTeamButton'
import { Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;

  interface Teammate {
    user_id: number;
    team_id: number;
    per_swear: number;
    // username: string; // REFACTOR maybe not necessary
    identify_as: string;
    email: string;
    temp_total_swears: number; // REFACTOR, join with swears table
  }
const UserDashboard = (props: {teams: object[], action: Function}) => {
    // if (props.teams.length <= 0) return(
    //     // TODO this will prompt 'create team' button
    //     <div>oops! nothing to see here</div>
    // )
    props.teams.map(team=> {

    })

    // console.log('props', props.action.postTeam)
   return(
       <div>
           {props.teams.map(team=> {
        // {console.log('team',team)}
        //        <CreateTeamButton
        //        action={team.action}
        //        team={team.id}
        //        />
            })}
           hello
       </div>
   )
}

 

export default UserDashboard;