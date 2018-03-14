import React, { Component } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';
import OptionList from './OptionList';

class Create extends Component {
  constructor(props){
    super(props);

    this.state = {
      question: '',
      options: [],
      newOption: ''
    }

    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.updateNewOption = this.updateNewOption.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
  }

  handleAddOption(e){
    if(this.state.newOption !== ''){
      this.setState((state) => ({
        options: state.options.concat([state.newOption]),
        newOption: ''
      }));
    }
    
  }

  handleRemoveOption(index){
    let newlist = this.state.options;
    newlist.splice(index, 1);
    this.setState((state) => ({
      options: newlist
    }));
  }

  updateNewOption(e){
    this.setState({
      newOption: e.target.value
    })
  }

  updateQuestion(e){
    this.setState({
      question: e.target.value
    })
  }

  handleCreate(e){
    if(this.state.question !== '' && this.state.options.length > 0){
      let { options, question } = this.state;
      this.props.create({options, question});
    }
    
  }

  render() {
    return (
      <Form size='large'>
        <Form.Input
          fluid
          icon='question'
          iconPosition='left'
          placeholder='Question'
          onChange={this.updateQuestion}
        />
        <OptionList list={this.state.options} remove={this.handleRemoveOption}></OptionList>
        <Form.Input
          fluid
          icon='options'
          iconPosition='left'
          value={this.state.newOption}
          onChange={this.updateNewOption}
          action={{ onClick: this.handleAddOption, icon: 'plus', color: 'teal' }}
          placeholder='Option'
        />

        

        <Grid columns='equal'>
          <Grid.Column>
            <Button onClick={this.props.history.goBack} color='purple' fluid size='large'>Go Back</Button>
          </Grid.Column>
          <Grid.Column>
            <Form.Button onClick={this.handleCreate} color='teal' fluid size='large'>Create!</Form.Button>
          </Grid.Column>
        </Grid>
      </Form>
    );
  }
}

export default Create;
