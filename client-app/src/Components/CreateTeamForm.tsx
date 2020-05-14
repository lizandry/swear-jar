import * as React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
// import {postTeam } from '../helpers/api-fetchers';
import {AppState, Team, User} from '../interfaces';
// import { styled } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

interface Props {
    user?: User;
    postTeam?: Function;
}

interface State {
swear?: string;
team_name?: string;
pledge_url?: string;
end_date?: string;
owner: User
// owner?: number;
}

class CreateTeamForm extends React.Component<Props, State> {
    constructor(props) {
    super(props)
    this.state = {
        swear: '',
        team_name: '',
        pledge_url: '',
        end_date: '',
        owner: this.props.user
    }
    // user = this.props.user
}
// IN PROGRESS: this doesn't do what i want it to do
onDateChange(date, dateString) {
    dateString => this.setState({end_date: dateString})

  }

render() {
    console.log(this.state)
    const{ user } = this.props;

    return(
        <Form 
            className='create-team'
            name='create-team'
            id='create-team-form'
            labelAlign='left'
            // onFinish={this.props.postTeam}

        >

        <Form.Item
            className='create-team-inputs'
            label='team name'
            name='team name'
            
            >
            <Input
                onChange={(event)=>this.setState({team_name: event.target.value})}
            
            />
        </Form.Item>

        <Form.Item
        // TODO look up apostrophe rules
            className='create-team-inputs'
            label='what`s your swear?'
            name='swear field'
        
        >
            {/* REFACTOR inline? */}
            <Input
                onChange={(event)=>this.setState({swear: event.target.value})}
            
            />
        </Form.Item>

        <Form.Item
            className='create-team-inputs'
            label='who do you want to support?'
            name='crowdfunding campaign'
        
        >
            {/* TODO map api calls to outside urls to this */}
        {/* TODO event target value will populate the rest of this page with api details */}
            <Select 
                // onSelect={(event)=>this.setState({team_name: event.target.value})}
            />
        </Form.Item>

        <Form.Item
            className='create-team-inputs'
            label='team/campaign end date'
            name='end date'
        >
            <DatePicker 
                // onChange={(event)=>this.setState({team_name: event.target.value})} 
            />
        </Form.Item>

        <Button
        
        >
{/* cancel */}
        </Button>

        <Button
            type='primary' 
            htmlType='submit'
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