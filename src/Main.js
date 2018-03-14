import React, { Component } from 'react';
import { Button, Icon, Header } from 'semantic-ui-react';

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
      <Button.Group size='massive'>
        <Button onClick={this.handleCreateClick} color='teal'><Icon name='idea'></Icon>Create</Button>
        <Button.Or />
        <Button onClick={this.handleJoinClick} color='purple'><Icon name='users'></Icon>Join</Button>
      </Button.Group>
    );
  }
}

export default Main;
