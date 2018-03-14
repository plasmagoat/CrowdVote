import React, { Component } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';
import { onJoin } from './DataStore';

class Join extends Component {
  constructor(props){
    super(props);

    this.state = {
      joincode: ''
    }

    this.updateJoinCode = this.updateJoinCode.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleJoin = this.handleJoin.bind(this);

  }

  updateJoinCode(e){
    this.setState({
      joincode: e.target.value.toUpperCase()
    })
  }

  handleBack(e){
    this.props.view('main');
    
  }

  handleJoin(e){
    this.setState({
      loading: true
    });
    onJoin(this.state.joincode, (err, joincode) => {
      this.props.view('vote');
    });

    
  }

  render() {
    let join = <Button onClick={this.handleJoin} color='purple' fluid size='large'>Join!</Button>
    if(this.state.loading === true){
      join = <Button loading color='purple' fluid size='large'>Join!</Button>
    }
    return (
        <Form size='large'>
            <Form.Input
                fluid
                icon='question'
                iconPosition='left'
                placeholder='Join Code'
                className='joincode'
                value={this.state.joincode}
                onChange={this.updateJoinCode}
            />
            <Grid columns='equal'>
                <Grid.Column>
                    <Button onClick={this.handleBack} color='teal' fluid size='large'>Go Back</Button>
                </Grid.Column>
                <Grid.Column>
                    {join}
                </Grid.Column>
            </Grid>
        </Form>
    );
  }
}

export default Join;
