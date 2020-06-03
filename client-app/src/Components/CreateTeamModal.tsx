import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
const { Option } = Select;
import {Team, User} from '../interfaces';

// interface Values {
//   swear: string;
//   team_name: string;
//   pledge_url: string;
//   end_date: any;
//   owner: User['id']
// }

interface FormProps {
    user?: User;
    postTeam?: Function;
  visible?: boolean;
  onCreate?: (values: Team) => void;
  onCancel?: () => void;
}
interface ModalProps {
     user: User;
    postTeam: Function;
}

// REFACTOR this works, so i'm leaving it for now. but i need to read more about <> vs props:
const CreateTeamForm: React.FC<FormProps> = ({
    user,
    postTeam,
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
        // initialValues={{ owner: user.id }}
        labelAlign='left'
    >

      {/* REFACTOR this is ugly and it yells at me. but it does work */}
        <Form.Item
                className='create-team-inputs bruteForce'
                name='owner'
                initialValue={user.id}
                
                >
                </Form.Item>

        <Form.Item
            className='create-team-inputs'
            label='name your team'
            name='team'
            rules={[{ required: true, message: 'please give your team a name!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item 
            className='create-team-inputs'
            label={`what's your swear`}
            name='swear'
            rules={[{ required: true, message: 'pick a swear!' }]}
        >
            <Input 
                // type="textarea" 
            />
        </Form.Item>

        <Form.Item
                className='create-team-inputs'
                label='choose a campaign'
                name='pledge'
                
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
                name='endDate'
                >
                <DatePicker 
                    onChange={(moment, dateString: string)=> {return dateString}}
                />
            </Form.Item>

            
        
      </Form>
    </Modal>
  );
};

const CreateTeamModal = (props: ModalProps) => {
  const [visible, setVisible] = useState(false);

  const onCreate = values => {
    // console.log('Received values of form: ', values);
    props.postTeam(values)
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
export default CreateTeamModal;