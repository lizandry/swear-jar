import * as React from 'react';
import { Button } from 'antd';

const CreateTeamButton = props => {
    console.log('button props', props.team)
    return(

    <Button
    // TODO the function is to render CreateTeamPage
    // TODO pass down userID
        // onClick={props.actions.getTeam(props.team)}
    >
        new team
    </Button>
        )


}

export default CreateTeamButton;