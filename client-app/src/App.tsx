import * as React from 'react';
import UserDashboard from './Components/UserDashboard';
import { fetchUser, fetchTeam } from './helpers/api-fetchers';
// import 'bootstrap/dist/css/bootstrap.min.css'

//
// REFACTOR move these things into "Interfaces" folder
//
// TODO user table joined 
interface IUser {
    id: number;
    username: string; // REFACTOR unnecessary
    email: string;
    identify_as: string;
    temp_total_swears: number; // REFACTOR join swear table
}

interface ITeam {
    id: number;
    swear: string;
    team_name: string;
    pledge_url: string;
    // end_date: any; // TODO date object? or just store it as a string
    owner: number;
  }
  interface IProps {
}

  interface IState {
    user: number;
    // userObject: IUser;
    userObject: object;
    loggedIn: boolean;
    teams: ITeam[];
  }

// TODO auth0 integration
// TODO write some functions that set user state and then pass "User" class
// class App extends React.Component<IProps, IState> {
//     constructor(props: object) {

class App extends React.Component<IProps, IState> {
    constructor(props: object) {
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


        return (
            <div className='App'>
                hi
  
                <UserDashboard
                    teams={this.state.teams}
                    action={fetchTeam}
                >
                </UserDashboard>
{/* {this.state.teams.map(team => {

    <UserDashboard
    teams={team}
    action={fetchTeam}
    >
                </UserDashboard>
})} */}
            </div>
        )
    }
}
export default App;