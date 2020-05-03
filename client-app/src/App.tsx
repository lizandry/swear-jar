import * as React from 'react';
import TeamTable from './Components/TeamTable';
import { fetchUser, fetchUserTeams } from './helpers/api-fetchers';

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
            loggedIn: false,
            teams: []
        };
    }

// IN PROGRESS let's hardcode user 1 for now, and get the table to map their teams
// TODO else statement for login prompt
    componentDidMount() {
        if (this.state.user !== 0) {
            fetchUser(this.state.user)
                .then(data => this.setState(
                    {userObject: data[0], teams: data[1]}))
        } else return;

    }


    // TODO if this.state.user === 0, auth0 modal
    // TODO if this.state.user !== 0, UserDashboard component

    
    render() {
{console.log('state check!!', this.state)}
        return (
            <div className='App'>
                hi
                {this.state.teams.map(team => {
                    <TeamTable
                    data={team}
                    />
                })}
                {/* <SampleElem
                    userID={this.state.user}
                    >
                    
                </SampleElem>*/}
            </div>
        )
    }
}
export default App;