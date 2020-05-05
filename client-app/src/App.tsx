import * as React from 'react';
import UserDashboard from './Components/UserDashboard';
import CreateTeamForm from './Components/CreateTeamForm';
import { fetchUser, getTeam, postTeam } from './helpers/api-fetchers';
import {AppState, Team, User} from './interfaces'

//
// REFACTOR move these things into "Interfaces" folder
//
// TODO user table joined 
// interface IUser {
//     id: number;
//     username: string; // REFACTOR unnecessary
//     email: string;
//     identify_as: string;
//     temp_total_swears: number; // REFACTOR join swear table
// }

// interface ITeam {
//     id: number;
//     swear: string;
//     team_name: string;
//     pledge_url: string;
//     // end_date: any; // TODO date object? or just store it as a string
//     owner: number;
//   }
//   interface IProps {
// }

//   interface IState {
//     user: number;
//     // userObject: IUser;
//     userObject: object;
//     loggedIn: boolean;
//     teams: ITeam[];
//     // teams: any[];

//   }

// TODO auth0 integration
// TODO write some functions that set user state and then pass "User" class
// class App extends React.Component<IProps, IState> {
//     constructor(props: object) {
class App extends React.Component<{}, AppState> {
// class App extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            // user: 0,
            user: 1,
            userObject: {},
            loggedIn: true,
            teams: []
        };
    }

// IN PROGRESS let's hardcode user 1 for now, and get the table to map their teams
// TODO else statement for login prompt
    componentDidMount() {
        if (this.state.user !== 0) {
            fetchUser(this.state.user)
            // REFACTOR this is hardcoded. might not need to be?
                .then(data => this.setState(
                    {userObject: data[0], teams: data[1]}))
        } else return;

    }
    

    render() {
// {console.log('state check!!', this.state)}
const actions = {
    getTeam,
    postTeam
}

// TODO expand actions
        return (
            
            <div className='App'>
                <CreateTeamForm
                    user={this.state.user}
                    action={postTeam}
                />


                hi
                <UserDashboard
                    teams={this.state.teams}
                    // createTeam={postTeam}
                    action={getTeam}
                />
            </div>
        )
    }
}
export default App;