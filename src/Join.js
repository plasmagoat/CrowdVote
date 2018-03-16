import React, { Component } from 'react';
import { Button, Form, Grid, Icon } from 'semantic-ui-react';
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
    return (
        <Form size='large'>
            <Form.Input
                fluid
                focus={true}
                icon='question'
                iconPosition='left'
                placeholder='Join Code'
                className='joincode'
                value={this.state.joincode}
                onChange={this.updateJoinCode}
            />
            <Grid columns='equal'>
                <Grid.Column>
                    <Button onClick={this.handleBack} color='teal' fluid size='large' icon labelPosition='left'><Icon name='home'></Icon>Back</Button>
                </Grid.Column>
                <Grid.Column>
                    {this.state.loading === true
                      ? <Button loading color='purple' fluid size='large' icon labelPosition='right'><Icon name='arrow right'></Icon>Join</Button>
                      : <Button onClick={this.handleJoin} color='purple' fluid size='large' icon labelPosition='right'><Icon name='arrow right'></Icon>Join</Button>}
                </Grid.Column>
            </Grid>
        </Form>
    );
  }
}

export default Join;
