
import React, {useEffect, useState} from 'react';
import CreateTeamButton from './CreateTeamButton'
import TeamTable from './TeamTable'
// import { Table, Tag } from 'antd';
// const { Column, ColumnGroup } = Table;
import { Team, Teammate } from '../interfaces';
import {teamTableData} from '../helpers/local-data'
import TableHeaders from './TableHeaders'  
import TeamTableRows from './TeamTableRows'

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
    teams: Team[];
    teamsData: object[];
    action: Function;
    getTeam: Function;
}

const UserDashboard = (props: Props) => {
    const [teammates, setTeammates] = useState<Teammate[]>();
    const teams = props.teams;
    // const teams = props.teamsData;
    // useEffect(() => {
    //         if (!teams.length) return;
    //         props.action(
    //             teams.map((t: Team) => t.id)
    //         ).then(
    //             // data => console.log(data)
                // (res: Teammate[]) => setTeammates(res)
    //         );
    // }, [teams]);
    const [test, setTest] = useState<Teammate[][]>();
    useEffect(() => {
        let teamArr: Teammate[][] = []
        
        if (!teams.length) return;
        for (let t of teams) {
            props.getTeam(t.id)
            .then(
                data=>teamArr.push(data)
            )
        }
        setTest(teamArr)
        // props.getTeam(
        //     teams.map((t: Team) => t.id)
        // ).then(
        //     data => console.log(data)
        //     // (res: Teammate[][]) => setTest(res)
        // );
}, [teams]);


    return(
        <div>
            {props.teams.map(team => {
                return <TableContainer component={Paper}>


{/* TODO get test iterated over */}
{/* pass down addswear function */}
{/* fix postTeam function */}
{/* shoot i've been thinking about the getTeam function all wrong. setState from inside render? */}

                    {console.log(test)}
                    <Toolbar>{team.team_name}</Toolbar>
                        <Table>
                            <TableHeaders
                                data={teamTableData}
                            />
                           <TeamTableRows 
                            // teammates={props.getTeam(team.id)}
                           />


                        </Table>

                </TableContainer>

            })}
        </div>
    )

    
}
// return <TeamTable
//                  team={team}
//                  teammates={teammates}
//                  cellHeaders={teamTableData}
//                 //  action={props.getTeam}
                 
//                  >
//                      <TableHeaders
//                         data={teamTableData}
//                      />
//                  </TeamTable>   
 

export default UserDashboard;