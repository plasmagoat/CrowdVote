import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react';

class Create extends Component {
  render() {
    return (
        <div className='login-form'>
        <Form size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='question'
                  iconPosition='left'
                  placeholder='Question'
                />
                <Form.Input
                  fluid
                  icon='plus'
                  iconPosition='left'
                  action='Add'
                  placeholder='Option'
                  type='password'
                />

                <Button color='teal' fluid size='large'>Create</Button>
              </Segment>
            </Form>
      </div>
    );
  }
}

export default Create;
