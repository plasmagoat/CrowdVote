import React, { Component } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';

class Join extends Component {
  constructor(props){
    super(props);

    this.state = {
      joincode: ''
    }

    this.handleAddOption = this.handleAddOption.bind(this);
    this.updateJoinCode = this.updateJoinCode.bind(this);
  }

  handleAddOption(e){
    console.log("terst")
    this.setState((state) => ({
      options: state.options.concat([state.newOption]),
      newOption: ''
    }));
  }

  updateJoinCode(e){
    this.setState({
      joincode: e.target.value.toUpperCase()
    })
  }

  render() {
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
                    <Button onClick={this.props.history.goBack} color='teal' fluid size='large'>Go Back</Button>
                </Grid.Column>
                <Grid.Column>
                    <Button color='purple' fluid size='large'>Join!</Button>
                </Grid.Column>
            </Grid>
        </Form>
    );
  }
}

export default Join;
