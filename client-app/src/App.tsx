import * as React from 'react';
import UserDashboard from './Components/UserDashboard';
import CreateTeamForm from './Components/CreateTeamForm';
import TeamTable from './Components/TeamTable'
import { fetchUser, getTeams, getTeam, postSwear, postTeam } from './helpers/api-fetchers';
import {AppState, Team, User, Teammate} from './interfaces'
import 'antd/dist/antd.css';
// import '@material-ui/core/styles';
import '@material-ui/core';

class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: 1,
            },
            loggedIn: true,
            teams: [],
        };
    }

// IN PROGRESS let's hardcode user 1 for now, and get the table to map their teams
// TODO else statement for login prompt
    componentDidMount() {
        if (this.state.user.id !== 0) {
            fetchUser(this.state.user.id)
            // REFACTOR this is hardcoded. might not need to be?
                .then(data => this.setState(
                        {user: data[0], teams: data[1]}))
            } else return;


    }
    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        if (prevState !== this.state) {
            // if (!this.state.teams) return;
            // for (i = 0, i < this.state.teams.length, i++) {
            //     console.log(i)
            // }
            // console.log('teams', this.state.teams)
         
        }
      }
    

    render() {
// {console.log('state check!!', this.state)}
// const teamWithTeammates: [Team, Teammate[]] = [,[]]

// if (!this.state.teams.length) return;
//     for (team of this.state.teams) {
//         teamWithTeammates.push(team)
//     }


        return (
            
            <div className='App'>
                <CreateTeamForm
                    user={this.state.user}
                    action={postTeam}
                />
                
                <UserDashboard
                    teams={this.state.teams}
                    teamsData={this.state.teams}
                    // createTeam={postTeam}
                    action={getTeams}
                    getTeam={getTeam}
                />
                
            </div>
        )
    }
}
export default App;