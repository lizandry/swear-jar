import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
const { Option } = Select;
import {AppState, Team, User} from '../interfaces';

// interface Values {
//   swear: string;
//   team_name: string;
//   pledge_url: string;
//   end_date: any;
//   owner: User['id']
// }

interface CreateTeamFormProps {
    user: User;
    postTeam: Function;
  visible?: boolean;
  onCreate?: (values: Team) => void;
  onCancel?: () => void;
}
interface TestModalProps {
     user: User;
    postTeam: Function;
}

const CreateTeamForm: React.FC<CreateTeamFormProps> = ({
    visible,
    onCreate,
    onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="create a new team"
      okText="create"
      cancelText="cancel"
      onCancel={onCancel}
      onOk={() => {
        form
            .validateFields()
            .then(values => {
                form.resetFields();
                onCreate(values);
            })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
    <Form
        form={form}
        className='create-team'
        layout='vertical'
        name='create-team'
        id='create-team-form'
        // initialValues={owner: props.user.id}
        labelAlign='left'
    >
        <Form.Item
                className='create-team-inputs'
                name='user id'
                // value={props.user.id}
                // TODO IN PROGRESS making this happen. i think i can set the initialvalue in the form component?
                
                >

                </Form.Item>

        <Form.Item
            className='create-team-inputs'
            label='team name'
            name='team name'
            rules={[{ required: true, message: 'please give your team a name!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item 
            className='create-team-inputs'
            label={`what's your swear`}
            name='swear field'
            rules={[{ required: true, message: 'pick a swear!' }]}
        >
            <Input 
                // type="textarea" 
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
                    onChange={(moment, dateString)=> {return dateString}}
                />
            </Form.Item>
        
      </Form>
    </Modal>
  );
};

const TestModal = (props: TestModalProps) => {
  const [visible, setVisible] = useState(false);

  const onCreate = values => {
    console.log('Received values of form: ', values);
    this.props.postTeam(values)
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        create a new team!!
      </Button>
      <CreateTeamForm
      user={props.user}
      postTeam={props.postTeam}
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};
export default TestModal;