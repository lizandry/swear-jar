import * as React from 'react';
import { Form, Input, Button, Select } from 'antd';
// import {postTeam } from '../helpers/api-fetchers';
import {AppState, Team, User} from '../interfaces';

interface Props {
    user: User;
    action: Function;
}

interface State {

}

class CreateTeamForm extends React.Component<Props, State> {
    constructor(props) {
    super(props)
    this.state = {
        swear: '',
        team_name: '',
        pledge_url: '',
        end_date: ''
    }
    // user = this.props.user
    this.postTeam = this.postTeam.bind(this);
}

async postTeam(event) {
    event.preventDefault();
    await fetch('/api/teams/', {
        method: 'POST',
        body: JSON.stringify(
            {
                ...this.state, 
                owner: this.props.user.id,
            }
            // team_name: this.state.team_name,
            // swear: this.state.swear,
            // pledge_url: this.state.pledge_url,
            // end_date: this.state.end_date,
            // owner: this.props.user
        ),
        headers: {
          'Content-Type': 'application/json charset=UTF-8',
          "Accept": "application/json"
        }
        }).then(resp => {
            if (resp.ok) {
            return resp.json();
            } else {
            throw new Error(
                `oops!! post('/api/teams/') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}`
            );
            }
        });

}
render() {
    const{ user, action } = this.props;
    return(
        <Form 
        className='create-team'
        name='create-team'
        id='create-team-form'
        labelAlign='left'
        onFinish={this.postTeam}

    >

        <Input
        
        >
        {/* team name */}
        </Input>

        <Input
        
        >
        {/* swear */}
        </Input>

        <Select
        
        >
            {/* this should serve up some campaign urls */}
        </Select>

        <Input
        
        >
        </Input>

        <Button
        
        >
{/* cancel */}
        </Button>

        <Button
            onClick={() => console.log('call postTeam')}
        >
{/* submit */}
        </Button>
    </Form>
    )
}
}

const CreateSomething = (props) => {
    
return(
    <Form 
        className='create-team'
        name='create-team'
        id='create-team-form'
        labelAlign='left'
        // onFinish={this.postTeam(data)}

    >

        <Input
        
        >
        {/* team name */}
        </Input>

        <Input
        
        >
        {/* swear */}
        </Input>

        <Select
        
        >
            {/* this should serve up some campaign urls */}
        </Select>

        <Input
        
        >
        </Input>

        <Button
        
        >
{/* cancel */}
        </Button>

        <Button
            // onClick={console.log('call postTeam')}
        >
{/* submit */}
        </Button>
    </Form>
)

}

export default CreateTeamForm;