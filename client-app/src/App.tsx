import * as React from 'react';
import UserDashboard from './components/UserDashboard';
import { fetchUser, getTeams, getTeam, postSwear, postTeam } from './helpers/api-fetchers';
import {AppState, Team, User, Teammate} from './interfaces'
import 'antd/dist/antd.css';

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

// TODO let's hardcode user 1 for now, and get the table to map their teams
// TODO else statement for login prompt

    componentDidMount() {
        if (this.state.user.id !== 0) {
            fetchUser(this.state.user.id)
            // REFACTOR this is hardcoded. might not need to be?
                .then(data => this.setState(
                        {user: data[0], teams: data[1]}))
            } else return;


    }
    
    render() {
// {console.log('state check!!', this.state)}

        return (
            <div className='App'>
                
                <UserDashboard
                    teams={this.state.teams}
                    user={this.state.user}
                    getTeam={getTeam}
                    postSwear={postSwear}
                    postTeam={postTeam}
                />
            </div>
        )
    }
}
export default App;