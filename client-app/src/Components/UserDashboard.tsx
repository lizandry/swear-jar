import * as React from 'react';
// import { Table, Tag } from 'antd';
import { Button, Table } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'
// const { Column, ColumnGroup } = Table;

//   NOTE TO SELF thinking about state, the top-level App state should... i think populate an array of team objects
//   from users_to_teams table, joined with user
  interface Teammate {
    user_id: number;
    team_id: number;
    per_swear: number;
    // username: string; // REFACTOR maybe not necessary
    identify_as: string;
    email: string;
    temp_total_swears: number; // REFACTOR, join with swears table
  }
// TODO  pass down getTeam/fetchTeam functions
const UserDashboard = (props) => {
    const teams = props.teams
    // IN PROGRESS i'm thinking about trying to do too many things in one component. table header w/team names should be one component, Row should be another component that calls getTeam and maps those. both will be passed up to the table itself

    return(
        <div>
                <Table hover>
                    <thead>
                    <tr>
                    <th>teammate</th>
                    <th></th>
                    <th>total swears</th>
                    <Button>add swear</Button>
                    </tr>
                </thead>

                </Table>

            {teams.map(team => {
                console.log('team', team)
                
})} 
    
        </div>

        // <Table dataSource={this.props.data}>
        //   <ColumnGroup title="Name">
        //     <Column title="First Name" dataIndex="firstName" key="firstName" />
        //     <Column title="Last Name" dataIndex="lastName" key="lastName" />
        //   </ColumnGroup>
        //   <Column title="Age" dataIndex="age" key="age" />
        //   <Column title="Address" dataIndex="address" key="address" />
        //   <Column
        //     title="Tags"
        //     dataIndex="tags"
        //     key="tags"
        //     render={tags => (
        //       <span>
        //         {tags.map(tag => (
        //           <Tag color="blue" key={tag}>
        //             {tag}
        //           </Tag>
        //         ))}
        //       </span>
        //     )}
        //   />
        //   <Column
        //     title="Action"
        //     key="action"
        //     render={(text, record) => (
        //       <span>
        //         <a style={{ marginRight: 16 }}>Invite {text.lastName}</a>
        //         <a
        //         >Delete</a>
        //             // onClick=
        //       </span>
        //     )}
        //   />
        // </Table>
    )

}

export default UserDashboard;