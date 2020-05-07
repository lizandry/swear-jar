import * as React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
// import {postTeam } from '../helpers/api-fetchers';
import {AppState, Team, User} from '../interfaces';
// import { styled } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

interface Props {
    user: User;
    action: Function;
}

interface State {
swear: string;
team_name: string;
pledge_url: string;
end_date: string;
// owner: User
owner: number;
}

class CreateTeamForm extends React.Component<Props, State> {
    constructor(props) {
    super(props)
    this.state = {
        swear: '',
        team_name: '',
        pledge_url: '',
        end_date: '',
        owner: this.props.user.id
    }
    // user = this.props.user
    this.postTeam = this.postTeam.bind(this);
}
// IN PROGRESS: this doesn't do what i want it to do
onDateChange(date, dateString) {
    dateString => this.setState({end_date: dateString})

  }

//   IN PROGRESS this IS posting
async postTeam(event) {
    event.preventDefault();
    await fetch('/api/teams/', {
        method: 'POST',
        body: JSON.stringify(
            {
                // REFACTOR does this need to be spread?
                ...this.state
            }
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
    // console.log(this.state)
    const{ user, action } = this.props;

    return(
        <Form 
        className='create-team'
        name='create-team'
        id='create-team-form'
        labelAlign='left'
        onFinish={this.postTeam}

    >

        <Form.Item
            className='create-team-inputs'
            label='team name'
            name='team name'
        
        >
            <Input />
        </Form.Item>

        <Form.Item
        // TODO look up apostrophe rules
            className='create-team-inputs'
            label='what`s your swear?'
            name='team name'
        
        >
            {/* REFACTOR inline? */}
            <Input />
        </Form.Item>

        <Form.Item
            className='create-team-inputs'
            label='who do you want to support?'
            name='crowdfunding campaign'
        
        >
            {/* TODO map api calls to outside urls to this */}
        {/* TODO event target value will populate the rest of this page with api details */}
            <Select />
        </Form.Item>

        <Form.Item
            className='create-team-inputs'
            label='team/campaign end date'
            name='end date'
        >
            <DatePicker onChange={this.onDateChange} />
        </Form.Item>

        <Button
        
        >
{/* cancel */}
        </Button>

        <Button
            type="primary" 
            htmlType="submit"
        >
            submit team
        </Button>
    </Form>
    )
}
}

// const CreateSomething = (props) => {
    
// return(
//     <Form 
//         className='create-team'
//         name='create-team'
//         id='create-team-form'
//         labelAlign='left'
//         // onFinish={this.postTeam(data)}

//     >

//         <Input
        
//         >
//         {/* team name */}
//         </Input>

//         <Input
        
//         >
//         {/* swear */}
//         </Input>

//         <Select
        
//         >
//             {/* this should serve up some campaign urls */}
//         </Select>

//         <Input
        
//         >
//         </Input>

//         <Button
        
//         >
// {/* cancel */}
//         </Button>

//         <Button
//             // onClick={console.log('call postTeam')}
//         >
// {/* submit */}
//         </Button>
//     </Form>
// )

// }

export default CreateTeamForm;