import * as React from 'react';

import { Form, Input, Button, Select,  DatePicker } from 'antd';
const { Option } = Select;

import {AppState, Team, User} from '../interfaces';

interface Props {
    user?: User;
    postTeam?: Function;
}

interface State {
swear?: string;
team_name?: string;
// REFACTOR onChange for pledge_url is weird about what Type 'value' is
pledge_url?: any;
end_date?: any;
owner: User['id']
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
        owner: this.props.user.id
    }
}

    onFinish() {
        this.props.postTeam(this.state)

}
    render() {
        console.log(this.state)

        return(
            <Form 
                className='create-team'
                layout='vertical'
                name='create-team'
                id='create-team-form'
                labelAlign='left'
                onFinish={() => this.props.postTeam(this.state)}

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
                className='create-team-inputs'
                label={`what's your swear`}
                name='swear field'
            
            >
                <Input
                    onChange={(event)=>this.setState({swear: event.target.value})}
                
                />
            </Form.Item>

            <Form.Item
                className='create-team-inputs'
                label='choose a campaign'
                name='crowdfunding campaign'
            
            >
                {/* TODO map api calls to outside urls to this */}
            {/* TODO onChange will populate the rest of this page with api details */}
                <Select 
                // antdesign docs have an example for "other" option. ability to enter own url or choose from a new set of campaigns would be great
                    placeholder='who would you like to support?'
                    onChange={(value) => this.setState({pledge_url: value})}
                >
                    <Option value='temp url'>props dot temp url</Option>
                    <Option value='temp_url'>props dot temp_url</Option>
                    <Option value='tempUrl'>props dot tempUrl</Option>
                </Select>
            </Form.Item>

            <Form.Item
                className='create-team-inputs'
                label='team/campaign end date'
                name='end date'
            >
                <DatePicker 
                // onChange={this.onDateChange}
                    onChange={(moment, dateString)=> this.setState({end_date: dateString})}
                />
            </Form.Item>

            <Form.Item>
                <Button

                >
                    {/* cancel */}
                </Button>
            </Form.Item>

            <Form.Item>
                <Button
                    type='primary' 
                    htmlType='submit'
                    >
                    submit team
                </Button>
            </Form.Item>
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