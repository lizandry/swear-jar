import * as React from 'react';

interface IProps {
//   user: object;
//   teams: any[];
//   userTeams: number[];
}

// REFACTOR move these things into "Interfaces" folder
interface IState {
  user: number;
  loggedIn: boolean;
}


// TODO auth0 integration
// TODO write some functions that set user state and then pass "User" class
class App extends React.Component {
    constructor(props: object) {
        super(props);
        this.state = {
            user: 0,
            loggedIn: false
        };
    }

    componentDidMount() {

    }


    // TODO if this.state.user === 0, auth0 modal
    // TODO if this.state.user !== 0, UserDashboard component

    
    render() {

        return (
            <div className='App'>
                {/* <SampleElem
                    userID={this.state.user}
                >
                
                </SampleElem>*/}
                hi
            </div>
        )
    }
}
export default App;