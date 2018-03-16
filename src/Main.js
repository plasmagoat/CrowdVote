import React, { Component } from 'react';
import { Responsive, Button, Icon } from 'semantic-ui-react';

class Main extends Component {
  constructor(props){
    super(props);
    this.handleJoinClick = this.handleJoinClick.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);

  }

  handleJoinClick(e){
    this.props.view('join');
  }

  handleCreateClick(e){
    this.props.view('create');
  }
  
  render() {
    return (
      <div>
        <Responsive as={Button.Group} witdths='2' size='massive' minWidth={451}>
        <Button onClick={this.handleCreateClick} color='teal' icon labelPosition='left'><Icon name='idea'></Icon>Create</Button>
          <Button.Or />
          <Button onClick={this.handleJoinClick} color='purple' icon labelPosition='right'><Icon name='users'></Icon>Join</Button>
        </Responsive>
        <Responsive as={Button.Group} size='large' maxWidth={450}>
        <Button onClick={this.handleCreateClick} color='teal' icon labelPosition='left'><Icon name='idea'></Icon>Create</Button>
          <Button.Or />
          <Button onClick={this.handleJoinClick} color='purple' icon labelPosition='right'><Icon name='users'></Icon>Join</Button>
        </Responsive>
      </div>
    );
  }
}

export default Main;
