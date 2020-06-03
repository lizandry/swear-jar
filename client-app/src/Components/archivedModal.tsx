import * as React from 'react';

import { User, Team, Teammate } from '../interfaces'; // REFACTOR
import {teamTableData} from '../helpers/local-data' // REFACTOR

import CreateTeamForm from './archivedForm'

import { Modal, Button } from 'antd';

interface Props {
    user?: User;
    postTeam?: Function;
}

interface State {
    ModalContent: any;
    visible: boolean;
    confirmLoading: boolean;
}

class CreateTeamModal extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    this.state = {
        ModalContent: <CreateTeamForm
                        user={this.props.user}
                        postTeam={this.props.postTeam}
                    />,
        visible: false,
        confirmLoading: false,
  };
}

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalContent: 'thank you for creating your team!',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading, ModalContent } = this.state;
    return (
      <div>
        <Button 
            type='primary' 
            onClick={this.showModal}>
          create a team
        </Button>
        <Modal
          title='create a team'
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          {ModalContent}
        </Modal>
      </div>
    );
  }
}


export default CreateTeamModal;