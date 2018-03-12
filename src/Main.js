import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react';

class Main extends Component {
  render() {
    return (
        <div className='login-form'>
            <Button.Group size='massive'>
                <Button color='teal'><Icon name='idea'></Icon>Create</Button>
                <Button.Or />
                <Button color='purple'><Icon name='users'></Icon>Join</Button>
            </Button.Group>
      </div>
    );
  }
}

export default Main;
